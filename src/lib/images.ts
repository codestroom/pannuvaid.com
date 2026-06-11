// Centralised, license-free imagery (Unsplash). All IDs verified to resolve.
export const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Ayurvedic oil therapy (abhyanga)
export const heroImage = u("photo-1544161515-4ab6ce6db874", 1600);
// Spoons of herbal powders (churna) with fresh herbs — classical ayurvedic medicine
export const aboutImage = u("photo-1506368249639-73a05d6f6488", 1100);
// Herbal oil drops being applied to the hand — natural remedy in use
export const aboutSecondaryImage = u("photo-1515377905703-c4788e51af15", 800);
// Sunrise meditation
export const ctaImage = u("photo-1506126613408-eca07ce68773", 1600);
// Traditional Indian woman grinding herbs in a brass mortar — authentic ayurvedic medicine making
export const medicineMakingImage = u("photo-1768729340731-85e386e62529", 1100);
// Herbal oil being poured into a stone mortar & pestle
export const herbalPreparationImage = u("photo-1492552181161-62217fc3076d", 900);
// Hands grinding raw herbs in a stone mortar
export const herbGrindingImage = u("photo-1492552085122-36706c238263", 900);

export const treatmentImages: Record<string, string> = {
  "knee-pain": "/images/treatments/knee-pain.png",
  "joint-pain": "/images/treatments/joint-pain.png",
  arthritis: "/images/treatments/arthritis.png",
  "back-pain": "/images/treatments/back-pain.png",
  sciatica: "/images/treatments/sciatica.png",
  "cervical-pain": "/images/treatments/cervical-pain.png",
  "nerve-disorders": "/images/treatments/nerve-disorders.png",
  "digestive-disorders": "/images/treatments/digestive-disorders.png",
  "allergy-management": "/images/treatments/allergy-management.png",
  "chronic-pain-relief": "/images/treatments/chronic-pain-relief.png",
  "general-wellness": "/images/treatments/general-wellness.png",
};

export const blogImages: Record<string, string> = {
  "5-ayurvedic-herbs-for-joint-pain": u("photo-1596040033229-a9821ebd058d"),
  "understanding-vata-and-pain": u("photo-1518495973542-4542c06a5843"),
  "daily-routine-for-strong-joints": u("photo-1506126613408-eca07ce68773"),
  "managing-arthritis-naturally": u("photo-1544161515-4ab6ce6db874"),
  "herbal-remedies-for-better-digestion": u("photo-1490645935967-10de6ba17061"),
  "everyday-wellness-tips-from-ayurveda": u("photo-1545205597-3d9d02c29597"),
};

export const galleryImages = [
  u("photo-1556760544-74068565f05c"),
  u("photo-1544161515-4ab6ce6db874"),
  u("photo-1596040033229-a9821ebd058d"),
  u("photo-1518495973542-4542c06a5843"),
  u("photo-1506126613408-eca07ce68773"),
  u("photo-1501004318641-b39e6451bec6"),
];

export const treatmentImage = (slug: string) =>
  treatmentImages[slug] ?? u("photo-1506126613408-eca07ce68773");
export const blogImage = (slug: string) =>
  blogImages[slug] ?? u("photo-1596040033229-a9821ebd058d");
