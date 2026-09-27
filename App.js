// App.js
const { useState, useEffect, useRef } = React;
const data = window.data;

function App() {
  // Firebase Auth States
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authMode, setAuthMode] = useState('login'); 
  const [authError, setAuthError] = useState('');
  
  // Form States
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // App States
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('poly_theme') === 'dark');
  const [activeBranch, setActiveBranch] = useState(() => localStorage.getItem('poly_branch') || 'cse');
  const [activeSem, setActiveSem] = useState(() => localStorage.getItem('poly_sem') || '5');
  const [pinnedSubjects, setPinnedSubjects] = useState(() => {
    const saved = localStorage.getItem('poly_pinned');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('home'); 

  // --- AI CHAT STATES ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm your PolyPrep AI tutor. Ask me to explain a concept or quiz you on your syllabus!" }
  ]);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // --- FIREBASE AUTHENTICATION LISTENER ---
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Effects
  useEffect(() => {
    localStorage.setItem('poly_theme', darkMode ? 'dark' : 'light');
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => localStorage.setItem('poly_branch', activeBranch), [activeBranch]);
  useEffect(() => localStorage.setItem('poly_sem', activeSem), [activeSem]);
  useEffect(() => localStorage.setItem('poly_pinned', JSON.stringify(pinnedSubjects)), [pinnedSubjects]);

  const togglePin = (id) => {
    if (pinnedSubjects.includes(id)) {
      setPinnedSubjects(pinnedSubjects.filter(subId => subId !== id));
    } else {
      setPinnedSubjects([...pinnedSubjects, id]);
    }
  };

  // --- FIREBASE FUNCTIONS ---
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      if (authMode === 'signup') {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(userEmail, password);
        await userCredential.user.updateProfile({ displayName: userName });
        setUser({ ...userCredential.user, displayName: userName }); 
      } else {
        await firebase.auth().signInWithEmailAndPassword(userEmail, password);
      }
    } catch (error) {
      setAuthError(error.message.replace('Firebase: ', ''));
    }
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    setIsDrawerOpen(false);
    setView('home');
  };

  const handleForgotPassword = async () => {
    if (!userEmail) {
      setAuthError("Please type your email address in the box first.");
      return;
    }
    try {
      await firebase.auth().sendPasswordResetEmail(userEmail);
      setAuthError("Password reset email sent! Check your inbox.");
    } catch (error) {
      setAuthError(error.message.replace('Firebase: ', ''));
    }
  };

  // --- AI CHAT FUNCTION ---
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setChatInput('');
    setIsTyping(true);

    try {
      // Calls your new Vercel serverless function
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      
      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: "Error: Could not retrieve response from server." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Connection error. Please try again." }]);
    }
    
    setIsTyping(false);
  };

  const filteredSubjects = data.content.filter(sub => {
    const matchesBranch = sub.branchId === activeBranch;
    const matchesSem = sub.semester === activeSem;
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sub.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBranch && matchesSem && matchesSearch;
  });

  const pinnedList = data.content.filter(sub => pinnedSubjects.includes(sub.id));
  const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const todayString = new Date().toLocaleDateString('en-US', dateOptions);

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-surface"><div className="animate-pulse text-brand font-bold text-xl">Loading PolyPrep...</div></div>;
  }

  // --- AUTH SCREEN ---
  if (!user) {
    return (
      <div className="max-w-md mx-auto min-h-screen bg-gray-50 dark:bg-surface flex flex-col justify-center p-6 relative">
        <div className="absolute top-6 right-6">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors">
            <span className="material-symbols-outlined">{darkMode ? "light_mode" : "dark_mode"}</span>
          </button>
        </div>

        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto bg-brand text-white rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-brand/30">
            <span className="material-symbols-outlined" style={{fontSize: '40px'}}>auto_stories</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">PolyPrep</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">GIET Zero-Bloat Study Portal</p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="flex mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            <button onClick={() => {setAuthMode('login'); setAuthError('');}} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${authMode === 'login' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand dark:text-white' : 'text-gray-500'}`}>Sign In</button>
            <button onClick={() => {setAuthMode('signup'); setAuthError('');}} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${authMode === 'signup' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand dark:text-white' : 'text-gray-500'}`}>Sign Up</button>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {authMode === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 ml-1 uppercase tracking-wider">Full Name</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="e.g. Rahul Sharma" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" required={authMode === 'signup'} />
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 ml-1 uppercase tracking-wider">Email Address</label>
              <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="e.g. rahul@gmail.com" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" required />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1 ml-1 pr-1">
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Password</label>
                {authMode === 'login' && (
                  <button type="button" onClick={handleForgotPassword} className="text-xs font-bold text-brand hover:underline">Forgot Password?</button>
                )}
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand pr-12" required minLength="6" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>
            
            {authError && <div className="text-red-500 text-xs font-bold text-center mt-2 px-2 bg-red-50 dark:bg-red-900/20 py-2 rounded-lg">{authError}</div>}

            <button type="submit" className="w-full bg-brand text-white font-bold py-3.5 rounded-xl mt-6 shadow-lg shadow-brand/30 transition-transform active:scale-95">
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- MAIN APP SHELL (RESPONSIVE) ---
  return (
    <div className="max-w-5xl mx-auto min-h-screen bg-gray-50 dark:bg-gray-950 shadow-2xl flex flex-col relative pb-20 md:pb-0 overflow-x-hidden">
      
      <header className="bg-white dark:bg-surface px-4 py-4 flex justify-between items-center z-30 shadow-sm border-b border-gray-100 dark:border-gray-800/50">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDrawerOpen(true)} className="p-2 -ml-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-full transition-transform active:scale-95">
            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>person</span>
          </button>
          <div className="font-extrabold text-xl text-gray-900 dark:text-white tracking-tight flex items-center gap-2 hidden sm:flex">
            PolyPrep
          </div>
        </div>

        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
          <button onClick={() => { setView('home'); window.scrollTo(0,0); }} className={`px-5 py-2 text-sm font-bold rounded-lg transition-colors ${view === 'home' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}>Home</button>
          <button onClick={() => { setView('notes'); window.scrollTo(0,0); }} className={`px-5 py-2 text-sm font-bold rounded-lg transition-colors ${view === 'notes' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}>Study Notes</button>
          <button onClick={() => { setView('pyqs'); window.scrollTo(0,0); }} className={`px-5 py-2 text-sm font-bold rounded-lg transition-colors ${view === 'pyqs' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}>Previous Papers</button>
        </div>

        <button onClick={() => setDarkMode(!darkMode)} className="p-2 -mr-2 text-gray-600 dark:text-gray-300 transition-colors">
          <span className="material-symbols-outlined">{darkMode ? "light_mode" : "dark_mode"}</span>
        </button>
      </header>

      {/* SIDE DRAWER OVERLAY */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex w-full">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDrawerOpen(false)}></div>
          <div className="relative w-4/5 max-w-[300px] bg-white dark:bg-surface h-full flex flex-col shadow-2xl transition-transform transform translate-x-0">
            <div className="p-6 pt-10 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </div>
              <h2 className="font-bold text-lg leading-tight text-gray-900 dark:text-white">{user.displayName || 'PolyPrep User'}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-mono break-all">{user.email}</p>
            </div>
            <div className="flex-1 overflow-y-auto py-4 space-y-1">
              <button className="w-full flex items-center gap-4 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"><span className="material-symbols-outlined text-gray-400">info</span> About PolyPrep</button>
              <button className="w-full flex items-center gap-4 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"><span className="material-symbols-outlined text-gray-400">share</span> Share App</button>
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-800">
              <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors text-left"><span className="material-symbols-outlined">logout</span> Log Out</button>
            </div>
          </div>
        </div>
      )}

      {/* --- HOME DASHBOARD --- */}
      {view === 'home' && (
        <div className="flex-1 p-4 md:p-8 overflow-y-auto scrollbar-hide space-y-8">
          <div className="pt-2 pb-2">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">{todayString}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">Welcome back,<br/><span className="text-brand">{user.displayName ? user.displayName.split(' ')[0] : 'Student'}</span></h1>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <button onClick={() => { setView('notes'); window.scrollTo(0,0); }} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all active:scale-95 text-left group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-brand rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors"><span className="material-symbols-outlined">auto_stories</span></div>
              <div className="flex-1"><h3 className="font-bold text-lg text-gray-900 dark:text-white">Syllabus Notes</h3><p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">AI-generated study guides</p></div>
              <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 group-hover:text-brand transition-colors">chevron_right</span>
            </button>
            <button onClick={() => { setView('pyqs'); window.scrollTo(0,0); }} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all active:scale-95 text-left group">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors"><span className="material-symbols-outlined">history_edu</span></div>
              <div className="flex-1"><h3 className="font-bold text-lg text-gray-900 dark:text-white">Previous Papers</h3><p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Past exams & question banks</p></div>
              <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 group-hover:text-purple-600 transition-colors">chevron_right</span>
            </button>
          </div>
          
          {pinnedList.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 pl-1">Pinned For Exams</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {pinnedList.map(subject => (
                  <div key={`pin-${subject.id}`} className="p-5 rounded-2xl bg-brand/5 dark:bg-brand/10 border border-brand/20 dark:border-brand/30 relative flex flex-col justify-between">
                    <button onClick={() => togglePin(subject.id)} className="absolute top-4 right-4 text-brand p-1 transition-transform hover:scale-110"><span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>bookmark</span></button>
                    <div className="pr-10 mb-6">
                      <span className="text-xs font-bold tracking-wider text-brand dark:text-blue-400 uppercase bg-white dark:bg-surface px-2 py-1 rounded shadow-sm inline-block mb-3">{subject.code}</span>
                      <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">{subject.name}</h3>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <a href={subject.notesLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 bg-brand text-white py-2.5 rounded-xl text-sm font-bold shadow-sm shadow-brand/30 active:scale-95 transition-transform hover:bg-brandDark">Open Notes</a>
                      <a href={subject.pyqLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 py-2.5 rounded-xl text-sm font-bold active:scale-95 transition-transform hover:bg-gray-50 dark:hover:bg-gray-700">PYQs</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- DIRECTORY SCREEN --- */}
      {(view === 'notes' || view === 'pyqs') && (
        <div className="flex-1 flex flex-col h-full bg-gray-50 dark:bg-gray-950">
          <div className="px-4 md:px-8 py-3 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface sticky top-0 z-20">
            <div className="flex justify-between items-center mb-4 mt-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{view === 'notes' ? 'Study Notes' : 'Previous Papers'}</h1>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400" style={{fontSize: '20px'}}>search</span>
                <input type="text" placeholder="Search subjects or codes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
              </div>
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
                {data.semesters.map(sem => (
                  <button key={sem.id} onClick={() => setActiveSem(sem.id)} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${activeSem === sem.id ? 'bg-gray-900 border-gray-900 text-white dark:bg-gray-100 dark:border-gray-100 dark:text-gray-900' : 'bg-white border-gray-200 text-gray-600 dark:bg-surface dark:border-gray-700 dark:text-gray-400 hover:bg-gray-50'}`}>{sem.name}</button>
                ))}
              </div>
            </div>
          </div>

          <main className="flex-1 p-4 md:p-8 space-y-4 overflow-y-auto">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {data.branches.map(branch => (
                <button key={branch.id} onClick={() => { setActiveBranch(branch.id); setSearchQuery(''); }} className={`px-5 py-2 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${activeBranch === branch.id ? 'bg-brand/10 text-brand dark:bg-brand/20 dark:text-blue-400' : 'bg-transparent text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800'}`}>{branch.short}</button>
              ))}
            </div>
            
            <div className="grid gap-4 pt-2 md:grid-cols-2 lg:grid-cols-3">
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map(subject => {
                  const isPinned = pinnedSubjects.includes(subject.id);
                  return (
                    <div key={subject.id} className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col relative justify-between hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-6">
                        <div className="pr-8">
                          <h3 className="font-bold text-gray-900 dark:text-white text-base">{subject.name}</h3>
                          <span className="text-xs font-mono text-gray-500 dark:text-gray-400 mt-1 block">{subject.code}</span>
                        </div>
                        <button onClick={() => togglePin(subject.id)} className={`absolute top-4 right-4 p-1 transition-transform hover:scale-110 ${isPinned ? 'text-brand dark:text-blue-400' : 'text-gray-300 dark:text-gray-700 hover:text-gray-400'}`}><span className="material-symbols-outlined" style={{fontVariationSettings: isPinned ? "'FILL' 1" : "'FILL' 0", fontSize: '26px'}}>bookmark</span></button>
                      </div>
                      {view === 'notes' ? (
                        <a href={subject.notesLink} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-center gap-2 w-full bg-brand text-white py-3 rounded-xl text-sm font-bold transition-transform active:scale-95 shadow-sm shadow-brand/20 hover:bg-brandDark"><span className="material-symbols-outlined" style={{fontSize: '20px'}}>menu_book</span> Open PDF Notes</a>
                      ) : (
                        <a href={subject.pyqLink} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-center gap-2 w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-3 rounded-xl text-sm font-bold transition-transform active:scale-95 shadow-sm hover:bg-gray-800 dark:hover:bg-white"><span className="material-symbols-outlined" style={{fontSize: '20px'}}>download</span> Download PYQs</a>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-12 text-gray-400 dark:text-gray-600 text-base">No materials found for this selection.</div>
              )}
            </div>
          </main>
        </div>
      )}

      {/* --- AI CHAT FLOATING WIDGET --- */}
      {!isChatOpen && (
        <button onClick={() => setIsChatOpen(true)} className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 bg-brand hover:bg-brandDark text-white w-14 h-14 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined" style={{fontSize: '28px'}}>smart_toy</span>
        </button>
      )}

      {isChatOpen && (
        <div className="fixed inset-x-4 bottom-24 md:inset-auto md:bottom-8 md:right-8 md:w-96 z-50 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col h-[60vh] md:h-[500px] overflow-hidden">
          <div className="bg-brand text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{fontSize: '22px'}}>smart_toy</span>
              <h3 className="font-bold text-sm tracking-wide">PolyPrep AI Tutor</h3>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <span className="material-symbols-outlined" style={{fontSize: '22px'}}>close</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm rounded-2xl ${msg.role === 'user' ? 'bg-brand text-white rounded-tr-sm shadow-sm' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700 shadow-sm rounded-tl-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-brand/60 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                  <div className="w-1.5 h-1.5 bg-brand/60 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                  <div className="w-1.5 h-1.5 bg-brand/60 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex gap-2">
            <input 
              type="text" 
              value={chatInput} 
              onChange={(e) => setChatInput(e.target.value)} 
              placeholder="Ask a question..." 
              className="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand dark:text-white"
            />
            <button type="submit" disabled={isTyping || !chatInput.trim()} className="bg-brand text-white w-11 h-11 rounded-xl flex items-center justify-center disabled:opacity-50 transition-colors hover:bg-brandDark shadow-sm shadow-brand/20">
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>send</span>
            </button>
          </form>
        </div>
      )}

      {/* --- BOTTOM NAVIGATION (Mobile Only) --- */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white dark:bg-surface border-t border-gray-200 dark:border-gray-800 flex justify-around items-center pb-safe z-40">
        <button onClick={() => { setView('home'); window.scrollTo(0,0); }} className={`flex flex-col items-center p-3 w-full transition-colors ${view === 'home' ? 'text-brand' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
          <span className="material-symbols-outlined" style={{fontVariationSettings: view === 'home' ? "'FILL' 1" : "'FILL' 0"}}>{view === 'home' ? 'home' : 'home'}</span>
          <span className="text-[10px] font-bold mt-1">Home</span>
        </button>
        <button onClick={() => { setView('notes'); window.scrollTo(0,0); }} className={`flex flex-col items-center p-3 w-full transition-colors ${view === 'notes' ? 'text-brand' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
          <span className="material-symbols-outlined" style={{fontVariationSettings: view === 'notes' ? "'FILL' 1" : "'FILL' 0"}}>auto_stories</span>
          <span className="text-[10px] font-bold mt-1">Notes</span>
        </button>
        <button onClick={() => { setView('pyqs'); window.scrollTo(0,0); }} className={`flex flex-col items-center p-3 w-full transition-colors ${view === 'pyqs' ? 'text-brand' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
          <span className="material-symbols-outlined" style={{fontVariationSettings: view === 'pyqs' ? "'FILL' 1" : "'FILL' 0"}}>history_edu</span>
          <span className="text-[10px] font-bold mt-1">Papers</span>
        </button>
      </nav>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);