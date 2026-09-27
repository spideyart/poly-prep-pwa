// App.js
const { useState, useEffect } = React;
const data = window.data; // <-- Add this exact line

function App() {
// ... keep the rest exactly the same

  // Auth States
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('poly_logged_in') === 'true');
  const [authMode, setAuthMode] = useState('login'); 
  const [userName, setUserName] = useState(() => localStorage.getItem('poly_user_name') || '');
  const [studentId, setStudentId] = useState(() => localStorage.getItem('poly_student_id') || '');
  
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

  // Effects
  useEffect(() => {
    localStorage.setItem('poly_theme', darkMode ? 'dark' : 'light');
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => localStorage.setItem('poly_branch', activeBranch), [activeBranch]);
  useEffect(() => localStorage.setItem('poly_sem', activeSem), [activeSem]);
  useEffect(() => localStorage.setItem('poly_pinned', JSON.stringify(pinnedSubjects)), [pinnedSubjects]);
  useEffect(() => localStorage.setItem('poly_logged_in', isLoggedIn), [isLoggedIn]);
  useEffect(() => localStorage.setItem('poly_user_name', userName), [userName]);
  useEffect(() => localStorage.setItem('poly_student_id', studentId), [studentId]);

  const togglePin = (id) => {
    if (pinnedSubjects.includes(id)) {
      setPinnedSubjects(pinnedSubjects.filter(subId => subId !== id));
    } else {
      setPinnedSubjects([...pinnedSubjects, id]);
    }
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDrawerOpen(false);
    setView('home');
  };

  // Uses the 'data' object from data.js
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

  // --- AUTH SCREEN ---
  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto min-h-screen bg-gray-50 dark:bg-surface flex flex-col justify-center p-6 relative">
        <div className="absolute top-6 right-6">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
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
            <button onClick={() => setAuthMode('login')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${authMode === 'login' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand dark:text-white' : 'text-gray-500'}`}>Sign In</button>
            <button onClick={() => setAuthMode('signup')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${authMode === 'signup' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand dark:text-white' : 'text-gray-500'}`}>Sign Up</button>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {authMode === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 ml-1 uppercase tracking-wider">Full Name</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="e.g. Rahul Sharma" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" required />
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 ml-1 uppercase tracking-wider">Student ID</label>
              <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="e.g. 24295-CM-012" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 ml-1 uppercase tracking-wider">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" required />
            </div>
            <button type="submit" className="w-full bg-brand text-white font-bold py-3.5 rounded-xl mt-6 shadow-lg shadow-brand/30 transition-transform active:scale-95">
              {authMode === 'login' ? 'Access Portal' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- MAIN APP SHELL ---
  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 dark:bg-gray-950 shadow-2xl flex flex-col relative pb-20 overflow-x-hidden">
      
      {/* TOP HEADER */}
      <header className="bg-white dark:bg-surface px-4 py-4 flex justify-between items-center z-30">
        <button onClick={() => setIsDrawerOpen(true)} className="p-2 -ml-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-full">
          <span className="material-symbols-outlined" style={{fontSize: '20px'}}>person</span>
        </button>
        <div className="font-extrabold text-xl text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
          PolyPrep
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 -mr-2 text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined">{darkMode ? "light_mode" : "dark_mode"}</span>
        </button>
      </header>

      {/* SIDE DRAWER OVERLAY */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex max-w-md mx-auto">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDrawerOpen(false)}></div>
          <div className="relative w-4/5 max-w-[300px] bg-white dark:bg-surface h-full flex flex-col shadow-2xl transition-transform transform translate-x-0">
            <div className="p-6 pt-10 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                {userName ? userName.charAt(0).toUpperCase() : 'S'}
              </div>
              <h2 className="font-bold text-lg leading-tight text-gray-900 dark:text-white">{userName || 'Student'}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-mono">{studentId || 'ID Not Set'}</p>
            </div>
            <div className="flex-1 overflow-y-auto py-4 space-y-1">
              <button className="w-full flex items-center gap-4 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"><span className="material-symbols-outlined text-gray-400">info</span> About PolyPrep</button>
              <button className="w-full flex items-center gap-4 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"><span className="material-symbols-outlined text-gray-400">share</span> Share App</button>
              <button className="w-full flex items-center gap-4 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"><span className="material-symbols-outlined text-gray-400">bug_report</span> Report an Issue</button>
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-800">
              <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors text-left"><span className="material-symbols-outlined">logout</span> Log Out</button>
            </div>
          </div>
        </div>
      )}

      {/* --- HOME DASHBOARD --- */}
      {view === 'home' && (
        <div className="flex-1 p-4 overflow-y-auto scrollbar-hide space-y-6">
          <div className="pt-2 pb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">{todayString}</p>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">Welcome back,<br/><span className="text-brand">{userName ? userName.split(' ')[0] : 'Student'}</span></h1>
          </div>
          <div className="space-y-4">
            <button onClick={() => { setView('notes'); window.scrollTo(0,0); }} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all active:scale-95 text-left">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-brand rounded-xl flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined">auto_stories</span></div>
              <div className="flex-1"><h3 className="font-bold text-gray-900 dark:text-white">Syllabus Notes</h3><p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">AI-generated, exam-ready study guides</p></div>
              <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
            </button>
            <button onClick={() => { setView('pyqs'); window.scrollTo(0,0); }} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all active:scale-95 text-left">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined">history_edu</span></div>
              <div className="flex-1"><h3 className="font-bold text-gray-900 dark:text-white">Previous Papers</h3><p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Past exams and question banks</p></div>
              <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
            </button>
          </div>
          {pinnedList.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 pl-1">Pinned For Exams</h3>
              <div className="space-y-3">
                {pinnedList.map(subject => (
                  <div key={`pin-${subject.id}`} className="p-4 rounded-2xl bg-brand/5 dark:bg-brand/10 border border-brand/20 dark:border-brand/30 relative">
                    <button onClick={() => togglePin(subject.id)} className="absolute top-4 right-4 text-brand p-1"><span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>bookmark</span></button>
                    <div className="pr-10 mb-4">
                      <span className="text-[10px] font-bold tracking-wider text-brand dark:text-blue-400 uppercase bg-white dark:bg-surface px-2 py-1 rounded shadow-sm inline-block mb-2">{subject.code}</span>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">{subject.name}</h3>
                    </div>
                    <div className="flex gap-2">
                      <a href={subject.notesLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 bg-brand text-white py-2 rounded-xl text-xs font-bold shadow-sm shadow-brand/30 active:scale-95 transition-transform">Open Notes</a>
                      <a href={subject.pyqLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform">PYQs</a>
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
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface sticky top-0 z-20">
            <div className="flex justify-between items-center mb-3 mt-1">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">{view === 'notes' ? 'Study Notes' : 'Previous Papers'}</h1>
            </div>
            <div className="relative mb-4">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400" style={{fontSize: '20px'}}>search</span>
              <input type="text" placeholder="Search subjects or codes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-3 scrollbar-hide">
              {data.semesters.map(sem => (
                <button key={sem.id} onClick={() => setActiveSem(sem.id)} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${activeSem === sem.id ? 'bg-gray-900 border-gray-900 text-white dark:bg-gray-100 dark:border-gray-100 dark:text-gray-900' : 'bg-white border-gray-200 text-gray-600 dark:bg-surface dark:border-gray-700 dark:text-gray-400'}`}>{sem.name}</button>
              ))}
            </div>
          </div>

          <main className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
              {data.branches.map(branch => (
                <button key={branch.id} onClick={() => { setActiveBranch(branch.id); setSearchQuery(''); }} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${activeBranch === branch.id ? 'bg-brand/10 text-brand dark:bg-brand/20 dark:text-blue-400' : 'bg-transparent text-gray-500'}`}>{branch.short}</button>
              ))}
            </div>
            <div className="grid gap-3 pt-2">
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map(subject => {
                  const isPinned = pinnedSubjects.includes(subject.id);
                  return (
                    <div key={subject.id} className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col relative">
                      <div className="flex justify-between items-start mb-4">
                        <div className="pr-8">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm">{subject.name}</h3>
                          <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 mt-1 block">{subject.code}</span>
                        </div>
                        <button onClick={() => togglePin(subject.id)} className={`absolute top-4 right-4 p-1 ${isPinned ? 'text-brand dark:text-blue-400' : 'text-gray-300 dark:text-gray-700'}`}><span className="material-symbols-outlined" style={{fontVariationSettings: isPinned ? "'FILL' 1" : "'FILL' 0", fontSize: '24px'}}>bookmark</span></button>
                      </div>
                      {view === 'notes' ? (
                        <a href={subject.notesLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-brand text-white py-3 rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-sm shadow-brand/20"><span className="material-symbols-outlined" style={{fontSize: '18px'}}>menu_book</span> Open PDF Notes</a>
                      ) : (
                        <a href={subject.pyqLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-3 rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-sm"><span className="material-symbols-outlined" style={{fontSize: '18px'}}>download</span> Download PYQs</a>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-10 text-gray-400 dark:text-gray-600 text-sm">No materials found for this selection.</div>
              )}
            </div>
          </main>
        </div>
      )}

      {/* --- BOTTOM NAVIGATION --- */}
     <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-white dark:bg-surface border-t border-gray-200 dark:border-gray-800 flex justify-around items-center pb-safe z-40">
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