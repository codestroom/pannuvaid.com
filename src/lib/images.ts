// Centralised, license-free imagery (Unsplash). All IDs verified to resolve.
export const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage = u("photo-1512290923902-8a9f81dc236c", 1600);
export const aboutImage = u("photo-1532938911079-1b06ac7ceec7", 1100);
export const ctaImage = u("photo-1466637574441-749b8f19452f", 1600);

export const treatmentImages: Record<string, string> = {
  "knee-pain": u("photo-1544161515-4ab6ce6db874"),
  "joint-pain": u("photo-1599058917212-d750089bc07e"),
  arthritis: u("photo-1576091160550-2173dba999ef"),
  "back-pain": u("photo-1545205597-3d9d02c29597"),
  sciatica: u("photo-1571019613454-1cb2f99b2d8b"),
  "cervical-pain": u("photo-1556228578-8c89e6adf883"),
  "nerve-disorders": u("photo-1518611012118-696072aa579a"),
  "digestive-disorders": u("photo-1498837167922-ddd27525d352"),
  "allergy-management": u("photo-1490645935967-10de6ba17061"),
  "chronic-pain-relief": u("photo-1512678080530-7760d81faba6"),
  "general-wellness": u("photo-1506126613408-eca07ce68773"),
};

export const blogImages: Record<string, string> = {
  "5-ayurvedic-herbs-for-joint-pain": u("photo-1466637574441-749b8f19452f"),
  "understanding-vata-and-pain": u("photo-1559757148-5c350d0d3c56"),
  "daily-routine-for-strong-joints": u("photo-1571019613454-1cb2f99b2d8b"),
  "managing-arthritis-naturally": u("photo-1576091160550-2173dba999ef"),
  "herbal-remedies-for-better-digestion": u("photo-1490645935967-10de6ba17061"),
  "everyday-wellness-tips-from-ayurveda": u("photo-1545205597-3d9d02c29597"),
};

export const galleryImages = [
  u("photo-1556760544-74068565f05c"),
  u("photo-1540555700478-4be289fbecef"),
  u("photo-1505944270255-72b8c68c6a70"),
  u("photo-1503602642458-232111445657"),
  u("photo-1607619056574-7b8d3ee536b2"),
  u("photo-1559757148-5c350d0d3c56"),
];

export const treatmentImage = (slug: string) =>
  treatmentImages[slug] ?? u("photo-1506126613408-eca07ce68773");
export const blogImage = (slug: string) =>
  blogImages[slug] ?? u("photo-1466637574441-749b8f19452f");
