export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "training", label: "Training" },
  { id: "results", label: "Results" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

export const PRINCIPLES = [
  {
    number: "01",
    title: "Accuracy First",
    body: "Every video is built on verified technique. No shortcuts, no guesswork — only what the movement actually demands.",
    icon: "crosshair",
  },
  {
    number: "02",
    title: "Progress Through Knowledge",
    body: "Understanding precedes performance. We teach the why behind every cue so improvement compounds rep after rep.",
    icon: "book-open",
  },
  {
    number: "03",
    title: "Built for Every Lifter",
    body: "From first pull to competition platform, instruction scales to your level without diluting the standards.",
    icon: "users",
  },
] as const;

export const FEATURES = [
  {
    number: "01",
    title: "Expert Demonstrations",
    body: "Every lift is performed and filmed by experienced coaches, from multiple angles, at full and slow speed.",
    icon: "video",
  },
  {
    number: "02",
    title: "Technique Breakdown",
    body: "Frame-by-frame analysis isolates each phase of the movement — setup, execution, and lockout — with clear cues.",
    icon: "scan-line",
  },
  {
    number: "03",
    title: "Structured Learning",
    body: "Programs are sequenced so each session builds on the last. You always know what to watch and what to drill.",
    icon: "list-checks",
  },
  {
    number: "04",
    title: "Performance Focused",
    body: "Instruction is tied to measurable outcomes: better positions, cleaner reps, and numbers that keep moving.",
    icon: "trending-up",
  },
] as const;

export const STAGES = [
  {
    name: "Learn",
    body: "See the movement done right. Understand the positions, the timing, and the intent behind every cue.",
  },
  {
    name: "Refine",
    body: "Sharpen execution with targeted drills and honest self-assessment. Small corrections, compounding returns.",
  },
  {
    name: "Improve",
    body: "Progressive programming turns refined technique into measurable strength, rep after rep.",
  },
] as const;

export const LESSON = {
  title: "Deadlift Fundamentals",
  category: "Strength Training",
  duration: "12:45",
  level: "Beginner / Intermediate",
} as const;

export const STATS = [
  { value: 250, suffix: "+", label: "Training Videos" },
  { value: 15, suffix: "K+", label: "Active Learners" },
  { value: 40, suffix: "+", label: "Training Programs" },
  { value: 95, suffix: "%", label: "Viewer Satisfaction" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do I need experience to start with Red Sizzle?",
    answer:
      "No. Our Beginner tracks assume zero prior coaching. Every foundational video explains the movement from the ground up, and each program states exactly who it is for.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "A barbell, plates, and a rack cover the majority of our programs. Some auxiliary sessions use dumbbells or bands, and every lesson lists required equipment up front.",
  },
  {
    question: "How are the videos structured?",
    answer:
      "Each lesson pairs a full-speed demonstration with a slow-motion technique breakdown, followed by step-by-step cues and common faults to watch for.",
  },
  {
    question: "Can I train at home or only in a gym?",
    answer:
      "Both. Programs include home-compatible variations wherever the movement allows it, and each video flags what changes when space or equipment is limited.",
  },
  {
    question: "How do I know which program fits my level?",
    answer:
      "Every program page lists prerequisite movements and a short self-assessment. If you are between levels, the guidance is always to start one step lower and move up when the standards feel clean.",
  },
  {
    question: "How often is new content released?",
    answer:
      "New lessons and program updates ship on a regular monthly schedule, driven by the movements and questions our learners ask about most.",
  },
] as const;

export const CONTACT = {
  email: "hello@redsizzle.com",
  location: "Austin, Texas, USA",
  hours: "Mon–Fri 9:00 AM–5:00 PM",
  callout: "YOUR NEXT LEVEL STARTS WITH THE RIGHT KNOWLEDGE.",
} as const;
