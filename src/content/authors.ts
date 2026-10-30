export type AuthorArticle = {
  title: string;
  href: string;
  role: 'authored' | 'reviewed';
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  jobTitle: string;
  credentials: string;
  subjects: string[];
  bio: string[];
  photo: string;
  photoAlt: string;
  linkedIn?: string;
  articles: AuthorArticle[];
};

export const AUTHORS: Author[] = [
  {
    slug: 'saira-s',
    name: 'Saira S',
    role: 'Content Writer, Exam Strategies',
    jobTitle: 'Content Writer & Exam Specialist',
    credentials: 'Saira is an experienced writer focusing on study habits and exam strategies for Science subjects.',
    subjects: ['Chemistry', 'Study methods', 'Exam technique'],
    bio: [
      'Saira is an experienced writer focusing on study habits and exam strategies for Science subjects.',
      'Her work helps students understand how to retain complex information over time.',
    ],
    photo: '/UpdatedImages/ustaad-personalised-one-to-one-online-lesson-abu-dhabi.webp',
    photoAlt: 'Saira S, Content Writer & Exam Specialist at Ustaad UAE',
    linkedIn: 'https://www.linkedin.com/company/ustaad-ae',
    articles: [
      { title: 'Why Students Forget Chemistry So Quickly (And How Parents Can Help)', href: '/blogs/why-chemistry-fades-from-memory', role: 'authored' },
    ],
  },
  {
    slug: 'nimra-shahzada',
    name: 'Nimra Shahzada',
    role: 'Writer on learning and the psychology of studying',
    jobTitle: 'Writer on learning and the psychology of studying',
    credentials: 'Nimra writes about the study problems UAE parents see at home: children who revise for hours but still lose marks, homework that never gets finished, and exam stress that builds before mocks.',
    subjects: ['Exam wellbeing', 'Study routines', 'Parent guidance', 'IGCSE & A-Level support'],
    bio: [
      'Her articles turn these common worries into simple, evidence-based steps parents can follow to support their children.',
      'Working closely with Ustaad tutors across Dubai and Abu Dhabi, she focuses on practical guidance for managing revision anxiety, building sustainable study routines, and understanding how teenagers learn.',
    ],
    photo: '/images/team/nimra-shahzada-v2.jpg',
    photoAlt: 'Nimra Shahzada, Writer on learning and the psychology of studying at Ustaad UAE',
    linkedIn: 'https://www.linkedin.com/company/ustaad-ae',
    articles: [
      { title: 'Winter Break Revision Plan for UAE Students: How to Rest, Reset and Be Ready for the New Term', href: '/blogs/winter-break-revision-plan-uae-students', role: 'authored' },
      { title: "How to Read an Examiner's Report: The Secret Document That Turns B Grades into A*s", href: '/blogs/how-to-read-examiner-reports-igcse-a-level', role: 'authored' },
      { title: 'The Scaffolding Trap: Why Students Freeze on Exam Questions', href: '/blogs/why-students-freeze-exam-questions-scaffolding-trap', role: 'authored' },
      { title: 'Maths Anxiety in Teenagers: Why Your Child Says "I\'m Just Bad at Maths" (and How to Help)', href: '/blogs/maths-anxiety-teenagers-signs-causes-help', role: 'authored' },
      { title: "Parent-Teacher Meetings in the UAE: What to Ask When Your Child Is in IGCSE or A-Level", href: '/blogs/parent-teacher-meeting-questions-uae', role: 'authored' },
      { title: "Why Teenagers Procrastinate on Revision (And Why It Isn't Laziness)", href: '/blogs/why-teenagers-procrastinate-on-revision', role: 'authored' },
      { title: 'Sleep and Memory: Why All-Nighters Backfire for UAE Students', href: '/blogs/sleep-and-memory-why-all-nighters-backfire', role: 'authored' },
      { title: 'The One Word in Every Exam Question That Decides Your Marks (Command Words)', href: '/blogs/command-words-igcse-a-level-exams', role: 'authored' },
      { title: "Exam Stamina: Why Your Child Can't Sit the Full Paper", href: '/blogs/exam-stamina-uae-students', role: 'authored' },
      { title: 'Exams Are Back in the UAE. What Changes for Your Child', href: '/blogs/uae-exams-return-students-never-sat-one', role: 'authored' },
      { title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First', href: '/blogs/igcse-preparation-past-papers-final-step', role: 'authored' },
      { title: '"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late', href: '/blogs/exam-panic-before-exams-uae', role: 'authored' },
      { title: 'Your Child Understands Physics. So Why Are the Marks Still Low?', href: '/blogs/physics-understanding-vs-marks', role: 'authored' },
      { title: 'How to Read a UAE School Report Card Like an Education Counsellor', href: '/blogs/read-uae-school-report-card', role: 'authored' },
      { title: '10 Honest Questions to Ask Before You Hire a Private Tutor in Abu Dhabi', href: '/blogs/10-questions-hiring-private-tutor-abu-dhabi', role: 'authored' },
      { title: "How Much Should Parents Help With Homework? A UAE Parent's Guide to Getting the Balance Right", href: '/blogs/how-much-should-parents-help-with-homework', role: 'authored' },
    ],
  },
  {
    slug: 'nida-iqbal',
    name: 'Nida Iqbal',
    role: 'Editorial Reviewer',
    jobTitle: 'MPhil in Education Leadership and Management',
    credentials: 'Nida checks every article before it is published. She makes sure the advice is correct, easy to understand, and matches how UAE schools teach and test students.',
    subjects: ['Editorial review', 'Curriculum accuracy', 'Parent clarity'],
    bio: [
      'Nida checks every article before it is published. She makes sure the advice is correct, easy to understand, and matches how UAE schools teach and test students.',
      'She is the named person who approves our content, including the work sent in by teachers who prefer to stay unnamed.',
    ],
    photo: '/images/team/nida-iqbal-v3.jpg',
    photoAlt: 'Nida Iqbal, Editorial Reviewer at Ustaad UAE',
    linkedIn: 'https://www.linkedin.com/company/ustaad-ae',
    articles: [
      { title: "Why Teenagers Procrastinate on Revision (And Why It Isn't Laziness)", href: '/blogs/why-teenagers-procrastinate-on-revision', role: 'reviewed' },
      { title: "How Much Should Parents Help With Homework? A UAE Parent's Guide to Getting the Balance Right", href: '/blogs/how-much-should-parents-help-with-homework', role: 'reviewed' },
      { title: 'Sleep and Memory: Why All-Nighters Backfire for UAE Students', href: '/blogs/sleep-and-memory-why-all-nighters-backfire', role: 'reviewed' },
      { title: 'The One Word in Every Exam Question That Decides Your Marks (Command Words)', href: '/blogs/command-words-igcse-a-level-exams', role: 'reviewed' },
      { title: 'Silly Mistakes in Maths Exams: Why They Happen and a 3-Minute Checking Routine', href: '/blogs/silly-mistakes-maths-exams', role: 'reviewed' },
      { title: "What Does the y-Intercept Actually Mean? (And When It Means Nothing at All)", href: '/blogs/what-does-y-intercept-mean-maths', role: 'reviewed' },
      { title: "What Does the Gradient Actually Mean? A Teacher Explains It from Maths to Physics", href: '/blogs/what-does-gradient-mean-maths-physics', role: 'reviewed' },
      { title: "Exam Stamina: Why Your Child Can't Sit the Full Paper", href: '/blogs/exam-stamina-uae-students', role: 'reviewed' },
      { title: 'Exams Are Back in the UAE. What Changes for Your Child', href: '/blogs/uae-exams-return-students-never-sat-one', role: 'reviewed' },
      { title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First', href: '/blogs/igcse-preparation-past-papers-final-step', role: 'reviewed' },
      { title: 'Exam Panic Before Exams UAE', href: '/blogs/exam-panic-before-exams-uae', role: 'reviewed' },
      { title: 'IGCSE Maths Revision Low Marks', href: '/blogs/igcse-maths-revision-low-marks', role: 'reviewed' },
      { title: 'IGCSE Physics Formulas Exam', href: '/blogs/igcse-physics-formulas-exam', role: 'reviewed' },
      { title: 'Physics Understanding vs Marks', href: '/blogs/physics-understanding-vs-marks', role: 'reviewed' },
      { title: 'Why Students Forget Chemistry So Quickly (And How Parents Can Help)', href: '/blogs/why-chemistry-fades-from-memory', role: 'reviewed' },
      { title: 'How to Read a UAE School Report Card Like an Education Counsellor', href: '/blogs/read-uae-school-report-card', role: 'reviewed' },
      { title: '10 Honest Questions to Ask Before You Hire a Private Tutor in Abu Dhabi', href: '/blogs/10-questions-hiring-private-tutor-abu-dhabi', role: 'reviewed' },
    ],
  },
  {
    slug: 'fahad-khan',
    name: 'Fahad Khan',
    role: 'Maths Tutor, IGCSE, GCSE & A-Level',
    jobTitle: 'Maths Tutor & Curriculum Specialist',
    credentials: 'BS Mathematics & B.Ed with 10+ years teaching Cambridge and Edexcel Mathematics across IGCSE, GCSE, and A-Level.',
    subjects: ['Mathematics', 'IGCSE Maths', 'GCSE Maths', 'A-Level Maths', 'Coordinate Geometry'],
    bio: [
      'Fahad Khan is an experienced mathematics tutor specialising in Cambridge and Edexcel Maths for secondary and sixth form students.',
      'His teaching breaks down abstract algebraic equations and graphs into clear, intuitive steps that earn full method and interpretation marks in examinations.',
    ],
    photo: '/images/tutors/fahad-khan.jpg',
    photoAlt: 'Fahad Khan, Maths Tutor at Ustaad UAE',
    linkedIn: 'https://www.linkedin.com/company/ustaad-ae',
    articles: [
      { title: 'Silly Mistakes in Maths Exams: Why They Happen and a 3-Minute Checking Routine', href: '/blogs/silly-mistakes-maths-exams', role: 'authored' },
      { title: 'What Does the y-Intercept Actually Mean? (And When It Means Nothing at All)', href: '/blogs/what-does-y-intercept-mean-maths', role: 'authored' },
    ],
  },
  {
    slug: 'ustaad-subject-specialists',
    name: 'Ustaad Subject Specialists',
    role: 'Contributing Teachers',
    jobTitle: 'Ustaad Subject Specialists',
    credentials: 'A group of practising Maths, Science, and English teachers who add worked examples, exam tips, and fact checks to our articles.',
    subjects: ['Maths', 'Physics and Chemistry', 'Biology', 'Exam technique'],
    bio: [
      'A group of practising Maths, Science, and English teachers who add worked examples, exam tips, and fact checks to our articles.',
      'Many teach in UAE schools and prefer not to use their names in public, so we share their subjects and experience instead.',
      'Every contribution is reviewed by Nida Iqbal before publication.',
    ],
    photo: '/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp',
    photoAlt: 'Ustaad Subject Specialists contributing Maths, Science and English guidance for UAE families',
    linkedIn: 'https://www.linkedin.com/company/ustaad-ae',
    articles: [
      { title: 'What Does the Gradient Actually Mean? A Teacher Explains It from Maths to Physics', href: '/blogs/what-does-gradient-mean-maths-physics', role: 'authored' },
      { title: 'IGCSE Physics Formulas for Exams', href: '/blogs/igcse-physics-formulas-exam', role: 'authored' },
      { title: 'Why IGCSE Maths Students Lose Marks After Hours of Revision', href: '/blogs/igcse-maths-revision-low-marks', role: 'authored' },
    ],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  const n = name.toLowerCase();
  return AUTHORS.find(
    (a) => a.name.toLowerCase() === n || n.includes(a.name.toLowerCase()) || a.name.toLowerCase().includes(n.split('|')[0].trim())
  );
}
