// pyq-prep.js — Every unique question from 5th Sem (CME) Board Diploma papers
// Dec 2022 – Mar/Apr 2026, with answers. n = sessions asked in; y = those sessions.
// Essays and shorts are separated by the t field; the page filters on it.
window.pyqPrep = [
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 3,
  "y": "Mar/Apr 2026, May/June 2023, Nov 2023",
  "q": "A project has twelve activities. The expected time of each activity is as follows : Activity 1-2 1-3 1-4 3-4 2-5 4-5 4-6 5-7 5-8 6-7 7-9 8-9 Expected time 5 4 3 2 3 7 9 5 6 8 7 10 (days) (i) Draw the project network. * (ii) Identify the critical path. (iii) Find the project duration.",
  "a": "Method (works for every year's numbers):\n1) Draw the network — circles are events (nodes), arrows are activities with their durations.\n2) Forward pass — Earliest Start Time (EST) of each event = longest path from the start.\n3) Backward pass — Latest Finish Time (LFT) from the end backwards.\n4) Total float = LFT - EST - duration; activities with zero float are critical.\n5) The critical path is the longest path from start to finish; its length is the project duration.\n\nWorked example — the twelve-activity project in this question (times in days: 1-2: 5, 1-3: 4, 1-4: 3, 3-4: 2, 2-5: 3, 4-5: 7, 4-6: 9, 5-7: 5, 5-8: 6, 6-7: 8, 7-9: 7, 8-9: 10). Paths from event 1 to event 9:\n1-2-5-7-9 = 5 + 3 + 5 + 7 = 20 days\n1-2-5-8-9 = 5 + 3 + 6 + 10 = 24 days\n1-3-4-5-7-9 = 4 + 2 + 7 + 5 + 7 = 25 days\n1-3-4-5-8-9 = 4 + 2 + 7 + 6 + 10 = 29 days\n1-3-4-6-7-9 = 4 + 2 + 9 + 8 + 7 = 30 days\n1-4-5-7-9 = 3 + 7 + 5 + 7 = 22 days\n1-4-5-8-9 = 3 + 7 + 6 + 10 = 26 days\n1-4-6-7-9 = 3 + 9 + 8 + 7 = 27 days\n\nCritical path = 1-3-4-6-7-9 and project duration = 30 days.\n\nThe same method applies to the nine-activity versions asked in other sessions: with times 12, 16, 14, 6, 7, 10, 14, 10, 12 the critical path is 1-3-5-6-7 (49 days), and with times 6, 4, 8, 5, 9, 4, 1, 5, 2 the critical path is 1-3-5-7 (18 days).",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 210\" font-family=\"sans-serif\" width=\"100%\"><g stroke-width=\"2\" stroke=\"#3b82f6\"><line x1=\"30\" y1=\"100\" x2=\"110\" y2=\"45\"/><line x1=\"30\" y1=\"100\" x2=\"190\" y2=\"100\"/><line x1=\"110\" y1=\"45\" x2=\"270\" y2=\"45\"/><line x1=\"190\" y1=\"100\" x2=\"270\" y2=\"45\"/><line x1=\"270\" y1=\"45\" x2=\"350\" y2=\"45\"/><line x1=\"270\" y1=\"45\" x2=\"350\" y2=\"160\"/><line x1=\"350\" y1=\"160\" x2=\"430\" y2=\"100\"/></g><g stroke-width=\"3\" stroke=\"#dc2626\"><line x1=\"30\" y1=\"100\" x2=\"110\" y2=\"160\"/><line x1=\"110\" y1=\"160\" x2=\"190\" y2=\"100\"/><line x1=\"190\" y1=\"100\" x2=\"270\" y2=\"160\"/><line x1=\"270\" y1=\"160\" x2=\"350\" y2=\"45\"/><line x1=\"350\" y1=\"45\" x2=\"430\" y2=\"100\"/></g><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><circle cx=\"30\" cy=\"100\" r=\"14\"/><circle cx=\"110\" cy=\"45\" r=\"14\"/><circle cx=\"110\" cy=\"160\" r=\"14\"/><circle cx=\"190\" cy=\"100\" r=\"14\"/><circle cx=\"270\" cy=\"45\" r=\"14\"/><circle cx=\"270\" cy=\"160\" r=\"14\"/><circle cx=\"350\" cy=\"45\" r=\"14\"/><circle cx=\"350\" cy=\"160\" r=\"14\"/><circle cx=\"430\" cy=\"100\" r=\"14\"/></g><g fill=\"#1e293b\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"30\" y=\"104\">1</text><text x=\"110\" y=\"49\">2</text><text x=\"110\" y=\"164\">3</text><text x=\"190\" y=\"104\">4</text><text x=\"270\" y=\"49\">5</text><text x=\"270\" y=\"164\">6</text><text x=\"350\" y=\"49\">7</text><text x=\"350\" y=\"164\">8</text><text x=\"430\" y=\"104\">9</text></g><g font-size=\"11\" text-anchor=\"middle\"><text x=\"70\" y=\"60\" fill=\"#3b82f6\">5</text><text x=\"70\" y=\"142\" fill=\"#dc2626\">4</text><text x=\"110\" y=\"88\" fill=\"#3b82f6\">3</text><text x=\"150\" y=\"122\" fill=\"#dc2626\">2</text><text x=\"190\" y=\"32\" fill=\"#3b82f6\">3</text><text x=\"230\" y=\"60\" fill=\"#3b82f6\">7</text><text x=\"230\" y=\"142\" fill=\"#dc2626\">9</text><text x=\"310\" y=\"32\" fill=\"#3b82f6\">5</text><text x=\"292\" y=\"122\" fill=\"#3b82f6\">6</text><text x=\"328\" y=\"84\" fill=\"#dc2626\">8</text><text x=\"390\" y=\"60\" fill=\"#dc2626\">7</text><text x=\"390\" y=\"142\" fill=\"#3b82f6\">10</text></g><text x=\"10\" y=\"205\" font-size=\"11\" fill=\"#dc2626\">Red arrows = critical path 1–3–4–6–7–9 (30 days)</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 3,
  "y": "Mar/Apr 2024, May/June 2023, Nov 2023",
  "q": "Explain about the principles of management.",
  "a": "Henri Fayol's 14 principles of management:\n1) Division of work — work is divided so each person specialises.\n2) Authority and responsibility — authority must match responsibility.\n3) Discipline — respect for rules and agreements.\n4) Unity of command — each worker takes orders from only one boss.\n5) Unity of direction — one plan and one head for activities with the same objective.\n6) Subordination of individual interest — the organisation's interest comes before personal interest.\n7) Remuneration — fair pay for work done.\n8) Centralisation — the balance between central and local decision-making.\n9) Scalar chain — the chain of authority from top to bottom.\n10) Order — a place for everything and everything in its place.\n11) Equity — fairness and justice to all employees.\n12) Stability of tenure — low employee turnover, job security.\n13) Initiative — freedom to think and act.\n14) Esprit de corps — team spirit and unity among staff."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 2,
  "y": "May/June 2023, Nov 2023",
  "q": "Explain about line and staff organization with a neat sketch.",
  "a": "Line organisation is the direct chain of command: orders flow from top management down through managers to workers, and each person has one boss. Staff organisation adds specialists who only advise — they have no power to give orders.\n\nSketch (line = solid authority, staff = advisory):\nManaging Director\n├── Production Manager → Supervisors → Workers\n├── Marketing Manager → Sales Staff\n└── Staff officers (advisory only): HR, Finance, Legal\n\nAdvantages: clear authority and responsibility, plus expert advice from staff specialists.\nDisadvantages: possible conflict between line managers and staff advisors, and confusion when staff advice is treated as an order.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 200\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#3b82f6\" fill=\"#dbeafe\" stroke-width=\"1.5\"><rect x=\"130\" y=\"8\" width=\"100\" height=\"30\" rx=\"8\"/><rect x=\"15\" y=\"78\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"235\" y=\"78\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"15\" y=\"148\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"235\" y=\"148\" width=\"110\" height=\"30\" rx=\"8\"/></g><rect x=\"130\" y=\"148\" width=\"100\" height=\"30\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"180\" y1=\"38\" x2=\"70\" y2=\"78\"/><line x1=\"180\" y1=\"38\" x2=\"290\" y2=\"78\"/><line x1=\"70\" y1=\"108\" x2=\"70\" y2=\"148\"/><line x1=\"290\" y1=\"108\" x2=\"290\" y2=\"148\"/><line x1=\"180\" y1=\"38\" x2=\"180\" y2=\"148\" stroke-dasharray=\"5 4\"/></g><g fill=\"#1e293b\" font-size=\"11\" text-anchor=\"middle\"><text x=\"180\" y=\"27\">Managing Director</text><text x=\"70\" y=\"97\">Production Mgr</text><text x=\"290\" y=\"97\">Marketing Mgr</text><text x=\"70\" y=\"167\">Workers</text><text x=\"290\" y=\"167\">Sales Staff</text><text x=\"180\" y=\"161\" font-size=\"10\">Staff officers</text><text x=\"180\" y=\"175\" font-size=\"10\">HR • Finance • Legal</text></g><text x=\"188\" y=\"100\" font-size=\"10\" fill=\"#64748b\">advisory only</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 2,
  "y": "Mar/Apr 2024, Nov 2024",
  "q": "Explain in detail about the EOQ analysis with the help of a diagram.",
  "a": "EOQ (Economic Order Quantity) is the order size that minimises total inventory cost. Total cost = ordering cost + carrying (holding) cost. Ordering cost falls as order size grows (fewer orders), while carrying cost rises (more stock held). EOQ is the point where the two are equal.\n\nFormula: EOQ = square root of (2 × D × S / H)\nD = annual demand, S = ordering cost per order, H = holding cost per unit per year.\n\nAssumptions:\n- Demand is constant and known\n- Lead time is fixed\n- No stock-outs\n- Stock is replenished instantly\n\nDiagram: the stock level falls in a sawtooth pattern as items are used and jumps back up on each delivery. On a cost graph, the ordering-cost curve slopes down, the carrying-cost curve slopes up, and they cross at the EOQ — the lowest point of the total-cost curve.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#1e293b\" stroke-width=\"2\"><line x1=\"40\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\"/></g><polygon points=\"330,200 322,196 322,204\" fill=\"#1e293b\"/><polygon points=\"40,20 36,28 44,28\" fill=\"#1e293b\"/><path d=\"M60,60 C140,100 220,150 310,180\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><path d=\"M60,180 L310,60\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><path d=\"M60,110 Q185,200 310,110\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><line x1=\"185\" y1=\"200\" x2=\"185\" y2=\"155\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><text x=\"52\" y=\"50\" font-size=\"11\" fill=\"#3b82f6\">Ordering cost</text><text x=\"245\" y=\"52\" font-size=\"11\" fill=\"#16a34a\">Carrying cost</text><text x=\"245\" y=\"125\" font-size=\"11\" fill=\"#dc2626\">Total cost</text><text x=\"172\" y=\"218\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">EOQ</text><text x=\"18\" y=\"110\" font-size=\"11\" fill=\"#1e293b\" transform=\"rotate(-90 18 110)\">Cost</text><text x=\"235\" y=\"232\" font-size=\"11\" fill=\"#1e293b\">Order quantity</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 2,
  "y": "Nov 2023, Oct/Nov 2025",
  "q": "State and explain the functions of management.",
  "a": "1) Planning — deciding objectives and the actions needed to reach them; it is the first and primary function.\n2) Organising — arranging people, work and resources into a structure (departments, roles, authority).\n3) Staffing — recruiting, selecting, training and developing the right people for the right jobs.\n4) Directing — guiding, leading, motivating and communicating with employees so plans are carried out.\n5) Controlling — measuring actual performance against standards and correcting deviations.\n\nCoordination runs through all five — it keeps every department and activity working towards the same goal."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 2,
  "y": "Mar/Apr 2024, May/June 2023",
  "q": "Write short notes on the following : (i) Managerial skills (ii) Level of Management",
  "a": "(i) Managerial skills (Robert Katz):\n- Technical skills — knowledge of methods, tools and techniques, most needed at lower levels.\n- Human skills — ability to work with and motivate people, needed at all levels.\n- Conceptual skills — seeing the organisation as a whole and thinking ahead, most needed at top level.\n\n(ii) Levels of management:\n- Top level (managing director, board) — sets objectives and policies.\n- Middle level (departmental managers) — implements top-level plans and coordinates departments.\n- Lower level (supervisors, foremen) — directly supervises workers and day-to-day operations."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "A project has nine activities. Where time estimate are as follows : 8 Activity 1-2 1-6 2-3 2-4 3-5 4-5 6-7 5-8 7-8 Optimistic time 2 2 5 1 5 2 3 2 7 Most likely time(tm) 5 5 11 4 11 5 9 2 13 Pessimistic time(tp) 14 8 29 7 17 14 27 8 31 (i) Draw the PERT network. (ii) Identify the critical path. (iii) Find the project duration. (iv) Calculate slack for each event.",
  "a": "Expected time of an activity is calculated by the formula te = (to + 4tm + tp) / 6, where to is optimistic time, tm is most likely time and tp is pessimistic time.\n\nExpected times:\n1-2: (2 + 20 + 14) / 6 = 6 days\n1-6: (2 + 20 + 8) / 6 = 5 days\n2-3: (5 + 44 + 29) / 6 = 13 days\n2-4: (1 + 16 + 7) / 6 = 4 days\n3-5: (5 + 44 + 17) / 6 = 11 days\n4-5: (2 + 20 + 14) / 6 = 6 days\n6-7: (3 + 36 + 27) / 6 = 11 days\n5-8: (2 + 8 + 8) / 6 = 3 days\n7-8: (7 + 52 + 31) / 6 = 15 days\n\nPERT network: events are numbered 1 to 8 and arrows represent activities with their expected times marked on them. Event 1 is the start event and event 8 is the finish event.\n\nPaths from event 1 to event 8:\n1-2-3-5-8 = 6 + 13 + 11 + 3 = 33 days\n1-2-4-5-8 = 6 + 4 + 6 + 3 = 19 days\n1-6-7-8 = 5 + 11 + 15 = 31 days\n\nCritical path is the longest path, 1-2-3-5-8, and the project duration is 33 days.\n\nEarliest event times (forward pass):\nEvent 1 = 0, Event 2 = 6, Event 3 = 19, Event 4 = 10, Event 5 = 30, Event 6 = 5, Event 7 = 16, Event 8 = 33.\n\nLatest event times (backward pass, taking 33 days as the project duration):\nEvent 8 = 33, Event 7 = 18, Event 6 = 7, Event 5 = 30, Event 4 = 24, Event 3 = 19, Event 2 = 6, Event 1 = 0.\n\nSlack of an event = Latest event time - Earliest event time:\nEvent 1: 0 - 0 = 0 days\nEvent 2: 6 - 6 = 0 days\nEvent 3: 19 - 19 = 0 days\nEvent 4: 24 - 10 = 14 days\nEvent 5: 30 - 30 = 0 days\nEvent 6: 7 - 5 = 2 days\nEvent 7: 18 - 16 = 2 days\nEvent 8: 33 - 33 = 0 days\n\nEvents 1, 2, 3, 5 and 8 have zero slack and lie on the critical path."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Define Recruitment. Explain the process of recruitment, selecting and training.",
  "a": "Recruitment is the process of searching for prospective employees and encouraging them to apply for jobs in the organisation. It is a positive process because it attracts as many suitable candidates as possible.\n\nProcess of recruitment:\nManpower planning: finding out the number and type of employees required.\nIdentifying sources: internal sources such as promotions and transfers, and external sources such as employment exchanges, advertisements, educational institutions, consultants and the internet.\nReceiving applications and shortlisting candidates who meet the requirements.\n\nProcess of selection:\nPreliminary screening and scrutiny of applications.\nSelection tests such as aptitude, trade, intelligence and personality tests.\nInterviews to judge knowledge, communication and suitability.\nChecking of references and medical examination.\nFinal selection and issue of appointment letter.\n\nProcess of training:\nInduction training to introduce the new employee to the organisation, its rules and its work.\nOn-the-job training methods such as coaching, job rotation and apprenticeship.\nOff-the-job training methods such as lectures, seminars, case studies and vestibule training.\nTraining improves skill, reduces accidents and wastage, increases productivity and prepares employees for promotion."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Define organization structure? Explain 1 i n e and staff organization with a neat sketch.",
  "a": "Organisation structure is the framework that defines the arrangement of jobs, departments, authority relationships and communication channels in an enterprise. It shows who reports to whom, who is responsible for what work, and how activities are grouped and coordinated to achieve the objectives of the organisation.\n\nLine and staff organisation combines the direct chain of command with expert advice:\nLine authority flows directly from top management down to the workers, and each subordinate has only one boss.\nStaff positions are advisory in nature. Specialists such as personnel, finance and legal advisers give expert advice but cannot issue orders to line employees.\nLine managers retain the right of command, while staff officers help them with planning, research and problem solving.\n\nNeat sketch (described):\nManaging Director\nProduction Manager, Marketing Manager and Finance Manager report to the Managing Director.\nSupervisors and workers work under the Production Manager.\nStaff officers (Personnel Officer, Legal Adviser) are attached to the side of the Managing Director with dotted lines to show that they advise only and do not command.\n\nAdvantages:\nClear and direct chain of command with unity of command.\nLine managers get expert advice, so decisions are better.\nDiscipline and quick decisions are maintained.\nDisadvantages:\nConflict may arise between line managers and staff advisers.\nStaff advice may be ignored, or staff may try to dominate.\nIt is costlier because specialists are employed in addition to line managers."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Describe the role and importance of Corporate Social Responsibilities (CSR).",
  "a": "Corporate Social Responsibility (CSR) means the responsibility of a business towards society in addition to earning profit. A company should behave ethically and contribute to the welfare of employees, customers, community and the environment.\n\nRole and importance of CSR:\nTowards shareholders: fair return on investment, true and fair accounts, and protection of their interests.\nTowards employees: fair wages, safe working conditions, welfare facilities and opportunities for growth.\nTowards customers: quality goods at reasonable prices, honest advertising and after-sales service.\nTowards community: employment, development of the local area, support to education, health and sanitation.\nTowards environment: control of pollution, conservation of resources and use of clean technology.\nTowards government: payment of taxes honestly and following all laws and regulations.\n\nCSR builds goodwill and a good image, increases customer loyalty, motivates employees, avoids government interference and leads to long-term, sustainable growth of the business and society."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Determine the role of entrepreneurs in promoting small scale industries. *",
  "a": "Entrepreneurs play a vital role in promoting small scale industries:\nThey identify business opportunities and set up small units with limited capital.\nThey generate large-scale employment, especially in rural and semi-urban areas, using labour-intensive methods.\nThey promote balanced regional development by starting units in backward areas.\nThey mobilise local savings and make use of locally available raw materials and skills.\nThey encourage innovation, new products and adoption of new technology.\nThey develop ancillary units that supply parts and components to large industries.\nThey increase exports through products such as handicrafts, textiles and processed goods.\nThey reduce dependence on imports and help in import substitution.\nThey improve the standard of living by raising incomes and providing goods at lower cost.\nThey help in the development of entrepreneurship itself, as successful small entrepreneurs inspire others."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Differentiate between CPM and PERT.",
  "a": "Differences between CPM and PERT:\nCPM stands for Critical Path Method, while PERT stands for Programme Evaluation and Review Technique.\nCPM is activity oriented, while PERT is event oriented.\nCPM uses a single time estimate (deterministic approach) for each activity, while PERT uses three time estimates (optimistic, most likely and pessimistic) and is probabilistic.\nCPM is suitable for projects where activity times are known with certainty, such as construction and repetitive projects, while PERT is suitable for research and development projects where times are uncertain.\nCPM focuses on time-cost trade-off and crashing of the project, while PERT focuses on meeting deadlines and controlling uncertainty.\nCPM was developed for industrial and construction projects, while PERT was developed for the Polaris missile programme.\nIn CPM, dummy activities may be used and the network is activity-on-arrow or activity-on-node, while PERT normally uses event-based networks with activities as arrows."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Elaborate the role of e-commerce and social media in entrepreneurship and start-ups.",
  "a": "E-commerce means buying and selling goods and services over the internet. Social media means online platforms such as WhatsApp, Instagram, Facebook and YouTube used for communication and promotion.\n\nRole of e-commerce in entrepreneurship and start-ups:\nA start-up can sell to customers all over the country and the world without opening shops.\nCost of starting and running the business is low because there is no need for a large showroom or middlemen.\nProducts can be sold day and night, and payments are received online quickly.\nSmall entrepreneurs can study customer demand, feedback and market trends easily.\nGovernment portals such as GeM and online marketplaces give small units direct access to buyers.\n\nRole of social media:\nIt provides almost free advertising and brand building for new businesses.\nEntrepreneurs can show products through photos, videos and live sessions and attract customers.\nDirect interaction with customers builds trust and gives immediate feedback.\nInfluencer marketing and targeted advertisements reach the exact group of customers.\nIt helps in launching new products, taking orders and providing after-sales support.\nTogether, e-commerce and social media reduce the cost of entry, increase the market and give small start-ups a fair chance to compete with large companies."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain ABC analysis in inventory control with a graph.",
  "a": "ABC analysis is a method of inventory control in which items are classified according to their annual consumption value (annual usage multiplied by unit price).\n\nCategories:\nA items: about 10 percent of items account for about 70 percent of the total value. They need strict and close control.\nB items: about 20 percent of items account for about 20 percent of the total value. They need moderate control.\nC items: about 70 percent of items account for about 10 percent of the total value. They need simple and routine control.\n\nGraph: on the horizontal axis, the percentage of items is plotted, and on the vertical axis, the percentage of annual consumption value is plotted. The curve rises steeply for A items, then flattens for B items and becomes almost flat for C items. This curve is called the ABC curve.\n\nAdvantages:\nControl effort and money are concentrated on high-value items.\nOrdering, safety stock and record keeping are decided according to importance.\nIt reduces inventory cost, avoids overstocking of costly items and prevents shortage of important items.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#1e293b\" stroke-width=\"2\"><line x1=\"40\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\"/></g><polygon points=\"330,200 322,196 322,204\" fill=\"#1e293b\"/><polygon points=\"40,20 36,28 44,28\" fill=\"#1e293b\"/><path d=\"M50,190 C90,90 150,55 320,45\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><g stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"><line x1=\"120\" y1=\"200\" x2=\"120\" y2=\"70\"/><line x1=\"220\" y1=\"200\" x2=\"220\" y2=\"50\"/></g><text x=\"240\" y=\"60\" font-size=\"11\" fill=\"#3b82f6\">ABC curve</text><text x=\"85\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">A</text><text x=\"170\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text><text x=\"270\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text><text x=\"230\" y=\"232\" font-size=\"11\" fill=\"#1e293b\">Cumulative % of items</text><text x=\"18\" y=\"110\" font-size=\"11\" fill=\"#1e293b\" transform=\"rotate(-90 18 110)\">Cumulative % of value</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain ISO standards and ISO : 9000 series of quality systems. *",
  "a": "ISO stands for International Organization for Standardization, which frames international standards for quality, safety and efficiency. ISO standards help products and services to be safe, reliable and of good quality.\n\nISO 9000 series of quality systems:\nISO 9000: Quality management systems - Fundamentals and vocabulary. It explains basic concepts and terms.\nISO 9001: Quality management systems - Requirements. It specifies requirements for a quality management system and is the standard against which certification is given.\nISO 9004: Quality management systems - Guidelines for performance improvement. It gives guidance beyond minimum requirements.\nISO 19011: Guidelines for auditing management systems. It gives guidance for internal and external audits.\n\nBenefits of ISO 9000:\nConsistent quality of products and services.\nBetter customer satisfaction and confidence.\nReduced wastage and rework.\nEasy entry into national and international markets.\nClear documentation, responsibility and systematic working in the organisation."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain Maslow’s need Hierarchy theory of motivation.",
  "a": "Maslow's need hierarchy theory of motivation states that human needs can be arranged in a hierarchy of five levels, and a person is motivated first by lower-level needs. When one level is satisfied, the next higher level becomes the motivator.\n\nLevels from lowest to highest:\nPhysiological needs: basic needs for survival such as food, water, shelter and clothing. In industry these are satisfied by wages and good working conditions.\nSafety needs: security of job, safe working conditions, pension and insurance.\nSocial needs: need for belongingness, friendship, love and acceptance by the group.\nEsteem needs: need for respect, recognition, status and appreciation.\nSelf-actualisation needs: need to realise one's full potential, creativity and personal growth.\n\nFeatures of the theory:\nNeeds are arranged in order of priority.\nA satisfied need no longer motivates.\nHigher needs arise only after lower needs are reasonably satisfied.\nThe theory helps managers to understand what motivates different employees and to provide suitable incentives.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 220\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#3b82f6\" stroke-width=\"1.5\"><polygon points=\"120,12 180,12 205,48 95,48\" fill=\"#eff6ff\"/><polygon points=\"95,52 205,52 230,88 70,88\" fill=\"#dbeafe\"/><polygon points=\"70,92 230,92 255,128 45,128\" fill=\"#bfdbfe\"/><polygon points=\"45,132 255,132 280,168 20,168\" fill=\"#93c5fd\"/><polygon points=\"20,172 280,172 290,208 10,208\" fill=\"#60a5fa\"/></g><g fill=\"#1e293b\" font-size=\"11\" text-anchor=\"middle\"><text x=\"150\" y=\"36\">Self-actualisation</text><text x=\"150\" y=\"76\">Esteem</text><text x=\"150\" y=\"116\">Social</text><text x=\"150\" y=\"156\">Safety</text><text x=\"150\" y=\"196\">Physiological</text></g></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Explain William Deming PDCA.",
  "a": "William Deming, an American statistician, gave the PDCA cycle, also called the Deming cycle or Deming wheel, for continuous improvement of quality.\n\nPDCA cycle:\nPlan: identify the problem, analyse causes and plan the change or improvement to be made.\nDo: implement the plan on a small scale or trial basis.\nCheck: study the results, compare them with the expected results and find out deviations.\nAct: if the change is successful, standardise it and apply it fully; if not, revise the plan and repeat the cycle.\n\nImportance: it brings continuous improvement, reduces defects, involves all employees, prevents repetition of mistakes and leads to total quality management. Deming also gave 14 points for quality management, stressing constancy of purpose, training, leadership and elimination of fear.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 200\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"30\" y=\"20\" width=\"90\" height=\"40\" rx=\"10\"/><rect x=\"180\" y=\"20\" width=\"90\" height=\"40\" rx=\"10\"/><rect x=\"180\" y=\"130\" width=\"90\" height=\"40\" rx=\"10\"/><rect x=\"30\" y=\"130\" width=\"90\" height=\"40\" rx=\"10\"/></g><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"120\" y1=\"40\" x2=\"172\" y2=\"40\"/><line x1=\"225\" y1=\"60\" x2=\"225\" y2=\"122\"/><line x1=\"180\" y1=\"150\" x2=\"128\" y2=\"150\"/><line x1=\"75\" y1=\"130\" x2=\"75\" y2=\"68\"/></g><g fill=\"#64748b\"><polygon points=\"172,40 162,34 162,46\"/><polygon points=\"225,122 219,112 231,112\"/><polygon points=\"128,150 138,144 138,156\"/><polygon points=\"75,68 69,78 81,78\"/></g><g fill=\"#1e293b\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"75\" y=\"45\">Plan</text><text x=\"225\" y=\"45\">Do</text><text x=\"225\" y=\"155\">Check</text><text x=\"75\" y=\"155\">Act</text></g><text x=\"150\" y=\"98\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">Continuous</text><text x=\"150\" y=\"113\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">improvement</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Explain about ABC analysis with the help of a graph.",
  "a": "ABC analysis classifies inventory items by their annual consumption value, so that control effort goes where the money is. Steps: rank all items by annual usage value (annual demand x unit price) in descending order, calculate the cumulative percentage of items and of total value, then divide into three classes.\n\n- Class A — about 10% of items but about 70% of the total value. Very tight control: accurate records, frequent review, low safety stock, senior approval for orders.\n- Class B — about 20% of items and about 20% of the value. Moderate control: periodic review and normal procedures.\n- Class C — about 70% of items but only about 10% of the value. Simple, loose control: bulk ordering, minimal records, because the value at stake is small.\n\nGraph: plot cumulative percentage of items on the X-axis and cumulative percentage of annual value on the Y-axis. The curve rises steeply for A items and then flattens for B and C — this ABC curve shows visually why a small number of items deserves most of the management attention.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#1e293b\" stroke-width=\"2\"><line x1=\"40\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\"/></g><polygon points=\"330,200 322,196 322,204\" fill=\"#1e293b\"/><polygon points=\"40,20 36,28 44,28\" fill=\"#1e293b\"/><path d=\"M50,190 C90,90 150,55 320,45\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><g stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"><line x1=\"120\" y1=\"200\" x2=\"120\" y2=\"70\"/><line x1=\"220\" y1=\"200\" x2=\"220\" y2=\"50\"/></g><text x=\"240\" y=\"60\" font-size=\"11\" fill=\"#3b82f6\">ABC curve</text><text x=\"85\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">A</text><text x=\"170\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text><text x=\"270\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text><text x=\"230\" y=\"232\" font-size=\"11\" fill=\"#1e293b\">Cumulative % of items</text><text x=\"18\" y=\"110\" font-size=\"11\" fill=\"#1e293b\" transform=\"rotate(-90 18 110)\">Cumulative % of value</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain about ABC analysis.",
  "a": "ABC analysis is a technique of inventory control based on the principle that all items are not equally important. Items are classified according to their annual consumption value, which is annual usage multiplied by unit price.\n\nClassification:\nA items: a small number of items (about 10 percent) with very high value (about 70 percent). They are ordered in small quantities, checked frequently and kept under strict control.\nB items: a moderate number of items (about 20 percent) with moderate value (about 20 percent). They are controlled moderately.\nC items: a large number of items (about 70 percent) with low value (about 10 percent). They are ordered in bulk and controlled loosely.\n\nProcedure:\nCalculate the annual consumption value of each item.\nArrange the items in descending order of value.\nCalculate cumulative percentages of items and values.\nDivide the items into A, B and C groups.\n\nAdvantages: it saves time and cost of control, prevents shortage of vital items, reduces capital locked in inventory and helps management to focus on important items.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#1e293b\" stroke-width=\"2\"><line x1=\"40\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\"/></g><polygon points=\"330,200 322,196 322,204\" fill=\"#1e293b\"/><polygon points=\"40,20 36,28 44,28\" fill=\"#1e293b\"/><path d=\"M50,190 C90,90 150,55 320,45\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><g stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"><line x1=\"120\" y1=\"200\" x2=\"120\" y2=\"70\"/><line x1=\"220\" y1=\"200\" x2=\"220\" y2=\"50\"/></g><text x=\"240\" y=\"60\" font-size=\"11\" fill=\"#3b82f6\">ABC curve</text><text x=\"85\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">A</text><text x=\"170\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text><text x=\"270\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text><text x=\"230\" y=\"232\" font-size=\"11\" fill=\"#1e293b\">Cumulative % of items</text><text x=\"18\" y=\"110\" font-size=\"11\" fill=\"#1e293b\" transform=\"rotate(-90 18 110)\">Cumulative % of value</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain about any three self employment schemes.",
  "a": "Self-employment schemes are government programmes that help people start their own business instead of seeking a job. Three important schemes are:\n\nPrime Minister's Employment Generation Programme (PMEGP):\nImplemented by KVIC, it gives financial assistance to set up micro enterprises in manufacturing and service sectors.\nMaximum project cost is 50 lakh rupees for manufacturing and 20 lakh rupees for services.\nSubsidy of 15 to 35 percent is given, higher for special categories and rural areas.\n\nPradhan Mantri MUDRA Yojana (PMMY):\nLoans are given through banks and micro finance institutions to small and micro units.\nShishu loans up to 50000 rupees, Kishore loans up to 5 lakh rupees and Tarun loans up to 10 lakh rupees.\nNo collateral security is required for these loans.\n\nStand-Up India:\nBank loans between 10 lakh and 1 crore rupees are given for setting up greenfield enterprises.\nThe scheme is for Scheduled Caste, Scheduled Tribe and women entrepreneurs.\nThe loan covers setting up a manufacturing, service or trading enterprise and includes a RuPay debit card and support services."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain about different types of maintenance.",
  "a": "Maintenance means all actions taken to keep plant, machinery and equipment in good working condition and to restore them when they fail. Different types are:\n\nBreakdown maintenance: repair work done only after a machine fails. It is unplanned and causes loss of production.\nPreventive maintenance: work done at regular intervals, such as inspection, cleaning, lubrication and replacement of parts, before failure occurs. It reduces breakdowns.\nPredictive maintenance: condition of machines is monitored using vibration, temperature and noise measurements, and maintenance is done only when signs of failure appear.\nCorrective maintenance: improvements are made in design or parts so that the same fault does not repeat.\nPlanned maintenance: all maintenance work is scheduled in advance according to a plan.\nRoutine maintenance: simple daily activities such as cleaning, oiling and tightening done by operators.\nShutdown maintenance: major overhaul work done when the plant is stopped for a planned shutdown."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain about the Economic Order Quantity (EOQ) with a neat sketch.",
  "a": "Economic Order Quantity (EOQ) is the quantity to be ordered at a time so that the total inventory cost is minimum. Total cost consists of ordering cost and carrying cost.\n\nEOQ = square root of (2 x Annual demand x Ordering cost per order) / (Carrying cost per unit per year).\n\nNeat sketch (described):\nThe stock level graph shows a saw-tooth pattern: stock falls steadily as material is consumed and jumps up immediately when a fresh order arrives.\nThe cost graph has order quantity on the horizontal axis and cost on the vertical axis.\nThe ordering cost curve falls as order size increases, because fewer orders are placed.\nThe carrying cost curve rises as order size increases, because more stock is held.\nThe two curves cross at the EOQ, where ordering cost equals carrying cost and total cost is minimum.\n\nAssumptions: demand is known and constant, ordering cost and carrying cost are known, lead time is constant, no shortages are allowed and replenishment is instant.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#1e293b\" stroke-width=\"2\"><line x1=\"40\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\"/></g><polygon points=\"330,200 322,196 322,204\" fill=\"#1e293b\"/><polygon points=\"40,20 36,28 44,28\" fill=\"#1e293b\"/><path d=\"M60,60 C140,100 220,150 310,180\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><path d=\"M60,180 L310,60\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><path d=\"M60,110 Q185,200 310,110\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><line x1=\"185\" y1=\"200\" x2=\"185\" y2=\"155\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><text x=\"52\" y=\"50\" font-size=\"11\" fill=\"#3b82f6\">Ordering cost</text><text x=\"245\" y=\"52\" font-size=\"11\" fill=\"#16a34a\">Carrying cost</text><text x=\"245\" y=\"125\" font-size=\"11\" fill=\"#dc2626\">Total cost</text><text x=\"172\" y=\"218\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">EOQ</text><text x=\"18\" y=\"110\" font-size=\"11\" fill=\"#1e293b\" transform=\"rotate(-90 18 110)\">Cost</text><text x=\"235\" y=\"232\" font-size=\"11\" fill=\"#1e293b\">Order quantity</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain about the breakeven analysis with a neat sketch.",
  "a": "Breakeven analysis studies the relationship between cost, volume and profit. Breakeven point (BEP) is the level of output at which total revenue equals total cost, so there is neither profit nor loss.\n\nBreakeven point in units = Fixed cost / (Selling price per unit - Variable cost per unit).\nBreakeven point in rupees = Fixed cost / (1 - Variable cost / Sales) or BEP in units multiplied by selling price.\n\nNeat sketch (described):\nThe horizontal axis shows output and the vertical axis shows cost and revenue in rupees.\nThe fixed cost line is horizontal because fixed cost does not change with output.\nThe total cost line starts from fixed cost and rises with output.\nThe total revenue line starts from zero and rises with output.\nThe point where total revenue line cuts total cost line is the breakeven point.\nThe area below this point is loss and the area above it is profit.\n\nUses: fixing the selling price, deciding the minimum production level, choosing between alternatives and planning profit. Limitations: it assumes fixed cost and price remain constant and that all output is sold.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#1e293b\" stroke-width=\"2\"><line x1=\"40\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\"/></g><polygon points=\"330,200 322,196 322,204\" fill=\"#1e293b\"/><polygon points=\"40,20 36,28 44,28\" fill=\"#1e293b\"/><line x1=\"40\" y1=\"140\" x2=\"320\" y2=\"140\" stroke=\"#64748b\" stroke-width=\"2\"/><line x1=\"40\" y1=\"140\" x2=\"320\" y2=\"60\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"200\" x2=\"320\" y2=\"40\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><line x1=\"250\" y1=\"200\" x2=\"250\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><circle cx=\"250\" cy=\"80\" r=\"4\" fill=\"#dc2626\"/><text x=\"262\" y=\"132\" font-size=\"11\" fill=\"#64748b\">Fixed cost</text><text x=\"205\" y=\"88\" font-size=\"11\" fill=\"#3b82f6\">Total cost</text><text x=\"120\" y=\"146\" font-size=\"11\" fill=\"#16a34a\">Sales revenue</text><text x=\"238\" y=\"218\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">BEP</text><text x=\"18\" y=\"110\" font-size=\"11\" fill=\"#1e293b\" transform=\"rotate(-90 18 110)\">Cost</text><text x=\"285\" y=\"222\" font-size=\"11\" fill=\"#1e293b\">Quantity</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Explain about the principles of scientific management by F. W. Taylor.",
  "a": "F. W. Taylor is called the father of scientific management. Scientific management means applying science to every element of work instead of following rule of thumb methods.\n\nPrinciples of scientific management:\nScience, not rule of thumb: every job should be studied scientifically and the best method should be found.\nHarmony, not discord: there should be cooperation and friendly relations between workers and management.\nCooperation, not individualism: workers and management should work together for common goals.\nMaximum output, not restricted output: both workers and management should aim for maximum production.\nDivision of work and responsibility: planning should be the responsibility of management and doing the work should be the responsibility of workers.\nMental revolution: both workers and management should change their attitude towards each other and towards work.\nDevelopment of workers: workers should be scientifically selected and trained to their fullest efficiency.\n\nTechniques: time study, motion study, standardisation of tools and working conditions, scientific selection and training, and differential piece rate system of payment."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain briefly about the different types of ownerships.",
  "a": "Types of business ownership:\nSole proprietorship: business owned and managed by one person. It is easy to start, the owner enjoys all profit but has unlimited liability.\nPartnership: business owned by two or more persons under an agreement. Capital and risk are shared, but liability is generally unlimited.\nJoint Stock Company: a company owned by shareholders with a separate legal existence. It has limited liability and can raise large capital.\nPrivate limited company: minimum 2 members, maximum 200 members, shares cannot be transferred freely and it cannot invite the public to buy shares.\nPublic limited company: minimum 7 members, no maximum limit, shares can be transferred freely and it can invite the public to subscribe.\nCooperative society: an organisation owned and managed by its members for mutual benefit, formed on the principle of one member one vote.\nGovernment company: a company in which at least 51 percent of shares are held by the government."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Explain different types of self-employment schemes.",
  "a": "Self-employment schemes are programmes of the government that provide finance, training and support to people who wish to start their own enterprise. Important schemes are:\n\nPrime Minister's Employment Generation Programme (PMEGP): assistance to set up micro enterprises, with subsidy of 15 to 35 percent.\nPradhan Mantri MUDRA Yojana (PMMY): loans up to 10 lakh rupees under Shishu, Kishore and Tarun categories without collateral.\nStand-Up India: bank loans from 10 lakh to 1 crore rupees for SC, ST and women entrepreneurs.\nSkill India Mission (PMKVY): free skill training and certification to youth so that they can take up self-employment.\nDeendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM): support to rural poor for self-employment through self-help groups.\nNational Small Industries Corporation (NSIC) schemes: marketing support, raw material assistance and credit support to small enterprises.\nDistrict Industries Centre (DIC) schemes: single window assistance, subsidies and guidance for small industries at district level."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain how corporate social responsibility activities helps in community development. * *",
  "a": "Corporate Social Responsibility activities help community development in the following ways:\nEducation: companies build schools, provide scholarships, books and digital classrooms.\nHealth: companies organise medical camps, build hospitals and support drinking water and sanitation projects.\nSkill development: training centres are opened so that local youth get employment.\nInfrastructure: companies develop roads, street lights, parks and community halls in nearby villages.\nEnvironment: tree plantation, rainwater harvesting and pollution control improve the quality of life.\nWomen empowerment: self-help groups and income generation programmes make women financially independent.\nRural development: support to agriculture, irrigation and rural industries raises village incomes.\nDisaster relief: companies provide food, shelter and funds during floods, earthquakes and epidemics.\nBecause of these activities, the community gets better facilities, employment and living standards, and a cordial relationship develops between industry and society."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain how does Make in India help our country to transform into a developed country. 5 * *",
  "a": "Make in India is an initiative of the Government of India launched in 2014 to make India a global manufacturing hub. It aims to increase the share of manufacturing in GDP to 25 percent and to create large-scale employment.\n\nHow it helps India become a developed country:\nManufacturing growth: new factories and industrial corridors increase production and exports.\nEmployment: labour-intensive industries create crores of jobs for youth.\nForeign investment: liberalised FDI policy and ease of doing business attract foreign capital and technology.\nSkill development: Skill India trains workers to meet industry requirements.\nInfrastructure: industrial corridors, smart cities and improved ports, roads and power support industry.\nEase of doing business: single window clearances, online approvals and reduced regulations make starting business easier.\nInnovation and quality: Start-up India and Digital India promote new technology and quality products.\nSelf-reliance: domestic production reduces imports in defence, electronics and other sectors.\nIncrease in exports and foreign exchange improves the economy and raises per capita income, which are marks of a developed country."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain line and staff organisation structure with a neat block diagram.",
  "a": "Line organisation is the direct chain of command: orders flow from top management down through managers to workers, and each person has one boss. Staff organisation adds specialists who only advise — they have no power to give orders.\n\nSketch (line = solid authority, staff = advisory):\nManaging Director\n├── Production Manager → Supervisors → Workers\n├── Marketing Manager → Sales Staff\n└── Staff officers (advisory only): HR, Finance, Legal\n\nAdvantages: clear authority and responsibility, plus expert advice from staff specialists.\nDisadvantages: possible conflict between line managers and staff advisors, and confusion when staff advice is treated as an order.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 200\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#3b82f6\" fill=\"#dbeafe\" stroke-width=\"1.5\"><rect x=\"130\" y=\"8\" width=\"100\" height=\"30\" rx=\"8\"/><rect x=\"15\" y=\"78\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"235\" y=\"78\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"15\" y=\"148\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"235\" y=\"148\" width=\"110\" height=\"30\" rx=\"8\"/></g><rect x=\"130\" y=\"148\" width=\"100\" height=\"30\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"180\" y1=\"38\" x2=\"70\" y2=\"78\"/><line x1=\"180\" y1=\"38\" x2=\"290\" y2=\"78\"/><line x1=\"70\" y1=\"108\" x2=\"70\" y2=\"148\"/><line x1=\"290\" y1=\"108\" x2=\"290\" y2=\"148\"/><line x1=\"180\" y1=\"38\" x2=\"180\" y2=\"148\" stroke-dasharray=\"5 4\"/></g><g fill=\"#1e293b\" font-size=\"11\" text-anchor=\"middle\"><text x=\"180\" y=\"27\">Managing Director</text><text x=\"70\" y=\"97\">Production Mgr</text><text x=\"290\" y=\"97\">Marketing Mgr</text><text x=\"70\" y=\"167\">Workers</text><text x=\"290\" y=\"167\">Sales Staff</text><text x=\"180\" y=\"161\" font-size=\"10\">Staff officers</text><text x=\"180\" y=\"175\" font-size=\"10\">HR • Finance • Legal</text></g><text x=\"188\" y=\"100\" font-size=\"10\" fill=\"#64748b\">advisory only</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain line and staff organization with a neat sketch and state its advantages and disadvantages.",
  "a": "Line and staff organisation is a combination of line organisation, which gives direct authority, and staff organisation, which gives expert advice.\n\nNeat sketch (described):\nManaging Director\nProduction Manager, Marketing Manager and Finance Manager report to the Managing Director.\nSupervisors and workers work under the Production Manager.\nStaff officers (Personnel Officer, Legal Adviser, Research Officer) are shown at the side of the Managing Director with dotted lines, indicating that they only advise and cannot give orders.\n\nAdvantages:\nUnity of command is maintained because each subordinate has one boss.\nLine managers get specialised advice, so planning and decisions improve.\nIt allows use of experts without disturbing the chain of command.\nDiscipline is maintained and quick decisions are possible.\nDisadvantages:\nConflict often arises between line and staff because staff advice may be ignored or resented.\nStaff officers may try to dominate, causing confusion about authority.\nIt is expensive, as specialists are paid in addition to line executives.\nResponsibility for results remains with line managers, while staff have no direct responsibility.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 200\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#3b82f6\" fill=\"#dbeafe\" stroke-width=\"1.5\"><rect x=\"130\" y=\"8\" width=\"100\" height=\"30\" rx=\"8\"/><rect x=\"15\" y=\"78\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"235\" y=\"78\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"15\" y=\"148\" width=\"110\" height=\"30\" rx=\"8\"/><rect x=\"235\" y=\"148\" width=\"110\" height=\"30\" rx=\"8\"/></g><rect x=\"130\" y=\"148\" width=\"100\" height=\"30\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"180\" y1=\"38\" x2=\"70\" y2=\"78\"/><line x1=\"180\" y1=\"38\" x2=\"290\" y2=\"78\"/><line x1=\"70\" y1=\"108\" x2=\"70\" y2=\"148\"/><line x1=\"290\" y1=\"108\" x2=\"290\" y2=\"148\"/><line x1=\"180\" y1=\"38\" x2=\"180\" y2=\"148\" stroke-dasharray=\"5 4\"/></g><g fill=\"#1e293b\" font-size=\"11\" text-anchor=\"middle\"><text x=\"180\" y=\"27\">Managing Director</text><text x=\"70\" y=\"97\">Production Mgr</text><text x=\"290\" y=\"97\">Marketing Mgr</text><text x=\"70\" y=\"167\">Workers</text><text x=\"290\" y=\"167\">Sales Staff</text><text x=\"180\" y=\"161\" font-size=\"10\">Staff officers</text><text x=\"180\" y=\"175\" font-size=\"10\">HR • Finance • Legal</text></g><text x=\"188\" y=\"100\" font-size=\"10\" fill=\"#64748b\">advisory only</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain purchasing procedure in material management.",
  "a": "Purchasing procedure in material management consists of the following steps:\nPurchase requisition: the user department sends a written requisition stating the material, quantity and date required.\nSelection of suppliers: quotations are invited from different suppliers through enquiry letters or tenders.\nReceiving quotations: suppliers send their prices, terms and delivery conditions.\nComparative statement: quotations are compared on the basis of price, quality, delivery and terms, and the best supplier is selected.\nPurchase order: a formal order is placed with the selected supplier giving full details of material, quantity, price and delivery.\nReceipt of material: material is received in stores along with the delivery challan and invoice.\nInspection and testing: the quality and quantity of material are checked against the order.\nPayment: after satisfactory inspection, the invoice is passed and payment is made to the supplier.\nRecord keeping: entries are made in purchase records and stock records for future reference."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain the Break-Even analysis with the help of a diagram.",
  "a": "EOQ (Economic Order Quantity) is the order size that minimises total inventory cost. Total cost = ordering cost + carrying (holding) cost. Ordering cost falls as order size grows (fewer orders), while carrying cost rises (more stock held). EOQ is the point where the two are equal.\n\nFormula: EOQ = square root of (2 × D × S / H)\nD = annual demand, S = ordering cost per order, H = holding cost per unit per year.\n\nAssumptions:\n- Demand is constant and known\n- Lead time is fixed\n- No stock-outs\n- Stock is replenished instantly\n\nDiagram: the stock level falls in a sawtooth pattern as items are used and jumps back up on each delivery. On a cost graph, the ordering-cost curve slopes down, the carrying-cost curve slopes up, and they cross at the EOQ — the lowest point of the total-cost curve.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#1e293b\" stroke-width=\"2\"><line x1=\"40\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\"/></g><polygon points=\"330,200 322,196 322,204\" fill=\"#1e293b\"/><polygon points=\"40,20 36,28 44,28\" fill=\"#1e293b\"/><path d=\"M60,60 C140,100 220,150 310,180\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><path d=\"M60,180 L310,60\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><path d=\"M60,110 Q185,200 310,110\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><line x1=\"185\" y1=\"200\" x2=\"185\" y2=\"155\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><text x=\"52\" y=\"50\" font-size=\"11\" fill=\"#3b82f6\">Ordering cost</text><text x=\"245\" y=\"52\" font-size=\"11\" fill=\"#16a34a\">Carrying cost</text><text x=\"245\" y=\"125\" font-size=\"11\" fill=\"#dc2626\">Total cost</text><text x=\"172\" y=\"218\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">EOQ</text><text x=\"18\" y=\"110\" font-size=\"11\" fill=\"#1e293b\" transform=\"rotate(-90 18 110)\">Cost</text><text x=\"235\" y=\"232\" font-size=\"11\" fill=\"#1e293b\">Order quantity</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Explain the applications of RFID technology in material management.",
  "a": "RFID means Radio Frequency Identification. It uses radio waves to identify and track materials automatically without physical contact. A tag is fixed to the item, and a reader reads the information stored in the tag.\n\nApplications in material management:\nTracking of materials: raw materials, work-in-progress and finished goods can be traced at every stage.\nInventory accuracy: stock can be counted quickly without opening packages, reducing errors.\nWarehouse management: location of items in stores is found easily and issue of material becomes fast.\nReceipt and dispatch: incoming and outgoing materials are recorded automatically, saving time.\nPrevention of theft and loss: unauthorised movement of material through gates is detected by readers.\nSupply chain management: suppliers and customers can know the exact position of materials in transit.\nSpare parts management: critical spares are identified and their availability is known immediately.\nAutomation: integration with computers updates stock records automatically, reducing paperwork and human error."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain the differences between public limited company and private limited company.",
  "a": "Differences between public limited company and private limited company:\nMinimum number of members: public company needs at least 7 members, while private company needs at least 2 members.\nMaximum number of members: there is no maximum limit for a public company, while a private company is limited to 200 members.\nTransfer of shares: shares of a public company can be transferred freely, while shares of a private company cannot be transferred freely.\nInvitation to public: a public company can invite the public to buy its shares and debentures, while a private company cannot.\nProspectus: a public company must issue a prospectus, while a private company need not issue one.\nDirectors: a public company must have at least 3 directors, while a private company must have at least 2 directors.\nName: a public company must use the word Limited at the end of its name, while a private company must use the words Private Limited.\nStatutory meeting: a public company must hold a statutory meeting, while a private company need not hold it."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the different causes of accidents and their prevention in industries.",
  "a": "Causes of industrial accidents:\nUnsafe acts of workers: working without guards, using wrong tools, carelessness, overconfidence, working under the influence of alcohol and disobeying safety rules.\nUnsafe conditions: unguarded machines, defective tools, poor lighting and ventilation, slippery floors and faulty electrical wiring.\nHuman causes: lack of training, fatigue, overwork, ignorance and physical weakness.\nMechanical causes: worn-out parts, poor maintenance and failure of safety devices.\nEnvironmental causes: excessive heat, noise, dust and fumes.\n\nPrevention of accidents:\nProper training of workers in safe methods of work.\nGuarding of dangerous parts of machines and regular maintenance.\nProviding personal protective equipment such as helmets, gloves, goggles and safety shoes.\nGood housekeeping, proper lighting and ventilation in the factory.\nSafety committees, safety posters, safety awards and safety inspections.\nEnforcement of safety rules and provisions of the Factories Act.\nFirst aid facilities and quick medical attention."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain the different types of Hazards in industry.",
  "a": "Hazards in industry are sources of danger that can cause injury, disease or damage. Different types are:\n\nPhysical hazards: noise, vibration, heat, cold, radiation and poor lighting.\nChemical hazards: gases, vapours, dust, fumes, acids and toxic chemicals that cause burns, poisoning and lung diseases.\nBiological hazards: bacteria, viruses, fungi and insects that cause infections and diseases.\nMechanical hazards: moving parts, rotating shafts, sharp edges and falling objects.\nElectrical hazards: electric shock, short circuits and fire due to faulty wiring.\nFire and explosion hazards: inflammable materials, gas leakage and explosive dust.\nErgonomic hazards: wrong posture, repetitive work and heavy manual lifting causing back pain and strain.\nPsychosocial hazards: stress, overwork, night shifts and poor human relations affecting mental health."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Explain the different types of plant location.",
  "a": "Plant location means the place where a factory is established. Different types of plant location are:\n\nUrban location: factory is located inside a city. Advantages are availability of labour, market, transport, power and banking, but land and labour are costly and there are restrictions.\nRural location: factory is located in a village or backward area. Land and labour are cheap and government gives incentives, but transport, power and skilled labour may be lacking.\nSuburban location: factory is located on the outskirts of a city. It combines many advantages of urban and rural locations.\nIndustrial estate location: factory is located in an estate developed by government with ready plots, roads, water, power and common facilities.\nSpecial Economic Zone (SEZ) location: factory is located in a zone with tax benefits and facilities mainly for export production.\nLocation near raw material or market: factory is located near the source of raw material or near customers to reduce transport cost."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain the factors affecting plant location.",
  "a": "Factors affecting plant location:\nAvailability of raw materials: nearness to raw materials reduces transport cost, especially for weight-losing industries.\nMarket: nearness to customers reduces distribution cost and gives quick service.\nLabour: availability of skilled, unskilled and cheap labour.\nTransport facilities: good roads, railways, ports and low transport cost.\nPower and fuel: regular and cheap supply of electricity, coal, gas or oil.\nWater supply: sufficient water for processing, cooling and drinking.\nClimate: suitable climate for the product and for workers.\nGovernment policy: subsidies, tax concessions and industrial estates offered in certain areas.\nLand: sufficient land at reasonable cost with scope for future expansion.\nLaw and order and social facilities: peaceful atmosphere, housing, schools and hospitals.\nFinance and banking facilities and personal preferences of the entrepreneur also influence location."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain the features of Indian standards on quality systems IS : 14000.",
  "a": "IS 14000 is the Indian Standard corresponding to ISO 14000 series on environmental management systems. It helps organisations to manage their environmental responsibilities systematically.\n\nFeatures of IS 14000:\nEnvironmental policy: the organisation frames a policy for protection of environment and prevention of pollution.\nPlanning: environmental aspects and legal requirements are identified and objectives are fixed.\nImplementation and operation: responsibilities are assigned, employees are trained and procedures for control are documented.\nChecking and corrective action: performance is monitored, audits are conducted and corrective actions are taken.\nManagement review: top management reviews the system periodically and improves it.\nContinual improvement: the system is improved continuously to reduce waste, conserve resources and prevent pollution.\n\nBenefits: legal compliance, better public image, reduced cost through resource conservation, easy access to markets and a cleaner environment."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain the objectives and activities of maintenance management. *",
  "a": "Maintenance management means planning, organising and controlling all maintenance activities so that plant and machinery remain in efficient working condition at minimum cost.\n\nObjectives of maintenance management:\nTo keep machines available for production with minimum breakdown.\nTo increase the life of plant and equipment.\nTo maintain product quality by keeping machines in accurate condition.\nTo ensure safety of workers.\nTo reduce maintenance cost and loss due to idle machines.\nTo keep proper records for future planning.\n\nActivities of maintenance management:\nInspection of machines at regular intervals.\nLubrication, cleaning and adjustment of machines.\nRepair and replacement of worn-out parts.\nOverhauling of machines during planned shutdowns.\nMaintaining spare parts and maintenance records.\nTraining of maintenance staff and planning of maintenance schedules."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain the process of recruitment, selection, training and development.",
  "a": "The process of recruitment, selection, training and development:\nRecruitment: searching for candidates and attracting them to apply. Sources are internal (promotion, transfer) and external (advertisements, employment exchanges, educational institutions, consultants, internet).\nSelection: choosing the most suitable candidate. Steps are preliminary screening, application form, selection tests, interviews, reference check, medical examination and final appointment.\nTraining: teaching employees the specific skills needed for the present job. Methods are on-the-job training (coaching, job rotation, apprenticeship) and off-the-job training (lectures, seminars, vestibule training).\nDevelopment: preparing employees for higher responsibilities in future. It includes job rotation, committee assignments, conferences, case studies and management games.\nTraining is job-oriented and short term, while development is career-oriented and long term. Together they improve efficiency, reduce accidents and wastage, and prepare employees for promotion."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain the requirements of an entrepreneur.",
  "a": "Requirements of an entrepreneur, also called qualities of a successful entrepreneur:\nRisk taking: willingness to take calculated risks in business.\nInnovativeness: ability to introduce new products, methods and ideas.\nLeadership: ability to guide and motivate workers.\nDecision making: ability to take quick and correct decisions.\nHard work and perseverance: readiness to work hard and continue efforts despite failures.\nSelf-confidence: faith in one's own ability.\nVision and foresight: ability to see future opportunities.\nOrganising ability: ability to arrange men, money, materials and machines.\nCommunication skill: ability to convince customers, workers and bankers.\nTechnical knowledge: knowledge of the product and process.\nHonesty and integrity: fair dealing builds goodwill and trust.\nAdaptability: ability to adjust to changing market conditions."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the salient features of code on Social Security, 2020.",
  "a": "The Code on Social Security, 2020 is one of the four labour codes. It consolidates and amends laws relating to social security with the aim of extending it to all employees and workers.\n\nSalient features:\nIt subsumes nine earlier laws including the Employees Provident Funds Act, Employees State Insurance Act, Maternity Benefit Act, Payment of Gratuity Act and Workmen's Compensation Act.\nIt extends social security to unorganised workers, gig workers and platform workers.\nA National Social Security Board is set up for unorganised workers.\nProvident fund, pension and insurance benefits are covered under one code.\nGratuity is payable to employees including fixed term employees on completion of one year.\nMaternity benefit provisions are continued and made applicable widely.\nEmployees State Insurance is extended to all establishments with 10 or more workers and to hazardous units even with one worker.\nA single registration and single return system reduces compliance burden.\nPenalties are provided for non-compliance, and the code is implemented by the central and state governments."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the salient features of industrial relations code 2020.",
  "a": "The Industrial Relations Code, 2020 consolidates and amends laws relating to trade unions, conditions of employment and settlement of industrial disputes.\n\nSalient features:\nIt subsumes three earlier laws: the Trade Unions Act, the Industrial Employment (Standing Orders) Act and the Industrial Disputes Act.\nStanding orders are required for establishments with 300 or more workers.\nTrade unions with 51 percent membership can be recognised as the sole negotiating union.\nA worker must give 14 days notice before going on strike, and strikes during conciliation or tribunal proceedings are prohibited.\nFixed term employment is recognised, with fixed term workers getting the same benefits as permanent workers.\nRetrenchment and closure provisions apply to establishments with 300 or more workers.\nA two-member Industrial Tribunal replaces multiple adjudicating bodies.\nA re-skilling fund is created for retrenched workers.\nThe code aims at easier compliance, faster dispute settlement and better industrial relations."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain the stages of production planning and control.",
  "a": "Production planning and control (PPC) means planning what to produce, when to produce and how to produce, and controlling production so that the plan is followed. Its stages are:\n\nRouting: deciding the path and sequence of operations, machines and departments through which the job will pass.\nScheduling: fixing the starting and finishing time of each operation and preparing time tables for machines and workers.\nDispatching: issuing orders, instructions, drawings and materials to start the work as per the plan.\nFollow-up (expediting): checking the progress of work, finding delays and taking corrective action so that work is completed on time.\n\nBefore these stages, estimating and forecasting of demand, and planning of materials and capacity are done. Effective PPC ensures optimum use of resources, timely delivery, minimum cost and smooth flow of production."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "List and explain about the elements of quality systems.",
  "a": "Elements of quality systems are the parts of a quality management system that ensure consistent quality. As per ISO 9001, the main elements are:\n\nManagement responsibility: defining quality policy, objectives and responsibilities of management.\nQuality system: documenting procedures and maintaining a quality manual.\nContract review: reviewing customer requirements before accepting orders.\nDesign control: controlling design from planning to final approval.\nDocument and data control: approving and maintaining correct documents.\nPurchasing: selecting suppliers and ensuring purchased materials meet requirements.\nControl of customer supplied product: proper handling of material supplied by customers.\nProduct identification and traceability: identifying products at all stages.\nProcess control: controlling production processes with proper instructions and monitoring.\nInspection and testing: checking incoming, in-process and final products.\nControl of inspection, measuring and test equipment: calibration of instruments.\nControl of nonconforming product: separating defective products and preventing their use.\nCorrective and preventive action: finding causes of defects and preventing recurrence.\nHandling, storage, packaging and delivery: protecting the product up to delivery.\nQuality records, internal audits and training: maintaining records, conducting audits and training employees."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "State and explain the objectives and functions of HRM.",
  "a": "HRM (Human Resource Management) is the management of people at work. Its objectives are:\n- Organisational objective — help the organisation reach its goals by providing capable, motivated employees.\n- Functional objective — keep the HR department's own work efficient and within its budget.\n- Societal objective — meet society's needs ethically and legally (equal opportunity, safety).\n- Personal objective — help each employee grow and reach their own goals.\n\nIts functions fall into two groups. Managerial functions (like any management): planning, organising, directing and controlling human resources. Operative functions:\n- Procurement — recruitment, selection and placement of the right people.\n- Development — training, career planning and performance appraisal.\n- Compensation — fair wages, incentives and benefits.\n- Integration — motivating employees and maintaining good industrial relations.\n- Maintenance — health, safety and welfare of employees.\n- Separation — handling retirement, resignation and retrenchment fairly."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "State the differences between delegation and decentralization.",
  "a": "Differences between delegation and decentralization:\nMeaning: delegation is the transfer of authority by a superior to a subordinate, while decentralization is the systematic dispersal of decision-making authority throughout the organisation.\nScope: delegation is limited to one superior and subordinate, while decentralization covers the whole organisation.\nNature: delegation is a process between two persons, while decentralization is the result of delegation extended to all levels.\nControl: in delegation, the superior retains control and can withdraw authority, while in decentralization, control is also shared but top management retains overall control.\nNecessity: delegation is essential for every organisation, while decentralization is optional and depends on the policy of top management.\nResponsibility: in delegation, the superior remains responsible for the work delegated, while in decentralization, responsibility is also spread to lower levels.\nFreedom: delegation gives limited freedom to the subordinate, while decentralization gives greater freedom of decision to departments and units."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "The average annual consumption of a material is 18250 units at a price of 36·50 per unit. The storage cost is 20% of an average inventory and the cost of placing an order is 50. How much quantity is to be purchased at a time?",
  "a": "Given data:\nAnnual demand (D) = 18250 units\nPrice per unit = 36.50 rupees\nStorage cost = 20 percent of unit price\nOrdering cost (S) = 50 rupees per order\n\nCarrying cost per unit per year (H) = 20 percent of 36.50 = 0.20 x 36.50 = 7.30 rupees.\n\nEconomic Order Quantity (EOQ) = square root of (2 x D x S) / H\nEOQ = square root of (2 x 18250 x 50) / 7.30\nEOQ = square root of 1825000 / 7.30\nEOQ = square root of 250000\nEOQ = 500 units.\n\nTherefore, 500 units should be purchased at a time.\nNumber of orders per year = 18250 / 500 = 36.5, that is about 37 orders per year."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What are the functions of purchase department?",
  "a": "Functions of the purchase department:\nProcurement of materials: buying the right material, in right quantity, of right quality, at right price, from right source and at right time.\nSelection of suppliers: finding reliable suppliers, inviting quotations and selecting the best source.\nNegotiation: negotiating prices, terms and delivery conditions.\nPlacing purchase orders and following up to ensure timely delivery.\nCoordination with stores, production and finance departments.\nInspection and quality checking of materials received.\nMaintaining purchase records and vendor records.\nControl of inventory: avoiding overstocking and shortage.\nCost reduction: searching for cheaper substitutes and new sources without affecting quality.\nDisposal of scrap and surplus materials."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "What are the principles of quality assurance?",
  "a": "Principles of quality assurance:\nCustomer focus: quality is defined by the customer, and all activities should aim at customer satisfaction.\nPrevention rather than inspection: defects should be prevented by proper planning and process control instead of detecting them after production.\nContinuous improvement: quality should be improved constantly through the PDCA cycle and Kaizen.\nEveryone is responsible: quality is the responsibility of every employee, not only the inspection department.\nManagement commitment: top management must be committed to quality policy and provide resources.\nProcess approach: activities should be managed as processes with clear inputs, outputs and controls.\nUse of facts and data: decisions should be based on measurement and data, not guesswork.\nSupplier partnership: good relations with suppliers ensure quality of inputs.\nDocumentation and standardisation: procedures should be documented and followed.\nTraining: employees should be trained in quality methods and tools."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write down the differences between management and administration.",
  "a": "Differences between management and administration:\nMeaning: administration means laying down objectives and policies, while management means executing those policies to achieve objectives.\nLevel: administration works at the top level, while management works at middle and lower levels.\nFunction: administration is determinative in nature (deciding what is to be done), while management is executive in nature (doing the work).\nAuthority: administration has full authority over the organisation, while management works within the limits set by administration.\nPersons involved: administration consists of owners, board of directors and chief executives, while management consists of managers, supervisors and departmental heads.\nSkills: administration needs conceptual and administrative skills, while management needs technical and human skills.\nApplicability: administration is more important in government and public organisations, while management is important in business organisations.\nExample: in a company, the board of directors performs administration by fixing policies, and managers perform management by implementing them."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Write short notes on (i) administration and (ii) management.",
  "a": "Short notes on administration and management:\n\n(i) Administration:\nAdministration is the process of laying down the objectives and broad policies of an organisation. It is a top-level function performed by owners and directors. It is determinative in nature, deciding what is to be done and when it is to be done. Administration coordinates finance, production and distribution at the highest level and has full authority over the enterprise.\n\n(ii) Management:\nManagement is the process of planning, organising, staffing, directing and controlling the activities of an organisation to achieve its objectives efficiently. It is performed by managers at middle and lower levels. It is executive in nature, concerned with doing the work through people. Management works within the policies laid down by administration and uses technical and human skills to get results."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2024, Oct/Nov 2025",
  "q": "Define production planning and control.",
  "a": "Production planning and control (PPC) is the planning of what to produce, when to produce it and how to produce it, plus controlling production so the plan is actually followed.\n\nIts four functions are:\n- Routing (deciding the path of work)\n- Scheduling (fixing timings)\n- Dispatching (issuing orders to start work)\n- Follow-up or expediting (checking progress and correcting delays)"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2024, Mar/Apr 2026",
  "q": "Define the terms Routing and Scheduling.",
  "a": "Routing: deciding the path and sequence of operations a job must pass through — which machines and departments it visits, and in what order.\n\nScheduling: fixing the start and finish time for each operation, so that every job is completed by its due date and machines are used efficiently."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2024, Nov 2024",
  "q": "Define the terms quality system, quality control.",
  "a": "Quality system: the organisational structure, procedures, processes and resources needed to implement quality management in an organisation.\n\nQuality control: the operational techniques and activities (inspection, testing, measurement) used to fulfil the requirements for quality — it checks whether the product actually meets the standard."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2024, May/June 2023",
  "q": "Define “total quality management”.",
  "a": "Total Quality Management (TQM) is a management approach in which quality is the responsibility of every member of the organisation. It aims at long-term success through customer satisfaction by continuous improvement of products, processes and services, with the participation of all employees."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 2,
  "y": "May/June 2023, Nov 2024",
  "q": "List Maslow’s hierarchy of human needs.",
  "a": "Maslow arranged human needs in five levels, from bottom to top:\n1) Physiological — food, water, shelter.\n2) Safety — security, job safety.\n3) Social — belongingness, friendship.\n4) Esteem — respect, recognition.\n5) Self-actualisation — reaching one's full potential.\n\nA lower need must be reasonably satisfied before the next higher need motivates a person.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 220\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#3b82f6\" stroke-width=\"1.5\"><polygon points=\"120,12 180,12 205,48 95,48\" fill=\"#eff6ff\"/><polygon points=\"95,52 205,52 230,88 70,88\" fill=\"#dbeafe\"/><polygon points=\"70,92 230,92 255,128 45,128\" fill=\"#bfdbfe\"/><polygon points=\"45,132 255,132 280,168 20,168\" fill=\"#93c5fd\"/><polygon points=\"20,172 280,172 290,208 10,208\" fill=\"#60a5fa\"/></g><g fill=\"#1e293b\" font-size=\"11\" text-anchor=\"middle\"><text x=\"150\" y=\"36\">Self-actualisation</text><text x=\"150\" y=\"76\">Esteem</text><text x=\"150\" y=\"116\">Social</text><text x=\"150\" y=\"156\">Safety</text><text x=\"150\" y=\"196\">Physiological</text></g></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 2,
  "y": "May/June 2023, Nov 2024",
  "q": "List different types of production.",
  "a": "Types of production:\nJob production: production of single, custom-made items as per customer order, for example shipbuilding.\nBatch production: production of a limited quantity of identical items in batches, for example bakery products.\nMass production: continuous large-scale production of standardised products, for example automobiles.\nContinuous or process production: production without interruption, for example oil refining and chemicals."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 2,
  "y": "May/June 2023, Nov 2024",
  "q": "State the importance of PDCA cycle. *",
  "a": "Importance of PDCA cycle:\nIt brings continuous improvement in quality and processes.\nIt helps in finding and correcting defects systematically.\nIt prevents repetition of mistakes by standardising successful changes.\nIt involves all employees in problem solving.\nIt reduces cost, wastage and customer complaints, leading to total quality management.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 200\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"30\" y=\"20\" width=\"90\" height=\"40\" rx=\"10\"/><rect x=\"180\" y=\"20\" width=\"90\" height=\"40\" rx=\"10\"/><rect x=\"180\" y=\"130\" width=\"90\" height=\"40\" rx=\"10\"/><rect x=\"30\" y=\"130\" width=\"90\" height=\"40\" rx=\"10\"/></g><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"120\" y1=\"40\" x2=\"172\" y2=\"40\"/><line x1=\"225\" y1=\"60\" x2=\"225\" y2=\"122\"/><line x1=\"180\" y1=\"150\" x2=\"128\" y2=\"150\"/><line x1=\"75\" y1=\"130\" x2=\"75\" y2=\"68\"/></g><g fill=\"#64748b\"><polygon points=\"172,40 162,34 162,46\"/><polygon points=\"225,122 219,112 231,112\"/><polygon points=\"128,150 138,144 138,156\"/><polygon points=\"75,68 69,78 81,78\"/></g><g fill=\"#1e293b\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"75\" y=\"45\">Plan</text><text x=\"225\" y=\"45\">Do</text><text x=\"225\" y=\"155\">Check</text><text x=\"75\" y=\"155\">Act</text></g><text x=\"150\" y=\"98\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">Continuous</text><text x=\"150\" y=\"113\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">improvement</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "Define ABC analysis.",
  "a": "ABC analysis is a method of inventory control in which items are classified according to their annual consumption value. A items are few but high in value and need strict control, B items are moderate in number and value and need moderate control, and C items are many but low in value and need simple control.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#1e293b\" stroke-width=\"2\"><line x1=\"40\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\"/></g><polygon points=\"330,200 322,196 322,204\" fill=\"#1e293b\"/><polygon points=\"40,20 36,28 44,28\" fill=\"#1e293b\"/><path d=\"M50,190 C90,90 150,55 320,45\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><g stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"><line x1=\"120\" y1=\"200\" x2=\"120\" y2=\"70\"/><line x1=\"220\" y1=\"200\" x2=\"220\" y2=\"50\"/></g><text x=\"240\" y=\"60\" font-size=\"11\" fill=\"#3b82f6\">ABC curve</text><text x=\"85\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">A</text><text x=\"170\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">B</text><text x=\"270\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">C</text><text x=\"230\" y=\"232\" font-size=\"11\" fill=\"#1e293b\">Cumulative % of items</text><text x=\"18\" y=\"110\" font-size=\"11\" fill=\"#1e293b\" transform=\"rotate(-90 18 110)\">Cumulative % of value</text></svg>"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "Define an organization.",
  "a": "An organisation is a group of people working together in a structured way to achieve common objectives. It has a definite structure of authority, division of work and coordination of activities among its members."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define branding.",
  "a": "Branding is the process of giving a distinctive name, symbol, design or mark to a product or service so that it can be easily identified and distinguished from competitors. A good brand builds customer trust, loyalty and a good image for the product."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "Define communication process with a neat sketch.",
  "a": "Communication process is the exchange of information, ideas and feelings between two or more persons. It consists of the following steps:\n\nSender: the person who sends the message.\nEncoding: converting the idea into words, symbols or gestures.\nMessage: the information to be communicated.\nChannel: the medium used, such as speech, letter, phone or email.\nDecoding: the receiver understands the message.\nReceiver: the person who receives the message.\nFeedback: the receiver responds, completing the communication cycle.\n\nNeat sketch (described):\nSender -> Encoding -> Message -> Channel -> Decoding -> Receiver, with a feedback arrow returning from receiver to sender."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "Define fixed point layout. State any two applications.",
  "a": "Fixed point layout, also called fixed position layout, is a layout in which the product remains fixed at one place and men, machines and materials are brought to it. It is used for very large and heavy products.\n\nApplications:\nShipbuilding.\nAircraft manufacturing and bridge construction."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Define inventory control.",
  "a": "Inventory control means systematic regulation of the quantity and value of stock held by an enterprise. It ensures that the right material is available in the right quantity at the right time, avoiding both overstocking and shortage, and thereby reducing cost."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Define inventory.",
  "a": "Inventory means the stock of raw materials, work-in-progress, finished goods, spare parts and other materials held by an enterprise for production and sale. It represents money locked up in materials."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Define job analysis.",
  "a": "Job analysis is the systematic study of a job to find out its duties, responsibilities, working conditions and the qualifications required to perform it. It provides the basis for job description and job specification."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "Define safety stock and reorder level.",
  "a": "Safety stock is the extra stock maintained in addition to normal stock to meet unexpected demand or delay in supply and to avoid stoppage of production.\n\nReorder level is the stock level at which a fresh order must be placed so that new material arrives before the existing stock is exhausted."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "Define supply chain management. *",
  "a": "Supply chain management is the management of the flow of materials, information and money from suppliers of raw materials to the final customers. It includes purchasing, production, warehousing, transportation and distribution, with the aim of delivering the right product at the right time at minimum cost."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define the term TQM.",
  "a": "Total Quality Management (TQM) is a management approach in which quality is the responsibility of every member of the organisation, aimed at long-term success through customer satisfaction.\n\nIts principles are:\n- Customer focus\n- Participation of all employees\n- Process-based working\n- Continuous improvement (Kaizen) — small improvements made all the time, not only when problems appear"
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define the term management information system.",
  "a": "Management Information System (MIS) is a system that collects, processes, stores and supplies relevant information to managers at different levels for planning, decision making and control. It converts data into useful information in the form of reports and summaries."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "Define the terms Industry, business.",
  "a": "Industry means economic activity concerned with production of goods through processing of raw materials, such as manufacturing, mining and construction.\n\nBusiness means any economic activity undertaken with the aim of earning profit, including production, purchase and sale of goods and services."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define the terms recruitment and selection.",
  "a": "Recruitment is the process of searching for prospective employees and encouraging them to apply for jobs in the organisation.\n\nSelection is the process of choosing the most suitable candidate from among the applicants through tests, interviews and other methods."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "Define the word Entrepreneur.",
  "a": "An entrepreneur is a person who starts, organises and manages a business enterprise, taking the risk of loss in the hope of earning profit. An entrepreneur identifies opportunities, arranges resources, introduces innovations and bears uncertainty."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Distinguish between job description and job specification.",
  "a": "Differences between job description and job specification:\nJob description describes the job itself: its title, duties, responsibilities, working conditions and reporting relationships.\nJob specification describes the person required for the job: qualifications, experience, skills, age and physical abilities.\nJob description answers what the job is, while job specification answers what kind of person can do it."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "Give the outline of communication process.",
  "a": "Outline of communication process:\nSender develops an idea.\nSender encodes the idea into a message.\nMessage is sent through a channel.\nReceiver receives and decodes the message.\nReceiver understands and gives feedback.\nNoise or barriers may disturb the process at any stage."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "List any six hazards in industry.",
  "a": "Six hazards in industry:\nPhysical hazards such as noise, heat and radiation.\nChemical hazards such as gases, dust and acids.\nBiological hazards such as bacteria and viruses.\nMechanical hazards such as moving parts and sharp edges.\nElectrical hazards such as shock and short circuit.\nFire and explosion hazards due to inflammable materials."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List any three advantages of CPM.",
  "a": "Three advantages of CPM:\nIt identifies the critical path and the activities that control the project duration.\nIt helps in planning, scheduling and controlling the project systematically.\nIt helps in time-cost trade-off by crashing critical activities to complete the project earlier."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List any three self-employment schemes available for entrepreneurs in India.",
  "a": "Three self-employment schemes available for entrepreneurs in India:\nPrime Minister's Employment Generation Programme (PMEGP) for setting up micro enterprises with subsidy.\nPradhan Mantri MUDRA Yojana (PMMY) giving loans up to 10 lakh rupees without collateral.\nStand-Up India giving bank loans from 10 lakh to 1 crore rupees to SC, ST and women entrepreneurs."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List any three types of leadership styles.",
  "a": "Three types of leadership styles:\nAutocratic style: the leader takes all decisions himself and workers only obey orders.\nDemocratic style: the leader consults subordinates and takes decisions with their participation.\nLaissez-faire style: the leader gives full freedom to subordinates and interferes very little."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "List basic methods of forecasting.",
  "a": "Basic methods of forecasting:\nQualitative methods: based on opinion and judgement, such as sales force opinion, expert opinion and Delphi method.\nQuantitative methods: based on past data and mathematics, such as time series analysis, moving average method and regression analysis.\nMarket survey and test marketing are also used for new products."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "List functions of management.",
  "a": "Functions of management:\nPlanning, organising, staffing, directing and controlling. Coordination is the essence that runs through all these functions."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List our the various self employment schemes.",
  "a": "Various self-employment schemes:\nPrime Minister's Employment Generation Programme (PMEGP).\nPradhan Mantri MUDRA Yojana (PMMY).\nStand-Up India.\nSkill India Mission (PMKVY).\nDeendayal Antyodaya Yojana - National Rural Livelihoods Mission.\nNSIC and District Industries Centre schemes."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "List out the ISO 9000 series.",
  "a": "ISO 9000 series:\nISO 9000: Fundamentals and vocabulary.\nISO 9001: Requirements for quality management system (used for certification).\nISO 9004: Guidelines for performance improvement.\nISO 19011: Guidelines for auditing management systems."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "List out the benefits of 5’S principles.",
  "a": "Benefits of 5S principles:\nClean and organised workplace with less wastage of time in searching for tools.\nImproved safety and fewer accidents.\nBetter product quality and higher productivity.\nDiscipline among workers and good impression on customers.\nLower cost and smooth flow of work."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List out the features of Joint Stock Company.",
  "a": "Features of Joint Stock Company:\nSeparate legal existence independent of its members.\nLimited liability of shareholders.\nPerpetual succession, meaning the company continues despite death or insolvency of members.\nShares are transferable (freely in a public company).\nIt can raise large capital by issuing shares and debentures.\nIt is managed by a board of directors elected by shareholders."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List out the functions of purchase management.",
  "a": "Functions of purchase management:\nSelecting suppliers and sources of supply.\nInviting quotations and negotiating prices and terms.\nPlacing purchase orders and ensuring timely delivery.\nInspecting materials received for quality and quantity.\nMaintaining purchase and vendor records.\nCoordinating with stores and production departments for inventory control."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List out the various motivational theories.",
  "a": "Various motivational theories:\nMaslow's need hierarchy theory: five levels of needs from physiological to self-actualisation.\nHerzberg's two-factor theory: hygiene factors and motivators.\nMcGregor's Theory X and Theory Y: negative and positive assumptions about workers.\nMcClelland's theory of needs: need for achievement, power and affiliation.\nVroom's expectancy theory: motivation depends on expectancy, instrumentality and valence."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "List the beneficiaries of ISO 9000. *",
  "a": "Beneficiaries of ISO 9000:\nCustomers get consistent quality products and services.\nThe organisation gets better efficiency, fewer defects and wider markets.\nEmployees get clear procedures and a better working system.\nSuppliers get fair and systematic dealings.\nSociety benefits from safe and reliable products."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "List the functions of production planning and control. *",
  "a": "Functions of production planning and control:\nRouting: deciding the path and sequence of operations.\nScheduling: fixing the time for each operation.\nDispatching: issuing orders and instructions to start work.\nFollow-up: checking progress and removing delays."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "List the pillars of Total Quality Management.",
  "a": "Pillars of Total Quality Management:\nCustomer focus: satisfying customer needs is the first priority.\nContinuous improvement: processes are improved constantly.\nEmployee involvement: all employees participate in quality efforts.\nProcess approach: work is managed as interconnected processes.\nLeadership commitment: top management leads quality efforts.\nFact-based decision making: decisions are taken on the basis of data."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List the types of business ownership.",
  "a": "Types of business ownership:\nSole proprietorship.\nPartnership.\nJoint Stock Company (private limited and public limited).\nCooperative society.\nGovernment company."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Mention different financial institutions that help an entrepreneur.",
  "a": "Financial institutions that help an entrepreneur:\nSmall Industries Development Bank of India (SIDBI).\nNational Bank for Agriculture and Rural Development (NABARD).\nIndustrial Development Bank of India (IDBI) and Industrial Finance Corporation of India (IFCI).\nState Financial Corporations (SFCs).\nCommercial banks.\nNational Small Industries Corporation (NSIC)."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Mention the pillar of TQM.",
  "a": "Pillars of TQM:\nCustomer satisfaction through quality products and services.\nContinuous improvement of all processes.\nTotal employee involvement and teamwork.\nLeadership and management commitment.\nPrevention of defects rather than detection.\nUse of data and facts for decisions."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "State any three major objectives of MIS.",
  "a": "Three major objectives of MIS:\nProviding timely and accurate information to managers for decision making.\nSupporting planning and control at all levels of management.\nImproving efficiency by reducing paperwork and speeding up communication and reporting."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "State the meaning of intellectual property rights.",
  "a": "Intellectual Property Rights (IPR) mean the legal rights given to a person over his creations of mind, such as inventions, literary works, designs and trademarks. They protect the creator from unauthorised use by others and include patents, copyrights, trademarks and industrial designs."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "State the need of human values in engineering fields.",
  "a": "Need of human values in engineering fields:\nHuman values such as honesty, responsibility and respect guide engineers to take decisions that are safe for society.\nThey prevent corruption, cheating and misuse of technology.\nThey help engineers protect the environment and public safety.\nThey build trust between engineers, clients and society.\nValue-based engineers work for the welfare of people, not only for profit."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "State the various managerial skills.",
  "a": "Various managerial skills:\nTechnical skills: knowledge of methods, tools and techniques of the job, most needed at lower levels.\nHuman skills: ability to work with, understand and motivate people, needed at all levels.\nConceptual skills: ability to see the organisation as a whole and to think in abstract terms, most needed at top level."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What are the causes of industrial accidents?",
  "a": "Causes of industrial accidents:\nUnsafe acts of workers such as carelessness, working without guards and disobeying rules.\nUnsafe conditions such as unguarded machines, defective tools, poor lighting and slippery floors.\nLack of training, fatigue and overwork.\nPoor maintenance of machines and failure of safety devices.\nEnvironmental factors such as heat, noise, dust and fumes."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "What are the components of RFID?",
  "a": "An RFID (Radio Frequency Identification) system has four main components:\n- Tag — attached to the object; contains a microchip storing data and an antenna that sends and receives radio waves. Passive tags have no battery and draw power from the reader's signal; active tags have their own battery and longer range.\n- Reader (interrogator) — sends radio signals to activate tags and reads the data they return.\n- Antenna — radiates the reader's signal and receives the tag's reply; readers and tags both use antennas.\n- Host system / middleware — the computer software that collects, filters and passes the tag data to the business application (for example, stock records or attendance)."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What do you understand by the term business activity?",
  "a": "Business activity means any economic activity undertaken with the aim of earning profit. It includes production of goods, purchase and sale of goods, and rendering of services. Business activity satisfies human wants, involves risk, and requires regular dealing in goods or services."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is the importance of environmental ethics in engineering?",
  "a": "Importance of environmental ethics in engineering:\nEngineers must design and build in ways that protect nature and public health.\nEnvironmental ethics prevents pollution of air, water and land.\nIt promotes conservation of resources and use of clean technology.\nIt ensures sustainable development, meeting present needs without harming future generations.\nIt protects engineers and organisations from legal action and builds public trust."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is the need of management for business?",
  "a": "Need of management for business:\nManagement coordinates men, materials, machines, money and methods to achieve objectives.\nIt ensures optimum use of resources and reduces cost and wastage.\nIt helps the business to face competition and changing market conditions.\nIt provides direction, motivation and discipline to employees.\nWithout management, even a business with good resources cannot run efficiently."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "Write any three differences between Management and Administration.",
  "a": "Three differences between Management and Administration:\nAdministration lays down policies and objectives, while management implements them.\nAdministration works at the top level, while management works at middle and lower levels.\nAdministration is determinative in nature, while management is executive in nature."
 },
 {
  "s": "INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP",
  "c": "CM-501",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Write down the 5S principles.",
  "a": "5S principles:\nSort (Seiri): remove unnecessary items from the workplace.\nSet in order (Seiton): arrange necessary items in proper places.\nShine (Seiso): clean the workplace regularly.\nStandardise (Seiketsu): maintain standards of cleanliness and order.\nSustain (Shitsuke): develop discipline to follow the first four S continuously."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Differentiate between classification and clustering in Data Mining.",
  "a": "Classification is supervised learning: it predicts the class label of new data using a model trained on labelled data, where the classes are already known.\nClustering is unsupervised learning: it groups similar data objects together without any predefined classes or labels, and the groups are discovered from the data itself based on similarity.\nDifferences:\n1) Learning type: classification is supervised, clustering is unsupervised.\n2) Labels: classification uses labelled training data, clustering uses unlabelled data.\n3) Classes: in classification the classes are known in advance, in clustering the clusters are formed during analysis.\n4) Goal: classification assigns new data to a known class, clustering finds natural groups and structure in data.\n5) Examples: classification is used in spam detection, disease diagnosis and credit approval, while clustering is used in customer segmentation, document grouping and anomaly detection.\n6) Evaluation: classification accuracy is measured against known labels, while clustering quality is measured by how compact and separated the clusters are."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain Data Mining techniques.",
  "a": "Data mining techniques are methods used to discover useful patterns from large data. The main techniques are:\n1) Classification: assigns data to predefined classes using labelled training data, for example spam filtering and disease diagnosis.\n2) Clustering: groups similar objects without predefined classes, for example customer segmentation.\n3) Association rule mining: finds relationships between items that occur together, for example market basket analysis where customers who buy bread also buy butter. The Apriori algorithm is commonly used for this.\n4) Prediction and regression: predicts a numeric value from past data, for example predicting house prices or future sales.\n5) Outlier analysis: identifies data objects that are very different from others, useful for fraud detection.\n6) Sequential pattern mining: finds patterns in ordered data over time, for example the purchase sequences of customers.\n7) Decision trees: tree-structured models where each internal node tests an attribute and each leaf gives a result. They are easy to understand and interpret.\n8) Neural networks: models inspired by the human brain that learn complex patterns from large data, used in image and speech recognition.\nEach technique is selected based on the type of data and the problem: classification and prediction are used when the outcome is known, while clustering and association are used for discovering hidden structure."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain about data collection in detail.",
  "a": "Data collection is the process of gathering raw data from various sources so that it can be processed and analysed.\nSources of data:\n1) Internal sources such as company databases, transaction records and reports.\n2) External sources such as government records, surveys and public datasets.\n3) Sensors and machines such as IoT devices, RFID tags and GPS.\n4) Online sources such as websites, social media and web logs.\nMethods of data collection:\n1) Observation of events and behaviour.\n2) Interviews with individuals or groups.\n3) Questionnaires and surveys.\n4) Experiments under controlled conditions.\n5) Transaction tracking from sales and banking systems.\n6) Web scraping and automatic sensor-based collection.\nTypes of data collected: structured data from databases, semi-structured data such as XML and JSON files, and unstructured data such as text, images, audio and video.\nSteps in data collection: identify the purpose and the data needed, select the sources, choose the collection method, gather the data, and check it for completeness and correctness.\nChallenges: missing or incomplete data, duplicate data, inconsistent formats, privacy and security issues, and the large volume and speed of modern data.\nGood data collection must be accurate, complete, consistent, timely and relevant, because the quality of analysis depends directly on the quality of the collected data."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain about data visualization in detail.",
  "a": "Data visualization is the graphical representation of data using charts, graphs, maps and dashboards so that patterns, trends and relationships can be understood quickly.\nPurpose: large and complex data is difficult to understand in tables, while visual forms make comparison, trends and outliers visible at a glance, and support faster and better decisions.\nCommon types:\n1) Bar charts for comparison between categories.\n2) Line charts for trends over time.\n3) Pie charts for proportions of a whole.\n4) Scatter plots for relationships between two variables.\n5) Histograms for the distribution of data.\n6) Heat maps for showing intensity through colour.\n7) Maps for location-based data.\nTools: Tableau, Power BI, Matplotlib, D3.js, QlikView and Google Data Studio.\nSteps: understand the data and the audience, select the right chart type for the message, keep the design simple and avoid clutter, use suitable colours and labels, and add titles and legends so the visual is self-explanatory.\nAdvantages: quick understanding, easy identification of trends and outliers, better communication of results, and support for decision making.\nLimitations: wrong chart selection can mislead, over-decorated visuals can hide the message, and very large data can make visuals slow or crowded."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain different service models in Cloud Computing.",
  "a": "Cloud service models differ in how much the provider manages and how much control the user keeps:\n1) IaaS (Infrastructure as a Service) — the provider gives raw infrastructure: virtual machines, storage and networks. The user installs and manages the operating system and applications. Example: Amazon EC2. Maximum user control.\n2) PaaS (Platform as a Service) — the provider gives a ready platform with operating system, databases and development tools. The user only deploys their application. Example: Google App Engine, Heroku. Less control, faster development.\n3) SaaS (Software as a Service) — the provider gives finished software over the internet, used through a browser. Example: Gmail, Microsoft 365. The user manages nothing except their own data and settings.\nIn short: IaaS gives infrastructure, PaaS gives a platform, SaaS gives software — control decreases from IaaS to SaaS while provider management increases."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain in detail about the architecture of Hadoop.",
  "a": "Hadoop is an open source framework from Apache for storing and processing very large data across clusters of ordinary computers.\nIt has two main layers: HDFS for storage, and MapReduce with YARN for processing.\nHDFS (Hadoop Distributed File System): it stores large files by splitting them into blocks of 128 MB by default and distributing them across DataNodes. It follows a master-slave design. The NameNode is the master that stores metadata such as file names, block locations and permissions, while DataNodes are slaves that store the actual blocks. Each block is replicated, by default 3 times, on different nodes for fault tolerance. A Secondary NameNode periodically merges NameNode metadata.\nMapReduce: it is a programming model with two phases. The Map phase processes input splits and produces key-value pairs, and the Reduce phase combines values with the same key to produce the final output.\nYARN (Yet Another Resource Negotiator): it manages cluster resources and schedules jobs. It has a ResourceManager that allocates resources, NodeManagers on each node that monitor resources and run tasks, and an ApplicationMaster for each application that negotiates resources and monitors execution.\nOther components: Hadoop Common provides libraries and utilities, and tools such as HBase, Hive, Pig and Sqoop are built on top of Hadoop.\nFeatures that follow from this architecture: scalability by adding nodes, fault tolerance through replication and re-execution of failed tasks, and high throughput for batch processing of large data."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the Three-tier Architecture of Data Warehouse.",
  "a": "The three-tier architecture separates a data warehouse system into three layers:\n1) Bottom tier (data source layer and warehouse database server): this is the data warehouse database itself, usually a relational database. It stores cleaned, integrated and historical data. Data from operational databases and external sources is extracted, transformed and loaded (ETL) into this tier.\n2) Middle tier (OLAP server): this is an OLAP server that provides a multidimensional view of the data. It processes analytical queries and performs operations such as roll-up, drill-down, slice, dice and pivot. It can be ROLAP (relational OLAP) or MOLAP (multidimensional OLAP).\n3) Top tier (client and front-end layer): this is the layer used by end users. It contains query tools, reporting tools, analysis tools and data mining tools through which managers view reports, dashboards and charts.\nAdvantages: separation of concerns makes the system easy to manage, the OLAP layer gives fast analysis without disturbing operational systems, and the client layer gives simple access for decision makers.\nData flow: data moves from operational sources to the bottom tier through ETL, from the bottom tier to the middle tier for multidimensional processing, and from the middle tier to the top tier for presentation to users."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the key characteristics of OLAP in data warehousing.",
  "a": "OLAP (Online Analytical Processing) is a technology for fast, multidimensional analysis of data stored in a data warehouse, used for decision support.\nKey characteristics:\n1) Multidimensional view: data is viewed as cubes with dimensions such as time, product and region, and measures such as sales and profit.\n2) Fast response: complex aggregate queries return in seconds even on very large data.\n3) Drill-down and roll-up: users can move from summary to detail (drill-down) or from detail to summary (roll-up).\n4) Slice and dice: slice selects one dimension value, and dice selects a sub-cube on two or more dimensions.\n5) Pivot (rotate): the orientation of the cube can be changed to view data from different angles.\n6) Interactive analysis: users can explore data freely without writing complex programs.\n7) Pre-aggregation: summaries are pre-computed and stored, which makes queries fast.\n8) Support for decision making: OLAP helps managers find trends, compare performance and discover patterns.\nTypes: ROLAP uses relational databases, MOLAP uses multidimensional databases, and HOLAP combines both."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the processing of data in Big Data in detail.",
  "a": "Processing of big data means converting raw, large, fast and varied data into useful information.\nSteps in processing:\n1) Data ingestion: collecting data from sources such as sensors, social media, transactions and logs into storage, using tools like Sqoop, Flume and Kafka.\n2) Data storage: storing data in distributed systems such as HDFS, NoSQL databases or cloud storage.\n3) Data cleaning: removing duplicates, correcting errors and handling missing values.\n4) Data processing: analysing the data. Two modes are used: batch processing for large volumes of stored data (Hadoop MapReduce, Spark batch) and stream processing for real-time data (Spark Streaming, Storm, Flink).\n5) Data analysis: applying statistical analysis, data mining and machine learning to find patterns.\n6) Data visualization: presenting results through charts, dashboards and reports.\nProcessing frameworks: Hadoop MapReduce processes data in two phases, Map and Reduce, and is best for batch jobs. Apache Spark processes data in memory and is much faster, supporting batch, streaming, SQL and machine learning.\nChallenges: volume requires distributed storage, velocity requires real-time processing, variety requires handling structured and unstructured data, and veracity requires ensuring data quality."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the role of Machine Learning for data analysis.",
  "a": "Machine learning is a part of artificial intelligence in which systems learn patterns from data and improve with experience without being explicitly programmed for every rule.\nRole in data analysis:\n1) Pattern discovery: machine learning finds hidden patterns, trends and relationships in large data that humans cannot see manually.\n2) Prediction: models trained on past data predict future values, such as sales forecasting, stock prices and demand prediction.\n3) Classification: machine learning assigns data to categories, for example spam detection, disease diagnosis and sentiment analysis.\n4) Clustering: machine learning groups similar data without labels, for example customer segmentation and recommendation systems.\n5) Automation: machine learning automates analysis, reducing manual effort and handling data at a scale humans cannot.\n6) Real-time decisions: machine learning models support fraud detection, recommendation engines and dynamic pricing as data arrives.\n7) Improved accuracy: models improve as more data is provided, giving better results over time.\nCommon algorithms: linear regression, decision trees, k-means clustering, k-nearest neighbours, support vector machines and neural networks.\nIn short, machine learning converts raw data into predictions, classifications and decisions, making data analysis faster, scalable and more accurate."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What are the different deployment models of Cloud? Explain in detail.",
  "a": "Cloud deployment models describe how cloud services are made available and who owns and manages them.\n1) Public cloud: services are owned by a third-party provider and offered to the general public over the internet. Examples are Amazon Web Services, Microsoft Azure and Google Cloud. Advantages are low cost, no hardware maintenance and high scalability. The disadvantage is less control and security concerns for sensitive data.\n2) Private cloud: the cloud infrastructure is used by a single organisation only, hosted on-premises or by a provider. Advantages are high security, privacy and control. The disadvantages are higher cost and the organisation managing maintenance itself.\n3) Hybrid cloud: a combination of public and private clouds, where sensitive work runs privately and less sensitive work or extra load runs publicly. Advantages are flexibility, the best of both models and cost control. The disadvantage is the complexity of managing two environments.\n4) Community cloud: infrastructure shared by several organisations with common interests, such as government departments or banks. Advantages are shared cost and common policies. The disadvantage is that governance is shared and may be slower to change.\nThe selection of a model depends on security needs, budget, control requirements and the type of workload."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is Cloud Security? Explain in detail.",
  "a": "Cloud security is the set of policies, technologies and controls used to protect data, applications and infrastructure in cloud computing from threats.\nNeed: data in the cloud is stored on remote servers and accessed over the internet, so it faces risks of data breach, unauthorised access, data loss and account hijacking.\nKey threats:\n1) Data breaches: sensitive data exposed to unauthorised users.\n2) Data loss: loss due to deletion, hardware failure or disasters.\n3) Account hijacking: attackers gaining control of user accounts through stolen credentials.\n4) Insecure interfaces and APIs: weak APIs exploited by attackers.\n5) Insider threats: misuse by employees or provider staff.\n6) Denial of service attacks: services made unavailable by flooding them with traffic.\nSecurity measures:\n1) Encryption of data during transfer and storage.\n2) Identity and access management with strong passwords and multi-factor authentication.\n3) Firewalls and intrusion detection systems.\n4) Regular security audits and monitoring.\n5) Backup and disaster recovery plans.\n6) Compliance with standards and legal regulations.\nShared responsibility model: the cloud provider secures the cloud infrastructure, while the customer secures their data, applications and access settings. Both must work together for complete security."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is Data Mining? Write its advantages and disadvantages.",
  "a": "Data mining is the process of discovering useful patterns, trends and knowledge from large amounts of data using statistical, mathematical and machine learning methods. It is a major step in the Knowledge Discovery in Databases (KDD) process.\nAdvantages:\n1) Discovers hidden patterns and relationships that are not visible manually.\n2) Supports better decision making in business, marketing, healthcare and finance.\n3) Helps predict future trends such as sales and customer behaviour.\n4) Reduces cost by targeting the right customers and detecting fraud early.\n5) Automates analysis of very large data quickly.\nDisadvantages:\n1) Privacy issues, since personal data may be analysed without full consent.\n2) Security risks if sensitive patterns fall into wrong hands.\n3) Results can be misleading if the data is incomplete or of poor quality.\n4) Requires skilled people and costly tools.\n5) Large data may produce irrelevant or incorrect patterns if methods are misused."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the differences between private cloud and public cloud.",
  "a": "Differences between private cloud and public cloud:\n1) Ownership: a private cloud is owned and used by a single organisation, while a public cloud is owned by a provider and shared by many users.\n2) Access: a private cloud is accessible only to one organisation, while a public cloud is open to the general public over the internet.\n3) Cost: a private cloud has high setup and maintenance cost, while a public cloud follows pay-per-use and is cheaper.\n4) Security: a private cloud gives higher security and privacy, while a public cloud gives comparatively lower security since resources are shared.\n5) Control: a private cloud gives full control over hardware, software and policies, while a public cloud gives limited control to users.\n6) Scalability: a private cloud has limited scalability based on its own resources, while a public cloud offers almost unlimited scalability.\n7) Maintenance: a private cloud is maintained by the organisation itself, while a public cloud is maintained by the provider.\n8) Examples: a private cloud is an organisation's own data centre, while public clouds include AWS, Microsoft Azure and Google Cloud."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the differences between traditional data and big data approach.",
  "a": "Differences between the traditional data approach and the big data approach:\n1) Volume: traditional data is small and manageable, while big data is huge in volume, measured in terabytes and petabytes.\n2) Variety: traditional data is mostly structured, while big data includes structured, semi-structured and unstructured data such as text, images and video.\n3) Velocity: traditional data is generated slowly and processed in batches, while big data is generated very fast and often needs real-time processing.\n4) Storage: traditional data is stored in centralised relational databases, while big data is stored in distributed systems such as HDFS and NoSQL databases.\n5) Processing: traditional data uses conventional tools and SQL queries, while big data uses frameworks such as Hadoop and Spark.\n6) Tools: the traditional approach uses RDBMS and data warehouses, while the big data approach uses Hadoop, Spark, NoSQL and cloud platforms.\n7) Cost: traditional systems need costly hardware upgrades to scale, while big data systems scale by adding cheap commodity machines.\n8) Analysis: traditional analysis answers what happened, while big data analysis also predicts what will happen using mining and machine learning."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the major differences between mining and machine learning.",
  "a": "Differences between data mining and machine learning:\n1) Definition: data mining is the process of discovering patterns and knowledge from large data, while machine learning is the process of building models that learn from data and improve with experience.\n2) Purpose: data mining focuses on finding hidden patterns and knowledge, while machine learning focuses on making predictions and decisions on new data.\n3) Data: data mining works on existing large datasets, while machine learning requires training data to build a model and test data to check it.\n4) Human involvement: data mining results are interpreted by humans to take decisions, while machine learning models can act automatically without human involvement.\n5) Techniques: data mining uses association, clustering, classification and outlier analysis, while machine learning uses supervised, unsupervised and reinforcement learning algorithms.\n6) Output: data mining produces patterns, rules and summaries, while machine learning produces a trained model that can predict or classify new inputs.\n7) Example: in data mining, finding that customers who buy bread also buy butter is a discovered pattern, while in machine learning, a spam filter that learns to block new spam mails is a trained model.\n8) Relationship: data mining uses machine learning algorithms as tools, while machine learning is a broader field that includes mining techniques."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define Big Data.",
  "a": "Big data refers to extremely large and complex collections of data that cannot be handled by traditional database tools. It is characterised by high volume, high velocity and wide variety. Examples include social media data, sensor data, online transactions and video streams."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define Cloud Computing.",
  "a": "Cloud computing is the delivery of computing services such as servers, storage, databases, networking and software over the internet on a pay-per-use basis. Users can access resources on demand from anywhere without owning hardware. Examples include Google Drive, Amazon Web Services and Microsoft Azure."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define ETL and ELT.",
  "a": "ETL stands for Extract, Transform, Load: data is first extracted from sources, transformed into a clean and suitable form, and then loaded into a data warehouse.\nELT stands for Extract, Load, Transform: data is first extracted and loaded into the target system in raw form, and then transformed inside the target system.\nETL suits traditional warehouses with limited storage, while ELT suits cloud and big data systems that can store raw data cheaply."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define KDD.",
  "a": "KDD stands for Knowledge Discovery in Databases. It is the overall process of finding useful knowledge from data. Its steps are data selection, cleaning, transformation, data mining, and interpretation and evaluation of results. Data mining is the central step of the KDD process."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define structured and semi-structured data.",
  "a": "Structured data is data organised in a fixed format such as rows and columns in tables, for example employee records in a database. It is easy to store, search and analyse.\nSemi-structured data does not follow a fixed table format but has some organisation through tags or markers, for example XML files, JSON files and emails. It is flexible and needs parsing before analysis."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List any three risks of Big data.",
  "a": "1) Privacy risk: personal data may be collected and misused without consent.\n2) Security risk: large data stores are attractive targets for hacking and data breaches.\n3) Data quality risk: incorrect, incomplete or duplicate data leads to wrong decisions."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List applications of Data Mining.",
  "a": "1) Marketing: customer segmentation and targeted advertising.\n2) Finance: fraud detection and credit scoring.\n3) Healthcare: disease diagnosis and treatment prediction.\n4) Retail: market basket analysis and sales forecasting.\n5) Education: student performance analysis.\n6) Telecommunications: churn prediction and network optimisation."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List data mining tools.",
  "a": "1) Weka: an open source tool for classification, clustering and association.\n2) RapidMiner: a visual tool for data preparation and machine learning.\n3) Orange: a component-based tool for data analysis and visualization.\n4) KNIME: an open platform for data integration and analysis.\n5) R: a programming language with strong statistical and mining packages.\n6) SAS Enterprise Miner: a commercial tool for predictive modelling."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List differenet types of Cloud Simulator.",
  "a": "1) CloudSim: a framework for modelling cloud data centres, virtual machines and resource policies.\n2) CloudAnalyst: a tool built on CloudSim for simulating large-scale cloud applications and user bases.\n3) GreenCloud: a simulator focused on energy-aware cloud data centre design.\n4) iCanCloud: a simulator for modelling and predicting cloud system performance and costs.\n5) SimGrid: a toolkit for simulating distributed systems including grids and clouds."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List the features of Hadoop.",
  "a": "1) Open source framework from Apache for storing and processing big data.\n2) Distributed storage through HDFS with data blocks replicated for fault tolerance.\n3) Scalable: new nodes can be added easily to increase storage and processing power.\n4) Fault tolerant: failed tasks are automatically re-executed and replicated data keeps the system running.\n5) Cost effective: runs on low-cost commodity hardware.\n6) High throughput: processes large data in batches efficiently."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List the key Stakeholders.",
  "a": "1) Cloud consumer: the person or organisation that uses cloud services.\n2) Cloud provider: the organisation that owns and offers cloud services.\n3) Cloud auditor: an independent party that checks security, privacy and performance.\n4) Cloud broker: an intermediary that manages the use and delivery of cloud services.\n5) Cloud carrier: the network provider that connects consumers to cloud services."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List the sources of Big Data.",
  "a": "1) Social media: posts, likes, comments and videos from platforms such as Facebook and Twitter.\n2) Sensors and IoT devices: data from machines, vehicles, wearables and smart devices.\n3) Business transactions: sales, billing and banking records.\n4) Web logs: clickstreams, searches and browsing history.\n5) Government and public records: census, weather and health data.\n6) Multimedia: images, audio and video files uploaded online."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What are the responsibilities of data analyst?",
  "a": "1) Collecting data from different sources and checking its quality.\n2) Cleaning and preparing data for analysis.\n3) Analysing data using statistical and mining techniques to find patterns.\n4) Creating reports, charts and dashboards to present findings.\n5) Helping management take decisions based on data insights.\n6) Maintaining data accuracy, privacy and security."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is Text Data Mining?",
  "a": "Text data mining, also called text analytics, is the process of discovering useful patterns and knowledge from unstructured text documents. It includes steps such as text collection, cleaning, tokenisation, removing stop words, and applying mining techniques like classification and clustering. It is used in sentiment analysis, document summarisation, spam filtering and feedback analysis."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is a Data Warehouse?",
  "a": "A data warehouse is a central repository that stores integrated, historical data from different sources for analysis and decision making. It is subject-oriented, integrated, time-variant and non-volatile, meaning data is organised by subject, combined from many sources, kept over time, and not changed once loaded. It supports OLAP and reporting for managers."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write any three applications of data mining.",
  "a": "1) Retail: market basket analysis to find products bought together.\n2) Banking: fraud detection and credit scoring of customers.\n3) Healthcare: predicting diseases and improving treatment plans."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the evolution of Cloud Computing.",
  "a": "Cloud computing evolved from mainframe computing in the 1960s, where many users shared one large computer through terminals. In the 1990s, grid computing connected distributed computers to share resources. Virtualization in the 2000s allowed one physical machine to run many virtual machines, which made cloud practical. Around 2006, Amazon launched AWS and offered computing as a service over the internet. Later, providers like Microsoft Azure and Google Cloud expanded cloud into software, platform and infrastructure services used worldwide today."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the importance of Cloud Simulator.",
  "a": "A cloud simulator is important because it allows researchers and students to study cloud systems without paying for real cloud infrastructure. It helps test resource allocation, scheduling and load balancing policies safely. It saves cost and time, avoids risk to live systems, and allows repeated experiments under controlled conditions. Examples include CloudSim and CloudAnalyst."
 },
 {
  "s": "BIG DATA AND CLOUD COMPUTING",
  "c": "CM-502",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the importance of Text Analytics.",
  "a": "Text analytics is important because most real-world data exists as unstructured text such as emails, reviews, social media posts and documents. It converts this text into structured insights, helping organisations understand customer opinions through sentiment analysis. It supports faster decisions, improves customer service, detects trends and problems early, and is used in feedback analysis, document classification and chatbots."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Create an Android app to accept a number in an EditText and display the factorial of it in a Toast message on clicking a Button.",
  "a": "activity_main.xml:\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    android:orientation=\"vertical\"\n    android:padding=\"16dp\">\n    <EditText\n        android:id=\"@+id/etNumber\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"wrap_content\"\n        android:hint=\"Enter a number\"\n        android:inputType=\"number\" />\n    <Button\n        android:id=\"@+id/btnFact\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Find Factorial\" />\n</LinearLayout>\n\nMainActivity.java:\npackage com.example.factorial;\nimport android.os.Bundle;\nimport android.view.View;\nimport android.widget.Button;\nimport android.widget.EditText;\nimport android.widget.Toast;\nimport androidx.appcompat.app.AppCompatActivity;\npublic class MainActivity extends AppCompatActivity {\n    EditText etNumber;\n    Button btnFact;\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        etNumber = findViewById(R.id.etNumber);\n        btnFact = findViewById(R.id.btnFact);\n        btnFact.setOnClickListener(new View.OnClickListener() {\n            @Override\n            public void onClick(View v) {\n                int n = Integer.parseInt(etNumber.getText().toString());\n                long fact = 1;\n                for (int i = 1; i <= n; i++) {\n                    fact = fact * i;\n                }\n                Toast.makeText(MainActivity.this, \"Factorial = \" + fact, Toast.LENGTH_LONG).show();\n            }\n        });\n    }\n}\n\nExplanation: The number entered in the EditText is read, its factorial is calculated using a for loop, and the result is shown in a Toast when the Button is clicked."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Create an Android app to illustrate the use of Check Box widget.",
  "a": "activity_main.xml:\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    android:orientation=\"vertical\"\n    android:padding=\"16dp\">\n    <CheckBox\n        android:id=\"@+id/cbPizza\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Pizza\" />\n    <CheckBox\n        android:id=\"@+id/cbBurger\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Burger\" />\n    <CheckBox\n        android:id=\"@+id/cbCoffee\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Coffee\" />\n    <Button\n        android:id=\"@+id/btnOrder\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Show Order\" />\n    <TextView\n        android:id=\"@+id/tvResult\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\" />\n</LinearLayout>\n\nMainActivity.java:\npackage com.example.checkbox;\nimport android.os.Bundle;\nimport android.view.View;\nimport android.widget.Button;\nimport android.widget.CheckBox;\nimport android.widget.TextView;\nimport android.widget.Toast;\nimport androidx.appcompat.app.AppCompatActivity;\npublic class MainActivity extends AppCompatActivity {\n    CheckBox cbPizza, cbBurger, cbCoffee;\n    Button btnOrder;\n    TextView tvResult;\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        cbPizza = findViewById(R.id.cbPizza);\n        cbBurger = findViewById(R.id.cbBurger);\n        cbCoffee = findViewById(R.id.cbCoffee);\n        btnOrder = findViewById(R.id.btnOrder);\n        tvResult = findViewById(R.id.tvResult);\n        btnOrder.setOnClickListener(new View.OnClickListener() {\n            @Override\n            public void onClick(View v) {\n                StringBuilder result = new StringBuilder(\"Selected items:\\n\");\n                if (cbPizza.isChecked()) {\n                    result.append(\"Pizza\\n\");\n                }\n                if (cbBurger.isChecked()) {\n                    result.append(\"Burger\\n\");\n                }\n                if (cbCoffee.isChecked()) {\n                    result.append(\"Coffee\\n\");\n                }\n                tvResult.setText(result.toString());\n                Toast.makeText(MainActivity.this, result.toString(), Toast.LENGTH_LONG).show();\n            }\n        });\n    }\n}\n\nExplanation: A CheckBox allows the user to select more than one option at a time. The isChecked() method tests each box, and the selected items are collected and shown in a TextView and a Toast."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain Database Connectivity in Android with example.",
  "a": "Database connectivity in Android is provided by SQLite, a lightweight database built into every Android device. The application connects to it through the SQLiteOpenHelper class.\n\nSteps for database connectivity:\n1) Create a helper class extending SQLiteOpenHelper and implement onCreate() and onUpgrade().\n2) In onCreate(), execute the CREATE TABLE statement for the required table.\n3) Get a writable database object with getWritableDatabase() for insert, update and delete, or a readable database with getReadableDatabase() for queries.\n4) Use insert(), query(), update() and delete() methods, or rawQuery() for SELECT statements.\n5) Read query results through a Cursor, moving from row to row with moveToNext().\n\nExample: a student database.\nclass DBHelper extends SQLiteOpenHelper {\n    public DBHelper(Context context) {\n        super(context, \"school.db\", null, 1);\n    }\n    @Override\n    public void onCreate(SQLiteDatabase db) {\n        db.execSQL(\"CREATE TABLE student (id INTEGER PRIMARY KEY, name TEXT, marks INTEGER)\");\n    }\n    @Override\n    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {\n        db.execSQL(\"DROP TABLE IF EXISTS student\");\n        onCreate(db);\n    }\n    public void addStudent(String name, int marks) {\n        SQLiteDatabase db = this.getWritableDatabase();\n        ContentValues values = new ContentValues();\n        values.put(\"name\", name);\n        values.put(\"marks\", marks);\n        db.insert(\"student\", null, values);\n    }\n    public Cursor getAllStudents() {\n        SQLiteDatabase db = this.getReadableDatabase();\n        return db.rawQuery(\"SELECT * FROM student\", null);\n    }\n}\n\nUse in MainActivity:\nDBHelper db = new DBHelper(this);\ndb.addStudent(\"Asha\", 85);\nCursor c = db.getAllStudents();\nwhile (c.moveToNext()) {\n    String name = c.getString(1);\n    int marks = c.getInt(2);\n}"
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain Date Picker Control with an example program.",
  "a": "A DatePicker allows the user to select a date (day, month and year). It is commonly shown as a DatePickerDialog, a pop-up dialog containing a calendar-style picker.\n\nExample program: select a date on button click and show it in a TextView.\n\nactivity_main.xml:\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    android:orientation=\"vertical\"\n    android:padding=\"16dp\">\n    <Button\n        android:id=\"@+id/btnDate\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Pick a Date\" />\n    <TextView\n        android:id=\"@+id/tvDate\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\" />\n</LinearLayout>\n\nMainActivity.java:\npackage com.example.datepicker;\nimport android.app.DatePickerDialog;\nimport android.os.Bundle;\nimport android.view.View;\nimport android.widget.Button;\nimport android.widget.DatePicker;\nimport android.widget.TextView;\nimport androidx.appcompat.app.AppCompatActivity;\nimport java.util.Calendar;\npublic class MainActivity extends AppCompatActivity {\n    Button btnDate;\n    TextView tvDate;\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        btnDate = findViewById(R.id.btnDate);\n        tvDate = findViewById(R.id.tvDate);\n        btnDate.setOnClickListener(new View.OnClickListener() {\n            @Override\n            public void onClick(View v) {\n                Calendar c = Calendar.getInstance();\n                int year = c.get(Calendar.YEAR);\n                int month = c.get(Calendar.MONTH);\n                int day = c.get(Calendar.DAY_OF_MONTH);\n                DatePickerDialog dialog = new DatePickerDialog(MainActivity.this,\n                    new DatePickerDialog.OnDateSetListener() {\n                        @Override\n                        public void onDateSet(DatePicker view, int y, int m, int d) {\n                            tvDate.setText(d + \"/\" + (m + 1) + \"/\" + y);\n                        }\n                    }, year, month, day);\n                dialog.show();\n            }\n        });\n    }\n}\n\nExplanation: The current date is taken from Calendar and passed to the DatePickerDialog. When the user picks a date, onDateSet() is called. Note that month is 0-based in Android, so 1 is added before displaying it."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain Table Layout with at least 5 attributes.",
  "a": "TableLayout arranges its children in rows and columns, like an HTML table. Each row is a TableRow, and the views inside a TableRow become the cells of that row. Columns do not need to be declared; the number of columns is decided by the row with the most cells.\n\nAttributes of TableLayout (more than five):\n1) android:stretchColumns: The column numbers that stretch to fill the extra width of the table, for example android:stretchColumns=\"1\" stretches the second column.\n2) android:shrinkColumns: The column numbers that are allowed to shrink when the table is wider than the screen.\n3) android:collapseColumns: The column numbers that are hidden from view, for example android:collapseColumns=\"0\" hides the first column.\n4) android:layout_column: Used on a child view inside a TableRow to fix the column index in which the view is placed.\n5) android:layout_span: Used on a child view to make it span more than one column, that is, to merge cells.\n6) android:padding: The space between the border of the table and its contents.\n\nExample: a table showing student marks.\n<TableLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"wrap_content\"\n    android:stretchColumns=\"1\">\n    <TableRow>\n        <TextView android:text=\"Name\" android:padding=\"8dp\" />\n        <TextView android:text=\"Marks\" android:padding=\"8dp\" />\n    </TableRow>\n    <TableRow>\n        <TextView android:text=\"Asha\" android:padding=\"8dp\" />\n        <TextView android:text=\"85\" android:padding=\"8dp\" />\n    </TableRow>\n    <TableRow>\n        <TextView android:text=\"Ravi\" android:padding=\"8dp\" />\n        <TextView android:text=\"92\" android:padding=\"8dp\" />\n    </TableRow>\n</TableLayout>"
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain common database operations (Create, Insert, Delete).",
  "a": "Android uses SQLite, a lightweight built-in database. A helper class extending SQLiteOpenHelper manages creation and versioning of the database.\n\n1) Create: In onCreate(), the SQL statement to create the table is executed.\nSQLiteDatabase db = this.getWritableDatabase();\ndb.execSQL(\"CREATE TABLE student (id INTEGER PRIMARY KEY, name TEXT, marks INTEGER)\");\n\n2) Insert: Values are packed into a ContentValues object and inserted with the insert() method.\nContentValues values = new ContentValues();\nvalues.put(\"name\", \"Asha\");\nvalues.put(\"marks\", 85);\ndb.insert(\"student\", null, values);\n\n3) Delete: Rows are removed with the delete() method using a WHERE condition.\ndb.delete(\"student\", \"id = ?\", new String[]{\"1\"});\n\nExplanation: getWritableDatabase() opens the database for writing, ContentValues maps column names to values, and the ? placeholder with selection arguments prevents SQL injection."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain different types of image handling components in Android.",
  "a": "Android provides the following components for handling images:\n\n1) ImageView: It displays an image on the screen. The image is set with android:src from a drawable resource or with setImageResource() in code. Important attributes are android:src and android:scaleType, whose values include fitXY, centerCrop and fitCenter, which control how the image is scaled inside the view.\n<ImageView\n    android:id=\"@+id/img\"\n    android:layout_width=\"200dp\"\n    android:layout_height=\"200dp\"\n    android:src=\"@drawable/nature\"\n    android:scaleType=\"centerCrop\" />\n\n2) ImageButton: It is a button that displays an image instead of text. It is used for icon buttons such as play, camera or search. Important attributes are android:src, android:background (often set to @null to remove the button background) and android:onClick.\n\n3) ImageSwitcher: It displays one image at a time and animates the change from one image to another. A ViewFactory must be set with setFactory(), the image is changed with setImageResource(), and entry and exit animations are set with setInAnimation() and setOutAnimation(). It is used in slideshows and photo viewers.\n\n4) Gallery and GridView (older components): Gallery showed a horizontally scrolling row of images and GridView shows images in a two-dimensional grid. Both use an Adapter to supply the images. In modern apps they are largely replaced by RecyclerView with GridLayoutManager."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain how implicit and explicit intents are used to Switch between activities with suitable examples.",
  "a": "An intent is a messaging object used to request an action from another component. Switching between activities is done with startActivity() and an intent.\n\n1) Explicit Intent: It names the target component directly, so it is used to switch between activities of the same application.\nIntent i = new Intent(FirstActivity.this, SecondActivity.class);\ni.putExtra(\"name\", \"Asha\");\nstartActivity(i);\nIn SecondActivity, the value is read with getIntent().getStringExtra(\"name\"). Explicit intents are also used to start services of the same app.\n\n2) Implicit Intent: It does not name any component. It declares only an action and data, and the Android system finds the app that can handle it.\nIntent i = new Intent(Intent.ACTION_VIEW, Uri.parse(\"https://www.google.com\"));\nstartActivity(i);\nThis opens the web page in the browser app. Other examples are:\nIntent dial = new Intent(Intent.ACTION_DIAL, Uri.parse(\"tel:9876543210\"));\nstartActivity(dial);\nIntent share = new Intent(Intent.ACTION_SEND);\nshare.setType(\"text/plain\");\nshare.putExtra(Intent.EXTRA_TEXT, \"Hello\");\nstartActivity(Intent.createChooser(share, \"Share via\"));\n\nDifference: an explicit intent is used inside one application where the target is known, while an implicit intent is used to use components of other applications where only the action is known."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the Telephony Manager and its functionalities in Android.",
  "a": "TelephonyManager is a system service that gives information about the telephony services of the device, such as the network operator, SIM details and call state. It is obtained as follows:\nTelephonyManager tm = (TelephonyManager) getSystemService(Context.TELEPHONY_SERVICE);\n\nFunctionalities of TelephonyManager:\n1) getNetworkOperatorName(): Returns the name of the network operator, for example Jio or Airtel.\n2) getSimSerialNumber(): Returns the serial number of the SIM card.\n3) getPhoneType(): Returns the type of the phone, such as GSM, CDMA or none.\n4) getCallState(): Returns the current call state: idle, ringing or off-hook.\n5) getNetworkType(): Returns the type of the mobile network, such as GPRS, EDGE or LTE.\n6) listen(): Registers a PhoneStateListener so the app is notified of changes in call state, signal strength and service state.\n\nPermission: The READ_PHONE_STATE permission must be declared in AndroidManifest.xml and requested at runtime on Android 6.0 and above.\n\nExample: display the operator name in a TextView.\nTextView tv = findViewById(R.id.tv);\ntv.setText(tm.getNetworkOperatorName());"
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the architecture of Android with a neat diagram.",
  "a": "Android architecture is a stack of five layers, from bottom to top:\n\n1) Linux Kernel: The lowest layer. It manages memory, security, power, drivers and process management, and provides the hardware abstraction for the upper layers.\n2) Hardware Abstraction Layer (HAL): It provides standard interfaces between the hardware (camera, sensors, Bluetooth, audio) and the upper layers, so apps need not talk to hardware directly.\n3) Native Libraries and Android Runtime: C and C++ libraries such as SQLite, WebKit and OpenGL provide functions like database and graphics support. The Android Runtime (ART) executes the dex bytecode of apps. Earlier versions used the Dalvik Virtual Machine instead of ART.\n4) Application Framework: It provides Java APIs for developers, such as Activity Manager (manages activity lifecycle), Content Providers (share data between apps), Notification Manager, Location Manager and the View System (buttons, text fields and layouts).\n5) Applications: The top layer. It contains the built-in apps (Home, Contacts, Browser, Phone) and all third-party apps installed by the user.\n\nDiagram:\n--------------------------------------------------\nApplications (Home, Contacts, Browser, user apps)\n--------------------------------------------------\nApplication Framework (Activity Manager, Content\nProviders, Notification Manager, View System)\n--------------------------------------------------\nNative Libraries (SQLite, WebKit, OpenGL)\nAndroid Runtime (ART)\n--------------------------------------------------\nHardware Abstraction Layer (HAL)\n--------------------------------------------------\nLinux Kernel (Drivers, Memory, Power, Security)\n--------------------------------------------------"
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the creation of “Hello World” Android application using Android studio IDE.",
  "a": "Steps to create a Hello World application in Android Studio:\n\n1) Install the Java Development Kit (JDK) and Android Studio, and open Android Studio.\n2) Click File, then New, then New Project, and select the Empty Activity template.\n3) Enter the application name as HelloWorld, the package name and the language as Java, then click Finish.\n4) Android Studio creates the project with these important files:\nMainActivity.java: the Java code of the first screen.\nactivity_main.xml: the layout file containing the design.\nAndroidManifest.xml: the file that declares the activities and permissions of the app.\n5) The layout activity_main.xml contains a TextView with the text Hello World, and MainActivity.java loads it with setContentView(R.layout.activity_main).\n6) Create an emulator from Tools, then AVD Manager, or connect a physical phone with USB debugging switched on.\n7) Click the Run button. The emulator or phone starts the app and displays Hello World! on the screen."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the following : (a) Image Button (b) Image Switcher (c) Image View",
  "a": "(a) ImageButton: An ImageButton is a button that displays an image instead of text. It is used for icon buttons such as play, pause, camera or search. The image is set with android:src, and the click is handled with android:onClick or setOnClickListener(). The default button background is usually removed with android:background=\"@null\".\n<ImageButton\n    android:id=\"@+id/imgBtn\"\n    android:layout_width=\"wrap_content\"\n    android:layout_height=\"wrap_content\"\n    android:src=\"@drawable/play\"\n    android:background=\"@null\"\n    android:onClick=\"playMusic\" />\n\n(b) ImageSwitcher: An ImageSwitcher displays one image at a time and animates the transition when the image changes. A ViewFactory must be supplied with setFactory() to create the ImageViews, the image is changed with setImageResource(), and entry and exit animations are set with setInAnimation() and setOutAnimation(). It is used in slideshows, photo viewers and galleries.\n\n(c) ImageView: An ImageView displays an image on the screen but does not respond to clicks like a button (though an OnClickListener can be added). The image is set with android:src from a drawable resource, and android:scaleType controls scaling, with values such as fitXY, centerCrop and fitCenter.\n<ImageView\n    android:id=\"@+id/img\"\n    android:layout_width=\"200dp\"\n    android:layout_height=\"200dp\"\n    android:src=\"@drawable/nature\"\n    android:scaleType=\"fitCenter\" />\n\nDifference: ImageView only displays an image, ImageButton is a clickable image used as a button, and ImageSwitcher animates switching between two images."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the procedure for publishing an Android application.",
  "a": "Procedure for publishing an Android application:\n\n1) Prepare the release version: Remove Log calls and test code, and set the versionCode (integer, increased for every release) and versionName (such as 1.0) in the build.gradle file.\n2) In Android Studio, click Build, then Generate Signed Bundle / APK, and select Android App Bundle (AAB), which is the format required by Google Play.\n3) Create a new keystore file with a key alias and passwords. Keep the keystore file and passwords safe, because if they are lost the app can never be updated on the Play Store.\n4) Select the release build type and click Finish. Android Studio generates the signed .aab file.\n5) Create a Google Play developer account. It requires a one-time registration fee of 25 US dollars.\n6) In Google Play Console, create the app, upload the signed .aab file, and complete the store listing with the app title, short and full description, icon and screenshots.\n7) Complete the content rating questionnaire, set the pricing (free or paid) and the countries of distribution, and submit the privacy policy declaration.\n8) Submit the app for review. After approval, roll out the app in stages: internal test, closed test, open test and finally production. Monitor crashes and user reviews after release and publish updates with a higher versionCode."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What are the content providers in Android? Explain with examples.",
  "a": "Content providers manage access to a structured set of data and allow one application to share its data with other applications. Instead of every app storing its own copy of contacts or media, apps read the shared data through the provider.\n\nContent URI: Data is addressed by a content URI of the form content://authority/path/id. Example: content://contacts/people/1 refers to the contact with id 1.\n\nBuilt-in content providers in Android:\n1) Contacts Provider: stores contact names, phone numbers and email addresses.\n2) MediaStore: stores audio, video and image files on the device.\n3) Calendar Provider: stores calendar events and reminders.\n4) Call Log Provider: stores incoming, outgoing and missed call details.\n5) Settings Provider: stores system settings.\n\nCreating a custom content provider: Extend the ContentProvider class and implement query(), insert(), update(), delete() and getType(). Declare the provider in AndroidManifest.xml with a unique authority.\n\nReading data from a provider: Use ContentResolver with a Cursor.\nCursor cursor = getContentResolver().query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, null, null, null);\nwhile (cursor.moveToNext()) {\n    String name = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));\n    String number = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));\n}\nThe READ_CONTACTS permission is required to read contact data."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is an implicit intent? Explain the steps involved in creating an Android application that displays a login activity.",
  "a": "Implicit intent: An implicit intent does not name the target component. It declares only an action (such as ACTION_VIEW) and data, and the Android system finds the application that can handle it. Example: opening a web page with ACTION_VIEW opens the browser app.\n\nSteps involved in creating an Android application that displays a login activity:\n\n1) Create a new Android project with an Empty Activity template in Android Studio.\n2) Design activity_main.xml with two EditText fields (username and password), a Button (Login) and a TextView for messages.\n3) In MainActivity, read the username and password when the Login button is clicked, and check them against a fixed pair, for example username admin and password 1234.\n4) On correct login, show Login Successful in a Toast and move to a welcome screen. On wrong login, show Invalid username or password.\n5) Declare the activity in AndroidManifest.xml. The launcher activity is declared automatically by Android Studio when the project is created.\n\nLogin validation code in MainActivity:\nString user = etUser.getText().toString();\nString pass = etPass.getText().toString();\nif (user.equals(\"admin\") && pass.equals(\"1234\")) {\n    Toast.makeText(this, \"Login Successful\", Toast.LENGTH_SHORT).show();\n} else {\n    Toast.makeText(this, \"Invalid username or password\", Toast.LENGTH_SHORT).show();\n}\n\nExample of an implicit intent used after login, to open a website:\nIntent i = new Intent(Intent.ACTION_VIEW, Uri.parse(\"https://www.google.com\"));\nstartActivity(i);"
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write detailed procedure for sending an SMS in Android application.",
  "a": "Detailed procedure for sending an SMS in Android:\n\n1) Add the SEND_SMS permission in AndroidManifest.xml.\n<uses-permission android:name=\"android.permission.SEND_SMS\" />\n\n2) On Android 6.0 and above, request the permission at runtime with requestPermissions() and handle the result in onRequestPermissionsResult(), because it is a dangerous permission.\n\n3) Design the layout with two EditText fields (phone number and message) and a Button (Send).\n\n4) In the button click listener, read the phone number and the message, then send the SMS with SmsManager.\nSmsManager sms = SmsManager.getDefault();\nsms.sendTextMessage(phoneNumber, null, message, null, null);\n\n5) The five parameters of sendTextMessage() are: destination address, service centre address (null uses the default centre), message text, sent PendingIntent and delivery PendingIntent. The two PendingIntents may be null, or they may be used to confirm sending and delivery.\n\n6) After sending, show a Toast such as SMS Sent to confirm to the user.\n\nAlternative method: Send the SMS through the messaging app with an implicit intent, which needs no SEND_SMS permission.\nIntent i = new Intent(Intent.ACTION_SENDTO, Uri.parse(\"smsto:\" + phoneNumber));\ni.putExtra(\"sms_body\", message);\nstartActivity(i);"
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write short notes on Pause() and Resume() methods in Activity Life Cycle.",
  "a": "onPause(): This method is called when the activity loses focus but is still partly visible, for example when a dialog appears on top of it or the user switches to another app.\n1) The activity is still alive but it is no longer in the foreground.\n2) Release resources that consume battery or the screen, such as animations and the camera, and save any unsaved user data here.\n3) Keep this method light and fast, because the next activity cannot be displayed until onPause() returns.\n\nonResume(): This method is called when the activity comes back to the foreground and the user can interact with it again.\n1) Restore the resources released in onPause(), such as restarting animations and refreshing the displayed data.\n2) It is always called after onStart() when the activity starts, and after onPause() when the activity returns.\n\nLifecycle order: onCreate(), onStart(), onResume(), and then the activity is running. On leaving the activity, the order is onPause(), onStop() and finally onDestroy()."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write short notes on the following : (i) Activities (ii) Services",
  "a": "(i) Activities: An activity is a single screen of an application with a user interface. The user interacts with the app through activities, for example a login screen, a list screen or a settings screen. An activity extends AppCompatActivity, has a lifecycle (onCreate, onStart, onResume, onPause, onStop, onDestroy) and must be declared in AndroidManifest.xml. Activities are started with an Intent.\n\n(ii) Services: A service is a component that runs in the background without a user interface, for long-running operations such as playing music, downloading a file or tracking location. It is started with startService() or bound with bindService(), and its main lifecycle methods are onCreate(), onStartCommand() and onDestroy(). Types of services:\n1) Started service: Runs until it is stopped by itself or by another component.\n2) Bound service: Runs only while some component is bound to it.\n3) Foreground service: Runs with a notification shown to the user and is less likely to be killed by the system."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define Android Programming.",
  "a": "Android programming is the development of applications for the Android operating system using Java or Kotlin with the Android SDK in Android Studio. The apps use components such as activities, services and broadcast receivers, and run on the Android Runtime on smartphones, tablets and other devices."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define Android Virtual Device (AVD).",
  "a": "An Android Virtual Device (AVD) is an emulator configuration that imitates a real Android device on the computer. It defines the hardware profile (screen size, RAM), the system image (Android version and API level) and storage, and is created in Android Studio through the AVD Manager. Developers use it to run and test apps without a physical phone."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define Smart Phone with example.",
  "a": "A smart phone is a mobile phone with an advanced operating system, internet connectivity, a touch screen and the ability to install applications. Examples: a Samsung Galaxy phone running Android and an Apple iPhone running iOS."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define User Interface Controls and give any three examples.",
  "a": "User interface controls are the interactive elements of a screen through which the user gives input to the app.\nThree examples:\n1) Button: performs an action when clicked.\n2) EditText: accepts text input from the user.\n3) CheckBox: selects one or more options from a list.\nOther examples are RadioButton and Spinner."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define activity.",
  "a": "An activity is a single screen of an Android application with a user interface, for example a login screen or a settings screen. It is a core component that extends Activity or AppCompatActivity, follows a lifecycle (onCreate, onStart, onResume, onPause, onStop, onDestroy) and must be declared in AndroidManifest.xml."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define contract class in Android.",
  "a": "A contract class is a class that defines the constants of a database schema, such as table names and column names, in one place. It usually contains a static inner class that implements BaseColumns, which adds the standard _ID column. Using a contract class avoids spelling mistakes in SQL statements and makes the schema easy to change."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Define intent objects.",
  "a": "An intent object is a messaging object used to request an action from another app component. It carries the action to perform, the data (as a Uri), the category, the component name (for explicit intents) and extra data in a Bundle. Intents are used to start activities, start services and broadcast messages."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List any three attributes of Button control.",
  "a": "Three attributes of Button control:\n1) android:text: the text displayed on the button.\n2) android:id: the unique identifier used to access the button in Java code.\n3) android:onClick: the name of the method called when the button is clicked.\nOther attributes are android:layout_width, android:layout_height and android:background."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List any three methods of Media Player class.",
  "a": "Three methods of MediaPlayer class:\n1) setDataSource(): sets the media file or URL to play.\n2) prepare(): prepares the player for playback.\n3) start(): starts or resumes playback.\nOther methods are pause(), stop() and release()."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List different components of an Android application.",
  "a": "The components of an Android application are:\n1) Activities: screens with a user interface.\n2) Services: background operations without a user interface.\n3) Broadcast Receivers: respond to system-wide announcements such as battery low or boot completed.\n4) Content Providers: share data between applications."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List different storage options in Android.",
  "a": "Storage options in Android are:\n1) SharedPreferences: small key-value data such as settings.\n2) Internal storage: private files stored in the app's own directory.\n3) External storage: files on shared storage such as an SD card.\n4) SQLite database: structured data stored in tables.\n5) Network storage: data stored on a remote server or cloud."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List the intent types.",
  "a": "Intent types are:\n1) Explicit intent: names the target component directly, for example starting SecondActivity from FirstActivity.\n2) Implicit intent: declares only an action and data, and the system chooses the app that can handle it, for example opening a web page."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List three methods of SMS Manager Class in Android.",
  "a": "Three methods of SmsManager class:\n1) sendTextMessage(): sends a single text message.\n2) sendMultipartTextMessage(): sends a long message split into parts.\n3) sendDataMessage(): sends a data (binary) message to a specific port.\nAnother method is divideMessage(), which splits a long message into parts."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "State the purpose of menus in an application.",
  "a": "Menus provide additional actions and options to the user without crowding the screen. They keep the main screen clean and group less-used actions in one place. Android provides three types: Options menu (shown in the app bar), Context menu (shown on long press) and Popup menu (anchored to a view)."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What are the main database operations?",
  "a": "The main database operations are Create, Read, Update and Delete, known as CRUD:\n1) Create (Insert): adding new records.\n2) Read (Select): retrieving records.\n3) Update: changing existing records.\n4) Delete: removing records."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is an Alert dialog?",
  "a": "An alert dialog is a small pop-up window that appears over the current screen to ask the user for a decision or to show an important message. It is built with AlertDialog.Builder, using setTitle(), setMessage(), setPositiveButton() and setNegativeButton(). The user must respond to it or dismiss it before continuing with the app."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is persistent data storage?",
  "a": "Persistent data storage means data that remains saved even after the application is closed or the device is switched off and restarted. It is achieved with SharedPreferences, files and SQLite databases. This is different from temporary storage such as variables in memory, which are lost when the app process ends."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is the purpose of Dalvik Virtual Machine.",
  "a": "The Dalvik Virtual Machine (DVM) was the virtual machine that executed Android applications. It ran dex (Dalvik Executable) bytecode, which is optimised for low memory and battery use, with each app running in its own VM process for security. From Android 5.0 (Lollipop), Dalvik was replaced by the Android Runtime (ART), which uses ahead-of-time compilation for better performance."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write about Spinner Control in Android.",
  "a": "A Spinner is a drop-down control that lets the user select one item from a list of values. The items are supplied through an Adapter, usually an ArrayAdapter, and the selection is handled with setOnItemSelectedListener(). Example: a Spinner showing a list of states from which the user picks one."
 },
 {
  "s": "ANDROID PROGRAMMING",
  "c": "CM-503",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write the code to create Toast Message.",
  "a": "Code to create a Toast message:\nToast.makeText(getApplicationContext(), \"Hello\", Toast.LENGTH_SHORT).show();\nThe three parameters are the context, the message text and the duration. Toast.LENGTH_SHORT displays the message for about 2 seconds, while Toast.LENGTH_LONG displays it for about 3.5 seconds."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 5,
  "y": "Dec 2022, Mar/Apr 2024, Mar/Apr 2026, Nov 2023, Nov 2024",
  "q": "Explain different topologies of ZIGBEE.",
  "a": "Zigbee is a low-power, low-data-rate wireless standard (based on IEEE 802.15.4) for sensor networks. Its three topologies are:\n\n1) Star topology — one coordinator sits at the centre and all end devices connect directly to it. It is simple and cheap, but the coordinator is a single point of failure and the range is limited.\n\n2) Tree (cluster-tree) topology — routers form a hierarchy below the coordinator, extending the network's range in branches. Messages travel up and down the tree, but a failed router cuts off its whole branch.\n\n3) Mesh topology — every full-function device can route messages for others, so data finds alternate paths if a link fails. It is self-healing, the most reliable and scalable, and is the topology used in large IoT deployments.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 270\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#64748b\" stroke-width=\"1.5\"><line x1=\"70\" y1=\"45\" x2=\"30\" y2=\"15\"/><line x1=\"70\" y1=\"45\" x2=\"110\" y2=\"15\"/><line x1=\"70\" y1=\"45\" x2=\"30\" y2=\"75\"/><line x1=\"70\" y1=\"45\" x2=\"110\" y2=\"75\"/><line x1=\"70\" y1=\"105\" x2=\"40\" y2=\"140\"/><line x1=\"70\" y1=\"105\" x2=\"100\" y2=\"140\"/><line x1=\"40\" y1=\"140\" x2=\"25\" y2=\"168\"/><line x1=\"40\" y1=\"140\" x2=\"55\" y2=\"168\"/><line x1=\"100\" y1=\"140\" x2=\"85\" y2=\"168\"/><line x1=\"100\" y1=\"140\" x2=\"115\" y2=\"168\"/><line x1=\"30\" y1=\"210\" x2=\"70\" y2=\"190\"/><line x1=\"70\" y1=\"190\" x2=\"110\" y2=\"210\"/><line x1=\"30\" y1=\"210\" x2=\"50\" y2=\"240\"/><line x1=\"110\" y1=\"210\" x2=\"90\" y2=\"240\"/><line x1=\"50\" y1=\"240\" x2=\"90\" y2=\"240\"/><line x1=\"70\" y1=\"190\" x2=\"50\" y2=\"240\"/><line x1=\"70\" y1=\"190\" x2=\"90\" y2=\"240\"/></g><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><circle cx=\"30\" cy=\"15\" r=\"9\"/><circle cx=\"110\" cy=\"15\" r=\"9\"/><circle cx=\"30\" cy=\"75\" r=\"9\"/><circle cx=\"110\" cy=\"75\" r=\"9\"/><circle cx=\"40\" cy=\"140\" r=\"10\"/><circle cx=\"100\" cy=\"140\" r=\"10\"/><circle cx=\"25\" cy=\"168\" r=\"8\"/><circle cx=\"55\" cy=\"168\" r=\"8\"/><circle cx=\"85\" cy=\"168\" r=\"8\"/><circle cx=\"115\" cy=\"168\" r=\"8\"/><circle cx=\"30\" cy=\"210\" r=\"9\"/><circle cx=\"70\" cy=\"190\" r=\"9\"/><circle cx=\"110\" cy=\"210\" r=\"9\"/><circle cx=\"50\" cy=\"240\" r=\"9\"/><circle cx=\"90\" cy=\"240\" r=\"9\"/></g><circle cx=\"70\" cy=\"45\" r=\"14\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><circle cx=\"70\" cy=\"105\" r=\"12\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"70\" y=\"49\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><text x=\"70\" y=\"109\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><g font-size=\"11\" fill=\"#1e293b\"><text x=\"145\" y=\"35\" font-weight=\"bold\">Star</text><text x=\"145\" y=\"52\">All devices link to one</text><text x=\"145\" y=\"67\">coordinator</text><text x=\"145\" y=\"125\" font-weight=\"bold\">Tree (cluster-tree)</text><text x=\"145\" y=\"142\">Routers extend the network</text><text x=\"145\" y=\"157\">in branches</text><text x=\"145\" y=\"210\" font-weight=\"bold\">Mesh</text><text x=\"145\" y=\"227\">Devices route for each other,</text><text x=\"145\" y=\"242\">self-healing</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 4,
  "y": "Dec 2022, Mar/Apr 2024, Mar/Apr 2026, Oct/Nov 2025",
  "q": "Explain about Bluetooth technology in detail.",
  "a": "Bluetooth is a short range wireless communication technology used to exchange data and voice between devices without cables. It is standardised as IEEE 802.15.1 and works in the 2.4 GHz ISM band using frequency hopping spread spectrum, which makes it resistant to interference from other wireless devices.\n\nImportant features of Bluetooth are:\n- It works over a short range, normally up to 10 metres, and up to 100 metres for high power class 1 devices.\n- It uses frequency hopping, changing channels 1600 times per second to avoid interference.\n- Classic Bluetooth offers data rates of 1 to 3 Mbps, while Bluetooth Low Energy (BLE) is designed for very low power consumption with small data packets.\n- It supports both data and voice communication.\n\nBluetooth network structure:\n- Devices form a piconet, which consists of one master device and up to seven active slave devices.\n- Several piconets can be connected together to form a scatternet, where one device acts as a bridge between piconets.\n- The master controls the hopping sequence and timing, and slaves follow the master.\n\nBluetooth protocol stack:\n- Radio layer handles the physical transmission in the 2.4 GHz band.\n- Baseband and Link Manager Protocol (LMP) handle connection setup, authentication and power control.\n- L2CAP (Logical Link Control and Adaptation Protocol) adapts data for upper layers.\n- SDP (Service Discovery Protocol) helps a device find the services offered by other devices.\n- RFCOMM provides serial port emulation, and profiles like A2DP (audio), HFP (hands-free) and HID (human interface) define how particular applications use Bluetooth.\n\nBluetooth Low Energy (BLE) is used in IoT sensors, fitness bands, beacons and medical devices because it consumes very little power and can run for months or years on a small battery.\n\nApplications of Bluetooth are wireless headsets, keyboards and mice, file transfer between phones, wearable health devices, smart home control and vehicle hands-free systems.\n\nLimitations of Bluetooth are its short range, relatively low data rate compared to Wi-Fi, and security risks if pairing is not done properly.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 160\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#64748b\" stroke-width=\"1.5\"><line x1=\"80\" y1=\"75\" x2=\"35\" y2=\"35\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"35\"/><line x1=\"80\" y1=\"75\" x2=\"35\" y2=\"115\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"115\"/></g><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><circle cx=\"35\" cy=\"35\" r=\"12\"/><circle cx=\"125\" cy=\"35\" r=\"12\"/><circle cx=\"35\" cy=\"115\" r=\"12\"/><circle cx=\"125\" cy=\"115\" r=\"12\"/></g><circle cx=\"80\" cy=\"75\" r=\"18\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><g fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"80\" y=\"79\">M</text><text x=\"35\" y=\"39\">S</text><text x=\"125\" y=\"39\">S</text><text x=\"35\" y=\"119\">S</text><text x=\"125\" y=\"119\">S</text></g><g font-size=\"11\" fill=\"#1e293b\"><text x=\"170\" y=\"60\">Piconet: 1 master</text><text x=\"170\" y=\"76\">+ up to 7 slaves</text><text x=\"170\" y=\"94\">Several piconets link</text><text x=\"170\" y=\"110\">into a scatternet</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 3,
  "y": "Mar/Apr 2024, May/June 2023, Nov 2024",
  "q": "Describe various connectivity technologies in IoT.",
  "a": "IoT devices use different connectivity technologies depending on range, power consumption, data rate and cost. The main connectivity technologies are:\n\nShort range technologies:\n- Bluetooth and Bluetooth Low Energy (BLE): short range up to 10 metres, low power, used in wearables, health sensors and smart home devices.\n- Zigbee: based on IEEE 802.15.4, low power and low data rate up to 250 kbps, supports mesh networking, used in home automation and smart lighting.\n- Wi-Fi: high data rate up to hundreds of Mbps, medium range up to 100 metres, but high power consumption, used in smart homes and offices.\n- NFC (Near Field Communication): very short range of about 4 cm, used for contactless payment, access control and pairing.\n- RFID (Radio Frequency Identification): uses radio waves to identify tags, used for asset tracking, inventory and access control.\n\nLong range low power technologies (LPWAN):\n- LoRa and LoRaWAN: range of several kilometres, very low power, low data rate, used in agriculture, smart cities and environmental monitoring.\n- Sigfox: ultra narrow band technology, very low data rate, long range, used for simple sensor reporting like metering.\n- NB-IoT (Narrowband IoT): uses cellular networks, good indoor coverage, low power, used for smart metering and asset tracking.\n\nCellular technologies:\n- 2G, 3G, 4G and 5G mobile networks provide wide area coverage and high data rates.\n- 5G supports massive machine type communication and ultra low latency, which is important for industrial IoT and autonomous vehicles.\n\nWired technologies:\n- Ethernet provides reliable high speed communication for fixed IoT devices like industrial controllers and cameras.\n\nSelection of a connectivity technology depends on the following factors:\n- Required communication range between devices.\n- Power available, whether battery operated or mains powered.\n- Data rate required by the application.\n- Number of devices to be connected.\n- Cost of the device and the network service."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 3,
  "y": "Dec 2022, Mar/Apr 2026, Nov 2024",
  "q": "Explain CoAP and message types in detail.",
  "a": "CoAP (Constrained Application Protocol) is a lightweight web transfer protocol designed for constrained IoT devices that have limited memory, processing power and battery. It is standardised by the IETF and is based on the REST model like HTTP, but it runs over UDP instead of TCP, which makes it much lighter and suitable for lossy low power networks.\n\nImportant features of CoAP:\n- It uses a small fixed header of only 4 bytes.\n- It supports the methods GET, POST, PUT and DELETE, similar to HTTP.\n- It uses URIs to identify resources, for example coap://sensor/temperature.\n- It supports response codes similar to HTTP, such as 2.05 Content, 4.04 Not Found and 5.00 Internal Server Error.\n- It supports resource discovery, so a client can find the resources available on a server.\n- Security is provided by DTLS (Datagram Transport Layer Security).\n\nCoAP works in two layers:\n- Message layer: handles reliability and message types.\n- Request/Response layer: handles RESTful communication using methods and response codes.\n\nMessage types in CoAP:\n- Confirmable (CON) message: the sender expects an acknowledgement from the receiver. It is used when reliable delivery is required. If no acknowledgement is received, the message is retransmitted.\n- Non-confirmable (NON) message: the sender does not expect an acknowledgement. It is used for frequent sensor readings where losing one message is acceptable, for example periodic temperature values.\n- Acknowledgement (ACK) message: it confirms the receipt of a confirmable message. It can also carry the response to the request, which is called a piggybacked response.\n- Reset (RST) message: it indicates that the receiver could not process the message, for example when a confirmable message arrives for a resource that does not exist, or when the receiver is not able to understand it.\n\nAdditional features of CoAP:\n- Observe: a client can register its interest in a resource, and the server sends updates whenever the resource value changes. This gives publish-subscribe behaviour.\n- Block-wise transfer: large data is split into blocks so that it can be transferred over networks with small packet sizes.\n- Proxying and caching: CoAP supports proxies that connect CoAP networks to HTTP web services, and caching to reduce network traffic.\n\nApplications of CoAP are smart home devices, smart lighting, industrial monitoring, agricultural sensors and any constrained device that must communicate over low power wireless networks."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 3,
  "y": "May/June 2023, Nov 2023, Nov 2024",
  "q": "Explain about Wireless Multimedia Sensor Networks (WMSN). *",
  "a": "Wireless Multimedia Sensor Networks (WMSN) are sensor networks in which the sensor nodes are equipped with cameras, microphones and other multimedia sensors. Unlike traditional sensor networks that collect simple scalar data like temperature, WMSN nodes capture audio, video and still images.\n\nArchitecture of WMSN:\n- Multimedia sensor nodes sense audio, video or images from the environment.\n- The sensed data is processed and compressed at the node to reduce its size.\n- The data is transmitted through multiple hops to a sink node.\n- The sink node forwards the data to a base station or gateway, which sends it to the user over the internet.\n\nCharacteristics of WMSN:\n- They handle large volumes of data because multimedia content is much bigger than scalar readings.\n- They need higher bandwidth and higher processing power at the nodes.\n- They are time sensitive, because delay and jitter directly affect the quality of audio and video.\n\nChallenges in WMSN:\n- Energy consumption is high due to processing and transmission of multimedia data.\n- Quality of Service (QoS) must be maintained for delay, jitter and packet loss.\n- Synchronisation between audio and video streams is required.\n- In-network processing and data aggregation are difficult for multimedia data.\n- Security and privacy are important because cameras and microphones capture sensitive information.\n\nApplications of WMSN:\n- Video surveillance and security monitoring.\n- Traffic monitoring and automatic number plate recognition.\n- Telemedicine, such as remote patient video monitoring.\n- Industrial inspection and monitoring of production lines.\n- Environmental monitoring, such as wildlife observation.\n- Smart home security systems with video doorbells and cameras."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 3,
  "y": "Dec 2022, Mar/Apr 2024, Nov 2024",
  "q": "Explain about components of cloud computing. *",
  "a": "Cloud computing architecture has a front end (the user's side — browser, device, application) and a back end (the provider's side — servers, storage, networks).\n\nIts components are:\n1) Client infrastructure — the device and interface used to access the cloud.\n2) Application — the software delivered to the user.\n3) Service — the type of service offered (IaaS, PaaS, SaaS).\n4) Runtime cloud — the execution environment (operating system, virtual machines).\n5) Storage — data storage and backup.\n6) Infrastructure — the hardware: servers, network and storage devices.\n7) Management — tools that monitor and control the cloud.\n8) Security — protection of data, users and access across all layers.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 150\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"10\" y=\"35\" width=\"100\" height=\"80\" rx=\"8\"/><rect x=\"250\" y=\"35\" width=\"100\" height=\"80\" rx=\"8\"/></g><ellipse cx=\"180\" cy=\"75\" rx=\"45\" ry=\"26\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"110\" y1=\"75\" x2=\"128\" y2=\"75\"/><line x1=\"225\" y1=\"75\" x2=\"242\" y2=\"75\"/></g><g fill=\"#64748b\"><polygon points=\"128,75 118,69 118,81\"/><polygon points=\"242,75 232,69 232,81\"/></g><g fill=\"#1e293b\" font-size=\"10\" text-anchor=\"middle\"><text x=\"60\" y=\"58\" font-weight=\"bold\" font-size=\"11\">Front end</text><text x=\"60\" y=\"76\">Browser /</text><text x=\"60\" y=\"91\">device / app</text><text x=\"300\" y=\"52\" font-weight=\"bold\" font-size=\"11\">Back end</text><text x=\"300\" y=\"68\">Servers</text><text x=\"300\" y=\"82\">Storage</text><text x=\"300\" y=\"96\">Networks</text><text x=\"300\" y=\"110\">Mgmt + Security</text></g><text x=\"180\" y=\"79\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">Internet</text></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 3,
  "y": "Mar/Apr 2024, May/June 2023, Nov 2024",
  "q": "Explain about security concepts in cloud. *",
  "a": "Cloud security protects the CIA triad:\n- Confidentiality (data seen only by authorised users)\n- Integrity (data not changed by unauthorised parties)\n- Availability (services reachable when needed)\n\nMain threats:\n- Data breaches\n- Insecure interfaces and APIs\n- Account hijacking\n- Malicious insiders\n- Data loss from failures\n\nKey measures:\n- Encryption of data in transit and at rest\n- Strong identity and access management with multi-factor authentication\n- Firewalls and intrusion detection\n- Regular audits and compliance with standards\n- Automatic backups for recovery\n\nIn the shared-responsibility model, the provider secures the cloud itself while the user secures what they put in the cloud."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 3,
  "y": "Dec 2022, Mar/Apr 2024, Mar/Apr 2026",
  "q": "Explain about stationary wireless sensor networks. *",
  "a": "A stationary wireless sensor network is a WSN in which sensor nodes stay fixed in place after deployment. Architecture: sensor nodes sense their surroundings and forward data, usually over multiple hops, to a sink node or gateway, which delivers it to the base station for analysis.\n\nCharacteristics:\n- The topology is static, so routing is simpler and more stable than in mobile networks\n- Nodes are usually battery-powered, so energy saving (duty cycling — sleeping most of the time) is still essential\n- Coverage depends entirely on where nodes were placed\n\nApplications: environmental monitoring (forests, rivers), precision agriculture, building and bridge health monitoring, and industrial plant monitoring. The contrast is a mobile WSN, where nodes move (on vehicles, animals or people) and the topology keeps changing."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "Nov 2024, Oct/Nov 2025",
  "q": "Describe about MQTT in detail.",
  "a": "MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for constrained devices and low bandwidth, high latency or unreliable networks. It works on the publish-subscribe model and runs over TCP/IP. It was originally developed by IBM and is now an ISO standard.\n\nPublish-subscribe model of MQTT:\n- A publisher is a device that sends messages to a topic.\n- A subscriber is a device that receives messages from a topic it is interested in.\n- A broker is a central server that receives messages from publishers and forwards them to all subscribers of that topic.\n- Publishers and subscribers never communicate directly, so they remain independent of each other.\n\nImportant concepts in MQTT:\n- Topic: a hierarchical string used to route messages, for example home/livingroom/temperature. Topics use levels separated by slash, and wildcards like plus (+) for one level and hash (#) for multiple levels are used for subscribing.\n- Broker: it manages client connections, receives published messages, and distributes them to subscribers. Examples of brokers are Mosquitto, HiveMQ and AWS IoT Core.\n- Client: any device or application that connects to the broker to publish or subscribe.\n- Quality of Service (QoS): it defines the delivery guarantee of a message.\n- QoS 0 (at most once): the message is delivered once or not at all, with no acknowledgement. It is used when occasional loss is acceptable.\n- QoS 1 (at least once): the message is delivered at least once with acknowledgement, but duplicates are possible. It is used when delivery must be guaranteed.\n- QoS 2 (exactly once): the message is delivered exactly once using a four step handshake. It is used when duplicate delivery is not acceptable.\n- Retained message: the broker stores the last message published on a topic and sends it immediately to any new subscriber.\n- Last Will and Testament (LWT): if a client disconnects unexpectedly, the broker publishes a pre-decided will message to inform other clients.\n- Clean session: when set, the broker does not store any subscription or undelivered messages for the client after disconnection. When not set, the session is persistent.\n- Keep alive: the client sends periodic PINGREQ messages to keep the connection alive and detect failures.\n\nSecurity in MQTT:\n- Username and password authentication.\n- TLS/SSL encryption, known as secure MQTT, normally on port 8883 instead of 1883.\n- Access control lists to restrict which topics a client can publish or subscribe to.\n\nAdvantages of MQTT:\n- Very small header of 2 bytes, so it uses minimum bandwidth.\n- Low power consumption, suitable for battery operated devices.\n- Works well on unreliable networks.\n- Supports one to many communication easily.\n\nApplications of MQTT are home automation, smart energy meters, vehicle tracking, industrial monitoring, healthcare devices and Facebook Messenger's original messaging system.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 150\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"10\" y=\"55\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"135\" y=\"55\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"260\" y=\"20\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"260\" y=\"90\" width=\"90\" height=\"40\" rx=\"8\"/></g><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"100\" y1=\"75\" x2=\"127\" y2=\"75\"/><line x1=\"225\" y1=\"68\" x2=\"252\" y2=\"44\"/><line x1=\"225\" y1=\"82\" x2=\"252\" y2=\"96\"/></g><g fill=\"#64748b\"><polygon points=\"127,75 117,69 117,81\"/><polygon points=\"252,44 241,42 244,53\"/><polygon points=\"252,96 241,94 244,85\"/></g><g fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"55\" y=\"79\">Publisher</text><text x=\"180\" y=\"79\">Broker</text><text x=\"305\" y=\"44\">Subscriber 1</text><text x=\"305\" y=\"114\">Subscriber 2</text></g><text x=\"180\" y=\"40\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">topic: home/temperature</text></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "Dec 2022, Nov 2023",
  "q": "Describe different service models in cloud computing.",
  "a": "Cloud computing provides services in three main service models. They differ in how much control the user has and how much is managed by the cloud provider.\n\n1. Infrastructure as a Service (IaaS):\n- The provider gives basic computing infrastructure like virtual machines, storage, networks and servers.\n- The user installs and manages the operating system, middleware and applications.\n- The user has maximum control and flexibility.\n- Examples: Amazon EC2, Microsoft Azure Virtual Machines, Google Compute Engine.\n- It is suitable when the user needs full control over the system, such as hosting custom applications or development environments.\n\n2. Platform as a Service (PaaS):\n- The provider gives a complete platform including operating system, database, programming tools and runtime environment.\n- The user only writes and deploys the application, without managing the underlying infrastructure.\n- It reduces development time because the platform is ready to use.\n- Examples: Google App Engine, Microsoft Azure App Service, Heroku.\n- It is suitable for developers who want to focus only on application development.\n\n3. Software as a Service (SaaS):\n- The provider gives complete ready to use software applications over the internet.\n- The user only uses the application through a web browser and does not manage anything else.\n- The user manages only their own data and user settings.\n- Examples: Gmail, Google Docs, Microsoft Office 365, Dropbox, Salesforce.\n- It is suitable for end users who need software without installation or maintenance.\n\nComparison of service models:\n- Control: IaaS gives the highest control, PaaS gives medium control, SaaS gives the least control.\n- Management by provider: IaaS manages the least, PaaS manages the platform, SaaS manages everything.\n- User responsibility: IaaS user manages operating system and applications, PaaS user manages only applications, SaaS user manages only data.\n- Target users: IaaS is for system administrators, PaaS is for developers, SaaS is for end users.\n\nOther service models include Database as a Service (DBaaS), Function as a Service (FaaS) and Storage as a Service (STaaS), which are together called Anything as a Service (XaaS)."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "Dec 2022, Mar/Apr 2026",
  "q": "Explain 6 LoWPAN protocol stack architecture.",
  "a": "6LoWPAN stands for IPv6 over Low power Wireless Personal Area Networks. It is a protocol that allows small, low power devices with limited processing capability to use IPv6 and connect directly to the internet. It is defined by the IETF and works over IEEE 802.15.4 networks.\n\nNeed for 6LoWPAN:\n- IPv6 requires a minimum packet size (MTU) of 1280 bytes, but an IEEE 802.15.4 frame can carry only 127 bytes.\n- Sensor nodes have limited battery, memory and processing power, so a full IPv6 implementation is not possible.\n- 6LoWPAN solves this problem with an adaptation layer between the network layer and the link layer.\n\nProtocol stack architecture of 6LoWPAN:\n- Application layer: uses protocols like CoAP for communication between constrained devices and web services.\n- Transport layer: uses UDP, because TCP is heavy for constrained devices. UDP is connectionless and lightweight.\n- Network layer: uses IPv6, so every sensor node gets its own IP address and can be addressed from the internet.\n- Adaptation layer: this is the special layer of 6LoWPAN, placed between IPv6 and IEEE 802.15.4. It performs three main functions.\n- Header compression: the 40 byte IPv6 header is compressed to a few bytes by removing information that both sides already know, such as common network prefixes.\n- Fragmentation and reassembly: a large IPv6 packet is divided into small fragments that fit into 802.15.4 frames, and reassembled at the destination.\n- Mesh addressing and routing: it supports multi hop routing, so a packet can travel through intermediate nodes to reach a distant node.\n- Link layer: IEEE 802.15.4 MAC layer handles medium access, addressing and frame formation.\n- Physical layer: IEEE 802.15.4 PHY uses the 2.4 GHz band with a data rate of 250 kbps.\n\nImportant features of 6LoWPAN:\n- Every node has an IPv6 address, which allows end to end internet connectivity.\n- It supports mesh topologies and multi hop communication.\n- It is energy efficient because of header compression and small packet sizes.\n- It allows interoperability between low power devices and normal internet devices.\n\nApplications of 6LoWPAN are smart home automation, smart metering, building automation, industrial monitoring, agricultural sensor networks and healthcare monitoring."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "Mar/Apr 2024, Oct/Nov 2025",
  "q": "Explain Constrained Application Protocol (CoAP).",
  "a": "Constrained Application Protocol (CoAP) is a specialised web transfer protocol for constrained devices and constrained networks in the Internet of Things. Constrained devices are devices with limited memory, processing power and battery, such as sensors and actuators. CoAP is standardised by the IETF in RFC 7252.\n\nNeed for CoAP:\n- HTTP is too heavy for constrained devices because it uses TCP, large headers and text based messages.\n- CoAP is designed to be lightweight, so it runs over UDP, uses a small binary header of only 4 bytes, and needs very little processing power.\n\nArchitecture of CoAP:\n- CoAP follows the client-server model like HTTP.\n- The client sends a request to the server, and the server sends back a response.\n- Resources on the server are identified by URIs, for example coap://light/livingroom.\n- CoAP supports the methods GET to read a resource, POST to create a resource, PUT to update a resource and DELETE to remove a resource.\n- Response codes are similar to HTTP, for example 2.05 Content for success, 4.04 Not Found and 5.00 Internal Server Error.\n\nLayers of CoAP:\n- Message layer: handles message reliability using four message types. Confirmable messages require acknowledgement, non-confirmable messages do not, acknowledgement messages confirm receipt, and reset messages indicate an error.\n- Request/Response layer: handles RESTful communication, methods, response codes, resource discovery and observation.\n\nImportant features of CoAP:\n- Observe: a client can observe a resource, and the server notifies the client whenever the resource value changes. This avoids repeated polling and saves energy.\n- Block-wise transfer: large payloads are divided into blocks for transfer over networks with small packet sizes.\n- Resource discovery: a client can discover the resources of a server using the well-known URI /.well-known/core.\n- Proxying: CoAP proxies connect CoAP networks with HTTP web services, allowing constrained devices to work with the normal web.\n- Multicast: CoAP supports group communication using IP multicast.\n- Security: DTLS (Datagram Transport Layer Security) provides encryption, authentication and integrity for CoAP messages.\n\nApplications of CoAP are smart lighting, smart home automation, industrial monitoring, building automation, agricultural sensors and wearable health devices."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "Dec 2022, Mar/Apr 2026",
  "q": "Explain about AMQP in detail.",
  "a": "AMQP (Advanced Message Queuing Protocol) is an open standard protocol for message oriented middleware. It is used for reliable exchange of messages between applications and systems, even when they are written in different languages and run on different platforms.\n\nBroker based architecture of AMQP:\n- Producer: an application that creates and sends messages.\n- Broker: a server that receives messages, stores them and routes them to consumers. Examples are RabbitMQ and Apache Qpid.\n- Consumer: an application that receives and processes messages.\n- Exchange: it receives messages from producers and routes them to queues based on rules.\n- Queue: it stores messages until a consumer takes them. Queues provide buffering, so producers and consumers need not be active at the same time.\n- Binding: it is a rule that connects an exchange to a queue using a routing key.\n\nTypes of exchanges in AMQP:\n- Direct exchange: routes a message to the queue whose binding key exactly matches the routing key.\n- Fanout exchange: routes a message to all queues bound to it, ignoring the routing key. It is used for broadcasting.\n- Topic exchange: routes a message based on pattern matching of the routing key, using wildcards like star (*) for one word and hash (#) for multiple words.\n- Headers exchange: routes a message based on message header attributes instead of the routing key.\n\nMessage format in AMQP:\n- A message consists of a header with properties like message ID, timestamp, priority and delivery mode, and a body that contains the actual data.\n- Messages can be persistent, which means they are stored on disk and survive a broker restart, or transient, which means they are kept only in memory.\n\nReliability features of AMQP:\n- Message acknowledgements confirm that a message has been received and processed.\n- Transactions allow a group of messages to be sent or received as a single unit.\n- Queues can be made durable so that messages are not lost when the broker restarts.\n- Flow control prevents a fast producer from overloading a slow consumer.\n\nSecurity features of AMQP:\n- SASL authentication for verifying clients.\n- TLS encryption for secure communication.\n- Access control using virtual hosts and permissions.\n\nAdvantages of AMQP:\n- It is an open standard, so products from different vendors can work together.\n- It provides reliable and guaranteed message delivery.\n- It supports flexible routing and complex messaging patterns.\n- It is suitable for enterprise applications that need transactions and security.\n\nComparison with MQTT:\n- AMQP is heavier and feature rich, while MQTT is lightweight and simple.\n- AMQP is mainly used in enterprise systems, while MQTT is mainly used in IoT and constrained devices.\n\nApplications of AMQP are banking and financial transactions, order processing in e-commerce, enterprise application integration, stock trading systems and backend messaging for IoT platforms."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "May/June 2023, Nov 2024",
  "q": "Explain about information theoretic self-management in WSN.",
  "a": "Self-management in Wireless Sensor Networks (WSN) means that sensor nodes manage themselves without central control. Information theoretic self-management uses concepts from information theory to make these management decisions in an intelligent and energy efficient way.\n\nSelf-management properties:\n- Self-organisation: nodes organise themselves into a network without manual configuration.\n- Self-configuration: nodes set their own parameters like transmission power and sleep schedule.\n- Self-optimisation: nodes continuously improve their performance, for example by adjusting sensing rate according to the situation.\n- Self-healing: when a node fails, neighbouring nodes take over its work automatically.\n- Self-protection: nodes detect attacks or faults and protect the network.\n\nInformation theory concepts used:\n- Entropy: it measures the amount of information or surprise in the data. A reading that is very different from previous readings has high entropy and is more informative.\n- Mutual information: it measures how much information one node's data gives about another node's data. If two nearby nodes report almost the same value, their mutual information is high and one report is redundant.\n- Information gain: it measures how much a new measurement reduces uncertainty about the environment.\n\nHow information theoretic self-management works:\n- Each node estimates the information value of its own data using entropy and mutual information.\n- If the data is highly informative, the node transmits it immediately.\n- If the data is redundant because neighbours have already reported similar values, the node suppresses its transmission to save energy.\n- Nodes decide their sleep and wake schedules based on the expected information gain. A node sleeps when it has nothing new to report and wakes when an important event is likely.\n- For data aggregation, a cluster head combines data from several nodes and forwards only the useful information, removing redundancy.\n- For routing, a node forwards packets through paths that preserve maximum information with minimum energy cost.\n- For event detection, nodes increase their sensing rate when the information content of the environment increases, for example during a fire or intrusion.\n\nBenefits of information theoretic self-management:\n- Energy is saved because redundant data is not transmitted.\n- Network lifetime increases because nodes sleep intelligently.\n- Bandwidth is used efficiently.\n- Data quality is maintained because only informative data is forwarded.\n- The network adapts automatically to changes like node failures or changing environmental conditions without human intervention.\n\nExample: in a temperature monitoring network, if ten nearby nodes sense 30 degrees, only one or two nodes need to report it. The other nodes suppress their reports because their mutual information is high. When one node senses 45 degrees, its entropy is high, so it immediately transmits an alert."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "Mar/Apr 2026, Oct/Nov 2025",
  "q": "Explain the node behaviour in WSN.",
  "a": "Node behaviour in a Wireless Sensor Network (WSN) describes how a sensor node acts during its lifetime, from deployment to failure. A sensor node is a small device with four units: sensing unit, processing unit, transceiver unit and power unit. Its behaviour is mainly controlled by the need to save energy, because nodes are usually battery powered and cannot be recharged easily.\n\nStates of a sensor node:\n- Sensing state: the node collects data from the environment using its sensors, for example temperature, humidity, light or vibration.\n- Processing state: the node processes the sensed data, filters noise and aggregates data to reduce its size.\n- Transmitting state: the node sends data to neighbouring nodes or to the sink using its radio. This state consumes the maximum energy.\n- Receiving state: the node receives data from neighbouring nodes to forward it towards the sink.\n- Idle state: the node is awake but not doing any work. It still consumes energy because the radio is listening.\n- Sleep state: the node switches off its radio and processor to save energy. This is the lowest energy state.\n\nDuty cycling behaviour:\n- Nodes follow a duty cycle, which means they sleep most of the time and wake up only for short periods to sense or communicate.\n- A low duty cycle saves energy but increases delay, while a high duty cycle reduces delay but consumes more energy.\n- Adaptive duty cycling changes the sleep schedule based on network traffic and events.\n\nCommunication behaviour:\n- In time driven behaviour, nodes send data periodically, for example every ten minutes.\n- In event driven behaviour, nodes send data only when an event occurs, for example when temperature crosses a threshold.\n- In query driven behaviour, nodes send data only when the base station asks for it.\n- In hybrid behaviour, a combination of these methods is used.\n\nEnergy related behaviour:\n- The radio consumes more energy than sensing and processing, so nodes minimise communication.\n- Nodes reduce transmission power when the neighbour is nearby.\n- Nodes use data aggregation and compression to send less data.\n- When battery level becomes low, a node reduces its activity and informs neighbours so that traffic is routed through other nodes.\n\nFailure and adaptation behaviour:\n- When a node fails due to battery exhaustion or damage, neighbouring nodes detect the failure and select alternate routes, which is called self-healing.\n- Nodes adjust their behaviour when new nodes are added or when the topology changes.\n- Mobile nodes change their neighbours continuously and must update their routing information frequently.\n\nSecurity related behaviour:\n- A node must authenticate neighbouring nodes before exchanging data.\n- A compromised node may behave selfishly by refusing to forward packets, or maliciously by sending false data, so neighbours monitor each other's behaviour to detect such nodes."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "May/June 2023, Nov 2023",
  "q": "Explain the service oriented architecture of IoT.",
  "a": "Service Oriented Architecture (SOA) treats IoT as a set of loosely coupled services that can be discovered, combined and reused. It has four layers:\n\n1) Sensing layer — sensors and actuators collect data and act on the physical world.\n2) Network layer — the data is transmitted over wired or wireless networks.\n3) Service layer — middleware that manages services: service discovery, composition (combining simple services into complex ones), and service management.\n4) Interface layer — APIs and applications through which users interact with the system.\n\nBenefits: services are reusable across applications, components can be replaced without rebuilding the system, and different technologies can interoperate because they communicate through standard service interfaces."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "May/June 2023, Nov 2023",
  "q": "Explain the working principle of NFC.",
  "a": "NFC (Near Field Communication) works at 13.56 MHz by electromagnetic induction between two loop antennas placed very close together — typically within 4 cm (up to about 10 cm). When the initiator generates a radio field, the target device picks up power and data from that field.\n\nThree modes:\n1) Reader/writer — an active device (phone) reads or writes a passive tag (poster, product label).\n2) Peer-to-peer — two active devices exchange data (sharing a contact or photo).\n3) Card emulation — a phone acts like a contactless card for payments and tickets.\n\nActive devices generate their own field; passive devices (tags, cards) have no battery and are powered by the initiator's field. The tiny range is deliberate — it makes NFC naturally secure against eavesdropping and ideal for payments and pairing."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 2,
  "y": "Dec 2022, Nov 2024",
  "q": "List and explain functional components of IoT.",
  "a": "An IoT system has four functional components working together:\n1) Sensing — sensors collect data from the physical world (temperature, motion, images).\n2) Connectivity — networks (Wi-Fi, Bluetooth, cellular, LoRa) carry that data to the cloud or to other devices.\n3) Data processing — software analyses the data, takes decisions, and may send commands back.\n4) User interface — dashboards and apps let users view results and control devices.\n\nActuators complete the loop by acting on the world (switching on a motor, opening a valve). Running across all four components are management (device and network management) and security (authentication, encryption, access control).",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 135\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"10\" y=\"40\" width=\"75\" height=\"40\" rx=\"8\"/><rect x=\"100\" y=\"40\" width=\"75\" height=\"40\" rx=\"8\"/><rect x=\"190\" y=\"40\" width=\"75\" height=\"40\" rx=\"8\"/><rect x=\"280\" y=\"40\" width=\"70\" height=\"40\" rx=\"8\"/></g><rect x=\"190\" y=\"95\" width=\"75\" height=\"26\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"85\" y1=\"60\" x2=\"92\" y2=\"60\"/><line x1=\"175\" y1=\"60\" x2=\"182\" y2=\"60\"/><line x1=\"265\" y1=\"60\" x2=\"272\" y2=\"60\"/><line x1=\"227\" y1=\"80\" x2=\"227\" y2=\"95\" stroke-dasharray=\"4 3\"/></g><g fill=\"#64748b\"><polygon points=\"92,60 84,55 84,65\"/><polygon points=\"182,60 174,55 174,65\"/><polygon points=\"272,60 264,55 264,65\"/></g><g fill=\"#1e293b\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"47\" y=\"64\">Sensing</text><text x=\"137\" y=\"64\">Connectivity</text><text x=\"227\" y=\"58\">Data</text><text x=\"227\" y=\"72\">processing</text><text x=\"315\" y=\"58\">User</text><text x=\"315\" y=\"72\">interface</text><text x=\"227\" y=\"112\">Actuators</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Consider the following conversation on an instant messaging app using XMPP. Student : Good morning teacher. Which lab are we scheduled for? Teacher : Very good morning. You are scheduled to IoT lab. Construct an XMPP stanza for the above instant messaging. * *",
  "a": "XMPP (Extensible Messaging and Presence Protocol) is an XML based protocol for instant messaging. In XMPP, every piece of information is exchanged as an XML stanza. A message stanza is used for sending chat messages, and it has three important attributes: from (sender's Jabber ID), to (receiver's Jabber ID) and type (type of message, normally chat for one to one conversation). The actual text is carried inside the body element.\n\nStanza for the student's message:\nThe student sends a message stanza to the teacher asking about the lab schedule.\n\n<message from=\"student@school.edu/mobile\" to=\"teacher@school.edu\" type=\"chat\">\n<body>Good morning teacher. Which lab are we scheduled for?</body>\n</message>\n\nExplanation of the stanza:\n- message: this is a message stanza used for chat communication.\n- from=\"student@school.edu/mobile\": the sender is the student, and mobile is the resource showing the device used.\n- to=\"teacher@school.edu\": the receiver is the teacher.\n- type=\"chat\": this is a one to one chat message.\n- body: it contains the actual message text sent by the student.\n\nStanza for the teacher's reply:\nThe teacher replies with a message stanza informing the student about the IoT lab.\n\n<message from=\"teacher@school.edu\" to=\"student@school.edu/mobile\" type=\"chat\">\n<body>Very good morning. You are scheduled to IoT lab.</body>\n</message>\n\nExplanation of the stanza:\n- from=\"teacher@school.edu\": the sender is now the teacher.\n- to=\"student@school.edu/mobile\": the reply is sent back to the student's mobile resource.\n- type=\"chat\": it remains a one to one chat message.\n- body: it contains the teacher's reply that the student is scheduled to IoT lab.\n\nIn a complete XMPP session, before these messages, both users exchange presence stanzas to show that they are online, and after the conversation, the messages are delivered through their respective XMPP servers which route the stanzas from sender to receiver."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain 6LoPANs technologies.",
  "a": "6LoWPAN (IPv6 over Low power Wireless Personal Area Networks) technologies are the set of techniques that make it possible for small, low power, resource constrained devices to communicate using IPv6 over IEEE 802.15.4 wireless networks.\n\nMain 6LoWPAN technologies:\n\nHeader compression technology:\n- The IPv6 header is 40 bytes, which is very large for an 802.15.4 frame of only 127 bytes.\n- 6LoWPAN compresses the IPv6 header to as little as 2 to 7 bytes using IPHC (IP Header Compression) and NHC (Next Header Compression).\n- Information common to both sides, like the network prefix, is removed and reconstructed at the receiver.\n- UDP headers are also compressed from 8 bytes to a few bytes.\n\nFragmentation and reassembly technology:\n- An IPv6 packet needs a minimum size of 1280 bytes, but an 802.15.4 frame carries only about 100 bytes of payload.\n- 6LoWPAN divides a large IPv6 packet into small fragments at the sender.\n- Each fragment carries a datagram tag and offset, and the receiver reassembles them in the correct order.\n\nMesh routing technology:\n- 6LoWPAN supports two routing approaches.\n- Mesh-under routing: routing is done at the adaptation layer using link layer addresses, and the whole network appears as one IP link.\n- Route-over routing: routing is done at the network layer using IP addresses, and each hop is a separate IP link.\n- Routing protocols like RPL (Routing Protocol for Low Power and Lossy Networks) and LOADng are used for route discovery in mesh networks.\n\nNeighbour discovery optimisation technology:\n- Standard IPv6 neighbour discovery uses multicast heavily, which wastes energy in low power networks.\n- 6LoWPAN optimises neighbour discovery by using a central router to register nodes, reducing multicast traffic and saving energy.\n\nLink layer technology:\n- 6LoWPAN works over IEEE 802.15.4, which provides low power, low data rate communication at 250 kbps in the 2.4 GHz band.\n- It supports star and mesh topologies and short addressing of 16 bits to reduce overhead.\n\nSecurity technologies:\n- Link layer security of IEEE 802.15.4 provides encryption and authentication using AES.\n- End to end security is provided by DTLS for CoAP based applications.\n\nAddressing technology:\n- Every node gets a unique IPv6 address, formed from the network prefix and its 64 bit interface identifier or 16 bit short address.\n- This gives true end to end internet connectivity, so a sensor can be accessed directly from anywhere on the internet.\n\nApplications of 6LoWPAN technologies are smart homes, smart metering, building automation, industrial monitoring and healthcare systems."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain CoAP communication protocol for IoT.",
  "a": "CoAP (Constrained Application Protocol) is the communication protocol used by constrained IoT devices to exchange data over the internet with minimum overhead. It is designed for devices with limited memory, processing power, battery and network bandwidth, such as temperature sensors, smart bulbs and actuators.\n\nHow CoAP communication works:\n- CoAP follows the client-server model. A client, such as a mobile app or gateway, sends a request to a CoAP server, such as a sensor node, and the server returns a response.\n- Communication is based on REST principles. Each resource on the server, like a temperature reading or a light switch, is identified by a URI, for example coap://sensor/temperature.\n- The client uses methods to interact with resources: GET to read a value, POST to create a resource or trigger an action, PUT to update a value and DELETE to remove a resource.\n- The server replies with a response code, for example 2.05 Content for success, 4.04 Not Found when the resource does not exist, and 5.00 Internal Server Error for server problems.\n\nMessage layer communication:\n- CoAP runs over UDP, so it does not need a connection setup like TCP.\n- Reliability is handled by the message layer using four message types: Confirmable (CON) messages are acknowledged by the receiver, Non-confirmable (NON) messages are sent without acknowledgement, Acknowledgement (ACK) messages confirm receipt, and Reset (RST) messages report errors.\n- If an acknowledgement is not received for a confirmable message, the sender retransmits it after a timeout.\n\nObserve mechanism for communication:\n- Instead of the client repeatedly polling the server for new values, the client registers an observation on a resource.\n- Whenever the resource value changes, the server automatically sends a notification to the client.\n- This saves battery and bandwidth, which is very important for IoT devices.\n\nOther communication features:\n- Block-wise transfer allows large data to be sent in small blocks suitable for low power networks.\n- Resource discovery allows a client to find available resources using the well-known URI /.well-known/core.\n- CoAP proxies translate between CoAP and HTTP, so constrained devices can communicate with normal web applications.\n- CoAP can also run over TCP and WebSockets where UDP is blocked, and security is provided by DTLS.\n\nApplications of CoAP communication in IoT are smart home automation, smart street lighting, industrial machine monitoring, agricultural field sensors, health monitoring wearables and building energy management."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain Extensible Messaging Presence Protocol (XMPP).",
  "a": "XMPP (Extensible Messaging and Presence Protocol) is an open standard protocol for real time communication using XML. It is mainly used for instant messaging and presence, but it is also used for IoT messaging, gaming, alerts and collaboration.\n\nArchitecture of XMPP:\n- XMPP uses a decentralised client-server architecture. Every user connects to their own XMPP server, and servers connect to each other to exchange messages between users of different domains.\n- A user is identified by a Jabber ID (JID) in the form user@domain/resource, for example rahul@example.com/phone.\n- The resource part identifies the particular device or client used by the user.\n\nCommunication in XMPP:\n- The client and server maintain a long lived XML stream.\n- Data is exchanged in the form of XML stanzas, which are the basic units of communication.\n\nThree core stanza types:\n- Message stanza: used for sending chat messages and notifications. It contains attributes like from, to and type, and a body element with the message text.\n- Presence stanza: used to broadcast availability information such as online, away, busy or offline. It is also used to subscribe to another user's presence and to approve or reject such requests.\n- IQ (Info/Query) stanza: used for structured request and response, such as retrieving the contact list (roster), getting server information or setting user preferences. Every IQ request gets a result or an error response.\n\nPresence subscription process:\n- User A sends a presence stanza of type subscribe to user B.\n- User B accepts by sending a presence stanza of type subscribed, after which both users can see each other's presence.\n- If user B rejects, a stanza of type unsubscribed is sent.\n\nExtensions of XMPP:\n- XMPP is extensible through XMPP Extension Protocols (XEPs).\n- XEP-0045 provides multi-user chat (group chat rooms).\n- XEP-0163 provides personal eventing for publishing small updates.\n- XEP-0323, XEP-0325 and XEP-0326 provide IoT specific features like sensor data, provisioning and control.\n- Other extensions support file transfer, voice and video calls, message archiving and end to end encryption.\n\nSecurity in XMPP:\n- TLS is used to encrypt the connection between client and server and between servers.\n- SASL is used for authentication of users.\n- Servers verify each other's identity using certificates.\n\nAdvantages of XMPP:\n- It is an open standard and not controlled by a single company.\n- It is decentralised and federated, like email.\n- It is highly extensible for new applications.\n- It supports real time presence and messaging.\n\nApplications of XMPP are instant messaging services, IoT device communication, smart home control, online games, customer service chat systems and emergency alert systems."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain XMPP communication protocol.",
  "a": "XMPP (Extensible Messaging and Presence Protocol) is a communication protocol based on XML, used for real time exchange of messages and presence information between clients over a network. It is an open standard maintained by the IETF.\n\nCommunication architecture:\n- XMPP uses a client-server architecture. A client connects to its own server, and servers connect with each other to deliver messages across different domains.\n- Communication is decentralised, so any organisation can run its own server, similar to email.\n- Each user has a Jabber ID (JID) like user@domain/resource, where the resource identifies the device being used.\n\nCommunication process:\n- The client opens a TCP connection to the server and starts an XML stream by sending a stream header.\n- The server responds with its own stream header, and then authentication takes place using SASL.\n- Once authenticated, the stream is secured using TLS encryption.\n- After this, the client and server exchange XML stanzas over the same stream until the stream is closed.\n\nStanza based communication:\n- Message stanza: used for chat messages, group messages and notifications. It carries the message text in the body element and has attributes from, to and type.\n- Presence stanza: used to inform others about availability, such as online, away or offline, and to manage subscriptions for seeing another user's presence.\n- IQ stanza: used for request and response interactions like getting the roster, querying server capabilities and changing settings. Each IQ request must receive a result or error stanza in reply.\n\nMessage flow example:\n- When user A sends a message to user B, A's client sends a message stanza to A's server.\n- A's server looks at the domain of B and forwards the stanza to B's server.\n- B's server delivers the stanza to all connected resources of B, such as phone and laptop.\n- If B is offline, the server can store the message and deliver it when B comes online, depending on server configuration.\n\nPresence flow:\n- When a user comes online, the client sends a presence stanza to the server.\n- The server broadcasts this presence to all contacts who have subscribed to the user.\n- When a user goes offline, an unavailable presence stanza is sent.\n\nAdvantages of XMPP communication:\n- It is based on XML, so messages are human readable and easy to extend.\n- It is an open and federated protocol with no central control.\n- It supports real time presence along with messaging.\n- It is extensible through XEPs for group chat, file transfer, voice, video and IoT.\n\nApplications of XMPP communication are instant messaging, IoT sensor messaging, online games, customer support systems, alert notification systems and collaborative applications."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain about CoAP.",
  "a": "CoAP (Constrained Application Protocol) is a lightweight application layer protocol designed for constrained devices in the Internet of Things. Constrained devices have limited memory, processing power, battery and bandwidth, so normal web protocols like HTTP are too heavy for them. CoAP solves this problem by providing web like communication with very low overhead.\n\nImportant points about CoAP:\n- CoAP is standardised by the IETF and is defined in RFC 7252.\n- It runs over UDP instead of TCP, which avoids the overhead of connection setup and makes it suitable for lossy networks.\n- It uses a small fixed header of only 4 bytes.\n- It follows the REST architecture like HTTP, using methods GET, POST, PUT and DELETE.\n- Resources are identified by URIs, for example coap://sensor/temperature.\n- Response codes are similar to HTTP, such as 2.05 Content for success and 4.04 Not Found for errors.\n- It supports four message types: Confirmable (CON) which needs acknowledgement, Non-confirmable (NON) which needs no acknowledgement, Acknowledgement (ACK) which confirms receipt, and Reset (RST) which indicates an error.\n- It supports the Observe feature, where a server notifies the client automatically whenever a resource value changes.\n- It supports block-wise transfer for sending large data in small blocks.\n- It supports resource discovery through the well-known URI /.well-known/core.\n- Security is provided by DTLS (Datagram Transport Layer Security).\n\nApplications of CoAP are smart home devices, smart lighting control, industrial sensor monitoring, agricultural monitoring, wearable devices and building automation systems."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain about IEEE 802.15.4.",
  "a": "IEEE 802.15.4 is a standard for Low Rate Wireless Personal Area Networks (LR-WPAN). It defines the physical layer (PHY) and medium access control layer (MAC) for low cost, low power and low data rate wireless communication over short distances. It is the foundation for Zigbee and 6LoWPAN.\n\nPhysical layer (PHY):\n- It operates in three frequency bands: 868 MHz in Europe, 915 MHz in America and 2.4 GHz worldwide.\n- Data rates are 20 kbps in the 868 MHz band, 40 kbps in the 915 MHz band and 250 kbps in the 2.4 GHz band.\n- It uses direct sequence spread spectrum (DSSS) for reliable communication.\n- The 2.4 GHz band provides 16 channels, the 915 MHz band provides 10 channels and the 868 MHz band provides 1 channel.\n- Typical range is 10 to 100 metres.\n\nMedium Access Control layer (MAC):\n- It controls how devices access the shared wireless channel.\n- It uses CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) to avoid collisions.\n- In beacon enabled mode, a coordinator sends periodic beacons and devices use slotted CSMA/CA with Guaranteed Time Slots (GTS) for time critical data.\n- In non-beacon mode, devices use unslotted CSMA/CA.\n- MAC frame types are beacon frames, data frames, acknowledgement frames and MAC command frames.\n\nDevice types in IEEE 802.15.4:\n- Full Function Device (FFD): it can act as a coordinator or router and can communicate with any device.\n- Reduced Function Device (RFD): it has limited capability, can only communicate with an FFD, and is used as a simple end device like a sensor.\n- PAN coordinator: an FFD that starts and manages the network.\n\nNetwork topologies:\n- Star topology: all devices communicate through a central PAN coordinator.\n- Peer to peer topology: devices can communicate directly with each other, which also allows mesh networking.\n\nSecurity in IEEE 802.15.4:\n- It provides security services like data encryption using AES, data authentication and access control.\n- Security is implemented at the MAC layer using security suites.\n\nApplications of IEEE 802.15.4 are home automation, industrial monitoring, healthcare sensors, agricultural monitoring and smart metering. Its main limitation is low data rate, so it is not suitable for video or high speed data transfer."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "Explain about PicoNet.",
  "a": "A piconet is the basic unit of a Bluetooth network. It is a small ad-hoc network formed by Bluetooth devices that are within radio range of each other.\n\nStructure of a piconet:\n- A piconet consists of one master device and up to seven active slave devices.\n- The master device initiates the connection and controls the communication.\n- The master decides the frequency hopping sequence and the timing of the network, and all slaves synchronise with the master.\n- In addition to seven active slaves, up to 255 parked slaves can remain connected but inactive. Parked slaves do not participate in communication until the master activates them.\n\nWorking of a piconet:\n- When a Bluetooth device wants to communicate, it pages nearby devices and forms a piconet as the master.\n- Communication takes place in time slots. The master transmits in even slots and slaves transmit in odd slots, so collisions are avoided.\n- A slave can communicate only with the master, not directly with another slave. If two slaves need to communicate, the data goes through the master.\n- The master can switch roles with a slave if required, which is called master-slave switch.\n\nScatternet:\n- Two or more piconets can be connected to form a scatternet.\n- A device that belongs to two piconets acts as a bridge. For example, a device can be a slave in one piconet and a master in another piconet.\n- Scatternets extend the coverage and allow more devices to communicate.\n\nAdvantages of piconet:\n- It is formed automatically without any fixed infrastructure.\n- It consumes low power, which is suitable for battery operated devices.\n- It supports both voice and data communication.\n\nLimitations of piconet:\n- Only seven active slaves are allowed at a time.\n- The range is limited to about 10 metres.\n- Data rate is low compared to Wi-Fi.\n\nApplications of piconet are connecting a phone to a headset, a laptop to a mouse, health sensors to a mobile phone and devices in a smart home."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain about XMPP.",
  "a": "XMPP (Extensible Messaging and Presence Protocol) is an open, XML based communication protocol used for instant messaging, presence information and general message exchange. It was originally called Jabber and is standardised by the IETF.\n\nArchitecture of XMPP:\n- XMPP follows the client-server architecture. A client connects to its own XMPP server, and servers communicate with each other to deliver messages between users on different servers.\n- It is decentralised, which means anyone can run their own XMPP server, similar to email.\n- Each user is identified by a Jabber ID (JID), for example user@example.com/mobile, where user@example.com is the bare JID and mobile is the resource showing the device.\n\nWorking of XMPP:\n- Communication takes place through XML streams. The client opens a long lived XML stream with the server.\n- All information is exchanged as XML stanzas, which are small XML elements.\n\nThree types of stanzas in XMPP:\n- Message stanza: used for sending chat messages, alerts and notifications. It uses the body element to carry text.\n- Presence stanza: used to show the availability status of a user, such as online, away or offline. It is also used for subscription requests to see another user's presence.\n- IQ (Info/Query) stanza: used for request-response communication, such as getting a roster (contact list), setting account information or querying server features.\n\nImportant features of XMPP:\n- It is an open standard, so it is not controlled by any single company.\n- It is extensible through XMPP Extension Protocols (XEPs), which add features like multi-user chat, file transfer, voice and video calls and IoT messaging.\n- It supports security through TLS encryption and SASL authentication.\n- It supports federation, so users on different servers can communicate with each other.\n- It supports presence information, so users can see whether their contacts are online.\n\nApplications of XMPP are instant messaging applications like Google Talk (earlier) and WhatsApp (which used a modified XMPP), online gaming, customer support chat, IoT device messaging, alert systems and collaborative tools."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Explain about mobile wireless sensor networks.",
  "a": "In a mobile wireless sensor network (MWSN), the sensor nodes move — they are carried by people, animals, vehicles or robots — instead of staying fixed after deployment.\n\nArchitecture: mobile nodes sense their surroundings and exchange data with each other and with static sinks or gateways whenever they come within range. Because nodes move in and out of range, connections are intermittent and the network must store data and forward it when a link becomes available.\n\nCharacteristics and challenges:\n- Dynamic topology — routes keep changing, so routing must adapt continuously.\n- Localization — the network must track where nodes are, since position affects the sensed data.\n- Intermittent connectivity — data delivery is delayed and opportunistic rather than continuous.\n- Energy limits — as with all WSNs, battery life is a major constraint.\n\nApplications: wildlife tracking, battlefield surveillance, vehicular traffic sensing, patient monitoring with wearable sensors, and ocean monitoring with floating sensors."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain how data is managed in cloud (D BaaS).",
  "a": "DBaaS (Database as a Service) is a cloud service model in which the cloud provider manages the database system, and the user only uses the database without worrying about installation, maintenance and administration. Data management in the cloud through DBaaS works as follows:\n\nHow data is managed in DBaaS:\n- Data storage: the user's data is stored in databases hosted on the cloud provider's servers. The data can be structured (SQL databases like MySQL, PostgreSQL, Oracle) or unstructured (NoSQL databases like MongoDB, Cassandra, DynamoDB).\n- Provisioning: the user can create a database instance in minutes by selecting the database type, size and region, without buying hardware or installing software.\n- Automated backup: the provider automatically takes regular backups of the data, so data can be restored to any point in time in case of accidental deletion or failure.\n- Replication: data is copied to multiple servers and data centres. If one server fails, another copy is available, which gives high availability and fault tolerance.\n- Scaling: when data or traffic grows, storage and computing power can be increased automatically (vertical scaling) or by adding more servers (horizontal scaling). When demand reduces, resources are scaled down to save cost.\n- Security management: the provider manages encryption of data at rest and in transit, firewalls, access control and authentication. The user controls who can access their own database through passwords, roles and permissions.\n- Patching and updates: the provider applies database software patches, security updates and version upgrades automatically, so the user always works on a secure and updated system.\n- Monitoring and performance tuning: the provider monitors database performance, query speed, storage usage and server health, and provides dashboards and alerts to the user.\n- Multi-tenancy: the same physical infrastructure serves many users, but each user's data is kept logically separate and private.\n- Disaster recovery: data is replicated across geographically separate regions, so even if one data centre fails completely, the database can be recovered from another region.\n\nAdvantages of managing data through DBaaS:\n- No need to buy hardware or hire database administrators.\n- Pay as you go pricing, so the user pays only for the storage and computing actually used.\n- High availability and reliability due to replication and automated failover.\n- Easy scaling for growing applications.\n- Fast deployment of new databases.\n\nChallenges of DBaaS:\n- The user has less control over the database configuration compared to an on-premise database.\n- Data privacy and security depend on the provider, so trust and compliance are important.\n- Network latency can affect performance because the database is accessed over the internet.\n- Vendor lock-in makes it difficult to move data from one provider to another.\n\nExamples of DBaaS are Amazon RDS, Google Cloud SQL, Microsoft Azure SQL Database, MongoDB Atlas and Firebase Realtime Database."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain the NIST visual model of cloud computing with a neat sketch.",
  "a": "The National Institute of Standards and Technology (NIST) defines cloud computing as a model for enabling convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort or service provider interaction.\n\nThe NIST visual model of cloud computing has three main parts, which are normally shown as a layered diagram:\n\nFive essential characteristics:\n- On-demand self-service: a user can obtain computing resources automatically whenever required, without human interaction with the provider.\n- Broad network access: services are available over the network through standard devices like mobile phones, laptops and tablets.\n- Resource pooling: the provider's resources like storage, processing and memory are pooled to serve many users, with resources assigned dynamically as per demand.\n- Rapid elasticity: resources can be scaled up or down quickly according to demand, appearing unlimited to the user.\n- Measured service: resource usage is monitored, controlled and reported, so both provider and user can see exactly what is used and pay accordingly.\n\nThree service models:\n- Software as a Service (SaaS): the user uses complete applications over the internet, for example Gmail.\n- Platform as a Service (PaaS): the user gets a platform to develop and deploy applications, for example Google App Engine.\n- Infrastructure as a Service (IaaS): the user gets basic infrastructure like virtual machines and storage, for example Amazon EC2.\n\nFour deployment models:\n- Public cloud: services are open to the general public over the internet.\n- Private cloud: services are used exclusively by a single organisation.\n- Community cloud: services are shared by several organisations with common interests.\n- Hybrid cloud: a combination of public and private clouds bound together by standard technology.\n\nNeat sketch of the NIST visual model (described as a layered diagram):\nThe diagram is drawn as a set of layers stacked one above the other.\nThe top layer is labelled Cloud Service Models and contains three boxes side by side: SaaS, PaaS and IaaS.\nThe middle layer is labelled Essential Characteristics and contains five boxes side by side: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity and Measured service.\nThe bottom layer is labelled Deployment Models and contains four boxes side by side: Public cloud, Private cloud, Community cloud and Hybrid cloud.\nBelow the layers, a base box is labelled Common Characteristics, showing that all models share virtualisation, standardisation and automation.\nArrows from the user at the top point down to the service models, showing that users access cloud services through the network, and the layers below support those services.\n\nImportance of the NIST model:\n- It gives a common definition and vocabulary for cloud computing used all over the world.\n- It helps users compare cloud services and select the right service and deployment model.\n- It separates the concerns of characteristics, services and deployment, making cloud architecture easy to understand."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain the components of IoT network.",
  "a": "An IoT network connects physical devices to applications through several components working together:\n- Sensors and devices — collect data from the environment (temperature, motion, location) and, through actuators, act on it.\n- Gateway — collects data from nearby devices, translates between protocols (for example, Zigbee or Bluetooth to Wi-Fi or cellular) and forwards it to the cloud.\n- Connectivity / network — the communication links themselves: short-range (Wi-Fi, Bluetooth, Zigbee) and long-range (cellular, LoRa, NB-IoT).\n- Cloud platform — stores, processes and analyses the data, runs the application logic and takes decisions.\n- Application / user interface — dashboards and apps through which users view results and control devices.\n- Management and security — device registration, monitoring, authentication and encryption, running across all the other components.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 135\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"10\" y=\"40\" width=\"75\" height=\"40\" rx=\"8\"/><rect x=\"100\" y=\"40\" width=\"75\" height=\"40\" rx=\"8\"/><rect x=\"190\" y=\"40\" width=\"75\" height=\"40\" rx=\"8\"/><rect x=\"280\" y=\"40\" width=\"70\" height=\"40\" rx=\"8\"/></g><rect x=\"190\" y=\"95\" width=\"75\" height=\"26\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"85\" y1=\"60\" x2=\"92\" y2=\"60\"/><line x1=\"175\" y1=\"60\" x2=\"182\" y2=\"60\"/><line x1=\"265\" y1=\"60\" x2=\"272\" y2=\"60\"/><line x1=\"227\" y1=\"80\" x2=\"227\" y2=\"95\" stroke-dasharray=\"4 3\"/></g><g fill=\"#64748b\"><polygon points=\"92,60 84,55 84,65\"/><polygon points=\"182,60 174,55 174,65\"/><polygon points=\"272,60 264,55 264,65\"/></g><g fill=\"#1e293b\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"47\" y=\"64\">Sensing</text><text x=\"137\" y=\"64\">Connectivity</text><text x=\"227\" y=\"58\">Data</text><text x=\"227\" y=\"72\">processing</text><text x=\"315\" y=\"58\">User</text><text x=\"315\" y=\"72\">interface</text><text x=\"227\" y=\"112\">Actuators</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the role of IoT in automation of the healthcare applications in detail by choosing appropriate case study.",
  "a": "The Internet of Things plays a major role in automating healthcare applications by connecting medical devices, patients and doctors through the internet. Automation reduces manual work, gives continuous monitoring, enables early detection of problems and improves the quality of patient care.\n\nRole of IoT in healthcare automation:\n- Remote patient monitoring: wearable sensors continuously measure heart rate, blood pressure, blood oxygen level, temperature and ECG, and send the data to doctors without the patient visiting the hospital.\n- Automated alerts: when a vital parameter crosses a safe limit, the system automatically sends an alert to the doctor, nurse or family members.\n- Smart hospitals: IoT automates asset tracking of wheelchairs, oxygen cylinders and medicines, room temperature and lighting control, and staff management.\n- Medication management: smart pill dispensers remind patients to take medicines on time and inform caregivers if a dose is missed.\n- Chronic disease management: patients with diabetes, heart disease or asthma are monitored continuously at home, reducing hospital visits.\n- Emergency response: fall detection devices for elderly patients automatically call for help when a fall is detected.\n- Data based treatment: the large amount of collected health data helps doctors analyse trends and take better treatment decisions.\n\nCase study: Remote cardiac monitoring system for heart patients:\n- Problem: heart patients need continuous monitoring, but staying in hospital for a long time is expensive and uncomfortable, and problems between hospital visits often go unnoticed.\n- Solution: the patient wears an IoT device containing ECG, heart rate and blood oxygen sensors. A microcontroller collects the sensor data and sends it through Wi-Fi or Bluetooth to a gateway, which forwards it to a cloud platform.\n- Working: the cloud platform stores the data and analyses it continuously. Normal readings are shown on a doctor's dashboard. If the heart rate or ECG shows an abnormal pattern, the system automatically generates an alert through SMS and mobile notification to the doctor and family.\n- Automation features: medicine reminders are sent automatically, weekly health reports are generated without manual effort, and emergency ambulance service is alerted if the patient presses the emergency button or if a critical value is detected.\n- Benefits observed: early detection of cardiac problems, reduction in hospital readmissions, lower treatment cost, continuous care for patients living in remote areas, and peace of mind for family members.\n- Challenges: data privacy and security of health records, need for reliable internet connectivity, accuracy of low cost sensors, and acceptance of technology by elderly patients.\n\nConclusion: IoT automation in healthcare changes treatment from reactive to preventive. With a suitable case study like remote cardiac monitoring, it is clear that IoT saves lives, reduces cost and makes healthcare available anytime and anywhere."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the role of IoT in smart energy automation.",
  "a": "Smart energy automation means using IoT technology to automatically monitor, control and optimise the generation, distribution and consumption of energy. IoT makes energy systems intelligent by connecting meters, appliances, grids and renewable sources through the internet.\n\nRole of IoT in smart energy automation:\n\nSmart metering:\n- Smart meters automatically measure electricity, gas and water consumption and send readings to the utility company without manual meter reading.\n- Consumers can see their real time usage on a mobile app and control their consumption.\n- Utilities can detect theft, leakage and faults quickly from abnormal meter data.\n\nSmart grid:\n- IoT sensors on transformers, feeders and substations continuously monitor voltage, current and load.\n- The grid automatically balances supply and demand by shifting load and controlling distributed sources.\n- Faults are detected and located automatically, and power is rerouted to reduce outage time, which is called self-healing.\n\nDemand response automation:\n- During peak hours, the system automatically reduces the load of non-critical appliances like water heaters and air conditioners, based on consumer settings.\n- Consumers get lower bills and the grid avoids overloading.\n\nHome energy management:\n- Smart plugs, smart thermostats and smart appliances monitor their own energy use.\n- The system automatically switches off unused devices, adjusts air conditioning based on room occupancy, and schedules washing machines and water heaters to run during low tariff hours.\n\nIntegration of renewable energy:\n- IoT monitors solar panels and wind turbines for power output, panel temperature and faults.\n- The system automatically decides whether to use solar power, store energy in batteries or draw power from the grid.\n- Excess solar power is automatically fed back to the grid.\n\nSmart street lighting:\n- Street lights with light and motion sensors switch on only when needed and dim automatically when roads are empty, saving large amounts of energy.\n\nElectric vehicle charging:\n- IoT based charging stations monitor grid load and schedule vehicle charging during off-peak hours.\n- Users can locate free charging stations and pay automatically through apps.\n\nBenefits of IoT in smart energy automation:\n- Reduced energy wastage and lower electricity bills.\n- Better use of renewable energy sources.\n- Fewer power cuts due to automatic fault detection and self-healing.\n- Accurate billing and transparency for consumers.\n- Reduced carbon emissions.\n\nChallenges:\n- High initial cost of smart meters and sensors.\n- Security risks, because energy infrastructure is critical and must be protected from cyber attacks.\n- Need for standardisation so that devices from different companies work together.\n- Privacy concerns related to detailed energy usage data of households."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Nov 2023",
  "q": "Explain the role of IoT in smart home and health care (OR) *",
  "a": "IoT plays an important role in both smart home automation and healthcare automation. Since this question offers a choice, both areas are explained below.\n\nRole of IoT in smart home:\n- Lighting automation: smart bulbs switch on and off automatically based on time, motion or voice commands, and brightness adjusts to daylight.\n- Climate control: smart thermostats learn user preferences and adjust heating and cooling automatically, saving energy.\n- Security automation: smart door locks, video doorbells, cameras and motion sensors protect the home and send alerts to the owner's phone when intrusion is detected.\n- Appliance control: washing machines, televisions, fans and kitchen appliances can be controlled remotely through a mobile app or voice assistant.\n- Energy management: smart plugs monitor the energy used by each appliance and switch off devices that are not in use.\n- Entertainment: smart speakers and televisions are connected and controlled by voice.\n- Elderly and disabled assistance: voice controlled devices and fall detection help elderly people live independently.\n\nRole of IoT in health care:\n- Remote patient monitoring: wearable devices measure heart rate, blood pressure, blood oxygen and temperature continuously and send data to doctors.\n- Smart hospitals: IoT tracks medical equipment, manages beds, monitors medicine storage temperature and controls hospital environment automatically.\n- Medication reminders: smart pill boxes remind patients to take medicines and alert caregivers if a dose is missed.\n- Emergency response: fall detection bands and panic buttons automatically call for help during emergencies.\n- Chronic disease management: diabetic and cardiac patients are monitored at home, reducing hospital visits.\n- Telemedicine: doctors consult patients in remote villages through video calls supported by IoT diagnostic devices.\n\nCommon benefits of IoT in smart home and healthcare:\n- Automation reduces manual effort and human error.\n- Remote monitoring and control are possible from anywhere through the internet.\n- Energy and cost are saved by intelligent control.\n- Safety and quality of life improve, especially for elderly and disabled people.\n- Data collected by devices helps in better decision making.\n\nCommon challenges:\n- Security and privacy of personal and health data.\n- High initial cost of devices.\n- Dependence on reliable internet connectivity.\n- Interoperability problems between devices of different manufacturers."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the types of sensor networks.",
  "a": "Sensor networks are classified by where and how their nodes are deployed:\n- Terrestrial WSN — nodes deployed on land, for example for environmental monitoring or agriculture. Communication is usually by radio, and nodes may be placed randomly or in planned positions.\n- Underground WSN — nodes buried in soil or rock, used for mining and soil monitoring. Radio signals are weak underground, so these networks are expensive and hard to maintain.\n- Underwater WSN — nodes in oceans, rivers or lakes, using acoustic communication because radio does not travel well in water. Used for water quality monitoring and disaster warning.\n- Multimedia WSN (WMSN) — nodes with cameras and microphones that capture audio, video and images, used for surveillance and traffic monitoring.\n- Mobile WSN — nodes that move on people, vehicles, animals or robots, giving a changing topology and intermittent connectivity."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain the working principle of RFID.",
  "a": "NFC (Near Field Communication) works at 13.56 MHz by electromagnetic induction between two loop antennas placed very close together — typically within 4 cm (up to about 10 cm). When the initiator generates a radio field, the target device picks up power and data from that field.\n\nThree modes:\n1) Reader/writer — an active device (phone) reads or writes a passive tag (poster, product label).\n2) Peer-to-peer — two active devices exchange data (sharing a contact or photo).\n3) Card emulation — a phone acts like a contactless card for payments and tickets.\n\nActive devices generate their own field; passive devices (tags, cards) have no battery and are powered by the initiator's field. The tiny range is deliberate — it makes NFC naturally secure against eavesdropping and ideal for payments and pairing."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the working principle of modes of operation of NFC.",
  "a": "NFC (Near Field Communication) works at 13.56 MHz by electromagnetic induction between two loop antennas placed very close together — typically within 4 cm (up to about 10 cm). When the initiator generates a radio field, the target device picks up power and data from that field.\n\nThree modes:\n1) Reader/writer — an active device (phone) reads or writes a passive tag (poster, product label).\n2) Peer-to-peer — two active devices exchange data (sharing a contact or photo).\n3) Card emulation — a phone acts like a contactless card for payments and tickets.\n\nActive devices generate their own field; passive devices (tags, cards) have no battery and are powered by the initiator's field. The tiny range is deliberate — it makes NFC naturally secure against eavesdropping and ideal for payments and pairing."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Nov 2024",
  "q": "How would you best describe IoT? Why it has gained so much popularity in the recent years?",
  "a": "Description of IoT:\nThe Internet of Things (IoT) is a network of physical objects or things that are embedded with sensors, software, electronics and internet connectivity, allowing them to collect, exchange and act on data without human intervention. Examples of things are smart watches, smart bulbs, fitness bands, industrial machines, vehicles, home appliances and agricultural sensors. These things sense their surroundings, send data to the cloud, and receive commands to perform actions, making the physical world digitally connected and intelligent.\n\nKey characteristics that describe IoT:\n- Connectivity: every device is connected to the internet or to other devices.\n- Sensing: devices sense the environment using sensors like temperature, motion, light and humidity sensors.\n- Intelligence: data is analysed, often using cloud computing and artificial intelligence, to take smart decisions.\n- Dynamic nature: devices can change state, location and configuration automatically.\n- Heterogeneity: devices of different types, sizes and manufacturers work together in one system.\n- Security and privacy: because devices handle personal and critical data, security is an essential part of IoT.\n\nReasons for the popularity of IoT in recent years:\n- Fall in cost of sensors and hardware: sensors, microcontrollers like Arduino and Raspberry Pi, and wireless modules have become very cheap, so even small projects can use IoT.\n- Cheap and fast internet: affordable mobile data, broadband and Wi-Fi, along with 4G and 5G networks, make it easy to keep millions of devices connected.\n- Growth of cloud computing: cloud platforms provide cheap storage and processing, so device data can be stored and analysed without buying expensive servers.\n- Growth of smartphones: almost everyone has a smartphone, which acts as a controller and display for IoT devices.\n- Advances in artificial intelligence and data analytics: AI turns raw sensor data into useful predictions, like predictive maintenance in factories and health alerts for patients.\n- Demand for automation: industries want Industry 4.0 automation, homes want comfort and security, and cities want smart traffic and waste management.\n- COVID-19 effect: remote working, remote health monitoring and contactless systems increased the demand for IoT solutions.\n- Government initiatives: smart city missions, digital India programmes and agricultural modernisation encourage IoT adoption.\n- Energy and environment concerns: smart energy meters, smart lighting and precision farming help save energy and resources.\n- Availability of platforms and tools: ready made IoT platforms like Arduino, AWS IoT, Google Cloud IoT and Blynk allow even students and small companies to build IoT applications quickly.\n\nConclusion: IoT has become popular because it combines cheap hardware, cheap connectivity, powerful cloud and AI, and real human needs like comfort, safety, health and efficiency. It is changing from a new technology into a basic part of daily life."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Justify the role of IoT for automation in the agriculture field.",
  "a": "Agriculture faces problems like water shortage, unpredictable weather, labour shortage, crop diseases and low productivity. IoT justifies its role in agriculture by automating monitoring and control, which increases yield, saves resources and reduces cost.\n\nRole of IoT in agriculture automation:\n\nPrecision farming:\n- Sensors measure soil moisture, soil temperature, pH value and nutrient levels in different parts of a field.\n- Based on this data, the system applies water and fertiliser only where and when needed, instead of treating the whole field equally.\n- This increases yield and reduces wastage of water and chemicals.\n\nAutomated irrigation:\n- Soil moisture sensors continuously monitor the field and automatically switch irrigation pumps on and off.\n- Weather forecast data from the internet is combined with sensor data to avoid watering before rain.\n- This saves up to 30 to 50 percent of water compared to traditional irrigation.\n\nClimate and greenhouse automation:\n- Sensors monitor temperature, humidity, light and carbon dioxide inside greenhouses.\n- Fans, heaters, misting systems and lights are switched automatically to maintain ideal growing conditions.\n- This allows crops to grow in all seasons with better quality.\n\nCrop health monitoring and disease detection:\n- Cameras and image sensors detect colour changes in leaves that indicate disease or pest attack at an early stage.\n- Farmers receive alerts on their phones and can take action before the disease spreads.\n- Drones with cameras survey large fields quickly and spray pesticides only on affected areas.\n\nLivestock monitoring:\n- Wearable sensors on animals track their health, body temperature, activity and location.\n- Automated feeding systems provide the right amount of feed, and alerts are generated when an animal is sick.\n- This improves animal health and milk or meat production.\n\nSupply chain and storage automation:\n- Sensors in storage godowns monitor temperature and humidity to prevent grain spoilage.\n- GPS tracking of transport vehicles ensures timely delivery of produce to markets.\n- Cold chain monitoring keeps fruits, vegetables and milk fresh during transport.\n\nWeather forecasting and planning:\n- Local weather stations using IoT sensors give accurate micro-climate forecasts for a particular farm.\n- Farmers plan sowing, irrigation and harvesting based on real data instead of guesswork.\n\nJustification with benefits:\n- Higher crop yield due to timely and accurate actions.\n- Saving of water, fertiliser and pesticides, which reduces cost and protects the environment.\n- Reduced labour requirement because monitoring and irrigation are automated.\n- Better quality produce and higher income for farmers.\n- Early warning of diseases, drought and frost reduces crop loss.\n\nChallenges in agricultural IoT:\n- High initial cost for small farmers.\n- Poor internet connectivity in rural areas.\n- Need for training farmers to use the technology.\n- Maintenance of sensors in harsh field conditions.\n\nConclusion: IoT is fully justified in agriculture because it converts traditional experience based farming into data based precision farming, producing more food with fewer resources, which is essential for a growing population."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Justify the role of IoT in Smart Home applications in detail by choosing appropriate case study. * *",
  "a": "A smart home is a home in which lights, fans, appliances, security systems and climate control devices are connected to the internet and work automatically. IoT fully justifies its role in smart homes by giving comfort, safety, energy saving and help to elderly and disabled people.\n\nRole of IoT in smart home applications:\n- Lighting automation: lights switch on when a person enters a room and switch off when the room is empty, and brightness adjusts automatically.\n- Climate control: smart thermostats and air conditioners maintain comfortable temperature and save energy by learning daily routines.\n- Security automation: smart locks, cameras, video doorbells and motion sensors protect the home and alert owners about intrusion.\n- Appliance control: home appliances are switched on or off remotely through a mobile app or voice command.\n- Energy management: smart meters and plugs show energy use of each device and switch off standby devices automatically.\n- Entertainment: smart televisions and speakers are controlled by voice and connected to the internet.\n- Safety automation: smoke detectors, gas leakage sensors and water leakage sensors send alerts and can automatically shut off gas or water supply.\n\nCase study: Complete smart home automation for a working family:\n- Problem: a working couple leaves home in the morning and returns in the evening. Lights and fans are often left on, wasting electricity. They worry about the safety of their home and their elderly parent who stays alone. They also want to come back to a cool, comfortable home without keeping the air conditioner on all day.\n- IoT solution: the home is fitted with a central smart home hub connected to smart bulbs, smart plugs, a smart thermostat, a video doorbell, door and window sensors, a smart lock, smoke and gas sensors, and a voice assistant.\n- Automation in daily life: in the morning, when the family leaves and the door is locked, the system automatically switches off all lights and fans, sets the thermostat to energy saving mode and arms the security system. The video doorbell sends a notification with a photo whenever a visitor arrives, and the family can talk to the visitor and unlock the door remotely for a trusted person. In the evening, based on location, the system switches on the porch light and starts the air conditioner half an hour before the family arrives, so the home is cool on arrival. At night, motion sensors switch on dim lights automatically when the elderly parent walks to the bathroom, and a fall detection band alerts the family if a fall occurs. If the gas sensor detects leakage, it automatically closes the gas valve and sends an emergency alert.\n- Benefits observed: electricity bill reduced by about 20 to 30 percent, better security with real time alerts and remote door control, comfort due to automatic climate control, and safety and independence for the elderly parent.\n- Challenges: high initial cost of devices, dependence on Wi-Fi connectivity, privacy of camera data, and difficulty when devices from different brands do not work together.\n\nConclusion: this case study justifies the role of IoT in smart homes. It shows that a smart home is not a luxury but a practical system that saves energy, improves security, gives comfort and protects vulnerable family members."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Justify the role of IoT in health care applications in detail by choosing appropriate case study. * *",
  "a": "IoT has a very important role in healthcare because it makes medical care continuous, automatic and available outside hospitals. It justifies itself by saving lives through early detection, reducing cost, and improving treatment quality.\n\nRole of IoT in healthcare applications:\n- Continuous monitoring: wearable devices track heart rate, blood pressure, blood oxygen, blood glucose and body temperature all day and night.\n- Remote consultation: doctors examine patients in villages through telemedicine supported by IoT diagnostic devices.\n- Automated emergency response: fall detectors, panic buttons and abnormal vital alerts automatically inform doctors and ambulances.\n- Smart hospitals: IoT tracks beds, equipment, medicines and staff, and monitors operation theatre conditions automatically.\n- Medication adherence: smart pill dispensers remind patients and record whether medicines were taken.\n- Chronic disease care: diabetes, asthma and heart patients are monitored at home instead of frequent hospital visits.\n- Health data analysis: long term data helps doctors find patterns and predict health problems before they become serious.\n\nCase study: Continuous glucose monitoring and telemedicine for diabetes patients:\n- Problem: diabetes patients must check blood sugar several times a day by pricking their fingers. Many patients skip tests, so high or low sugar episodes are detected late, leading to serious complications like coma, kidney damage and eye damage.\n- IoT solution: the patient wears a small continuous glucose monitor (CGM) sensor on the arm. The sensor measures glucose in the tissue fluid every five minutes without finger pricks. The sensor sends readings through Bluetooth to the patient's smartphone, which forwards them to a cloud platform.\n- Automation in the system: the cloud platform analyses the readings continuously. If glucose goes above or below the safe range, an alert is sent automatically to the patient, family members and doctor. The system also sends automatic reminders for insulin doses and food intake, and generates weekly reports showing glucose trends.\n- Doctor's role: the doctor views the patient's glucose graphs on a dashboard and adjusts insulin dosage through telemedicine consultation, without the patient travelling to the hospital.\n- Emergency handling: if glucose falls to a dangerously low level at night, the system sounds an alarm on the patient's phone and sends an emergency message to family members.\n- Benefits observed: better sugar control because problems are caught in minutes instead of days, fewer hospital emergency visits, less pain because finger pricks are reduced, better quality of life for patients, and lower long term treatment cost.\n- Challenges: cost of CGM sensors, need for regular sensor replacement, data privacy of health records, dependence on smartphone and internet, and sensor accuracy issues.\n\nConclusion: this case study justifies the role of IoT in healthcare. It changes diabetes care from occasional manual testing to continuous automatic monitoring, proving that IoT saves lives, reduces cost and brings quality healthcare to the patient's home."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List and explain M2M Sensor nodes.",
  "a": "M2M (Machine to Machine) communication means direct communication between machines without human involvement. In an M2M system, sensor nodes are the machines that sense the environment and exchange data with each other and with the application server.\n\nComponents of an M2M sensor node:\n- Sensing unit: it contains sensors that measure physical quantities like temperature, humidity, pressure, light, motion and gas.\n- Processing unit: it contains a microcontroller that processes sensed data, runs the communication protocol and takes simple decisions.\n- Transceiver unit: it contains a radio that sends and receives data wirelessly using technologies like Zigbee, Bluetooth, LoRa or cellular networks.\n- Power unit: it supplies energy, normally through a battery, and in some cases through solar panels or energy harvesting.\n\nTypes of M2M sensor nodes based on their role:\n\n1. End nodes (leaf nodes):\n- These are simple sensor nodes placed in the environment to sense data.\n- They have limited processing power and battery, and they sleep most of the time to save energy.\n- They send their data to a nearby router or gateway node.\n- Example: a soil moisture sensor in a field.\n\n2. Router nodes (relay nodes):\n- These nodes receive data from end nodes and forward it towards the gateway.\n- They have more processing power and remain awake longer than end nodes.\n- They extend the coverage of the network by multi hop communication.\n- Example: a pole mounted node in a smart street lighting system that forwards data from nearby lamp sensors.\n\n3. Gateway nodes (sink nodes):\n- These nodes collect data from the whole network and forward it to the internet or to a central server.\n- They connect the sensor network to other networks like Wi-Fi, Ethernet or cellular networks.\n- They have higher processing power and are usually mains powered.\n- Example: a home gateway that collects data from all smart home sensors and sends it to the cloud.\n\n4. Coordinator nodes:\n- In Zigbee based M2M networks, the coordinator starts the network, allows new nodes to join and manages network addresses.\n- There is normally one coordinator per network.\n\nTypes of M2M sensor nodes based on deployment:\n\n- Terrestrial nodes: deployed on land for agriculture, traffic and environmental monitoring.\n- Underground nodes: buried under soil for mining and soil monitoring.\n- Underwater nodes: deployed in water for ocean and river monitoring using acoustic communication.\n- Mobile nodes: mounted on vehicles, animals or people, so their position keeps changing.\n- Multimedia nodes: equipped with cameras and microphones for video surveillance and monitoring.\n\nCharacteristics of M2M sensor nodes:\n- They are small, low cost and low power devices.\n- They work without human intervention.\n- They are self-organising and can join or leave the network automatically.\n- They communicate using standard M2M protocols like MQTT, CoAP and 6LoWPAN."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 3,
  "y": "May/June 2023, Nov 2023, Nov 2024",
  "q": "List the features of AMQP.",
  "a": "AMQP is an open standard for message queuing. Its features:\n- Reliable message delivery with acknowledgements\n- Message routing through exchanges, bindings and queues\n- Interoperability between different vendors' systems\n- Message persistence (messages survive restarts)\n- Security through SASL authentication and TLS encryption\n- Support for transactions"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 3,
  "y": "Mar/Apr 2024, May/June 2023, Nov 2024",
  "q": "What is cloud computing?",
  "a": "Cloud computing is the on-demand delivery of computing resources — servers, storage, databases, networking and software — over the internet on a pay-as-you-go basis. Instead of owning hardware, users access a shared pool of configurable resources that can be rapidly provisioned and released with minimal management effort."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "May/June 2023, Oct/Nov 2025",
  "q": "Define IoT.",
  "a": "The Internet of Things is a network of physical objects — devices, vehicles, appliances — embedded with sensors, software and connectivity that collect and exchange data over the internet, enabling them to be monitored and controlled remotely without human intervention."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2026, May/June 2023",
  "q": "Define MQTT.",
  "a": "MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol designed for constrained devices and low bandwidth, unreliable networks. A publisher sends messages to topics on a central broker, and the broker forwards them to all subscribers of those topics.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 150\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"10\" y=\"55\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"135\" y=\"55\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"260\" y=\"20\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"260\" y=\"90\" width=\"90\" height=\"40\" rx=\"8\"/></g><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"100\" y1=\"75\" x2=\"127\" y2=\"75\"/><line x1=\"225\" y1=\"68\" x2=\"252\" y2=\"44\"/><line x1=\"225\" y1=\"82\" x2=\"252\" y2=\"96\"/></g><g fill=\"#64748b\"><polygon points=\"127,75 117,69 117,81\"/><polygon points=\"252,44 241,42 244,53\"/><polygon points=\"252,96 241,94 244,85\"/></g><g fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"55\" y=\"79\">Publisher</text><text x=\"180\" y=\"79\">Broker</text><text x=\"305\" y=\"44\">Subscriber 1</text><text x=\"305\" y=\"114\">Subscriber 2</text></g><text x=\"180\" y=\"40\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">topic: home/temperature</text></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2024, Nov 2023",
  "q": "List different types of Sensor Networks.",
  "a": "- Terrestrial sensor networks: nodes deployed on land for environmental and agricultural monitoring.\n- Underground sensor networks: nodes buried below the surface for soil and mining monitoring.\n- Underwater sensor networks: nodes deployed in water using acoustic communication.\n- Multimedia sensor networks: nodes with cameras and microphones for audio and video monitoring.\n- Mobile sensor networks: nodes that move on vehicles, animals or people."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "Dec 2022, Nov 2024",
  "q": "List the applications of M2M.",
  "a": "- Smart metering (electricity, gas, water)\n- Fleet and vehicle tracking\n- Remote patient health monitoring\n- Industrial automation and predictive maintenance\n- Smart agriculture (soil and weather sensing)\n- ATM and point-of-sale connectivity\n- Smart-city services such as street lighting and waste management"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2026, Oct/Nov 2025",
  "q": "List the components of IoT.",
  "a": "The main components are:\n- Sensors (collect data)\n- Connectivity (networks that carry data)\n- Data processing (software that analyses data and decides actions)\n- User interface (apps and dashboards for users)\n- Actuators (devices that act on the physical world, such as motors and switches)"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "Dec 2022, Nov 2024",
  "q": "List the features of IEEE 802.15.4.",
  "a": "IEEE 802.15.4 is the low-rate wireless personal area network (LR-WPAN) standard. Features:\n- Low power consumption and low cost\n- Data rates of 250 kbps in the 2.4 GHz band (also 20 and 40 kbps in the 868/915 MHz bands)\n- Star and peer-to-peer topologies\n- Carrier-sense multiple access with collision avoidance (CSMA/CA)\n- It is the physical and MAC layer basis for Zigbee and 6LoWPAN"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "Dec 2022, Nov 2023",
  "q": "State the importance of cloud computing. *",
  "a": "Cloud computing:\n- Removes the need to buy and maintain hardware, cutting costs to pay-as-you-go\n- Scales up or down on demand\n- Is accessible from anywhere with an internet connection\n- Provides automatic backup and disaster recovery\n- Lets users deploy applications quickly without managing infrastructure"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2024, Oct/Nov 2025",
  "q": "What are the key features of M2M?",
  "a": "AMQP is an open standard for message queuing. Its features:\n- Reliable message delivery with acknowledgements\n- Message routing through exchanges, bindings and queues\n- Interoperability between different vendors' systems\n- Message persistence (messages survive restarts)\n- Security through SASL authentication and TLS encryption\n- Support for transactions"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 2,
  "y": "Dec 2022, Nov 2024",
  "q": "What is cloud simulator?",
  "a": "A cloud simulator is software that models cloud data centres, virtual machines, networks and resource-allocation policies on a single computer. The best-known example is CloudSim. It lets researchers and students test scheduling, load-balancing and energy policies and measure their results without paying for real cloud infrastructure."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "Define IoT and list any three features.",
  "a": "IoT (Internet of Things) is a network of physical objects embedded with sensors, software and internet connectivity that collect and exchange data without human intervention.\nThree features of IoT are:\n- Connectivity: devices are connected to the internet or to each other.\n- Sensing: devices sense their surroundings using sensors.\n- Intelligence: collected data is analysed to take automatic decisions."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Define Message Queue Telemetry Transport (MQTT).",
  "a": "Message Queue Telemetry Transport (MQTT) is a lightweight messaging protocol based on the publish-subscribe model. Clients publish messages to topics on a broker, and the broker delivers them to subscribed clients. It uses a small header, works well on low bandwidth networks, and supports three quality of service levels for message delivery.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 150\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"10\" y=\"55\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"135\" y=\"55\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"260\" y=\"20\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"260\" y=\"90\" width=\"90\" height=\"40\" rx=\"8\"/></g><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"100\" y1=\"75\" x2=\"127\" y2=\"75\"/><line x1=\"225\" y1=\"68\" x2=\"252\" y2=\"44\"/><line x1=\"225\" y1=\"82\" x2=\"252\" y2=\"96\"/></g><g fill=\"#64748b\"><polygon points=\"127,75 117,69 117,81\"/><polygon points=\"252,44 241,42 244,53\"/><polygon points=\"252,96 241,94 244,85\"/></g><g fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"55\" y=\"79\">Publisher</text><text x=\"180\" y=\"79\">Broker</text><text x=\"305\" y=\"44\">Subscriber 1</text><text x=\"305\" y=\"114\">Subscriber 2</text></g><text x=\"180\" y=\"40\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">topic: home/temperature</text></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define RFID.",
  "a": "RFID (Radio Frequency Identification) is a wireless technology that identifies objects using radio waves. An RFID system consists of a tag attached to the object, a reader that sends radio signals, and an antenna. When the tag comes in range of the reader, it sends back its stored identification data without needing direct contact or line of sight."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "Define actuator.",
  "a": "An actuator is a device that converts an electrical signal into a physical action in an IoT system. While a sensor senses the environment, an actuator acts on it, for example a motor rotating, a valve opening, a relay switching on a light, or a buzzer sounding an alarm."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "Define secure MQTT.",
  "a": "Secure MQTT is MQTT communication protected by security mechanisms. It uses TLS/SSL encryption to protect messages from eavesdropping, username and password authentication to verify clients, and access control lists to restrict topics. Secure MQTT normally uses port 8883 instead of the standard MQTT port 1883.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 150\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"10\" y=\"55\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"135\" y=\"55\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"260\" y=\"20\" width=\"90\" height=\"40\" rx=\"8\"/><rect x=\"260\" y=\"90\" width=\"90\" height=\"40\" rx=\"8\"/></g><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"100\" y1=\"75\" x2=\"127\" y2=\"75\"/><line x1=\"225\" y1=\"68\" x2=\"252\" y2=\"44\"/><line x1=\"225\" y1=\"82\" x2=\"252\" y2=\"96\"/></g><g fill=\"#64748b\"><polygon points=\"127,75 117,69 117,81\"/><polygon points=\"252,44 241,42 244,53\"/><polygon points=\"252,96 241,94 244,85\"/></g><g fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"55\" y=\"79\">Publisher</text><text x=\"180\" y=\"79\">Broker</text><text x=\"305\" y=\"44\">Subscriber 1</text><text x=\"305\" y=\"114\">Subscriber 2</text></g><text x=\"180\" y=\"40\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">topic: home/temperature</text></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List IEEE 802.15.4 variants.",
  "a": "- IEEE 802.15.4 (2003): the original standard for low rate wireless personal area networks.\n- IEEE 802.15.4a: adds ultra wideband (UWB) and chirp spread spectrum for high accuracy location.\n- IEEE 802.15.4c: adds the 780 MHz band for use in China.\n- IEEE 802.15.4d: adds the 950 MHz band for use in Japan.\n- IEEE 802.15.4e: improves the MAC layer with time slotted channel hopping (TSCH) for industrial applications.\n- IEEE 802.15.4f: supports active RFID systems.\n- IEEE 802.15.4g: supports smart utility networks for smart metering.\n- IEEE 802.15.4z: enhances ultra wideband with better ranging accuracy and security."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List M2M sensor nodes.",
  "a": "- End nodes: simple sensor nodes that sense data and send it to nearby nodes.\n- Router nodes: nodes that receive data from end nodes and forward it towards the gateway.\n- Gateway nodes: nodes that collect data from the whole network and send it to the internet or central server.\n- Coordinator nodes: nodes that start the network and manage joining of new nodes."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "List advantage and disadvantages of IoT.",
  "a": "Advantages of IoT:\n- Automation reduces manual work and human error.\n- Remote monitoring and control are possible from anywhere.\n- Better efficiency, energy saving and cost reduction.\n- Improved safety and quality of life, especially in healthcare.\nDisadvantages of IoT:\n- Security and privacy risks because devices collect personal data.\n- High initial cost of devices and infrastructure.\n- Dependence on internet connectivity.\n- Complexity due to devices from different manufacturers not working together."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List any three advantages of IoT.",
  "a": "- Automation: devices work automatically without human effort, saving time and reducing errors.\n- Remote monitoring and control: users can monitor and control devices from anywhere through the internet.\n- Cost and energy saving: smart systems optimise the use of resources like electricity and water, reducing bills."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List different types of Cloud Simulators.",
  "a": "- CloudSim: the most popular simulator for modelling cloud data centres, virtual machines and resource allocation policies.\n- CloudAnalyst: built on CloudSim, used to simulate large scale cloud applications and study load balancing across regions.\n- GreenCloud: focuses on energy consumption of cloud data centres and helps in designing energy efficient clouds.\n- iCanCloud: simulates large cloud infrastructures and is used to study cost and performance trade-offs.\n- SimGrid: a general toolkit for simulating distributed systems including grids and clouds."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "List features of XMPP.",
  "a": "- It is an open standard protocol based on XML.\n- It is decentralised, so anyone can run their own server.\n- It supports real time messaging and presence information.\n- It is extensible through XMPP Extension Protocols (XEPs).\n- It supports federation, so users on different servers can communicate.\n- It provides security through TLS encryption and SASL authentication."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "List out any three features of IoT.",
  "a": "- Connectivity: IoT devices connect to the internet and to each other to exchange data.\n- Heterogeneity: devices of different types, sizes and manufacturers work together in one system.\n- Dynamic nature: IoT devices can change their state, location and configuration automatically."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List the applications of NFC.",
  "a": "- Contactless payment using mobile phones and cards.\n- Access control for offices, hotels and public transport tickets.\n- Pairing of devices like Bluetooth headsets by simply touching them.\n- Smart posters and advertisements that give information when a phone is tapped.\n- Healthcare applications like patient identification bands.\n- Data sharing between two phones by tapping them together."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "List the applications of WSN.",
  "a": "- Environmental monitoring of forests, rivers, air quality and weather.\n- Military surveillance and battlefield monitoring.\n- Healthcare monitoring of patients using wearable sensors.\n- Agriculture monitoring of soil moisture, temperature and crop health.\n- Industrial monitoring of machines, pipelines and structural health of buildings.\n- Smart cities for traffic monitoring, waste management and street lighting."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "List the applications of XMPP.",
  "a": "- Instant messaging applications and chat services.\n- Presence based services showing whether users are online or offline.\n- Multi-user group chat rooms.\n- IoT device messaging and sensor data exchange.\n- Online gaming communication between players.\n- Customer support chat and alert notification systems."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "List the applications of ZIGBEE.",
  "a": "- Home automation for lighting, fans, door locks and appliances.\n- Smart energy management and smart metering.\n- Industrial automation and monitoring.\n- Healthcare monitoring using wearable sensors.\n- Smart lighting systems in buildings and streets.\n- Agricultural monitoring and retail inventory management.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 270\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#64748b\" stroke-width=\"1.5\"><line x1=\"70\" y1=\"45\" x2=\"30\" y2=\"15\"/><line x1=\"70\" y1=\"45\" x2=\"110\" y2=\"15\"/><line x1=\"70\" y1=\"45\" x2=\"30\" y2=\"75\"/><line x1=\"70\" y1=\"45\" x2=\"110\" y2=\"75\"/><line x1=\"70\" y1=\"105\" x2=\"40\" y2=\"140\"/><line x1=\"70\" y1=\"105\" x2=\"100\" y2=\"140\"/><line x1=\"40\" y1=\"140\" x2=\"25\" y2=\"168\"/><line x1=\"40\" y1=\"140\" x2=\"55\" y2=\"168\"/><line x1=\"100\" y1=\"140\" x2=\"85\" y2=\"168\"/><line x1=\"100\" y1=\"140\" x2=\"115\" y2=\"168\"/><line x1=\"30\" y1=\"210\" x2=\"70\" y2=\"190\"/><line x1=\"70\" y1=\"190\" x2=\"110\" y2=\"210\"/><line x1=\"30\" y1=\"210\" x2=\"50\" y2=\"240\"/><line x1=\"110\" y1=\"210\" x2=\"90\" y2=\"240\"/><line x1=\"50\" y1=\"240\" x2=\"90\" y2=\"240\"/><line x1=\"70\" y1=\"190\" x2=\"50\" y2=\"240\"/><line x1=\"70\" y1=\"190\" x2=\"90\" y2=\"240\"/></g><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><circle cx=\"30\" cy=\"15\" r=\"9\"/><circle cx=\"110\" cy=\"15\" r=\"9\"/><circle cx=\"30\" cy=\"75\" r=\"9\"/><circle cx=\"110\" cy=\"75\" r=\"9\"/><circle cx=\"40\" cy=\"140\" r=\"10\"/><circle cx=\"100\" cy=\"140\" r=\"10\"/><circle cx=\"25\" cy=\"168\" r=\"8\"/><circle cx=\"55\" cy=\"168\" r=\"8\"/><circle cx=\"85\" cy=\"168\" r=\"8\"/><circle cx=\"115\" cy=\"168\" r=\"8\"/><circle cx=\"30\" cy=\"210\" r=\"9\"/><circle cx=\"70\" cy=\"190\" r=\"9\"/><circle cx=\"110\" cy=\"210\" r=\"9\"/><circle cx=\"50\" cy=\"240\" r=\"9\"/><circle cx=\"90\" cy=\"240\" r=\"9\"/></g><circle cx=\"70\" cy=\"45\" r=\"14\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><circle cx=\"70\" cy=\"105\" r=\"12\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"70\" y=\"49\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><text x=\"70\" y=\"109\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><g font-size=\"11\" fill=\"#1e293b\"><text x=\"145\" y=\"35\" font-weight=\"bold\">Star</text><text x=\"145\" y=\"52\">All devices link to one</text><text x=\"145\" y=\"67\">coordinator</text><text x=\"145\" y=\"125\" font-weight=\"bold\">Tree (cluster-tree)</text><text x=\"145\" y=\"142\">Routers extend the network</text><text x=\"145\" y=\"157\">in branches</text><text x=\"145\" y=\"210\" font-weight=\"bold\">Mesh</text><text x=\"145\" y=\"227\">Devices route for each other,</text><text x=\"145\" y=\"242\">self-healing</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List the features of Advance Message Queuing Protocol.",
  "a": "- It is an open standard for message oriented middleware.\n- It provides reliable message delivery with acknowledgements.\n- It supports flexible routing through exchanges, queues and bindings.\n- It supports message persistence, so messages survive broker restarts.\n- It provides security through SASL authentication and TLS encryption.\n- It supports transactions for grouping messages into a single unit."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "List the features of cloud computing. *",
  "a": "The five essential features of cloud computing as per NIST are:\n- On-demand self-service: users can get computing resources automatically whenever needed.\n- Broad network access: services are available over the network through phones, tablets and laptops.\n- Resource pooling: provider resources are pooled to serve many users and assigned dynamically.\n- Rapid elasticity: resources can be scaled up or down quickly as per demand.\n- Measured service: usage is monitored and billed, so users pay only for what they use."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List types of industrial automation.",
  "a": "- Fixed automation: machines are designed for one specific task with high production rate, for example automobile assembly lines.\n- Programmable automation: machines can be reprogrammed for different tasks, suitable for batch production, for example CNC machines.\n- Flexible automation: machines can handle different products without much changeover time, suitable for mixed production.\n- Integrated automation: the complete factory is automated using computers, robots, PLCs, SCADA and DCS working together."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "State the purpose of RFID.",
  "a": "The purpose of RFID is to identify and track objects automatically using radio waves, without physical contact or line of sight. It is used to track products in shops and warehouses, manage inventory, control access to buildings, track vehicles and animals, and speed up billing in toll gates and libraries."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "State the purpose of bluetooth technology. *",
  "a": "The purpose of Bluetooth technology is to provide short range wireless communication between devices without cables. It allows devices like phones, headsets, keyboards, speakers and health sensors to exchange data and voice over a distance of about 10 metres, with low power consumption and low cost.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 160\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#64748b\" stroke-width=\"1.5\"><line x1=\"80\" y1=\"75\" x2=\"35\" y2=\"35\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"35\"/><line x1=\"80\" y1=\"75\" x2=\"35\" y2=\"115\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"115\"/></g><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><circle cx=\"35\" cy=\"35\" r=\"12\"/><circle cx=\"125\" cy=\"35\" r=\"12\"/><circle cx=\"35\" cy=\"115\" r=\"12\"/><circle cx=\"125\" cy=\"115\" r=\"12\"/></g><circle cx=\"80\" cy=\"75\" r=\"18\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><g fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"80\" y=\"79\">M</text><text x=\"35\" y=\"39\">S</text><text x=\"125\" y=\"39\">S</text><text x=\"35\" y=\"119\">S</text><text x=\"125\" y=\"119\">S</text></g><g font-size=\"11\" fill=\"#1e293b\"><text x=\"170\" y=\"60\">Piconet: 1 master</text><text x=\"170\" y=\"76\">+ up to 7 slaves</text><text x=\"170\" y=\"94\">Several piconets link</text><text x=\"170\" y=\"110\">into a scatternet</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "What are the challenges in wireless sensor networks?",
  "a": "- Limited energy: nodes run on small batteries that are difficult to replace.\n- Limited bandwidth and low data rate.\n- Scalability: the network must work with hundreds or thousands of nodes.\n- Security: wireless communication is open to eavesdropping and attacks.\n- Fault tolerance: nodes may fail due to harsh environments, so the network must keep working.\n- Deployment: placing nodes in difficult areas like forests and underwater is hard.\n- Quality of Service: delay and reliability must be maintained for time critical data.\n- Localisation: finding the exact position of nodes without GPS is difficult."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "What are the components of MQTT?",
  "a": "The main components are:\n- Sensors (collect data)\n- Connectivity (networks that carry data)\n- Data processing (software that analyses data and decides actions)\n- User interface (apps and dashboards for users)\n- Actuators (devices that act on the physical world, such as motors and switches)"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "What are the components of cloud computing?",
  "a": "Cloud computing has two sides. The front end is what the user sees and uses: the device, browser or application through which cloud services are accessed. The back end is the provider's side, made of:\n- Servers — the computers that run applications and services.\n- Storage — disks and databases where user data is kept.\n- Network — the links and switches connecting everything, including the internet itself.\n- Management — software that monitors resources, balances load and enforces policies.\n- Security — authentication, encryption and access control protecting data and users.\n\nTogether, the front end and back end deliver on-demand computing resources over the internet.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 150\" font-family=\"sans-serif\" width=\"100%\"><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><rect x=\"10\" y=\"35\" width=\"100\" height=\"80\" rx=\"8\"/><rect x=\"250\" y=\"35\" width=\"100\" height=\"80\" rx=\"8\"/></g><ellipse cx=\"180\" cy=\"75\" rx=\"45\" ry=\"26\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"110\" y1=\"75\" x2=\"128\" y2=\"75\"/><line x1=\"225\" y1=\"75\" x2=\"242\" y2=\"75\"/></g><g fill=\"#64748b\"><polygon points=\"128,75 118,69 118,81\"/><polygon points=\"242,75 232,69 232,81\"/></g><g fill=\"#1e293b\" font-size=\"10\" text-anchor=\"middle\"><text x=\"60\" y=\"58\" font-weight=\"bold\" font-size=\"11\">Front end</text><text x=\"60\" y=\"76\">Browser /</text><text x=\"60\" y=\"91\">device / app</text><text x=\"300\" y=\"52\" font-weight=\"bold\" font-size=\"11\">Back end</text><text x=\"300\" y=\"68\">Servers</text><text x=\"300\" y=\"82\">Storage</text><text x=\"300\" y=\"96\">Networks</text><text x=\"300\" y=\"110\">Mgmt + Security</text></g><text x=\"180\" y=\"79\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">Internet</text></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "What are the modes of operation of NFC?",
  "a": "NFC has three modes of operation:\n- Reader/writer mode: an active device like a phone reads data from or writes data to a passive NFC tag, for example reading a smart poster.\n- Peer-to-peer mode: two active NFC devices exchange data with each other, for example sharing a contact between two phones.\n- Card emulation mode: an NFC device acts like a contactless smart card, for example a phone used for payment or as a transport ticket."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What are the requirements of WSN?",
  "a": "The requirements of a wireless sensor network are:\n- Hardware constraints: nodes must be small, low cost and low power.\n- Energy efficient protocols: communication and routing protocols must minimise energy use.\n- Data aggregation: redundant data from nearby nodes must be combined to save bandwidth and energy.\n- Localisation: nodes should know their position for location based applications.\n- Time synchronisation: nodes must share a common time for coordinated sensing.\n- Security: sensed data must be protected from attackers.\n- Robustness: the network must tolerate node failures and harsh conditions."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What are the requirements of wireless sensor network?",
  "a": "- Energy efficiency: nodes must consume minimum power to achieve long lifetime.\n- Scalability: the network must support a large number of nodes.\n- Fault tolerance: the network must continue working even if some nodes fail.\n- Low cost: nodes must be cheap because they are deployed in large numbers.\n- Self-organisation: nodes must form the network automatically without manual setup.\n- Quality of Service: delay, reliability and accuracy must meet application needs.\n- Security: data must be protected from unauthorised access and attacks.\n- Flexibility: the network must adapt to changes in topology and environment."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "What is NFC? *",
  "a": "NFC (Near Field Communication) is a short range wireless technology that allows two devices to communicate when they are brought very close, within about 4 cm. It works at 13.56 MHz frequency using electromagnetic induction. NFC is used for contactless payments, transport tickets, access control, device pairing and smart posters."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "What is ZIGBEE? *",
  "a": "Zigbee is a low power, low data rate wireless communication standard based on IEEE 802.15.4, used for short range IoT applications. It supports data rates up to 250 kbps, works in the 2.4 GHz band, and supports star, tree and mesh topologies. Zigbee is mainly used in home automation, smart lighting, smart energy and industrial monitoring.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 270\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#64748b\" stroke-width=\"1.5\"><line x1=\"70\" y1=\"45\" x2=\"30\" y2=\"15\"/><line x1=\"70\" y1=\"45\" x2=\"110\" y2=\"15\"/><line x1=\"70\" y1=\"45\" x2=\"30\" y2=\"75\"/><line x1=\"70\" y1=\"45\" x2=\"110\" y2=\"75\"/><line x1=\"70\" y1=\"105\" x2=\"40\" y2=\"140\"/><line x1=\"70\" y1=\"105\" x2=\"100\" y2=\"140\"/><line x1=\"40\" y1=\"140\" x2=\"25\" y2=\"168\"/><line x1=\"40\" y1=\"140\" x2=\"55\" y2=\"168\"/><line x1=\"100\" y1=\"140\" x2=\"85\" y2=\"168\"/><line x1=\"100\" y1=\"140\" x2=\"115\" y2=\"168\"/><line x1=\"30\" y1=\"210\" x2=\"70\" y2=\"190\"/><line x1=\"70\" y1=\"190\" x2=\"110\" y2=\"210\"/><line x1=\"30\" y1=\"210\" x2=\"50\" y2=\"240\"/><line x1=\"110\" y1=\"210\" x2=\"90\" y2=\"240\"/><line x1=\"50\" y1=\"240\" x2=\"90\" y2=\"240\"/><line x1=\"70\" y1=\"190\" x2=\"50\" y2=\"240\"/><line x1=\"70\" y1=\"190\" x2=\"90\" y2=\"240\"/></g><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><circle cx=\"30\" cy=\"15\" r=\"9\"/><circle cx=\"110\" cy=\"15\" r=\"9\"/><circle cx=\"30\" cy=\"75\" r=\"9\"/><circle cx=\"110\" cy=\"75\" r=\"9\"/><circle cx=\"40\" cy=\"140\" r=\"10\"/><circle cx=\"100\" cy=\"140\" r=\"10\"/><circle cx=\"25\" cy=\"168\" r=\"8\"/><circle cx=\"55\" cy=\"168\" r=\"8\"/><circle cx=\"85\" cy=\"168\" r=\"8\"/><circle cx=\"115\" cy=\"168\" r=\"8\"/><circle cx=\"30\" cy=\"210\" r=\"9\"/><circle cx=\"70\" cy=\"190\" r=\"9\"/><circle cx=\"110\" cy=\"210\" r=\"9\"/><circle cx=\"50\" cy=\"240\" r=\"9\"/><circle cx=\"90\" cy=\"240\" r=\"9\"/></g><circle cx=\"70\" cy=\"45\" r=\"14\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><circle cx=\"70\" cy=\"105\" r=\"12\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"70\" y=\"49\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><text x=\"70\" y=\"109\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><g font-size=\"11\" fill=\"#1e293b\"><text x=\"145\" y=\"35\" font-weight=\"bold\">Star</text><text x=\"145\" y=\"52\">All devices link to one</text><text x=\"145\" y=\"67\">coordinator</text><text x=\"145\" y=\"125\" font-weight=\"bold\">Tree (cluster-tree)</text><text x=\"145\" y=\"142\">Routers extend the network</text><text x=\"145\" y=\"157\">in branches</text><text x=\"145\" y=\"210\" font-weight=\"bold\">Mesh</text><text x=\"145\" y=\"227\">Devices route for each other,</text><text x=\"145\" y=\"242\">self-healing</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "What is machine to machine communications?",
  "a": "Machine to Machine (M2M) communication is direct communication between machines or devices without human intervention. Machines collect data through sensors, exchange it over wired or wireless networks, and take actions automatically. Examples are smart meters sending readings to the utility company, ATMs connecting to banks, and vehicles sending location data to fleet management systems."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is meant by MQTT?",
  "a": "MQTT (Message Queuing Telemetry Transport) is a lightweight publish/subscribe messaging protocol designed for constrained devices and low-bandwidth, unreliable networks. Publishers send messages to topics on a central broker, which forwards them to all subscribers of those topics."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is piconet?",
  "a": "A piconet is a small Bluetooth network consisting of one master device and up to seven active slave devices. The master controls the communication timing and frequency hopping sequence, and slaves communicate only through the master. Two or more piconets can join together to form a scatternet."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is the importance of IEEE 802.15.4?",
  "a": "IEEE 802.15.4 matters because it is the foundation standard for low-rate wireless personal area networks (LR-WPANs) — the networks most IoT sensors use. Its importance:\n- It defines low-power, low-cost wireless communication, so battery-powered sensors can run for months or years.\n- It is the physical and MAC layer on which Zigbee, 6LoWPAN and Thread are built — without it, those IoT standards would not exist.\n- It supports both star and peer-to-peer topologies, giving flexibility for home, industrial and agricultural networks.\n- Being an open standard, it lets devices from different manufacturers interoperate, which is what made large-scale IoT deployments practical."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is the need of Bluetooth?",
  "a": "Bluetooth is needed to replace cables for short range communication between devices. It is needed because it is low cost, low power and easy to use, it allows automatic connection between devices like phones and headsets, and it supports both data and voice communication for personal area networks and IoT devices.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 160\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#64748b\" stroke-width=\"1.5\"><line x1=\"80\" y1=\"75\" x2=\"35\" y2=\"35\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"35\"/><line x1=\"80\" y1=\"75\" x2=\"35\" y2=\"115\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"115\"/></g><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><circle cx=\"35\" cy=\"35\" r=\"12\"/><circle cx=\"125\" cy=\"35\" r=\"12\"/><circle cx=\"35\" cy=\"115\" r=\"12\"/><circle cx=\"125\" cy=\"115\" r=\"12\"/></g><circle cx=\"80\" cy=\"75\" r=\"18\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><g fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"80\" y=\"79\">M</text><text x=\"35\" y=\"39\">S</text><text x=\"125\" y=\"39\">S</text><text x=\"35\" y=\"119\">S</text><text x=\"125\" y=\"119\">S</text></g><g font-size=\"11\" fill=\"#1e293b\"><text x=\"170\" y=\"60\">Piconet: 1 master</text><text x=\"170\" y=\"76\">+ up to 7 slaves</text><text x=\"170\" y=\"94\">Several piconets link</text><text x=\"170\" y=\"110\">into a scatternet</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "What is the need of sensor in IoT?",
  "a": "Sensors are needed in IoT because they are the eyes and ears of the system. They convert physical quantities like temperature, humidity, pressure, motion, light and gas into electrical signals that IoT devices can understand. Without sensors, IoT devices cannot observe the real world, so no monitoring, automation or intelligent decision making is possible."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "What is the purpose of Bluetooth?",
  "a": "The purpose of Bluetooth is to enable wireless, short range exchange of data and voice between electronic devices. It is used to connect phones with headsets, laptops with mice and keyboards, health sensors with mobiles, and smart home devices, providing a simple cable-free personal area network.",
  "d": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 160\" font-family=\"sans-serif\" width=\"100%\"><g stroke=\"#64748b\" stroke-width=\"1.5\"><line x1=\"80\" y1=\"75\" x2=\"35\" y2=\"35\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"35\"/><line x1=\"80\" y1=\"75\" x2=\"35\" y2=\"115\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"115\"/></g><g fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"1.5\"><circle cx=\"35\" cy=\"35\" r=\"12\"/><circle cx=\"125\" cy=\"35\" r=\"12\"/><circle cx=\"35\" cy=\"115\" r=\"12\"/><circle cx=\"125\" cy=\"115\" r=\"12\"/></g><circle cx=\"80\" cy=\"75\" r=\"18\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><g fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"80\" y=\"79\">M</text><text x=\"35\" y=\"39\">S</text><text x=\"125\" y=\"39\">S</text><text x=\"35\" y=\"119\">S</text><text x=\"125\" y=\"119\">S</text></g><g font-size=\"11\" fill=\"#1e293b\"><text x=\"170\" y=\"60\">Piconet: 1 master</text><text x=\"170\" y=\"76\">+ up to 7 slaves</text><text x=\"170\" y=\"94\">Several piconets link</text><text x=\"170\" y=\"110\">into a scatternet</text></g></svg>"
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2023",
  "q": "What is the role of a sensor in an IoT network?",
  "a": "The role of a sensor in an IoT network is to detect and measure physical changes in the environment and convert them into data. Sensors collect real time information like temperature, motion and pressure, and send it through the network to controllers or cloud platforms. This data is the basis for monitoring, analysis and automatic actions in the IoT system."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "What is wireless sensor network?",
  "a": "A Wireless Sensor Network (WSN) is a network of small, low cost sensor nodes that are distributed over an area to monitor physical conditions like temperature, humidity, pressure, motion and sound. The nodes communicate wirelessly with each other and forward the collected data through multiple hops to a sink node, which sends it to a base station for processing and use."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write a short note on wireless multimedia sensor network.",
  "a": "A Wireless Multimedia Sensor Network (WMSN) is a sensor network in which nodes are equipped with cameras and microphones to capture audio, video and images. The nodes process and compress the multimedia data and send it through multiple hops to a sink node. WMSN needs higher bandwidth, processing power and quality of service than normal sensor networks. It is used in video surveillance, traffic monitoring, telemedicine and industrial inspection."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "Write about wireless sensor network.",
  "a": "A Wireless Sensor Network (WSN) consists of a large number of small sensor nodes, a sink node and a base station. Each sensor node has a sensing unit, processing unit, transceiver and power unit. The nodes sense physical parameters from the environment and send the data wirelessly through other nodes to the sink, which forwards it to the base station for analysis. WSNs are self-organising, energy constrained and application specific. They are used in environmental monitoring, healthcare, agriculture, military surveillance and smart cities."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write any three applications of AMQP.",
  "a": "- Banking and financial systems: AMQP is used for reliable processing of money transfers and stock trading transactions.\n- E-commerce order processing: it manages orders, payments and inventory updates reliably between different services.\n- Enterprise messaging: it connects different applications inside an organisation for dependable exchange of business data."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Nov 2024",
  "q": "Write briefly about NFC.",
  "a": "NFC (Near Field Communication) is a short range wireless technology that works at 13.56 MHz and allows communication within about 4 cm. It works by electromagnetic induction between two loop antennas. NFC has three modes: reader/writer mode, peer-to-peer mode and card emulation mode. It is widely used for contactless payments, transport tickets, access control and pairing of devices, because it is simple, fast and secure due to its very short range."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write the automation applications of IoT.",
  "a": "- Home automation: automatic control of lights, fans, air conditioners, door locks and security cameras.\n- Industrial automation: machine monitoring, predictive maintenance and automatic production control.\n- Agricultural automation: automatic irrigation, greenhouse climate control and livestock monitoring.\n- Energy automation: smart meters, smart grids and automatic load management.\n- Healthcare automation: remote patient monitoring and automatic alerts.\n- Transport automation: vehicle tracking, smart traffic signals and automatic toll collection.\n- Building automation: automatic control of lighting, elevators and fire safety systems."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write the characteristics of Sensor Networks.",
  "a": "- Self-organising: nodes form the network automatically without fixed infrastructure.\n- Multi-hop communication: data travels through intermediate nodes to reach the sink.\n- Dynamic topology: nodes may fail, move or be added, changing the network structure.\n- Energy constrained: nodes run on small batteries, so energy saving is essential.\n- Data-centric: communication is based on data and location rather than node addresses.\n- Application specific: the network design depends on the application, like agriculture or military use.\n- Large scale: networks may contain hundreds or thousands of nodes.\n- Heterogeneous: nodes may have different capabilities for sensing, processing and communication."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write the features of XMPP.",
  "a": "XMPP (Extensible Messaging and Presence Protocol) is an open standard for messaging and presence, originally called Jabber. Its features:\n- Open standard — anyone can implement it; no single company controls it.\n- Decentralized — like email, anyone can run a server, and servers talk to each other across domains.\n- XML-based — messages are XML stanzas, which makes the protocol extensible: new features are added through XMPP Extension Protocols (XEPs) without changing the core.\n- Presence — it natively supports presence information (online, away, busy), which is why it was widely used for chat.\n- Security — supports TLS encryption and SASL authentication.\n- Real-time — designed for near-instant message delivery, and it is also used for IoT messaging and device control, though it is heavier than MQTT."
 },
 {
  "s": "INTERNET OF THINGS",
  "c": "CM-504",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Write the purpose of RFID.",
  "a": "The purpose of RFID is to automatically identify and track objects, animals or people using radio waves. A tag attached to the object stores identification data, and a reader reads it without touching the object or needing line of sight. RFID is used for inventory management in shops, tracking goods in warehouses, access control, vehicle toll collection, animal tracking and library book management."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 3,
  "y": "Mar/Apr 2024, Mar/Apr 2026, May/June 2023",
  "q": "Explain method overloading and method overriding.",
  "a": "Method overloading means defining multiple methods with the same name but different arguments. Python does not support it directly — if you define the same method twice, the second definition replaces the first. It is simulated with default arguments or *args:\ndef add(self, a, b=0):\n    return a + b\nThis one method handles both add(5) and add(5, 3).\n\nMethod overriding means a child class redefines a method inherited from its parent class, giving it a new behaviour:\nclass Animal:\n    def sound(self):\n        print(\"Some sound\")\nclass Dog(Animal):\n    def sound(self):\n        print(\"Bark\")\nWhen sound() is called on a Dog object, the child's version runs. Overloading is about the same name with different arguments; overriding is about a child replacing a parent's method."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 3,
  "y": "May/June 2023, Oct/Nov 2023, Oct/Nov 2024",
  "q": "Explain various Loop statements with examples.",
  "a": "Loop statements repeat a block of code more than once. Python has two loop statements, for and while.\n\n1) for loop: It iterates over a sequence such as a list, tuple, string or range. It is used when the number of repetitions is known.\nExample:\nfor i in range(1, 6):\n    print(i)\nThis prints numbers from 1 to 5.\n\n2) while loop: It repeats a block as long as a condition is true. It is used when the number of repetitions is not known in advance.\nExample:\ni = 1\nwhile i <= 5:\n    print(i)\n    i = i + 1\nThis also prints numbers from 1 to 5.\n\n3) Nested loop: A loop inside another loop. The inner loop completes all its repetitions for every single repetition of the outer loop.\nExample:\nfor i in range(1, 4):\n    for j in range(1, 4):\n        print(i, j)\n\nA loop may also have an else block, which runs when the loop finishes normally without break."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 2,
  "y": "Mar/Apr 2024, May/June 2023",
  "q": "Explain conditional statements in python.",
  "a": "Conditional statements execute code only when a condition is true:\n\n1) if — runs a block when the condition is true:\nif marks >= 40:\n    print(\"Pass\")\n\n2) if-else — chooses between two blocks:\nif marks >= 40:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\n\n3) elif ladder — tests several conditions in order:\nif marks >= 90:\n    print(\"A grade\")\nelif marks >= 75:\n    print(\"B grade\")\nelif marks >= 40:\n    print(\"C grade\")\nelse:\n    print(\"Fail\")\n\n4) Nested if — an if statement inside another if, used when a second condition matters only if the first is true. Python uses indentation (not braces) to mark the blocks."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 2,
  "y": "May/June 2023, Oct/Nov 2025",
  "q": "Explain input and output statements in Python.",
  "a": "Input statement — input() reads a line typed by the user and always returns a string:\nname = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))\nConvert the result with int() or float() when a number is needed.\n\nOutput statement — print() displays values on screen:\nprint(\"Hello\")\nprint(\"Age is\", age)\nFormatting options:\n- sep changes the separator between values (print(a, b, sep=\", \"))\n- end changes what is printed after the value (print(\"Hi\", end=\" \"))\n- f-strings embed values directly: print(f\"My name is {name} and I am {age} years old\")"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 2,
  "y": "Oct/Nov 2023, Oct/Nov 2025",
  "q": "Explain the concept of ‘Tuple’ assignment with examples.",
  "a": "Tuple assignment means packing values into a tuple and unpacking a tuple into variables in a single statement.\n\n1) Packing: Several values separated by commas are packed into a tuple automatically.\nExample:\nt = 10, 20, 30\nHere t becomes the tuple (10, 20, 30).\n\n2) Unpacking: The values of a tuple are assigned to separate variables in one statement. The number of variables must match the number of values.\nExample:\na, b, c = t\nNow a = 10, b = 20 and c = 30.\n\n3) Swapping two variables: Tuple assignment swaps values without a temporary variable.\nExample:\na, b = b, a\n\n4) Returning multiple values from a function: A function returns a tuple, which is unpacked by the caller.\nExample:\ndef min_max(numbers):\n    return min(numbers), max(numbers)\nlow, high = min_max([4, 1, 9, 2])\nHere low = 1 and high = 9.\n\n5) Starred unpacking: One variable with a star collects the remaining values into a list.\nExample:\nfirst, *rest = (1, 2, 3, 4)\nHere first = 1 and rest = [2, 3, 4]."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 2,
  "y": "Oct/Nov 2023, Oct/Nov 2025",
  "q": "Explain various built-in data types in Python with examples.",
  "a": "Python's built-in data types:\n- Numeric — int (whole numbers, example 10), float (decimals, example 3.14), complex (example 2+3j).\n- Text — str (example \"hello\").\n- Boolean — bool (True or False).\n- Sequence — list (ordered, changeable: [1, 2, 3]), tuple (ordered, unchangeable: (1, 2, 3)), range (sequence of numbers).\n- Set — set (unordered, unique items: {1, 2, 3}), frozenset (unchangeable set).\n- Mapping — dict (key-value pairs: {\"name\": \"Asha\", \"age\": 20}).\n- None — NoneType, a single value None meaning \"no value\".\n\nPython is dynamically typed: the type is decided by the value assigned, and type() shows it."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 2,
  "y": "Dec 2022, Mar/Apr 2026",
  "q": "Write a Python program in which a function that accepts arguments * and returns a tuple formed with those arguments.",
  "a": "When a star is placed before a parameter name, the function accepts any number of positional arguments, and Python collects them into a tuple called args.\n\nProgram:\ndef make_tuple(*args):\n    return args\n\nresult = make_tuple(10, 20, 30, 40)\nprint(result)\nprint(type(result))\n\nOutput:\n(10, 20, 30, 40)\nclass tuple\n\nExplanation:\n1) def make_tuple(*args): defines a function whose parameter args collects all arguments passed to it.\n2) return args: returns the collected arguments as a tuple.\n3) make_tuple(10, 20, 30, 40): passes four values, which are packed into the tuple (10, 20, 30, 40).\n4) print(result): displays the tuple, and type(result) confirms it is a tuple."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 2,
  "y": "Dec 2022, Mar/Apr 2026",
  "q": "Write the syntax for defining a function. Write a python program to find the Fibonacci series of 25 numbers using functions.",
  "a": "Syntax for defining a function:\ndef function_name(parameters):\n    statements\n    return value\n\nHere def is the keyword, function_name is the name of the function, parameters are the inputs, and return sends a value back to the caller. A function must be defined before it is called.\n\nProgram to print the first 25 Fibonacci numbers using a function:\ndef fibonacci(n):\n    a, b = 0, 1\n    for i in range(n):\n        print(a, end=\" \")\n        a, b = b, a + b\n\nfibonacci(25)\n\nOutput:\n0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368\n\nExplanation:\n1) The series starts with 0 and 1, and every next number is the sum of the previous two numbers.\n2) The statement a, b = b, a + b updates both values in one step using tuple assignment.\n3) The loop runs 25 times, so exactly 25 Fibonacci numbers are printed."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Compare list, tuple, dictionary and set.",
  "a": "1) List: An ordered collection written in square brackets. It is mutable, allows duplicate values, and elements are accessed by index.\nExample: marks = [85, 90, 85, 70]\n\n2) Tuple: An ordered collection written in round brackets. It is immutable, allows duplicate values, and elements are accessed by index.\nExample: point = (10, 20)\n\n3) Dictionary: An unordered collection of key-value pairs written in curly brackets. Keys must be unique, values are accessed by key, and it is mutable.\nExample: student = {\"name\": \"Asha\", \"age\": 20}\n\n4) Set: An unordered collection written in curly brackets without key-value pairs. It does not allow duplicates, is mutable, and elements cannot be accessed by index.\nExample: numbers = {1, 2, 3}\n\nComparison:\n1) Ordering: List and tuple are ordered, dictionary and set are unordered.\n2) Mutability: List, dictionary and set are mutable, tuple is immutable.\n3) Duplicates: List, tuple and dictionary values allow duplicates, set does not.\n4) Access: List and tuple use index, dictionary uses key, set does not support indexing.\n5) Use: Lists store sequences, tuples store fixed data, dictionaries store labelled data, sets store unique items and support set operations."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Define set. Write a program to create set and write example program.",
  "a": "A set is an unordered collection of unique elements. It is mutable, does not allow duplicate values, and does not support indexing.\n\nSets are created using curly brackets or the set() function.\nExample:\nfruits = {\"apple\", \"banana\", \"mango\"}\nnumbers = set([1, 2, 2, 3])\nHere numbers becomes {1, 2, 3} because duplicates are removed automatically.\n\nProgram to create a set and perform basic operations:\ncolours = {\"red\", \"green\", \"blue\"}\nprint(\"Set:\", colours)\ncolours.add(\"yellow\")\nprint(\"After adding yellow:\", colours)\ncolours.remove(\"green\")\nprint(\"After removing green:\", colours)\nprint(\"Number of elements:\", len(colours))\n\nOutput:\nSet: {'red', 'green', 'blue'}\nAfter adding yellow: {'red', 'green', 'blue', 'yellow'}\nAfter removing green: {'red', 'blue', 'yellow'}\nNumber of elements: 3\n\nNote that the order of elements in the output may vary because sets are unordered."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain Operator precedence rules. Write a Python program to evaluate the expression 5  2  3 and explain the output using operator precedence rules.",
  "a": "Operator precedence decides the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated first. When operators have the same precedence, associativity decides the order: most operators are evaluated left to right, while exponentiation is evaluated right to left.\n\nPrecedence of common operators, from highest to lowest:\n1) Parentheses ()\n2) Exponentiation (power operator)\n3) Unary plus and minus, +x and -x\n4) Multiplication, division, floor division and modulus: *, /, //, %\n5) Addition and subtraction: +, -\n6) Comparison operators: ==, !=, >, <, >=, <=\n7) not\n8) and\n9) or\n\nProgram:\nresult = 5 + 2 * 3\nprint(result)\n\nOutput:\n11\n\nExplanation using precedence rules:\n1) The expression contains + and *. Multiplication has higher precedence than addition.\n2) So 2 * 3 is evaluated first, giving 6.\n3) Then 5 + 6 is evaluated, giving 11.\n4) If parentheses are used, the order changes: (5 + 2) * 3 = 21, because parentheses have the highest precedence."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Explain Try except block in Python. *",
  "a": "The try-except block is used for exception handling in Python. Code that may cause a runtime error is placed in the try block, and the code that handles the error is placed in the except block. If no error occurs, the except block is skipped; if an error occurs, the program does not crash, and the except block runs instead.\n\nSyntax:\ntry:\n    statements that may cause an error\nexcept ExceptionName:\n    statements that run when the error occurs\n\nExample:\ntry:\n    num = int(input(\"Enter a number: \"))\n    result = 100 / num\n    print(\"Result:\", result)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")\nexcept ValueError:\n    print(\"Please enter a valid number.\")\nexcept Exception as e:\n    print(\"Some error occurred:\", e)\n\nIf the user enters 0, the output is:\nCannot divide by zero.\n\nIf the user enters 5, the output is:\nResult: 20.0\n\nIf the user enters abc, the output is:\nPlease enter a valid number.\n\nExplanation:\n1) The try block contains the risky statements, namely the input conversion and the division.\n2) Each except block handles one type of error: ZeroDivisionError for division by zero, and ValueError for non-numeric input.\n3) Using separate except blocks gives a clear message for each type of error, and the program continues normally instead of crashing."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Explain about Python Arrays.",
  "a": "An array in Python is a collection of elements of the same data type, provided by the array module. Unlike a list, which can hold different types of values, an array stores only one type, so it uses less memory and is faster for large numerical data.\n\nArrays are created with array(typecode, values), where the typecode tells the type of elements. Common typecodes are i for signed integer, f for float, and u for Unicode character.\n\nExample program:\nfrom array import array\narr = array('i', [10, 20, 30, 40, 50])\nprint(arr)\nprint(\"First element:\", arr[0])\nprint(\"Length:\", len(arr))\narr.append(60)\nprint(\"After append:\", arr)\n\nOutput:\narray('i', [10, 20, 30, 40, 50])\nFirst element: 10\nLength: 5\nAfter append: array('i', [10, 20, 30, 40, 50, 60])\n\nDifferences from a list:\n1) An array stores elements of only one type, while a list stores mixed types.\n2) An array uses less memory than a list for the same data.\n3) Arrays support indexing, slicing and methods such as append, insert, pop, remove, index and count, similar to lists."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Explain about different string modules.",
  "a": "Python provides a module named string, which contains useful constants and a Template class for working with strings. It is imported with the statement import string.\n\n1) string.ascii_letters: All lowercase and uppercase English letters, from a to z and A to Z.\n2) string.ascii_lowercase: Lowercase letters from a to z.\n3) string.ascii_uppercase: Uppercase letters from A to Z.\n4) string.digits: The digits from 0 to 9.\n5) string.punctuation: All punctuation characters such as !, @, #, $ and %.\n6) string.whitespace: Whitespace characters such as space, tab and newline.\n7) string.capwords(): A function that capitalises the first letter of every word in a string.\n\nExample program:\nimport string\nprint(string.ascii_lowercase)\nprint(string.digits)\nprint(string.punctuation[:10])\nprint(string.capwords(\"hello python world\"))\n\nOutput:\nabcdefghijklmnopqrstuvwxyz\n0123456789\n!\"#$%&'()*+\nHello Python World\n\nThe string module is mainly used for checking characters, generating passwords, and formatting text. Common string operations themselves, such as upper(), lower(), split() and replace(), are string methods, not part of the string module."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Explain about object with a python program.",
  "a": "An object is an instance of a class. A class is a blueprint that defines attributes (data) and methods (functions), and an object is a real thing created from that blueprint, with its own values. In Python, everything is an object, including numbers, strings and lists.\n\nProgram:\nclass Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n    def display(self):\n        print(\"Name:\", self.name)\n        print(\"Marks:\", self.marks)\n\ns1 = Student(\"Asha\", 85)\ns2 = Student(\"Rahul\", 92)\ns1.display()\ns2.display()\n\nOutput:\nName: Asha\nMarks: 85\nName: Rahul\nMarks: 92\n\nExplanation:\n1) class Student: defines the blueprint with two attributes, name and marks, and one method, display.\n2) __init__ is a special method that runs automatically when an object is created, and it stores the given values in the object.\n3) s1 = Student(\"Asha\", 85) creates the first object, and s2 = Student(\"Rahul\", 92) creates a second object with different values.\n4) s1.display() and s2.display() call the method on each object, and each object displays its own data."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Explain any four list methods with a sample python program.",
  "a": "List methods are built-in functions that operate on a list. Four important list methods are explained below.\n\n1) append(x): Adds one element x at the end of the list.\n2) extend(iterable): Adds all elements of another list or sequence at the end.\n3) insert(i, x): Inserts element x at position i, shifting other elements to the right.\n4) remove(x): Removes the first occurrence of value x from the list.\n\nSample program:\nnumbers = [10, 20, 30]\nnumbers.append(40)\nprint(\"After append:\", numbers)\nnumbers.extend([50, 60])\nprint(\"After extend:\", numbers)\nnumbers.insert(1, 15)\nprint(\"After insert:\", numbers)\nnumbers.remove(30)\nprint(\"After remove:\", numbers)\n\nOutput:\nAfter append: [10, 20, 30, 40]\nAfter extend: [10, 20, 30, 40, 50, 60]\nAfter insert: [10, 15, 20, 30, 40, 50, 60]\nAfter remove: [10, 15, 20, 40, 50, 60]"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain arithmetic and logical operations.",
  "a": "Arithmetic operations are performed on numbers using arithmetic operators:\n1) + adds two numbers, for example 5 + 3 = 8.\n2) - subtracts the second number from the first, for example 5 - 3 = 2.\n3) * multiplies two numbers, for example 5 * 3 = 15.\n4) / divides and gives a float result, for example 5 / 2 = 2.5.\n5) // divides and gives the whole number part, for example 5 // 2 = 2.\n6) % gives the remainder, for example 5 % 2 = 1.\nPower operator raises a number to a power, for example 2 to the power 3 = 8.\n\nLogical operations combine or reverse conditions and always give True or False:\n1) and gives True only when both conditions are true, for example (5 > 3) and (4 > 2) = True.\n2) or gives True when at least one condition is true, for example (5 < 3) or (4 > 2) = True.\n3) not reverses a condition, for example not (5 > 3) = False.\n\nExample:\na = 10\nb = 3\nprint(a + b, a - b, a * b)\nprint(a > 5 and b < 5)\nprint(a < 5 or b < 5)\nprint(not (a > 5))\n\nOutput:\n13 7 30\nTrue\nTrue\nFalse"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain arithmetic and relational operators with program.",
  "a": "Arithmetic operators perform calculations on numbers:\n1) + addition, 2) - subtraction, 3) * multiplication, 4) / division, 5) // floor division, 6) % modulus (remainder), 7) Power operator (exponent).\n\nRelational operators compare two values and give True or False:\n1) == equal to, 2) != not equal to, 3) > greater than, 4) < less than, 5) >= greater than or equal to, 6) <= less than or equal to.\n\nProgram:\na = 10\nb = 3\nprint(\"Addition:\", a + b)\nprint(\"Subtraction:\", a - b)\nprint(\"Multiplication:\", a * b)\nprint(\"Division:\", a / b)\nprint(\"Floor division:\", a // b)\nprint(\"Remainder:\", a % b)\nprint(\"Power:\", pow(a, b))\nprint(\"a == b:\", a == b)\nprint(\"a != b:\", a != b)\nprint(\"a > b:\", a > b)\nprint(\"a < b:\", a < b)\nprint(\"a >= b:\", a >= b)\nprint(\"a <= b:\", a <= b)\n\nOutput:\nAddition: 13\nSubtraction: 7\nMultiplication: 30\nDivision: 3.3333333333333335\nFloor division: 3\nRemainder: 1\nPower: 1000\na == b: False\na != b: True\na > b: True\na < b: False\na >= b: True\na <= b: False"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain common ‘Set’ operations i.e. union, intersection and difference with examples.",
  "a": "Set operations combine sets to produce new sets.\n\n1) Union: All elements from both sets, without duplicates. Operator is |, method is union().\n2) Intersection: Only the elements common to both sets. Operator is &, method is intersection().\n3) Difference: Elements present in the first set but not in the second set. Operator is -, method is difference().\n4) Symmetric difference: Elements present in either set but not in both. Operator is ^, method is symmetric_difference().\n\nExample program:\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(\"Union:\", a | b)\nprint(\"Intersection:\", a & b)\nprint(\"Difference a - b:\", a - b)\nprint(\"Difference b - a:\", b - a)\nprint(\"Symmetric difference:\", a ^ b)\n\nOutput:\nUnion: {1, 2, 3, 4, 5, 6}\nIntersection: {3, 4}\nDifference a - b: {1, 2}\nDifference b - a: {5, 6}\nSymmetric difference: {1, 2, 5, 6}\n\nNote that difference is not commutative: a - b and b - a give different results, while union and intersection give the same result in either order."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Explain continue and Write a python program to skip multiple elements using continue.",
  "a": "The continue statement skips the remaining statements in the current repetition of a loop and jumps to the next repetition. It does not end the loop; only the current iteration is skipped.\n\nProgram to skip multiple elements using continue:\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nfor num in numbers:\n    if num == 3 or num == 5 or num == 8:\n        continue\n    print(num, end=\" \")\n\nOutput:\n1 2 4 6 7 9 10\n\nExplanation:\n1) The for loop takes each number from the list one by one.\n2) When the number is 3, 5 or 8, the continue statement runs, so the print statement is skipped for that number.\n3) For all other numbers, the print statement runs, so 3, 5 and 8 do not appear in the output."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain data abstraction in python. *",
  "a": "Data abstraction means showing only the essential features of an object and hiding the internal implementation details from the user. The user knows what an operation does, but not how it is done inside.\n\nExample: A car driver uses the steering wheel and pedals without knowing how the engine works internally. In the same way, a Python programmer uses the sort() method without knowing its internal algorithm.\n\nIn Python, data abstraction is achieved using abstract classes from the abc module. An abstract class contains abstract methods, which have only a declaration and no body. Every child class must define those methods in its own way.\n\nExample:\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side * self.side\n\ns = Square(5)\nprint(\"Area:\", s.area())\n\nOutput:\nArea: 25\n\nHere Shape hides how area is calculated, and Square provides the actual implementation. An object of the abstract class Shape itself cannot be created."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Explain declaration and initialization of variables.",
  "a": "In Python, variables are not declared with a data type as in some other languages. A variable is created automatically when a value is first assigned to it, using the assignment operator =. The type of the variable is decided by the value assigned, and it can change later.\n\nDeclaration and initialization happen together in Python:\n1) Declaration means introducing a variable name for use in the program.\n2) Initialization means giving that variable its first value.\n3) In Python, both happen in a single statement such as age = 20.\n\nExamples:\nname = \"Asha\"\nage = 20\nprice = 99.50\nis_student = True\n\nHere name is a string, age is an integer, price is a float and is_student is a boolean. The type can be checked with type(), for example type(age) gives class int.\n\nMultiple variables can be assigned in one statement:\na, b, c = 10, 20, 30\nx = y = z = 0\n\nRules for variable names:\n1) A name must start with a letter or an underscore.\n2) It can contain letters, digits and underscores, but not spaces or special symbols.\n3) It is case sensitive, so Age and age are different variables.\n4) It cannot be a Python keyword such as if, for or while."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain dictionary methods with program.",
  "a": "Dictionary methods are built-in functions that operate on a dictionary. Important dictionary methods are:\n\n1) keys(): Returns all keys of the dictionary.\n2) values(): Returns all values of the dictionary.\n3) items(): Returns all key-value pairs as tuples.\n4) get(key): Returns the value for a key, or None if the key is missing, without giving an error.\n5) update(other): Adds or updates key-value pairs from another dictionary.\n6) pop(key): Removes a key and returns its value.\n7) setdefault(key, value): Returns the value for a key, and adds the key with the given value if it is missing.\n8) clear(): Removes all items from the dictionary.\n\nProgram:\nstudent = {\"name\": \"Asha\", \"age\": 20, \"course\": \"CME\"}\nprint(\"Keys:\", student.keys())\nprint(\"Values:\", student.values())\nprint(\"Items:\", student.items())\nprint(\"Name:\", student.get(\"name\"))\nstudent.update({\"age\": 21, \"city\": \"Hyderabad\"})\nprint(\"After update:\", student)\nstudent.pop(\"city\")\nprint(\"After pop:\", student)\n\nOutput:\nKeys: dict_keys(['name', 'age', 'course'])\nValues: dict_values(['Asha', 20, 'CME'])\nItems: dict_items([('name', 'Asha'), ('age', 20), ('course', 'CME')])\nName: Asha\nAfter update: {'name': 'Asha', 'age': 21, 'course': 'CME', 'city': 'Hyderabad'}\nAfter pop: {'name': 'Asha', 'age': 21, 'course': 'CME'}"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Explain different types of arguments and write a python program by using variable lengthy argument.",
  "a": "Arguments are the values passed to a function when it is called. Python supports four types of arguments.\n\n1) Required (positional) arguments: Values are matched to parameters in order, and all of them must be passed.\nExample: def add(a, b): is called as add(10, 20).\n\n2) Keyword arguments: Values are passed with the parameter name, so the order does not matter.\nExample: add(b=20, a=10).\n\n3) Default arguments: A parameter has a preset value, which is used when no value is passed for it.\nExample: def greet(name=\"Guest\"): is called as greet() to get Hello Guest.\n\n4) Variable length arguments: A function accepts any number of arguments. A single star collects extra positional arguments into a tuple, and a double star collects extra keyword arguments into a dictionary.\nExample: def total(*args): is called as total(1, 2, 3, 4).\n\nProgram using a variable length argument:\ndef total(*numbers):\n    result = 0\n    for num in numbers:\n        result = result + num\n    return result\n\nprint(total(10, 20, 30))\nprint(total(5, 5, 5, 5, 5))\n\nOutput:\n60\n25\n\nExplanation: numbers collects all passed values into a tuple, the loop adds them one by one, and the total is returned."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain different types of arguments with suitable program.",
  "a": "Arguments are values passed to a function. There are four types of arguments in Python.\n\n1) Positional arguments: Values are assigned to parameters in the order they appear.\n2) Keyword arguments: Values are assigned using the parameter names, so order does not matter.\n3) Default arguments: Parameters have preset values used when the caller does not pass a value.\n4) Variable length arguments: Using a single star before a parameter, a function accepts any number of positional values as a tuple, and using a double star before a parameter, it accepts any number of keyword values as a dictionary.\n\nProgram covering positional, keyword, default and variable length arguments:\ndef show(name, age=18, *hobbies):\n    print(\"Name:\", name)\n    print(\"Age:\", age)\n    print(\"Hobbies:\", hobbies)\n\nshow(\"Asha\", 20, \"reading\", \"music\")\nshow(name=\"Rahul\", age=19)\n\nOutput:\nName: Asha\nAge: 20\nHobbies: ('reading', 'music')\nName: Rahul\nAge: 19\nHobbies: ()\n\nExplanation:\n1) In the first call, name and age are passed positionally, and hobbies collects the two extra values into a tuple.\n2) In the second call, values are passed by parameter name, which shows keyword arguments, and no hobbies are passed, so hobbies is an empty tuple.\n3) Age has the default value 18, which is used whenever the caller does not pass an age.\n4) A double star parameter works the same way for keyword arguments: extra keyword values passed in a call are collected into a dictionary, for example city and course would be collected as a dictionary of details."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain different types of list parameters and write an example program.",
  "a": "When a list is passed to a function, the function receives a reference to the same list, not a copy. This means changes made to the list inside the function are visible outside the function as well. A list can also be returned from a function.\n\nTypes of list parameters used with functions:\n1) Passing a list as an argument: The function processes the elements of the list.\n2) Modifying a list inside a function: Methods such as append or sort change the original list.\n3) Returning a list from a function: The function builds a new list and returns it.\n4) Unpacking a list as arguments: A list can be unpacked with a star, so its elements become separate arguments.\n\nExample program:\ndef process(marks):\n    marks.append(100)\n    total = 0\n    for m in marks:\n        total = total + m\n    return total\n\nscores = [80, 90, 70]\nresult = process(scores)\nprint(\"Modified list:\", scores)\nprint(\"Total:\", result)\n\nOutput:\nModified list: [80, 90, 70, 100]\nTotal: 340\n\nExplanation:\n1) scores is passed to the function, and append(100) adds 100 to the original list.\n2) The loop adds all elements, and the total is returned and stored in result.\n3) The printed list shows 100, proving that the function modified the original list."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain exceptional handling in python.",
  "a": "Exception handling is the method of dealing with runtime errors in a program so that the program does not crash. An exception is an error that occurs while the program is running, such as dividing by zero or opening a missing file.\n\nPython handles exceptions with the try, except, else and finally blocks:\n1) try block: Contains the code that may cause an error.\n2) except block: Runs when an error occurs in the try block, and it handles the error gracefully.\n3) else block: Runs only when no error occurs in the try block.\n4) finally block: Always runs, whether an error occurs or not, and is used to release resources such as closing a file.\n\nExample:\ntry:\n    a = int(input(\"Enter a number: \"))\n    b = int(input(\"Enter another number: \"))\n    result = a / b\nexcept ZeroDivisionError:\n    print(\"Division by zero is not allowed.\")\nexcept ValueError:\n    print(\"Please enter numbers only.\")\nelse:\n    print(\"Result:\", result)\nfinally:\n    print(\"Program completed.\")\n\nIf the user enters 10 and 0, the output is:\nDivision by zero is not allowed.\nProgram completed.\n\nIf the user enters 10 and 2, the output is:\nResult: 5.0\nProgram completed.\n\nCommon built-in exceptions are ZeroDivisionError, ValueError, TypeError, IndexError, KeyError and FileNotFoundError."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain how to create sets in Python and demonstrate set operations and methods.",
  "a": "A set is an unordered collection of unique elements. Sets are created using curly brackets or the set() function, and duplicate values are removed automatically.\n\nCreation:\na = {1, 2, 3, 4}\nb = set([3, 4, 5, 6])\nempty = set()\n\nSet operations:\n1) Union (a | b): All elements from both sets.\n2) Intersection (a & b): Elements common to both sets.\n3) Difference (a - b): Elements in a but not in b.\n4) Symmetric difference (a ^ b): Elements in either set but not in both.\n\nSet methods:\n1) add(x): Adds one element.\n2) update(iterable): Adds many elements.\n3) remove(x): Removes an element, giving an error if it is missing.\n4) discard(x): Removes an element, with no error if it is missing.\n5) pop(): Removes and returns an arbitrary element.\n6) clear(): Removes all elements.\n\nProgram:\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(\"Union:\", a | b)\nprint(\"Intersection:\", a & b)\nprint(\"Difference:\", a - b)\na.add(10)\nprint(\"After add:\", a)\na.discard(2)\nprint(\"After discard:\", a)\n\nOutput:\nUnion: {1, 2, 3, 4, 5, 6}\nIntersection: {3, 4}\nDifference: {1, 2}\nAfter add: {1, 2, 3, 4, 10}\nAfter discard: {1, 3, 4, 10}"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain in detail the ‘Arrays’ in Python with an example program.",
  "a": "An array is a collection of elements of the same data type, provided by the array module in Python. It is created using array(typecode, values), where the typecode indicates the type of the elements.\n\nCommon typecodes:\n1) i: Signed integer.\n2) f: Float.\n3) d: Double float.\n4) u: Unicode character.\n5) b: Signed character.\n\nCreating an array:\nfrom array import array\narr = array('i', [10, 20, 30, 40, 50])\n\nArray operations:\n1) Indexing: arr[0] gives the first element, arr[-1] gives the last element.\n2) Slicing: arr[1:4] gives elements from index 1 to 3.\n3) append(x): Adds an element at the end.\n4) insert(i, x): Inserts an element at position i.\n5) pop(): Removes and returns the last element.\n6) remove(x): Removes the first occurrence of value x.\n7) index(x): Returns the position of value x.\n8) count(x): Returns how many times value x appears.\n9) reverse(): Reverses the array.\n10) len(arr): Returns the number of elements.\n\nExample program:\nfrom array import array\narr = array('i', [10, 20, 30, 40, 50])\nprint(\"Array:\", arr)\nprint(\"Element at index 2:\", arr[2])\narr.append(60)\nprint(\"After append:\", arr)\narr.insert(1, 15)\nprint(\"After insert:\", arr)\narr.remove(30)\nprint(\"After remove:\", arr)\nprint(\"Index of 40:\", arr.index(40))\nprint(\"Length:\", len(arr))\n\nOutput:\nArray: array('i', [10, 20, 30, 40, 50])\nElement at index 2: 30\nAfter append: array('i', [10, 20, 30, 40, 50, 60])\nAfter insert: array('i', [10, 15, 20, 30, 40, 50, 60])\nAfter remove: array('i', [10, 15, 20, 40, 50, 60])\nIndex of 40: 3\nLength: 6"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain list methods with program. *",
  "a": "List methods are built-in functions that change or inspect a list. Important list methods are:\n\n1) append(x): Adds element x at the end of the list.\n2) extend(iterable): Adds all elements of another sequence at the end.\n3) insert(i, x): Inserts element x at position i.\n4) remove(x): Removes the first occurrence of value x.\n5) pop(i): Removes and returns the element at position i; without an argument it removes the last element.\n6) clear(): Removes all elements from the list.\n7) index(x): Returns the position of the first occurrence of value x.\n8) count(x): Returns how many times value x appears.\n9) sort(): Arranges the elements in ascending order.\n10) reverse(): Reverses the order of the elements.\n11) copy(): Returns a shallow copy of the list.\n\nProgram:\nfruits = [\"banana\", \"apple\", \"mango\"]\nfruits.append(\"orange\")\nprint(\"After append:\", fruits)\nfruits.sort()\nprint(\"After sort:\", fruits)\nprint(\"Index of mango:\", fruits.index(\"mango\"))\nprint(\"Count of apple:\", fruits.count(\"apple\"))\nfruits.reverse()\nprint(\"After reverse:\", fruits)\nremoved = fruits.pop()\nprint(\"Removed:\", removed)\nprint(\"Final list:\", fruits)\n\nOutput:\nAfter append: ['banana', 'apple', 'mango', 'orange']\nAfter sort: ['apple', 'banana', 'mango', 'orange']\nIndex of mango: 2\nCount of apple: 1\nAfter reverse: ['orange', 'mango', 'banana', 'apple']\nRemoved: apple\nFinal list: ['orange', 'mango', 'banana']"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain loop control statements (break, continue and pass) in Python with examples.",
  "a": "Loop control statements change the normal flow of a loop. Python provides three loop control statements: break, continue and pass.\n\n1) break: It ends the loop immediately, and control moves to the statement after the loop.\nExample:\nfor i in range(1, 10):\n    if i == 5:\n        break\n    print(i, end=\" \")\nOutput: 1 2 3 4\nHere the loop stops as soon as i becomes 5.\n\n2) continue: It skips the remaining statements of the current repetition and jumps to the next repetition of the loop.\nExample:\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i, end=\" \")\nOutput: 1 2 4 5\nHere the number 3 is skipped, but the loop continues with 4 and 5.\n\n3) pass: It is a null statement that does nothing. It is used as a placeholder where Python requires a statement, so that the program does not give an error.\nExample:\nfor i in range(1, 6):\n    if i == 3:\n        pass\n    print(i, end=\" \")\nOutput: 1 2 3 4 5\nHere pass does nothing, so all numbers are printed."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Explain method overloading with an example program.",
  "a": "Method overloading means defining more than one method with the same name but different numbers or types of parameters. Python does not support traditional method overloading as in some other languages. If a method is defined twice in a class, the second definition replaces the first.\n\nOverloading is simulated in Python using default arguments or variable length arguments, so that one method handles different numbers of arguments.\n\nExample program using default arguments:\nclass Calculator:\n    def add(self, a, b=0, c=0):\n        return a + b + c\n\ncalc = Calculator()\nprint(calc.add(10))\nprint(calc.add(10, 20))\nprint(calc.add(10, 20, 30))\n\nOutput:\n10\n30\n60\n\nExplanation:\n1) The single method add has default values 0 for b and c.\n2) calc.add(10) uses only a, so the result is 10.\n3) calc.add(10, 20) uses a and b, so the result is 30.\n4) calc.add(10, 20, 30) uses all three, so the result is 60.\nThus one method behaves like three overloaded methods.\n\nThe same effect can be achieved with *args, where the method accepts any number of values and processes them in a loop."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Explain overriding methods with an example.",
  "a": "Method overriding means a child class defines a method with the same name as a method in its parent class, giving it a new implementation. When the method is called on a child class object, the child class version runs instead of the parent class version. Overriding is used to change or extend inherited behaviour.\n\nExample:\nclass Animal:\n    def sound(self):\n        print(\"Some animal sound\")\n\nclass Dog(Animal):\n    def sound(self):\n        print(\"Bark\")\n\nclass Cat(Animal):\n    def sound(self):\n        print(\"Meow\")\n\na = Animal()\nd = Dog()\nc = Cat()\na.sound()\nd.sound()\nc.sound()\n\nOutput:\nSome animal sound\nBark\nMeow\n\nExplanation:\n1) Animal is the parent class with a general sound method.\n2) Dog and Cat are child classes that override the sound method with their own versions.\n3) Calling sound() on each object runs the version belonging to that object's class.\n4) The parent version can still be called from the child using super().sound(), if the parent behaviour is also needed."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain string functions in python.",
  "a": "String functions, also called string methods, operate on strings and return new values, because strings are immutable. Important string functions are:\n\n1) len(s): Returns the number of characters in the string.\n2) upper(): Converts all characters to uppercase.\n3) lower(): Converts all characters to lowercase.\n4) title(): Capitalises the first letter of every word.\n5) capitalize(): Capitalises only the first character.\n6) strip(): Removes spaces from both ends of the string.\n7) lstrip() and rstrip(): Remove spaces from the left end and the right end respectively.\n8) split(): Splits the string into a list of words, using spaces by default.\n9) join(sequence): Joins the items of a sequence into a single string with a separator.\n10) replace(old, new): Replaces all occurrences of a part with a new part.\n11) find(sub): Returns the position of the first occurrence of a part, or -1 if it is not found.\n12) count(sub): Returns how many times a part appears.\n13) startswith(prefix): Returns True if the string starts with the given prefix.\n14) endswith(suffix): Returns True if the string ends with the given suffix.\n15) isalpha(), isdigit(), isalnum(): Check whether the string contains only letters, only digits, or only letters and digits.\n\nExamples:\ns = \"  Hello Python  \"\nprint(len(s))\nprint(s.strip())\nprint(s.strip().upper())\nprint(s.strip().split())\nprint(\"Hello Python\".replace(\"Python\", \"World\"))\nprint(\"Hello Python\".find(\"Python\"))\n\nOutput:\n16\nHello Python\nHELLO PYTHON\n['Hello', 'Python']\nHello World\n6"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Explain string functions with suitable program.",
  "a": "String functions operate on strings and return new values. A single program can demonstrate the most commonly used string functions.\n\nProgram:\ntext = \"hello python programming\"\nprint(\"Original:\", text)\nprint(\"Length:\", len(text))\nprint(\"Uppercase:\", text.upper())\nprint(\"Title case:\", text.title())\nprint(\"Capitalized:\", text.capitalize())\nprint(\"Words:\", text.split())\nprint(\"Replaced:\", text.replace(\"python\", \"java\"))\nprint(\"Position of python:\", text.find(\"python\"))\nprint(\"Count of o:\", text.count(\"o\"))\nprint(\"Starts with hello:\", text.startswith(\"hello\"))\nprint(\"Ends with ing:\", text.endswith(\"ing\"))\nwords = [\"Python\", \"is\", \"easy\"]\nprint(\"Joined:\", \" \".join(words))\nprint(\"Stripped:\", \"   hello   \".strip())\n\nOutput:\nOriginal: hello python programming\nLength: 24\nUppercase: HELLO PYTHON PROGRAMMING\nTitle case: Hello Python Programming\nCapitalized: Hello python programming\nWords: ['hello', 'python', 'programming']\nReplaced: hello java programming\nPosition of python: 6\nCount of o: 3\nStarts with hello: True\nEnds with ing: True\nJoined: Python is easy\nStripped: hello\n\nNote that none of these functions change the original string, because strings are immutable; each function returns a new string."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Explain string slicing and string immutability with a sample program.",
  "a": "String slicing means extracting a part of a string using the syntax string[start:stop:step]. The start index is included, the stop index is excluded, and step is the gap between characters. If start is omitted, slicing begins from 0; if stop is omitted, it goes to the end; a negative step reverses the string. Negative indices count from the end, with -1 as the last character.\n\nString immutability means a string cannot be changed after it is created. An attempt to assign a new value to a position in a string gives an error. Operations such as concatenation or replace() do not change the original string; they create and return a new string.\n\nSample program:\ns = \"Python Programming\"\nprint(\"First 6 characters:\", s[0:6])\nprint(\"From index 7:\", s[7:])\nprint(\"Last 11 characters:\", s[-11:])\nprint(\"Every second character:\", s[::2])\nprint(\"Reversed:\", s[::-1])\n\ns2 = s + \" Language\"\nprint(\"Original string:\", s)\nprint(\"New string:\", s2)\n\nOutput:\nFirst 6 characters: Python\nFrom index 7: Programming\nLast 11 characters: Programming\nEvery second character: Pto rgamn\nReversed: gnimmargorP nohtyP\nOriginal string: Python Programming\nNew string: Python Programming Language\n\nExplanation: Slicing only reads parts of the string, and concatenation creates a new string, while the original string s remains unchanged, which proves immutability."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Explain the applications of Python in various fields.",
  "a": "Python is used in many fields because it is simple, readable, and has a large collection of libraries.\n\n1) Web development: Websites and web applications are built using frameworks such as Django and Flask.\n2) Data science: Large amounts of data are analysed and visualised using libraries such as NumPy, Pandas and Matplotlib.\n3) Artificial intelligence and machine learning: Intelligent systems, predictions and image recognition are built using TensorFlow, PyTorch and Scikit-learn.\n4) Automation and scripting: Repetitive tasks such as renaming files, sending emails and testing software are automated with small Python scripts.\n5) Game development: Simple 2D games are developed using libraries such as Pygame.\n6) Desktop applications: Graphical applications are built using Tkinter and PyQt.\n7) Scientific and mathematical computing: Research, simulations and numerical calculations use SciPy and SymPy.\n8) Network programming: Network tools, servers and security testing tools are written using socket programming.\n9) Database applications: Python connects to databases such as MySQL, SQLite and Oracle for storing and managing data.\n10) Education: Python is widely used to teach programming to beginners because of its simple, English-like syntax.\n11) Embedded systems and IoT: Devices such as Raspberry Pi are programmed with Python to read sensors and control hardware."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the concept of classes and objects in Python with examples.",
  "a": "A class is a blueprint or template for creating objects. It defines attributes, which are the data, and methods, which are the functions of the objects. An object is an instance of a class, created from the blueprint, with its own values.\n\nSyntax of a class:\nclass ClassName:\n    def __init__(self, parameters):\n        self.attribute = value\n    def method(self):\n        statements\n\nThe __init__ method is a special method called a constructor. It runs automatically when an object is created and initialises the object's attributes. The parameter self refers to the object itself.\n\nExample:\nclass Car:\n    def __init__(self, brand, price):\n        self.brand = brand\n        self.price = price\n    def display(self):\n        print(\"Brand:\", self.brand)\n        print(\"Price:\", self.price)\n\ncar1 = Car(\"Maruti\", 600000)\ncar2 = Car(\"Hyundai\", 900000)\ncar1.display()\ncar2.display()\n\nOutput:\nBrand: Maruti\nPrice: 600000\nBrand: Hyundai\nPrice: 900000\n\nExplanation:\n1) Car is the class, brand and price are attributes, and display is a method.\n2) car1 and car2 are two objects of the same class with different values.\n3) Each object keeps its own data, and calling display() on an object shows that object's data."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Explain the creation of modules.",
  "a": "A module is a file containing Python code such as functions, variables and classes, saved with the .py extension. Creating a module means writing reusable code in a separate file so that it can be used in many programs without rewriting it.\n\nSteps to create a module:\n1) Open a new file and write the required functions and variables in it.\n2) Save the file with a meaningful name and the .py extension, for example mymath.py.\n3) Place the file in the same folder as the program that will use it, or in a folder known to Python.\n4) Import the module in another program using the import statement, and call its functions with the module name.\n\nExample module file, mymath.py:\ndef add(a, b):\n    return a + b\n\ndef square(n):\n    return n * n\n\nPI = 3.14\n\nProgram using the module:\nimport mymath\nprint(mymath.add(10, 20))\nprint(mymath.square(5))\nprint(mymath.PI)\n\nOutput:\n30\n25\n3.14\n\nAdvantages of modules:\n1) Code can be reused in many programs.\n2) Programs become organised and easy to maintain.\n3) Large programs can be divided into smaller, manageable files."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the different forms of if statement with suitable examples.",
  "a": "The if statement is a decision-making statement that executes a block of code only when a condition is true. Python provides four forms of the if statement.\n\n1) Simple if: Executes a block only when the condition is true; otherwise nothing happens.\nExample:\nmarks = 85\nif marks >= 40:\n    print(\"Pass\")\nOutput: Pass\n\n2) if-else: Executes one block when the condition is true and another block when it is false.\nExample:\nmarks = 30\nif marks >= 40:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\nOutput: Fail\n\n3) elif ladder: Tests several conditions one after another. The first true condition's block runs, and the rest are skipped.\nExample:\nmarks = 75\nif marks >= 90:\n    print(\"Grade A\")\nelif marks >= 75:\n    print(\"Grade B\")\nelif marks >= 40:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")\nOutput: Grade B\n\n4) Nested if: An if statement inside another if statement. The inner condition is tested only when the outer condition is true.\nExample:\nage = 20\ncitizen = True\nif age >= 18:\n    if citizen:\n        print(\"Eligible to vote\")\n    else:\n        print(\"Not a citizen\")\nelse:\n    print(\"Underage\")\nOutput: Eligible to vote\n\nNote that Python uses indentation, not brackets, to mark the blocks belonging to each if, elif and else."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain the following : (i) Data type (ii) Key words (iii) Identifiers (iv) Variable",
  "a": "(i) Data type: A data type tells what kind of value is stored in a variable and what operations can be performed on it. Common data types in Python are int for whole numbers, float for decimal numbers, str for text, bool for True or False, list for ordered collections, tuple for fixed collections, set for unique collections, and dict for key-value pairs.\nExample: age = 20 is int, price = 99.50 is float, name = \"Asha\" is str.\n\n(ii) Keywords: Keywords are reserved words in Python that have a special meaning and cannot be used as variable names. They are part of the language itself.\nExamples: if, else, for, while, def, class, import, return, True, False, None. The statement import keyword followed by print(keyword.kwlist) displays all keywords.\n\n(iii) Identifiers: An identifier is a name given to a variable, function, class or module. Rules for identifiers are: it must start with a letter or an underscore, it can contain letters, digits and underscores, it cannot contain spaces or special symbols, it is case sensitive, and it cannot be a keyword.\nExamples of valid identifiers: student_name, marks1, _total. Examples of invalid identifiers: 1marks, student name, for.\n\n(iv) Variable: A variable is a named location in memory used to store a value. It is created by assigning a value with the = operator, and its type is decided by the value assigned.\nExample: x = 10 stores the integer 10 in the variable x, and later x = \"hello\" stores a string in the same variable, because Python is dynamically typed."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Explain the procedure to create and import module in python.",
  "a": "A module is a Python file containing reusable code. The procedure to create and import a module has the following steps:\n\n1) Create the module file: Open a text editor or IDLE, write the required functions, variables or classes, and save the file with the .py extension. For example, save the file as greetings.py.\n2) Write the code in the module: The file should contain definitions only, such as:\ndef hello(name):\n    return \"Hello \" + name\n3) Place the module correctly: Save the module in the same folder as the program that will use it, so Python can find it.\n4) Import the module: In the main program, write import greetings to load the whole module, or from greetings import hello to load only one function.\n5) Use the module: Call its functions using the module name, for example greetings.hello(\"Asha\").\n6) Optional alias: A module can be imported with a shorter name using as, for example import greetings as g, and then g.hello(\"Asha\") is used.\n\nExample:\nModule file greetings.py:\ndef hello(name):\n    return \"Hello \" + name\n\nMain program:\nimport greetings\nprint(greetings.hello(\"Asha\"))\n\nOutput:\nHello Asha"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Explain the process of creating and importing a Python module with examples.",
  "a": "A module is a separate Python file that contains functions, variables or classes, which can be reused in other programs. Creating and importing a module involves two programs: the module file and the main program.\n\nStep 1: Create the module file. Write the code and save it with the .py extension, for example calculator.py:\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\nPI = 3.14\n\nStep 2: Import the module in the main program. There are three ways to import:\n1) import calculator: Imports the whole module, and functions are called as calculator.add(10, 5).\n2) from calculator import add: Imports only the add function, called directly as add(10, 5).\n3) import calculator as calc: Imports the module with the short name calc, called as calc.add(10, 5).\n\nStep 3: Use the module in the main program:\nimport calculator\nprint(\"Addition:\", calculator.add(10, 5))\nprint(\"Subtraction:\", calculator.subtract(10, 5))\nprint(\"Multiplication:\", calculator.multiply(10, 5))\nprint(\"Value of PI:\", calculator.PI)\n\nfrom calculator import add\nprint(\"Direct add:\", add(20, 30))\n\nOutput:\nAddition: 15\nSubtraction: 5\nMultiplication: 50\nValue of PI: 3.14\nDirect add: 50\n\nPython searches for the module in the current folder first, then in the folders listed in sys.path. If the module is not found, it gives a ModuleNotFoundError."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Explain the syntax and purpose of break statement in Python. Explain with a sample program.",
  "a": "Syntax of the break statement:\nbreak\n\nThe break statement is used inside a loop to end the loop immediately, even if the loop condition is still true. When break runs, control jumps out of the loop to the statement after the loop. It is commonly used to stop searching once the required item is found, or to stop a loop when a special condition occurs.\n\nSample program to search for a number in a list:\nnumbers = [10, 20, 30, 40, 50]\nsearch = 30\nfor num in numbers:\n    if num == search:\n        print(\"Number found:\", num)\n        break\n    print(\"Checking:\", num)\nprint(\"Search completed.\")\n\nOutput:\nChecking: 10\nChecking: 20\nNumber found: 30\nSearch completed.\n\nExplanation:\n1) The loop checks each number one by one.\n2) When num becomes 30, the condition num == search becomes true, so the message is printed and break ends the loop.\n3) The numbers 40 and 50 are never checked, and control moves to the statement after the loop."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Explain the ‘scope of variables’ in Python with an example program.",
  "a": "The scope of a variable is the region of a program in which the variable can be accessed. Python has three main scopes, decided by where the variable is created.\n\n1) Local scope: A variable created inside a function is local. It can be used only inside that function, and it is destroyed when the function ends.\n2) Global scope: A variable created outside all functions is global. It can be used anywhere in the program, including inside functions, for reading.\n3) Nonlocal scope: A variable in an outer function that is used inside a nested inner function. It is declared with the nonlocal keyword when it must be changed.\n\nThe LEGB rule decides the order in which Python searches for a variable: Local, then Enclosing, then Global, then Built-in.\n\nExample program:\nx = 100\n\ndef show():\n    x = 10\n    print(\"Local x:\", x)\n\ndef change():\n    global x\n    x = 200\n    print(\"Global x changed to:\", x)\n\nshow()\nprint(\"Global x:\", x)\nchange()\nprint(\"Global x after change:\", x)\n\nOutput:\nLocal x: 10\nGlobal x: 100\nGlobal x changed to: 200\nGlobal x after change: 200\n\nExplanation:\n1) Inside show(), x = 10 is a local variable, so it does not affect the global x.\n2) Inside change(), the global keyword tells Python to use the global x, so changing it to 200 changes the global value permanently."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "List and explain different arithmetic operators supported by Python and their precedence and associativity.",
  "a": "Arithmetic operators in Python:\n1) + addition: 10 + 3 = 13.\n2) - subtraction: 10 - 3 = 7.\n3) * multiplication: 10 * 3 = 30.\n4) / division: 10 / 3 = 3.3333333333333335, always a float.\n5) // floor division: 10 // 3 = 3, giving the whole number part.\n6) % modulus: 10 % 3 = 1, giving the remainder.\nPower operator (exponent): 2 to the power 3 = 8.\n\nPrecedence decides the order of evaluation, from highest to lowest:\n1) Parentheses ()\n2) Exponentiation (power operator)\n3) Unary plus and minus\n4) Multiplication, division, floor division, modulus: *, /, //, %\n5) Addition and subtraction: +, -\n\nAssociativity decides the order when operators have the same precedence:\n1) Most arithmetic operators are left associative, meaning they are evaluated from left to right.\nExample: 10 - 4 - 3 = (10 - 4) - 3 = 3, not 10 - (4 - 3) = 9.\n2) Exponentiation is right associative, meaning it is evaluated from right to left.\n2 to the power 3 to the power 2 = 2 to the power (3 to the power 2) = 2 to the power 9 = 512, not (2 to the power 3) to the power 2 = 64.\n\nExample:\nprint(10 + 2 * 3)\nprint((10 + 2) * 3)\nprint(pow(2, pow(3, 2)))\n\nOutput:\n16\n36\n512"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "What is data hiding? Explain with an example.",
  "a": "Data hiding means hiding the internal data of an object from outside access, so that it cannot be changed directly and accidentally. Only the methods of the class are allowed to access or modify the hidden data. Data hiding protects the data and makes the program more secure and easy to maintain.\n\nIn Python, data hiding is achieved by making attributes private. An attribute name starting with two underscores, such as __balance, becomes private through name mangling: Python internally renames it to _ClassName__balance, so it cannot be accessed directly from outside the class. Access is given through public methods, called getters and setters.\n\nExample:\nclass BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance = self.__balance + amount\n    def get_balance(self):\n        return self.__balance\n\nacc = BankAccount(1000)\nacc.deposit(500)\nprint(\"Balance:\", acc.get_balance())\n\nOutput:\nBalance: 1500\n\nExplanation:\n1) __balance is a private attribute, so it is hidden from outside the class.\n2) deposit() is the only way to increase the balance, and it checks that the amount is positive.\n3) get_balance() is the only way to read the balance.\n4) Writing acc.__balance directly from outside would give an error, which proves the data is hidden."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "What is python IDLE? Explain how to use IDE for writing and executing the program.",
  "a": "IDLE stands for Integrated Development and Learning Environment. It is the standard IDE that comes free with Python, and it is used for writing, running and testing Python programs. An IDE, or Integrated Development Environment, is software that combines an editor for writing code, an interpreter for running code, and tools for finding errors.\n\nUsing IDLE to write and execute a program:\n1) Open IDLE from the Start menu or applications list. The Python Shell window opens first, where single statements can be typed and run immediately.\n2) To write a full program, click File and then New File. A blank editor window opens.\n3) Type the program in the editor window, for example:\nprint(\"Hello World\")\n4) Save the file with File and then Save, giving it a name ending in .py, such as hello.py.\n5) Run the program by clicking Run and then Run Module, or by pressing the F5 key.\n6) The output appears in the Shell window. If there is an error, IDLE shows the error message and highlights the line, which helps in correcting it.\n\nOther popular IDEs for Python are VS Code, PyCharm and Thonny. They offer extra features such as auto-completion, debugging and project management, but the basic steps remain the same: write the code in the editor, save the file, and run it to see the output."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Write a Python Program to check if number is positive, negative or zero.",
  "a": "Program:\nnum = int(input(\"Enter a number: \"))\nif num > 0:\n    print(\"The number is positive.\")\nelif num < 0:\n    print(\"The number is negative.\")\nelse:\n    print(\"The number is zero.\")\n\nSample runs:\nEnter a number: 25\nThe number is positive.\n\nEnter a number: -8\nThe number is negative.\n\nEnter a number: 0\nThe number is zero.\n\nExplanation:\n1) int(input()) reads the number and converts it from text to an integer.\n2) If the number is greater than 0, the first block runs and prints positive.\n3) If the number is less than 0, the second block runs and prints negative.\n4) If neither condition is true, the number must be 0, so the else block prints zero."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Write a Python Program to create dictionary, add element to dictionary and delete element from the dictionary.",
  "a": "Program:\nstudent = {\"name\": \"Asha\", \"age\": 20}\nprint(\"Original dictionary:\", student)\nstudent[\"course\"] = \"CME\"\nprint(\"After adding course:\", student)\nstudent[\"age\"] = 21\nprint(\"After updating age:\", student)\ndel student[\"age\"]\nprint(\"After deleting age:\", student)\n\nOutput:\nOriginal dictionary: {'name': 'Asha', 'age': 20}\nAfter adding course: {'name': 'Asha', 'age': 20, 'course': 'CME'}\nAfter updating age: {'name': 'Asha', 'age': 21, 'course': 'CME'}\nAfter deleting age: {'name': 'Asha', 'course': 'CME'}\n\nExplanation:\n1) The dictionary is created with two key-value pairs, name and age.\n2) student[\"course\"] = \"CME\" adds a new key, because course does not exist yet.\n3) student[\"age\"] = 21 updates the existing key age to the new value 21.\n4) del student[\"age\"] deletes the key age along with its value."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Write a Python Program to multiply all numbers of a list and explain the each statement. * *",
  "a": "Program:\nnumbers = [2, 3, 4, 5]\nproduct = 1\nfor num in numbers:\n    product = product * num\nprint(\"Product of all numbers:\", product)\n\nOutput:\nProduct of all numbers: 120\n\nExplanation of each statement:\n1) numbers = [2, 3, 4, 5]: This statement creates a list named numbers containing four values.\n2) product = 1: This statement creates a variable product with the starting value 1, because multiplying by 1 does not change a value. Starting with 0 would wrongly keep the product at 0.\n3) for num in numbers: This statement starts a loop that takes each element of the list one by one into the variable num.\n4) product = product * num: This statement multiplies the current product by the current element and stores the result back in product. After the four repetitions, product becomes 2, then 6, then 24, then 120.\n5) print(\"Product of all numbers:\", product): This statement displays the final product, which is 120."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write a Python program that creates an array of integers [10, 20, 30, 40, 50] then : Access and print the 2nd and 4th elements. Append a new element. Remove an element. Display the final array.",
  "a": "Program:\nfrom array import array\n\narr = array('i', [10, 20, 30, 40, 50])\nprint(\"Original array:\", arr)\nprint(\"2nd element:\", arr[1])\nprint(\"4th element:\", arr[3])\narr.append(60)\nprint(\"After appending 60:\", arr)\narr.remove(30)\nprint(\"After removing 30:\", arr)\nprint(\"Final array:\", arr)\n\nOutput:\nOriginal array: array('i', [10, 20, 30, 40, 50])\n2nd element: 20\n4th element: 40\nAfter appending 60: array('i', [10, 20, 30, 40, 50, 60])\nAfter removing 30: array('i', [10, 20, 40, 50, 60])\nFinal array: array('i', [10, 20, 40, 50, 60])\n\nExplanation:\n1) array('i', [10, 20, 30, 40, 50]) creates an integer array, where i is the typecode for signed integers.\n2) arr[1] gives the 2nd element, 20, and arr[3] gives the 4th element, 40, because indexing starts at 0.\n3) arr.append(60) adds 60 at the end of the array.\n4) arr.remove(30) removes the value 30 from the array.\n5) The final array is [10, 20, 40, 50, 60]."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Write a Python program to construct the following pattern, using nested loop. For example, if the input is 2 print 1 2 2 If the input is 9 print 1 2 2 3 3 3 4 4 4 4 5 5 5 5 5 6 6 6 6 6 6 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 * *",
  "a": "Program:\nn = int(input(\"Enter a number: \"))\nfor i in range(1, n + 1):\n    for j in range(i):\n        print(i, end=\" \")\nprint()\n\nSample runs:\nEnter a number: 2\n1 2 2\n\nEnter a number: 9\n1 2 2 3 3 3 4 4 4 4 5 5 5 5 5 6 6 6 6 6 6 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9\n\nExplanation:\n1) The outer loop runs with i from 1 to n.\n2) The inner loop runs i times for each value of i, because range(i) gives i repetitions.\n3) print(i, end=\" \") prints the number i without moving to a new line, so each number appears i times in a row.\n4) The final print() moves to a new line after the whole pattern is printed."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Write a program in python that asks the user to enter their name and age. Print a message addressed to the user that tells the user the year in which they will turn 100 years old.",
  "a": "Program:\nimport datetime\n\nname = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))\ncurrent_year = datetime.date.today().year\nyear_100 = current_year + (100 - age)\nprint(name, \"will turn 100 years old in the year\", year_100)\n\nSample run (when the current year is 2026):\nEnter your name: Asha\nEnter your age: 20\nAsha will turn 100 years old in the year 2106\n\nExplanation:\n1) import datetime loads the datetime module, which provides the current date.\n2) input() reads the name and age, and int() converts the age from text to a number.\n3) datetime.date.today().year gives the current year.\n4) 100 - age gives how many years are left until the age of 100, and adding it to the current year gives the year in which the user will turn 100.\n5) print() displays the message addressed to the user."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "May/June 2023",
  "q": "Write a program in python to input a two-digit number and print it in words. For example, if input is 98, the output should be ‘nine eight’. * *",
  "a": "Program:\nnum = int(input(\"Enter a two-digit number: \"))\nwords = [\"zero\", \"one\", \"two\", \"three\", \"four\", \"five\", \"six\", \"seven\", \"eight\", \"nine\"]\ntens = num // 10\nones = num % 10\nprint(words[tens], words[ones])\n\nSample run:\nEnter a two-digit number: 98\nnine eight\n\nExplanation:\n1) words is a list in which the word for each digit is stored at the position equal to the digit itself, so words[9] is nine.\n2) num // 10 gives the tens digit: for 98, 98 // 10 = 9.\n3) num % 10 gives the ones digit: for 98, 98 % 10 = 8.\n4) print(words[tens], words[ones]) prints the word for the tens digit followed by the word for the ones digit, giving nine eight."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Write a python program that accepts a string and calculate the number of digits and letters. Sample data : Python 3.2 Expected output : Letters 6 Digits",
  "a": "Program:\ntext = input(\"Enter a string: \")\nletters = 0\ndigits = 0\nfor ch in text:\n    if ch.isalpha():\n        letters = letters + 1\n    elif ch.isdigit():\n        digits = digits + 1\nprint(\"Letters\", letters)\nprint(\"Digits\", digits)\n\nSample run:\nEnter a string: Python 3.2\nLetters 6\nDigits 2\n\nExplanation:\n1) letters and digits are counters starting at 0.\n2) The for loop examines every character of the string one by one.\n3) ch.isalpha() is True for letters, so the letters counter increases for P, y, t, h, o and n, giving 6.\n4) ch.isdigit() is True for digits, so the digits counter increases for 3 and 2, giving 2.\n5) The space and the dot are neither letters nor digits, so they are not counted."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Write a python program to access one modules variable and function in another module.",
  "a": "To access a variable and a function of one module in another module, the module is imported in the second program, and its members are used with the module name.\n\nModule file, mymodule.py:\nmessage = \"Welcome to Python\"\n\ndef greet(name):\n    return \"Hello \" + name\n\nMain program, main.py:\nimport mymodule\nprint(mymodule.message)\nprint(mymodule.greet(\"Asha\"))\n\nOutput:\nWelcome to Python\nHello Asha\n\nExplanation:\n1) mymodule.py defines a variable message and a function greet.\n2) The main program writes import mymodule, which loads the module.\n3) mymodule.message accesses the variable of the module.\n4) mymodule.greet(\"Asha\") calls the function of the module and returns Hello Asha.\n5) Both files must be in the same folder for Python to find the module."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Write a python program to declare and print a list of English alphabets.",
  "a": "Program:\nimport string\n\nalphabets = list(string.ascii_lowercase)\nprint(alphabets)\nprint(\"Uppercase alphabets:\", list(string.ascii_uppercase))\n\nOutput:\n['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']\nUppercase alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']\n\nExplanation:\n1) string.ascii_lowercase is a string containing all lowercase English alphabets from a to z.\n2) list() converts that string into a list, with each letter as a separate element.\n3) string.ascii_uppercase gives the same list in uppercase, from A to Z.\n\nThe same list can also be built without the string module, using a loop and the chr() function:\nalphabets = []\nfor i in range(26):\n    alphabets.append(chr(97 + i))\nprint(alphabets)\nHere chr(97) is a, and the loop adds all letters from a to z."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Write a python program to display sum of digits in a given numbers.",
  "a": "Program:\nnum = int(input(\"Enter a number: \"))\ntotal = 0\ntemp = num\nwhile temp > 0:\n    total = total + temp % 10\n    temp = temp // 10\nprint(\"Sum of digits of\", num, \"is\", total)\n\nSample run:\nEnter a number: 456\nSum of digits of 456 is 15\n\nExplanation:\n1) total starts at 0 and will collect the sum, while temp holds a working copy of the number.\n2) temp % 10 gives the last digit of the number, which is added to total.\n3) temp // 10 removes the last digit from the number.\n4) The while loop repeats until temp becomes 0, so every digit is added once.\n5) For 456, the steps are 6 + 5 + 4 = 15."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Write the syntax for try, except, else, finally clauses and explain with a sample program. *",
  "a": "Syntax:\ntry:\n    statements that may cause an error\nexcept ExceptionName:\n    statements that run when an error occurs\nelse:\n    statements that run when no error occurs\nfinally:\n    statements that always run\n\nPurpose of each clause:\n1) try: Contains the code that may raise an error.\n2) except: Runs when an error occurs in the try block, and handles it gracefully.\n3) else: Runs only when the try block completes without any error.\n4) finally: Always runs, whether an error occurs or not. It is used to release resources, such as closing a file.\n\nSample program:\ntry:\n    a = int(input(\"Enter numerator: \"))\n    b = int(input(\"Enter denominator: \"))\n    result = a / b\nexcept ZeroDivisionError:\n    print(\"Denominator cannot be zero.\")\nexcept ValueError:\n    print(\"Please enter numbers only.\")\nelse:\n    print(\"Result:\", result)\nfinally:\n    print(\"Program execution completed.\")\n\nSample runs:\nEnter numerator: 10\nEnter denominator: 2\nResult: 5.0\nProgram execution completed.\n\nEnter numerator: 10\nEnter denominator: 0\nDenominator cannot be zero.\nProgram execution completed."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "essay",
  "n": 1,
  "y": "Dec 2022",
  "q": "Write the syntax for while loop in Python. Write a Python program to find the factorial of a given integer using while loop.",
  "a": "Syntax of the while loop:\nwhile condition:\n    statements\n\nThe condition is tested first. As long as it is true, the block of statements runs again and again. When the condition becomes false, the loop ends. The variable used in the condition must be updated inside the loop, otherwise the loop will never end.\n\nProgram to find the factorial of a given integer using a while loop:\nn = int(input(\"Enter an integer: \"))\nfact = 1\ni = 1\nwhile i <= n:\n    fact = fact * i\n    i = i + 1\nprint(\"Factorial of\", n, \"is\", fact)\n\nSample run:\nEnter an integer: 5\nFactorial of 5 is 120\n\nExplanation:\n1) fact starts at 1, and i starts at 1.\n2) The loop runs while i is less than or equal to n.\n3) In each repetition, fact is multiplied by i, and i is increased by 1.\n4) For n = 5, fact becomes 1, then 2, then 6, then 24, then 120, which is 5 factorial."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 3,
  "y": "Dec 2022, Mar/Apr 2024, Oct/Nov 2023",
  "q": "What is data abstraction in Python?",
  "a": "Data abstraction means showing only the essential features of an object and hiding the implementation details. A driver uses a car's steering and pedals without knowing how the engine works internally. In Python it is achieved with abstract classes (using the abc module) and by keeping internal details private, so users interact with a simple interface while the complexity stays hidden."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 2,
  "y": "May/June 2023, Oct/Nov 2024",
  "q": "Define class. *",
  "a": "A class is a blueprint or template for creating objects. It defines the attributes, which are the data, and the methods, which are the functions, that all objects of that type will have.\nExample: class Student: defines the structure, and s1 = Student() creates an actual object from it."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2024, Oct/Nov 2024",
  "q": "Define cloning list.",
  "a": "Cloning a list means creating an independent copy of the list, so that changes to the copy do not affect the original.\nA list can be cloned using slicing (new = old[:]), the copy method (new = old.copy()), or the list function (new = list(old)).\nNote that these methods create a shallow copy: the outer list is independent, but objects nested inside it are still shared."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 2,
  "y": "Mar/Apr 2024, May/June 2023",
  "q": "Write the steps to process a file.",
  "a": "The steps to process a file in Python are:\n1) Open the file using the open() function in the required mode, such as read, write or append.\n2) Read from the file using read(), readline() or readlines(), or write to it using write() or writelines().\n3) Close the file using close(), so that resources are released and written data is saved.\nBest practice is to use the with statement, which closes the file automatically even if an error occurs."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 2,
  "y": "Dec 2022, Mar/Apr 2026",
  "q": "Write the syntax for opening a file in Python and list the file opening modes.",
  "a": "Syntax: file_object = open(\"filename\", \"mode\").\n\nModes:\n- r — read (default, file must exist).\n- w — write (creates or overwrites).\n- a — append (adds at the end).\n- x — exclusive creation (fails if the file exists).\n- b — binary mode (example: rb, wb).\n- t — text mode (default).\n- + — read and write together (example: r+ opens for reading and writing)."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Define Aliasing.",
  "a": "Aliasing means giving two different names to the same object in memory. When a list is assigned to another variable, such as b = a, no new list is created; both names point to the same list.\nBecause of aliasing, a change made through one name is visible through the other name as well. To avoid this, an independent copy must be made using slicing or the copy() method."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Define Python Variable. *",
  "a": "A variable in Python is a named location in memory used to store a value. It is created by assigning a value with the = operator, for example age = 20.\nPython is dynamically typed, so the type of a variable is decided by the value assigned to it, and the same variable can later hold a value of a different type."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Define break and assert.",
  "a": "break: It is a loop control statement that ends the loop immediately, and control moves to the statement after the loop. It is used to stop a loop early, for example when the required item is found.\nassert: It is a statement used for debugging that checks whether a condition is true. If the condition is true, the program continues normally, and if it is false, Python raises an AssertionError and stops the program."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Define default arguments.",
  "a": "A default argument is a parameter of a function that has a preset value, which is used when the caller does not pass a value for that parameter.\nExample: def greet(name=\"Guest\"): defines name with the default value Guest. Calling greet() prints Hello Guest, while calling greet(\"Asha\") prints Hello Asha.\nDefault arguments must appear after all required parameters in the function definition."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define dictionary comprehension with an example.",
  "a": "Dictionary comprehension is a short way of creating a dictionary from an iterable in a single line, using the form {key: value for item in iterable}.\nExample:\nsquares = {x: x * x for x in range(1, 6)}\nprint(squares)\nOutput: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\nHere each number from 1 to 5 becomes a key, and its square becomes the value."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Define directory.",
  "a": "A directory, also called a folder, is a location in the file system that holds files and other directories in an organised way.\nPython works with directories through the os module: os.getcwd() gives the current directory, os.mkdir() creates a new directory, os.chdir() changes the current directory, and os.listdir() lists the contents of a directory."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Define exception.",
  "a": "An exception is an error that occurs while a program is running, which disturbs the normal flow of the program. It is different from a syntax error, which is found before the program runs.\nCommon examples are ZeroDivisionError when dividing by zero, ValueError when converting wrong text to a number, and IndexError when accessing a position that does not exist in a list."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Define exceptional handling.",
  "a": "Exception handling, also called error handling, is the method of dealing with runtime errors gracefully so that the program does not crash.\nIt is done using the try block, which contains code that may cause an error, and the except block, which contains the code that runs when the error occurs.\nWith exception handling, the program shows a clear message for the error and continues or ends safely instead of stopping suddenly."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Define indentation.",
  "a": "Indentation means the spaces or tabs at the beginning of a line in Python. Python uses indentation to mark blocks of code, such as the body of a loop, an if statement or a function, instead of using brackets as other languages do.\nAll lines in the same block must have the same indentation, usually four spaces. Wrong or mixed indentation gives an IndentationError, and the program will not run."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Define keyword. Give any two examples of keyword. 1+1+1",
  "a": "A keyword is a reserved word in Python that has a special meaning in the language and cannot be used as a variable name, function name or identifier.\nTwo examples are if, which is used for decision making, and for, which is used for looping.\nOther keywords include while, def, class, import, return, True, False and None."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Define mutability in Python lists.",
  "a": "Mutability means the ability of an object to be changed after it is created. Lists are mutable in Python, which means their elements can be changed, added or removed after the list is created.\nFor example, after creating numbers = [10, 20, 30], the statement numbers[0] = 99 changes the list to [99, 20, 30], and numbers.append(40) adds a new element. This is different from tuples and strings, which are immutable."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Define python package.",
  "a": "A package in Python is a collection of related modules organised in a directory. The directory contains a special file named __init__.py, which tells Python that the directory should be treated as a package.\nPackages are used to organise large programs: instead of keeping many module files in one place, related modules are grouped into packages, and they are imported using dot notation, such as import mypackage.mymodule."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Define scope of a variable.",
  "a": "The scope of a variable is the region of a program in which the variable can be accessed and used.\nA local variable is created inside a function and can be used only inside that function. A global variable is created outside all functions and can be used anywhere in the program.\nFor example, a variable created inside a function disappears when the function ends, while a global variable exists for the whole program."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Define set.",
  "a": "A set is an unordered collection of unique elements. It is written using curly brackets, such as {1, 2, 3}, or created with the set() function.\nSets do not allow duplicate values, do not support indexing because they are unordered, and are mutable, so elements can be added or removed. Sets are mainly used to remove duplicates and to perform operations such as union and intersection."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Define tuple.",
  "a": "A tuple is an ordered collection of elements written in round brackets, such as (10, 20, 30). Elements are accessed by index, starting from 0, and duplicate values are allowed.\nTuples are immutable, which means their elements cannot be changed, added or removed after the tuple is created. Tuples are used for fixed data, such as coordinates, and they can be used as dictionary keys."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "Define variables.",
  "a": "Variables are names that store data values in a program. A variable is created by assigning a value to a name, for example marks = 85, and the stored value can be read or changed later in the program.\nVariable names must start with a letter or an underscore, can contain letters, digits and underscores, are case sensitive, and cannot be Python keywords."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "How will you use comments in Python programs?",
  "a": "Comments are notes written in a program for the reader, which Python ignores while running the program. They explain what the code does and make programs easier to understand.\nA single-line comment starts with the # symbol, for example: # This line adds two numbers. Everything after # on that line is ignored.\nA multi-line comment is written using triple-quoted strings, which span several lines and are often used as documentation for modules, classes and functions."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List any three advantages of modules in python.",
  "a": "Three advantages of modules in Python are:\n1) Reusability: Code written once in a module can be used in many programs without rewriting it.\n2) Organisation: A large program can be divided into smaller, manageable module files.\n3) Maintenance: Errors can be found and fixed in one module without changing the rest of the program."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List any three array methods in python.",
  "a": "Three array methods in Python are:\n1) append(x): Adds element x at the end of the array.\n2) insert(i, x): Inserts element x at position i in the array.\n3) pop(): Removes and returns the last element of the array.\nOther array methods include remove(x), index(x), count(x) and reverse()."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "List any three built-in exceptions of Python. *",
  "a": "Three built-in exceptions in Python are:\n1) ValueError: Raised when a function receives a value of the correct type but with an unsuitable value, such as int(\"abc\").\n2) TypeError: Raised when an operation is performed on values of unsuitable types, such as adding a number and a string.\n3) ZeroDivisionError: Raised when a number is divided by zero."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "List any three compile time errors.",
  "a": "Three compile time errors in Python are:\n1) SyntaxError: Raised when the code breaks the rules of the Python language, such as a missing bracket or colon.\n2) IndentationError: Raised when the indentation of a block is wrong or inconsistent.\n3) TabError: Raised when tabs and spaces are mixed for indentation in the same block.\nCompile time errors are detected before the program runs, so the program does not start at all."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "List any three control statements. 1+1+1",
  "a": "Three control statements in Python are:\n1) if statement: A decision-making statement that runs a block of code only when a condition is true.\n2) for loop: A repetition statement that runs a block once for each item in a sequence.\n3) while loop: A repetition statement that runs a block repeatedly as long as a condition is true.\nOther control statements include break, continue and pass, which change the flow inside loops."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "List any three features of Python.",
  "a": "Three features of Python are:\n1) Simple and easy to learn: Python uses simple, English-like syntax, so programs are short and easy to read.\n2) Interpreted language: Python code is executed line by line by the interpreter, which makes testing and debugging easy.\n3) Large standard library: Python comes with many ready-made modules for files, maths, internet and databases, so programmers need not write everything from scratch."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "List any three libraries in python. *",
  "a": "Three popular libraries in Python are:\n1) NumPy: Used for numerical calculations and for working with arrays and matrices.\n2) Pandas: Used for data analysis, working with tables of data, and reading files such as CSV and Excel files.\n3) Matplotlib: Used for drawing charts and graphs from data.\nOther well-known libraries include math, random and datetime from the standard library, and TensorFlow for machine learning."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "List any three runtime errors.",
  "a": "Three runtime errors in Python are:\n1) ZeroDivisionError: Occurs when a program tries to divide a number by zero while it is running.\n2) IndexError: Occurs when a program tries to access a list position that does not exist.\n3) KeyError: Occurs when a program tries to access a dictionary key that does not exist.\nRuntime errors are also called exceptions, and they occur only while the program is running, not before it starts."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "List applications of Python.",
  "a": "Applications of Python include:\n1) Web development using frameworks such as Django and Flask.\n2) Data science and data analysis using NumPy and Pandas.\n3) Artificial intelligence and machine learning using TensorFlow and Scikit-learn.\n4) Automation of repetitive tasks through small scripts.\n5) Game development using Pygame.\n6) Desktop applications using Tkinter."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "List different modes in file opening.",
  "a": "The different modes for opening a file in Python are:\n1) r: Read mode, the default. The file must exist, otherwise an error occurs.\n2) w: Write mode. It creates a new file, or erases the contents of an existing file.\n3) a: Append mode. New data is added at the end of the file without erasing existing data.\n4) x: Exclusive creation mode. It creates a new file, but gives an error if the file already exists.\n5) r+: Read and write mode. The file must exist.\n6) w+: Write and read mode. It creates a new file or erases an existing one.\n7) b: Binary mode, used with other modes, such as rb or wb, for non-text files like images.\n8) t: Text mode, the default, used for text files."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "What are Python sets? Write a python program to create a set and display it.",
  "a": "Python sets are unordered collections of unique elements, written in curly brackets or created with the set() function. They do not allow duplicates and do not support indexing.\nProgram to create a set and display it:\ncolours = {\"red\", \"green\", \"blue\", \"red\"}\nprint(colours)\nprint(\"Number of colours:\", len(colours))\nOutput:\n{'red', 'green', 'blue'}\nNumber of colours: 3\nHere red appears twice while creating the set, but it is stored only once, so the set has 3 elements."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "What are different python array methods?",
  "a": "The different array methods in Python are:\n1) append(x): Adds element x at the end of the array.\n2) insert(i, x): Inserts element x at position i.\n3) remove(x): Removes the first occurrence of value x.\n4) pop(): Removes and returns the last element.\n5) index(x): Returns the position of value x.\n6) count(x): Returns how many times value x appears.\n7) reverse(): Reverses the order of the elements.\n8) extend(iterable): Adds all elements of another array or sequence at the end."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is a List in Python?",
  "a": "A list in Python is an ordered collection of elements written in square brackets, such as [10, 20, 30]. Elements are accessed by index starting from 0, and the same list can hold values of different types.\nLists are mutable, which means elements can be changed, added or removed after the list is created, and they allow duplicate values."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is a Module in Python?",
  "a": "A module in Python is a file containing Python code, such as functions, variables and classes, saved with the .py extension.\nModules allow code to be reused: instead of writing the same code again, a program imports the module and uses its functions. For example, the math module provides mathematical functions, and a programmer's own module file can be imported in the same way."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is a Namespace in Python?",
  "a": "A namespace in Python is a mapping from names to objects, which keeps track of which name refers to which value. It prevents confusion when the same name is used in different parts of a program.\nThere are three main namespaces: the local namespace for names inside a function, the global namespace for names in a module, and the built-in namespace for names provided by Python itself, such as print and len."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "What is an operator?",
  "a": "An operator is a symbol that performs an operation on one or more values, called operands, and produces a result.\nFor example, in 10 + 20, + is the operator and 10 and 20 are the operands, and the result is 30.\nTypes of operators in Python include arithmetic operators (+, -, *, /), relational operators (==, >, <), logical operators (and, or, not), assignment operators (=, +=) and membership operators (in, not in)."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "What is anonymous function?",
  "a": "An anonymous function is a function without a name, created in Python using the lambda keyword. It contains a single expression, and it returns the value of that expression automatically, without a return statement.\nSyntax: lambda arguments: expression\nExample: square = lambda x: x * x, and square(5) gives 25.\nAnonymous functions are used for short, one-time operations, often as arguments to functions such as sorted() or map()."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is data hiding in Python? How is it achieved?",
  "a": "Data hiding means hiding the internal data of an object from outside access, so that it cannot be changed directly by other parts of the program.\nIn Python, data hiding is achieved by making attributes private: an attribute name starting with two underscores, such as __balance, is renamed internally by Python, so it cannot be accessed directly from outside the class.\nAccess to private data is then given only through public methods, such as a getter method to read the value and a setter method to change it safely."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is data hiding?",
  "a": "Data hiding is the practice of restricting direct access to an object's internal data, so that it can only be read or changed through controlled methods. It is a key part of encapsulation in object-oriented programming.\n\nIn Python it is done with private attributes: names starting with two underscores (for example, self.__balance) are name-mangled, so they cannot be accessed directly from outside the class. Access is then provided through methods, such as get_balance() and set_balance(), which can validate values before changing them.\n\nAdvantage: the internal representation can change without breaking code that uses the class, and invalid data (for example, a negative balance) can be rejected at the method level."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "What is mutability?",
  "a": "Mutability is the property of an object that decides whether it can be changed after it is created.\nMutable objects can be changed after creation: lists, dictionaries and sets are mutable, so elements can be added, removed or modified.\nImmutable objects cannot be changed after creation: integers, floats, strings and tuples are immutable, so any operation on them creates a new object instead of changing the old one."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2024",
  "q": "What is range?",
  "a": "The range() function in Python generates a sequence of numbers, and it is mainly used with for loops.\nIt has three forms: range(stop) gives numbers from 0 up to, but not including, stop; range(start, stop) gives numbers from start up to, but not including, stop; and range(start, stop, step) gives numbers from start, increasing by step each time.\nFor example, range(5) gives 0, 1, 2, 3, 4, and range(1, 10, 2) gives 1, 3, 5, 7, 9."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is the purpose of a default argument in a Python function? Give an example.",
  "a": "The purpose of a default argument is to provide a fallback value for a parameter, so that the function works even when the caller does not pass a value for it. This makes functions more flexible and avoids errors from missing arguments.\nExample:\ndef greet(name=\"Guest\"):\n    print(\"Hello\", name)\n\ngreet()\ngreet(\"Asha\")\n\nOutput:\nHello Guest\nHello Asha\nIn the first call, no value is passed, so the default value Guest is used. In the second call, Asha replaces the default value."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "What is the purpose of raise in exception handling?",
  "a": "The purpose of raise in exception handling is to deliberately throw an exception when the program detects an error condition, instead of waiting for Python to raise one automatically.\nIt is used to signal that something has gone wrong, so that the calling code can handle the error with a try-except block.\nExample:\nage = -5\nif age < 0:\n    raise ValueError(\"Age cannot be negative.\")\nHere raise creates a ValueError with a clear message, because a negative age is not valid."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is the purpose of the IF statement in Python?",
  "a": "The purpose of the IF statement in Python is decision making: it tests a condition, and runs a block of code only when the condition is true.\nIf the condition is false, the block is skipped, and the program continues after it. This allows a program to behave differently in different situations, such as printing Pass only when marks are 40 or more.\nWithout the IF statement, a program would always run every line in order and could not make decisions."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "What is the purpose of the ‘raise’ keyword in Python?",
  "a": "The raise keyword in Python is used to explicitly raise an exception, that is, to signal an error condition in the program.\nIt is used when the programmer wants to stop normal execution and report a problem, for example when a function receives an invalid value.\nExample:\ndef divide(a, b):\n    if b == 0:\n        raise ZeroDivisionError(\"Denominator cannot be zero.\")\n    return a / b\nHere raise sends a ZeroDivisionError with a message, which can then be caught and handled by a try-except block in the calling code."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "What is the use of pass statement in Python.",
  "a": "The pass statement in Python is a null statement, meaning it does nothing when it runs. It is used as a placeholder in places where Python requires a statement, but no action is needed yet.\nFor example, an empty function or an empty class cannot be left blank, because that gives an error, so pass is written inside:\ndef my_function():\n    pass\nclass MyClass:\n    pass\nPass is also used during program development, to write the structure first and fill in the details later."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write a Python program that reads two numbers and displays their sum, difference, product and quotient.",
  "a": "Program:\na = int(input(\"Enter first number: \"))\nb = int(input(\"Enter second number: \"))\nprint(\"Sum:\", a + b)\nprint(\"Difference:\", a - b)\nprint(\"Product:\", a * b)\nprint(\"Quotient:\", a / b)\n\nSample run:\nEnter first number: 10\nEnter second number: 2\nSum: 12\nDifference: 8\nProduct: 20\nQuotient: 5.0"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "Write a Python program to read age of citizen and check whether citizen is eligible for voting or not.",
  "a": "Program:\nage = int(input(\"Enter age of citizen: \"))\nif age >= 18:\n    print(\"Citizen is eligible for voting.\")\nelse:\n    print(\"Citizen is not eligible for voting.\")\n\nSample runs:\nEnter age of citizen: 20\nCitizen is eligible for voting.\n\nEnter age of citizen: 16\nCitizen is not eligible for voting.\n\nExplanation: In India, the minimum age for voting is 18 years, so the condition age >= 18 decides eligibility."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Write about If statement with an example.",
  "a": "The if statement in Python runs a block of code only when a given condition is true. The condition is written after the keyword if, followed by a colon, and the block is written with indentation.\nSyntax:\nif condition:\n    statements\n\nExample:\nmarks = 85\nif marks >= 40:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\n\nOutput:\nPass\nHere the condition marks >= 40 is true, so the print statement inside the if block runs."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "Write any three advantages of tuple over list.",
  "a": "Three advantages of a tuple over a list are:\n1) Immutability: A tuple cannot be changed accidentally, so data stored in it stays safe.\n2) Speed and memory: Tuples are faster to process and use less memory than lists, because their size is fixed.\n3) Usable as dictionary keys: Tuples can be used as keys in a dictionary, because they are hashable, whereas lists cannot."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "Write any three differences between local variable and global variable in Python. *",
  "a": "Three differences between a local variable and a global variable in Python are:\n1) Definition: A local variable is defined inside a function, while a global variable is defined outside all functions.\n2) Accessibility: A local variable can be used only inside the function where it is defined, while a global variable can be used anywhere in the program.\n3) Lifetime: A local variable exists only while the function is running and is destroyed afterwards, while a global variable exists for the whole duration of the program."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write the difference between a Python module and a package.",
  "a": "A module is a single Python file with the .py extension, containing functions, variables or classes, such as mymath.py.\nA package is a directory containing many related modules, along with a special file named __init__.py that marks the directory as a package.\nIn short, a module is one file, while a package is a collection of modules organised in a folder, imported using dot notation such as import mypackage.mymodule."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Write the differences between For and While loop statements.",
  "a": "Differences between for and while loop statements in Python:\n1) Iteration: A for loop iterates over a sequence such as a list, string or range, while a while loop repeats as long as a condition is true.\n2) Number of repetitions: A for loop is used when the number of repetitions is known, while a while loop is used when it depends on a condition and is not known in advance.\n3) Control variable: In a for loop, the loop variable is updated automatically for each item, while in a while loop, the programmer must update the variable inside the loop, otherwise it becomes an infinite loop.\n4) Structure: A for loop has the form for variable in sequence:, while a while loop has the form while condition:"
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Dec 2022",
  "q": "Write the syntax and purpose of lambda function in Python.",
  "a": "A lambda function is a small anonymous function, that is, a function without a name, created using the lambda keyword.\nSyntax: lambda arguments: expression\nThe lambda function takes arguments, evaluates a single expression, and returns its value automatically, without a return statement.\nExample:\nadd = lambda a, b: a + b\nprint(add(10, 20))\nOutput: 30\nLambda functions are used for short, one-time operations, often as arguments to functions such as sorted(), map() and filter()."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "May/June 2023",
  "q": "Write the syntax for FOR loop in python.",
  "a": "Syntax of the FOR loop in Python:\nfor variable in sequence:\n    statements\n\nHere variable takes each value from the sequence one by one, and the indented statements run once for every value.\nExample:\nfor i in range(1, 6):\n    print(i)\nOutput:\n1\n2\n3\n4\n5\nIn this example, range(1, 6) gives the numbers 1 to 5, and each number is printed in turn."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2024",
  "q": "Write the syntax for IF-ELSE statement.",
  "a": "Syntax of the IF-ELSE statement in Python:\nif condition:\n    statements to run when the condition is true\nelse:\n    statements to run when the condition is false\n\nExample:\nage = 16\nif age >= 18:\n    print(\"Eligible for voting\")\nelse:\n    print(\"Not eligible for voting\")\n\nOutput:\nNot eligible for voting\nHere the condition age >= 18 is false, so the block under else runs instead of the block under if."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the syntax for opening a file in Python.",
  "a": "Syntax: file_object = open(\"filename\", \"mode\").\n\nModes:\n- r — read (default, file must exist).\n- w — write (creates or overwrites).\n- a — append (adds at the end).\n- x — exclusive creation (fails if the file exists).\n- b — binary mode (example: rb, wb).\n- t — text mode (default).\n- + — read and write together (example: r+ opens for reading and writing)."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Mar/Apr 2026",
  "q": "Write the syntax of a while loop in Python.",
  "a": "Syntax of the while loop in Python:\nwhile condition:\n    statements\n\nThe condition is tested first. As long as it is true, the indented statements run again and again, and when the condition becomes false, the loop ends.\nExample:\ni = 1\nwhile i <= 5:\n    print(i)\n    i = i + 1\nOutput:\n1\n2\n3\n4\n5\nHere i must be increased inside the loop, otherwise the condition stays true forever and the loop never ends."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the syntax of defining a function in Python.",
  "a": "Syntax of defining a function in Python:\ndef function_name(parameters):\n    statements\n    return value\n\nHere def is the keyword that starts a function definition, function_name is the name of the function, parameters are the inputs written in brackets, and return sends a value back to the caller.\nExample:\ndef add(a, b):\n    return a + b\n\nresult = add(10, 20)\nprint(result)\nOutput: 30\nThe function must be defined before it is called."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2025",
  "q": "Write the syntax to create a Dictionary.",
  "a": "Syntax to create a dictionary in Python:\ndictionary_name = {key1: value1, key2: value2, key3: value3}\n\nA dictionary is written in curly brackets, with each item as a key-value pair separated by a colon, and items separated by commas.\nExample:\nstudent = {\"name\": \"Asha\", \"age\": 20, \"course\": \"CME\"}\nprint(student)\nprint(student[\"name\"])\nOutput:\n{'name': 'Asha', 'age': 20, 'course': 'CME'}\nAsha\nA dictionary can also be created with the dict() function, for example dict(name=\"Asha\", age=20). Keys must be unique and immutable, while values can be of any type."
 },
 {
  "s": "PYTHON PROGRAMMING",
  "c": "CM-505",
  "t": "short",
  "n": 1,
  "y": "Oct/Nov 2023",
  "q": "Write the various basic list operations.",
  "a": "The various basic list operations in Python are:\n1) Indexing: Accessing an element by its position, such as list[0] for the first element and list[-1] for the last element.\n2) Slicing: Extracting a part of the list, such as list[1:4], which gives elements from index 1 to 3.\n3) Concatenation: Joining two lists with the + operator, such as [1, 2] + [3, 4] giving [1, 2, 3, 4].\n4) Repetition: Repeating a list with the * operator, such as [1, 2] * 3 giving [1, 2, 1, 2, 1, 2].\n5) Membership: Checking whether a value exists in the list using in, such as 20 in [10, 20, 30] giving True.\n6) Length: Finding the number of elements using len(), such as len([10, 20, 30]) giving 3.\n7) Appending: Adding an element at the end using append().\n8) Inserting: Adding an element at a position using insert().\n9) Removing: Deleting an element using remove() or pop().\n10) Sorting and reversing: Arranging elements using sort() and reversing the order using reverse()."
 }
];