/**
 * ALL PERSONAL INFO LIVES HERE.
 * Pages, SEO tags, RSS and share images update from this file.
 * Content summarized from https://github.com/SonHoang2
 */
export const site = {
  /** Real domain, no trailing slash. Used by canonical URLs, sitemap and OG tags. */
  url: 'https://example.com',
  lang: 'en',
  locale: 'en_US',

  name: 'Sơn Hoàng',
  /** Oversized name in the hero, one array item per line. */
  nameLines: ['Sơn', 'Hoàng'],
  monogram: 'SH',
  jobTitle: 'Full Stack Engineer',

  /** Home page <title> and description. Keep under 60 and 160 characters. */
  title: 'Sơn Hoàng | Full Stack Engineer in Vietnam',
  description:
    'Portfolio of Sơn Hoàng, a Full Stack Engineer building scalable systems, real-time apps, and secure web platforms.',

  location: {
    label: 'Vietnam',
    country: 'VN',
    timeZone: 'Asia/Ho_Chi_Minh',
    utc: 'GMT+7',
  },
  /** Set open to true to show the availability line in the hero. */
  availability: { open: false, label: 'Available for new projects' },

  /** Enable once you have real posts (remove `draft: true` in src/content/blog). */
  showBlog: false,

  socials: [{ label: 'GitHub', href: 'https://github.com/SonHoang2' }],

  nav: [
    { label: 'Projects', href: '/projects/' },
    { label: 'About', href: '/#about' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/#contact' },
  ],

  hero: {
    lede: 'I build scalable systems, real-time apps, and secure web platforms.',
    facts: [
      { label: 'Focus', value: 'Real-time, microservices, security' },
      { label: 'Backend', value: 'NestJS, Spring Boot, FastAPI' },
      { label: 'Frontend', value: 'React, Angular, React Native' },
    ],
  },

  about: {
    statement:
      'From end-to-end encrypted chat to microservices on Kubernetes, I like problems where most of the work happens behind the interface.',
    paragraphs: [
      'Recent projects include a chat app with video calls and real-time deepfake detection, and a task management platform split into services with full CI/CD and monitoring.',
      'I work across the stack, from React and Angular interfaces to backends, databases and message queues.',
    ],
  },

  /** Summarized from repository history. Replace with real work experience if you like. */
  journey: [
    {
      period: '2026',
      title: 'Microservices with Java',
      summary: 'Spring Boot, Kubernetes, CI/CD and Prometheus + Grafana monitoring in Task Management.',
    },
    {
      period: '2024 – 2025',
      title: 'Security and real-time',
      summary: 'TrueSecure with WebRTC and E2EE, SecureDMS with document encryption, NestShopify on NestJS.',
    },
    {
      period: '2023',
      title: 'Full stack applications',
      summary: 'Natours and Cat World with React, Express, databases and user authentication.',
    },
    {
      period: '2021 – 2022',
      title: 'Web foundations',
      summary: 'First projects in HTML, CSS and React.',
    },
  ],

  skills: [
    { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python'] },
    { group: 'Frontend', items: ['React', 'Angular', 'React Native', 'Tailwind CSS'] },
    { group: 'Backend', items: ['NestJS', 'Spring Boot', 'Express', 'FastAPI'] },
    { group: 'Data & infrastructure', items: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'] },
    { group: 'Real-time & security', items: ['Socket.IO', 'WebRTC', 'E2EE', 'JWT', 'OAuth'] },
  ],

  contact: {
    heading: "Let's build something worth using.",
    note: 'See more projects and reach me on GitHub.',
    link: { label: 'github.com/SonHoang2', href: 'https://github.com/SonHoang2' },
  },
} as const;
