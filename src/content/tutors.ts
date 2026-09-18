export interface DaySchedule {
  day: string;
  active: boolean;
  slots: string[];
}

export interface TutorTrustItem {
  label: string;
  value: string;
  type: 'experience' | 'subjects' | 'qualification' | 'certification' | 'curricula';
}

export interface TutorFAQ {
  q: string;
  a: string;
}

export interface TutorProfile {
  slug: string;
  name: string;
  role: string;
  photo: string;
  imageAlt: string;
  subhead: string;
  quickChips: string[];
  trialUrl: string;
  waUrl: string;
  trustItems: TutorTrustItem[];
  about: {
    eyebrow: string;
    titlePrefix: string;
    titleAccent: string;
    bullets: string[];
    certification?: string;
  };
  subjects: {
    hero: string[];
    curricula: string[];
  };
  availability: {
    note: string;
    schedule: DaySchedule[];
  };
  faqs: TutorFAQ[];
  seo: {
    title: string;
    description: string;
  };
}

export const TUTORS: Record<string, TutorProfile> = {
  'tabraiz-khan': {
    slug: 'tabraiz-khan',
    name: 'Tabraiz Khan',
    role: 'Maths · Physics · Statistics · Ustaad',
    photo: '/images/tutors/tabraiz-khan.jpg',
    imageAlt: 'Tabraiz Khan, Cambridge Certified Maths, Physics and Statistics tutor at Ustaad',
    subhead: 'Cambridge Certified Teacher with 9 years teaching Maths, Physics and Statistics across IGCSE, GCSE, A-Level, IB and American curricula.',
    quickChips: [
      'Replies in ~12 min on WhatsApp',
      'Free 30-min trial',
      'Cambridge Certified',
    ],
    trialUrl: '/contact#form',
    waUrl: 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20request%20Tabraiz%20Khan%20for%20a%20trial%20lesson.',
    trustItems: [
      { label: 'Experience', value: '9 Years', type: 'experience' },
      { label: 'Subjects', value: 'Maths, Physics, Statistics', type: 'subjects' },
      { label: 'Qualification', value: 'Master in Statistics', type: 'qualification' },
      { label: 'Certification', value: 'Cambridge Certified', type: 'certification' },
    ],
    about: {
      eyebrow: 'About Tabraiz',
      titlePrefix: 'Three subjects.',
      titleAccent: 'One calm classroom.',
      bullets: [
        "Cambridge Certified Teacher with a Master's in Statistics.",
        '9 years teaching Maths, Physics and Statistics.',
        'Rare fit for students juggling all three subjects, especially at IB HL and A-Level.',
        'Analytical style: concept first, then technique, then the exam paper.',
        'Parents notice homework becomes less of a battle within the first few weeks.',
        'Teaches online across Dubai, Abu Dhabi and the wider UAE.',
        'Weekday evenings and full weekend availability.',
      ],
      certification: 'Cambridge Certified Teacher',
    },
    subjects: {
      hero: ['Mathematics', 'Physics', 'Statistics'],
      curricula: [
        'IGCSE',
        'GCSE',
        'A-Level',
        'IB (SL & HL)',
        'American Curriculum',
        'Cambridge',
        'Edexcel',
        'AQA',
        'IAL',
      ],
    },
    availability: {
      note: 'Weekend morning slots (11 AM to 1 PM) fill fastest with IB HL students. Book early in the week for first pick.',
      schedule: [
        { day: 'Mon', active: true, slots: ['6 – 7 PM', '8 – 9 PM'] },
        { day: 'Tue', active: true, slots: ['6 – 7 PM', '8 – 9 PM'] },
        { day: 'Wed', active: false, slots: [] },
        { day: 'Thu', active: true, slots: ['6 – 7 PM', '8 – 9 PM'] },
        { day: 'Fri', active: false, slots: [] },
        { day: 'Sat', active: true, slots: ['11 AM – 1 PM', '6 – 9 PM'] },
        { day: 'Sun', active: true, slots: ['11 AM – 1 PM', '6 – 9 PM'] },
      ],
    },
    faqs: [
      {
        q: 'Can Tabraiz teach all three subjects to the same child?',
        a: 'Yes. Instead of coordinating three separate tutors, students working across Maths, Physics and Statistics get one tutor who sees how the subjects reinforce each other, especially at IB HL and A-Level.',
      },
      {
        q: 'Which exam boards does Tabraiz handle?',
        a: "Cambridge, Edexcel, AQA, IAL and IB (both SL and HL), plus the American curriculum. If your school uses a variant we haven't listed, mention it in your enquiry and we will confirm fit before the trial.",
      },
      {
        q: 'Is he a good fit for IB HL students?',
        a: "Very. Master's in Statistics + Cambridge certification + 9 years of IB teaching make him one of Ustaad's go-to tutors for HL Maths Analysis & Approaches and HL Physics.",
      },
      {
        q: 'Are lessons online or in person?',
        a: "All of Tabraiz's Ustaad lessons run online. Families across Dubai, Abu Dhabi and the wider UAE can book him without commute time.",
      },
      {
        q: 'How quickly can we get a trial booked?',
        a: 'Most trials with Tabraiz are scheduled within 2 to 3 days of your enquiry, subject to his open slots that week. Weekend mornings fill fastest. Message us on WhatsApp for the fastest response.',
      },
    ],
    seo: {
      title: 'Tabraiz Khan · Maths, Physics & Statistics Tutor Dubai | Ustaad',
      description:
        'Tabraiz Khan is a Cambridge Certified Maths, Physics and Statistics tutor at Ustaad with 9 years teaching across IGCSE, GCSE, A-Level, IB and American curricula. Book a free trial today.',
    },
  },

  'fahad-khan': {
    slug: 'fahad-khan',
    name: 'Fahad Khan',
    role: 'Maths Tutor · Ustaad',
    photo: '/images/tutors/fahad-khan.jpg',
    imageAlt: 'Fahad Khan, Maths tutor at Ustaad',
    subhead: 'Maths tutor with 10+ years teaching IGCSE, GCSE and A-Level. Focus on structure, calm pacing, and real exam confidence.',
    quickChips: [
      'Replies in ~12 min on WhatsApp',
      'Free 30-min trial',
    ],
    trialUrl: '/contact#form',
    waUrl: 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20request%20Fahad%20Khan%20for%20a%20trial%20lesson.',
    trustItems: [
      { label: 'Experience', value: '10+ Years', type: 'experience' },
      { label: 'Subject', value: 'Mathematics', type: 'subjects' },
      { label: 'Qualification', value: 'BS Mathematics & B.Ed', type: 'qualification' },
      { label: 'Curricula', value: 'IGCSE · GCSE · A-Level', type: 'curricula' },
    ],
    about: {
      eyebrow: 'About Fahad',
      titlePrefix: 'Ten years of Maths.',
      titleAccent: 'One calm approach.',
      bullets: [
        '10+ years teaching Maths at IGCSE, GCSE and A-Level.',
        'Lessons built around past papers, mark schemes and weekly progress checks.',
        'Patient with students who arrive nervous about Maths.',
        'Maps out exactly what the syllabus needs, then works backwards from the exam.',
        'Teaches online across Dubai, Abu Dhabi and the wider UAE.',
        'Weekday evenings and weekend slots that fit around school routines.',
      ],
    },
    subjects: {
      hero: ['Mathematics'],
      curricula: ['IGCSE', 'GCSE', 'A-Level', 'Cambridge', 'Edexcel'],
    },
    availability: {
      note: 'Weekend slots fill fastest. Book early in the week for Saturday evenings.',
      schedule: [
        { day: 'Mon', active: true, slots: ['5 – 7 PM'] },
        { day: 'Tue', active: true, slots: ['5 – 7 PM'] },
        { day: 'Wed', active: true, slots: ['5 – 7 PM'] },
        { day: 'Thu', active: true, slots: ['5 – 7 PM'] },
        { day: 'Fri', active: false, slots: [] },
        { day: 'Sat', active: true, slots: ['5 – 10 PM'] },
        { day: 'Sun', active: true, slots: ['7 – 10 PM'] },
      ],
    },
    faqs: [
      {
        q: 'What year groups does Fahad teach?',
        a: 'Years 9 to 13 across IGCSE, GCSE and A-Level Mathematics. For younger students preparing to enter these pathways, get in touch and we will advise.',
      },
      {
        q: 'Are lessons online or in person?',
        a: "All of Fahad's Ustaad lessons run online. Families across Dubai, Abu Dhabi and the wider UAE can book him without commute time.",
      },
      {
        q: 'Which exam boards does Fahad handle?',
        a: 'Cambridge and Edexcel. If your school uses a different Maths board, mention it in your enquiry and we will confirm before the trial.',
      },
      {
        q: "Can we switch tutors if Fahad isn't the right fit?",
        a: "Yes. The 30-minute trial is designed for exactly that decision. If Fahad is not the right match, we will pair you with another Ustaad tutor at no extra cost.",
      },
      {
        q: 'How quickly can we get a trial booked?',
        a: 'Most trials with Fahad are scheduled within 2 to 3 days of your enquiry, subject to his open slots that week. Message us on WhatsApp for the fastest response.',
      },
    ],
    seo: {
      title: 'Fahad Khan · Maths Tutor Dubai & UAE | Ustaad',
      description:
        'Fahad Khan is a specialized Maths tutor at Ustaad with 10+ years experience teaching IGCSE, GCSE and A-Level. Book a free 30-minute trial lesson today.',
    },
  },
};

export function getTutorBySlug(slug: string): TutorProfile | undefined {
  return TUTORS[slug];
}
