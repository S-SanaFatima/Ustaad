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
    role: 'Content Writer, Study and Exam Topics',
    jobTitle: 'Content Writer, Study and Exam Topics',
    credentials: 'Nimra writes about the study problems UAE parents see at home: children who revise for hours but still lose marks, homework that never gets finished, and exam stress that builds before mocks.',
    subjects: ['Exam wellbeing', 'Study routines', 'Parent guidance', 'IGCSE & A-Level support'],
    bio: [
      'Nimra writes about the study problems UAE parents see at home: children who revise for hours but still lose marks, homework that never gets finished, and exam stress that builds before mocks.',
      'Her articles turn these common worries into simple steps parents can follow.',
    ],
    photo: '/UpdatedImages/experienced-uae-educator-online-tutoring-session.webp',
    photoAlt: 'Nimra Shahzada, Education Counsellor and Student Support Specialist at Ustaad UAE',
    linkedIn: 'https://www.linkedin.com/company/ustaad-ae',
    articles: [
      { title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First', href: '/blogs/igcse-preparation-past-papers-final-step', role: 'authored' },
      { title: '"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late', href: '/blogs/exam-panic-before-exams-uae', role: 'authored' },
      { title: 'Your Child Understands Physics. So Why Are the Marks Still Low?', href: '/blogs/physics-understanding-vs-marks', role: 'authored' },
      { title: 'How to Read a UAE School Report Card Like an Education Counsellor', href: '/blogs/read-uae-school-report-card', role: 'authored' },
      { title: '10 Honest Questions to Ask Before You Hire a Private Tutor in Abu Dhabi', href: '/blogs/10-questions-hiring-private-tutor-abu-dhabi', role: 'authored' },
    ],
  },
  {
    slug: 'nida-iqbal',
    name: 'Nida Iqbal',
    role: 'Editorial Reviewer, MPhil in Education Leadership',
    jobTitle: 'MPhil in Education Leadership and Management',
    credentials: 'Nida checks every article before it is published. She makes sure the advice is correct, easy to understand, and matches how UAE schools teach and test students.',
    subjects: ['Editorial review', 'Curriculum accuracy', 'Parent clarity'],
    bio: [
      'Nida checks every article before it is published. She makes sure the advice is correct, easy to understand, and matches how UAE schools teach and test students.',
      'She is the named person who approves our content, including the work sent in by teachers who prefer to stay unnamed.',
    ],
    photo: '/UpdatedImages/private-subject-tutoring-igcse-ib-a-level-uae.webp',
    photoAlt: 'Nida Iqbal, MPhil in Education Leadership and Management, editorial reviewer at Ustaad',
    linkedIn: 'https://www.linkedin.com/company/ustaad-ae',
    articles: [
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
    slug: 'ustaad-subject-specialists',
    name: 'Ustaad Subject Specialists',
    role: 'Contributing teachers, names kept private',
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
