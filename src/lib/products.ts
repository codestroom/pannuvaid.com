export interface Product {
  id: string;
  slug: string;
  title: string;
  subTitle: string;
  image: string;
  desc: string;
  longDesc: string;
  benefits: string[];
  ingredients: { name: string; proportion: string; purpose: string }[];
  instructions: string;
  warnings: string;
  size: string;
  badge: string;
}

export const products: Product[] = [
  {
    id: "liver-tonic",
    slug: "liver-care-tonic",
    title: "Liver Care",
    subTitle: "ਲੀਵਰ ਕੇਅਰ",
    image: "/images/products/liver-tonic.jpg",
    desc: "A specialized organic syrup formulated to rejuvenate liver cells, support cellular detoxification, and treat sluggish digestion.",
    longDesc: "Pannu Vaid's Liver Care is an authentic Ayurvedic formulation designed to stimulate the liver, improve bile secretion, and treat disorders like fatty liver, sluggish metabolism, and loss of appetite. Made from a synergy of hepatoprotective herbs, it cleanses toxins (Ama) from the blood and strengthens the digestive fire (Agni).",
    benefits: [
      "Rejuvenates liver cells and supports natural regeneration",
      "Effective against fatty liver conditions and sluggish metabolism",
      "Purifies blood by clearing metabolic toxins (Ama)",
      "Kindles the digestive fire (Agni) to restore natural appetite",
      "Protects the liver from alcohol-induced or dietary damage"
    ],
    ingredients: [
      { name: "Bhumi Amla (Phyllanthus niruri)", proportion: "30%", purpose: "Hepatoprotective and antiviral" },
      { name: "Kalmegh (Andrographis paniculata)", proportion: "25%", purpose: "Stimulates bile secretion and liver enzymes" },
      { name: "Punarnava (Boerhavia diffusa)", proportion: "20%", purpose: "Reduces liver swelling and fluid retention" },
      { name: "Kutki (Picrorhiza kurroa)", proportion: "15%", purpose: "Detoxifies liver cells and lowers heat" },
      { name: "Giloy (Tinospora cordifolia)", proportion: "10%", purpose: "Boosts immunity and neutralizes free radicals" }
    ],
    instructions: "🌅 Morning: Drink 100ml on an empty stomach. 🌇 Evening: Drink 100ml half an hour before dinner, or as directed by the practitioner.",
    warnings: "Shake well before use. Keep in a cool, dry place away from direct sunlight.",
    size: "100 ml Syrup",
    badge: "Detox & Rejuvenation",
  },
  {
    id: "constipation-powder",
    slug: "kabz-care-churna",
    title: "Kabz Care Churna",
    subTitle: "ਕਬਜ਼ ਮੁਕਤ ਚੂਰਨ",
    image: "/images/products/constipation-powder.jpg",
    desc: "A pure herbal formulation to relieve chronic constipation, cleanse the colon, and reduce bloating and acidity.",
    longDesc: "Our Kabz Care Churna is a non-habit-forming, traditional laxative powder. It works by calming and regulating the colon, supporting healthy peristalsis, and aiding natural bowel movements. Unlike chemical laxatives, it maintains the intestinal flora and strengthens the colon muscles.",
    benefits: [
      "Provides relief from chronic constipation and irregular bowels",
      "Eliminates abdominal gas, bloating, and stomach acidity",
      "Non-habit forming and safe for long-term therapeutic use",
      "Cleanses toxic residue (Ama) from the digestive tract",
      "Improves nutrient absorption in the small intestine"
    ],
    ingredients: [
      { name: "Senna Leaves (Cassia angustifolia)", proportion: "35%", purpose: "Stimulates bowel movements" },
      { name: "Haritaki (Terminalia chebula)", proportion: "25%", purpose: "Gentle colon cleanser and digestive balancer" },
      { name: "Saunf (Foeniculum vulgare)", proportion: "20%", purpose: "Relieves gas, colic, and abdominal cramping" },
      { name: "Ajwain (Trachyspermum ammi)", proportion: "10%", purpose: "Improves digestive fire and digestion speed" },
      { name: "Kala Namak (Black Salt)", proportion: "10%", purpose: "Eases acidity and enhances taste" }
    ],
    instructions: "🌙 Bedtime: Take 1 level teaspoon (approx. 3-5g) with warm water before sleeping.",
    warnings: "Do not exceed the recommended dose. Not recommended during pregnancy.",
    size: "100g Pouch",
    badge: "Digestive Wellness",
  },
  {
    id: "red-capsules",
    slug: "joint-nerve-capsules",
    title: "Joint & Nerve Relief Capsules",
    subTitle: "ਦਰਦ ਨਿਵਾਰਕ ਲਾਲ ਕੈਪਸੂਲ",
    image: "/images/products/red-capsules.jpg",
    desc: "Authentic herbal capsules designed to calm severe nerve irritation, alleviate arthritis flares, and support joint mobility.",
    longDesc: "These Joint & Nerve Relief Capsules are formulated to tackle deep-rooted disorders in the bones and muscles. They work by lubricating the joint sockets, reducing synovial swelling, and calming inflamed nerves. Ideal for patients suffering from arthritis, cervical spondylosis, and sciatica pain.",
    benefits: [
      "Reduces joint inflammation, pain, and morning stiffness",
      "Alleviates radiating sciatic pain and cervical numbness",
      "Improves natural lubrication in joints",
      "Strengthens weakened nerve pathways and muscular tissue",
      "Reduces high uric acid levels in the blood"
    ],
    ingredients: [
      { name: "Shallaki (Boswellia serrata)", proportion: "30%", purpose: "Powerful natural anti-inflammatory agent" },
      { name: "Guggulu (Commiphora mukul)", proportion: "25%", purpose: "Clears toxins from joints and reduces swelling" },
      { name: "Rasna (Pluchea lanceolata)", proportion: "20%", purpose: "Calms and nourishes the nervous system" },
      { name: "Ashwagandha (Withania somnifera)", proportion: "15%", purpose: "Strengthens muscles and relieves chronic fatigue" },
      { name: "Sunthi (Zingiber officinale)", proportion: "10%", purpose: "Improves digestion and combats joint stiffness" }
    ],
    instructions: "🥣 Post Meals: Take 1 capsule in the morning and 1 capsule in the evening with warm water or milk, after food.",
    warnings: "Consult your practitioner if you have severe hypertension or stomach ulcers.",
    size: "60 Capsules Jar",
    badge: "Joint & Muscle Care",
  },
  {
    id: "hair-oil",
    slug: "kesh-hair-oil",
    title: "Nourishing Kesh Hair Oil",
    subTitle: "ਵਾਲਾਂ ਵਾਲਾ ਜੜੀ-ਬੂਟੀ ਤੇਲ",
    image: "/images/products/hair-oil.jpg",
    desc: "A cooling herbal massage oil that strengthens roots, stops hair fall, and treats dry, itchy scalp conditions.",
    longDesc: "Pannu Vaid's Nourishing Kesh Hair Oil is made using the traditional Kshir Pak Vidhi (milk processing method). Infused with cooling herbs, it penetrates deep into the hair follicles to deliver essential nutrients, calm the mind, improve sleep quality, and stimulate healthy, glossy hair growth.",
    benefits: [
      "Effectively arrests active hair fall and premature graying",
      "Strengthens hair roots and promotes thick hair density",
      "Hydrates the scalp to eliminate dandruff and dry flakes",
      "Cools the head, reduces stress, and promotes deep sleep",
      "Improves hair texture, shine, and manageability"
    ],
    ingredients: [
      { name: "Bhringraj (Eclipta prostrata)", proportion: "35%", purpose: "The 'King of Hair' - stimulates hair growth" },
      { name: "Amla (Emblica officinalis)", proportion: "25%", purpose: "Rich in Vitamin C, prevents early graying" },
      { name: "Neem (Azadirachta indica)", proportion: "15%", purpose: "Antiseptic, treats dandruff and scalp itching" },
      { name: "Brahmi (Bacopa monnieri)", proportion: "15%", purpose: "Cools the brain, calms nerves, and aids sleep" },
      { name: "Sesame & Coconut Oil Base", proportion: "10%", purpose: "Deep nourishment and root lubrication" }
    ],
    instructions: "💆 Scalp Massage: Warm the oil slightly, apply to scalp, and massage gently with fingertips for 15-20 minutes. Leave overnight and wash. Use 3 times a week for 2 months.",
    warnings: "For external use only. Avoid contact with eyes.",
    size: "100 ml Bottle",
    badge: "Root Strength",
  },
];

export const getProduct = (slugOrId: string) =>
  products.find((p) => p.slug === slugOrId || p.id === slugOrId);
