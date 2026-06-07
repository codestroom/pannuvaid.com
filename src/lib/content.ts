export type Testimonial = {
  name: string;
  location: string;
  treatment: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Harpreet Singh",
    location: "Ludhiana, Punjab",
    treatment: "Knee Pain",
    rating: 5,
    quote:
      "After years of knee pain, I avoided surgery thanks to Pannu Vaid. Within two months I was walking comfortably again. Truly life-changing care.",
  },
  {
    name: "Gurleen Kaur",
    location: "Samrala, Punjab",
    treatment: "Arthritis",
    rating: 5,
    quote:
      "My rheumatoid arthritis flare-ups have reduced dramatically. The herbal treatment had no side effects and the team genuinely cares.",
  },
  {
    name: "Rajesh Kumar",
    location: "Chandigarh",
    treatment: "Sciatica",
    rating: 5,
    quote:
      "The shooting pain down my leg is finally gone. I had tried everything before finding Pannu Vaid. Highly recommend their Ayurvedic approach.",
  },
  {
    name: "Simran Bedi",
    location: "Khanna, Punjab",
    treatment: "Digestive Disorders",
    rating: 5,
    quote:
      "My chronic acidity and bloating are gone. They fixed the root cause, not just the symptoms. I feel energetic and healthy again.",
  },
  {
    name: "Manjit Dhillon",
    location: "Patiala, Punjab",
    treatment: "Back Pain",
    rating: 5,
    quote:
      "The Kati Basti therapy worked wonders for my chronic back pain. Professional, authentic, and effective treatment.",
  },
  {
    name: "Anita Sharma",
    location: "Jalandhar, Punjab",
    treatment: "Cervical Pain",
    rating: 5,
    quote:
      "Years of neck stiffness and headaches resolved with their cervical care. The doctors explain everything patiently. Five stars!",
  },
];

export type VideoFeedback = {
  src: string;
  poster: string;
  label: string;
  condition: string;
  productSlug: string;
};

// Real patient video feedback recorded at the clinic.
// productSlug links each story to the product the patient was treated with.
export const videoFeedback: VideoFeedback[] = [
  {
    src: "/videos/liver-feedback.mp4",
    poster: "/videos/liver-feedback.jpg",
    label: "Liver Health Recovery",
    condition: "Liver Treatment",
    productSlug: "liver-care-tonic",
  },
  {
    src: "/videos/arthritis-reel.mp4",
    poster: "/videos/arthritis-reel.jpg",
    label: "Relief From Gathiya",
    condition: "Arthritis / Joint Pain",
    productSlug: "joint-nerve-capsules",
  },
  {
    src: "/videos/moga-feedback.mp4",
    poster: "/videos/moga-feedback.jpg",
    label: "Patient From Moga",
    condition: "Joint & Nerve Care",
    productSlug: "joint-nerve-capsules",
  },
  {
    src: "/videos/vaid-feedback.mp4",
    poster: "/videos/vaid-feedback.jpg",
    label: "A Word of Thanks",
    condition: "Liver Treatment",
    productSlug: "liver-care-tonic",
  },
  {
    src: "/videos/patient-reel.mp4",
    poster: "/videos/patient-reel.jpg",
    label: "Patient Experience",
    condition: "Joint & Nerve Care",
    productSlug: "joint-nerve-capsules",
  },
];

export type SuccessStory = {
  name: string;
  age: number;
  condition: string;
  duration: string;
  before: string;
  after: string;
};

export const successStories: SuccessStory[] = [
  {
    name: "Balwinder S.",
    age: 62,
    condition: "Severe Osteoarthritis",
    duration: "3 months",
    before: "Could barely climb stairs, dependent on daily painkillers.",
    after: "Walks 3 km daily, painkiller-free, restored independence.",
  },
  {
    name: "Kamaljit K.",
    age: 48,
    condition: "Chronic Sciatica",
    duration: "10 weeks",
    before: "Radiating leg pain, unable to sit for more than 10 minutes.",
    after: "Pain-free, back to full-time work and household activity.",
  },
  {
    name: "Sukhwinder P.",
    age: 55,
    condition: "Cervical Spondylosis",
    duration: "8 weeks",
    before: "Constant neck pain, frequent headaches, arm numbness.",
    after: "Full neck mobility, headache-free, numbness resolved.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogCategories = [
  "Ayurveda",
  "Joint Pain",
  "Arthritis",
  "Lifestyle",
  "Herbal Remedies",
  "Health Tips",
  "Wellness",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "5-ayurvedic-herbs-for-joint-pain",
    title: "5 Powerful Ayurvedic Herbs for Joint Pain Relief",
    category: "Joint Pain",
    excerpt:
      "Discover the time-tested herbs Ayurveda uses to calm inflammation and rebuild joint health — naturally and without side effects.",
    author: "Pannu Vaid",
    date: "2026-05-20",
    readTime: "6 min read",
    content: [
      "Joint pain is one of the most common complaints we see, and Ayurveda offers a rich pharmacy of herbs to address it at the root.",
      "Shallaki (Boswellia) is renowned for its anti-inflammatory action, helping reduce swelling and stiffness without harming the stomach.",
      "Guggulu purifies tissues and supports healthy joint function, while Ashwagandha strengthens muscles and calms aggravated Vata.",
      "Turmeric (Haridra) and Ginger (Shunthi) round out a powerful anti-inflammatory protocol when used under proper guidance.",
      "Always consult a qualified Ayurvedic practitioner before starting herbs, as dosage and combination must be tailored to your constitution.",
    ],
  },
  {
    slug: "understanding-vata-and-pain",
    title: "Understanding Vata Dosha: The Root of Most Pain",
    category: "Ayurveda",
    excerpt:
      "Why do so many pain conditions trace back to Vata imbalance? Here's what Ayurveda teaches about movement, dryness, and discomfort.",
    author: "Pannu Vaid",
    date: "2026-05-08",
    readTime: "5 min read",
    content: [
      "In Ayurveda, Vata governs all movement in the body — including the nervous system and the joints.",
      "When Vata becomes aggravated by stress, cold, irregular routine, or ageing, it can cause dryness, cracking joints, and shooting pains.",
      "Balancing Vata involves warmth, oil, routine, and nourishing foods — principles we build into every treatment plan.",
      "Understanding your dominant dosha is the first step to lasting relief rather than temporary symptom control.",
    ],
  },
  {
    slug: "daily-routine-for-strong-joints",
    title: "A Daily Ayurvedic Routine for Strong, Healthy Joints",
    category: "Lifestyle",
    excerpt:
      "Small daily habits — from morning oil massage to the right foods — can keep your joints supple for decades. Here's how.",
    author: "Pannu Vaid",
    date: "2026-04-22",
    readTime: "7 min read",
    content: [
      "Dinacharya, the Ayurvedic daily routine, is one of the most powerful tools for long-term joint health.",
      "Start with a warm oil self-massage (Abhyanga) to lubricate tissues and improve circulation.",
      "Favour warm, cooked, easily digestible foods and stay hydrated with warm water through the day.",
      "Gentle yoga and consistent movement keep joints mobile, while early, regular sleep allows tissues to repair.",
    ],
  },
  {
    slug: "managing-arthritis-naturally",
    title: "Managing Arthritis Naturally: An Ayurvedic Guide",
    category: "Arthritis",
    excerpt:
      "Arthritis doesn't have to mean a lifetime of painkillers. Learn how Ayurveda slows progression and eases inflammation.",
    author: "Pannu Vaid",
    date: "2026-04-05",
    readTime: "6 min read",
    content: [
      "Ayurveda classifies most arthritis as Aamavata — a condition of toxins (Ama) combined with aggravated Vata.",
      "The cornerstone of treatment is improving digestion to stop toxin formation, then clearing existing toxins through Panchakarma.",
      "An anti-inflammatory diet, warm therapies, and targeted herbs work together to reduce flare-ups.",
      "Consistency is key — patients who follow the full protocol see the most durable improvement.",
    ],
  },
  {
    slug: "herbal-remedies-for-better-digestion",
    title: "Simple Herbal Remedies for Better Digestion",
    category: "Herbal Remedies",
    excerpt:
      "Strong digestion is the foundation of health in Ayurveda. Try these gentle, kitchen-friendly remedies to fire up your Agni.",
    author: "Pannu Vaid",
    date: "2026-03-18",
    readTime: "4 min read",
    content: [
      "Agni, your digestive fire, determines how well you absorb nutrition and avoid toxin buildup.",
      "A small piece of fresh ginger with a pinch of salt before meals kindles appetite and digestion.",
      "Cumin, coriander, and fennel tea after meals reduces bloating and supports comfortable digestion.",
      "Eating mindfully, at regular times, and avoiding cold drinks with meals makes a remarkable difference.",
    ],
  },
  {
    slug: "everyday-wellness-tips-from-ayurveda",
    title: "10 Everyday Wellness Tips From Ayurveda",
    category: "Wellness",
    excerpt:
      "Timeless, practical habits you can start today to boost energy, immunity, and calm — straight from Ayurvedic wisdom.",
    author: "Pannu Vaid",
    date: "2026-03-01",
    readTime: "5 min read",
    content: [
      "Wake up before sunrise, hydrate, and start your day with gentle movement.",
      "Eat your largest meal at midday when digestion is strongest.",
      "Avoid screens late at night and aim for a consistent sleep schedule.",
      "Take a few minutes daily for breathing or meditation to balance the mind.",
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
