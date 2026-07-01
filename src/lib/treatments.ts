import type { IconType } from "react-icons";
import {
  FaBone,
  FaWalking,
  FaHandHoldingMedical,
  FaProcedures,
  FaHeartbeat,
  FaBrain,
  FaSeedling,
  FaLeaf,
  FaShieldVirus,
  FaNotesMedical,
  FaSpa,
} from "react-icons/fa";

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  icon: IconType;
  overview: string;
  symptoms: string[];
  causes: string[];
  approach: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "knee-pain",
    title: "Knee Pain",
    short: "Restore mobility and relieve knee stiffness naturally.",
    icon: FaWalking,
    overview:
      "Knee pain can stem from age-related wear, injury, or inflammation. Our Ayurvedic protocol focuses on reducing inflammation (Ama), strengthening the joint, and lubricating cartilage using time-tested herbal therapies and Panchakarma.",
    symptoms: ["Stiffness while walking", "Swelling around the knee", "Pain on climbing stairs", "Grinding or clicking sensation", "Reduced range of motion"],
    causes: ["Cartilage degeneration", "Poor circulation", "Excess body weight", "Old injuries", "Sedentary lifestyle"],
    approach: ["Personalised herbal formulations", "Janu Basti (medicated oil pooling)", "Abhyanga & Swedana therapy", "Diet & lifestyle correction", "Strengthening yoga guidance"],
    benefits: ["Lasting pain relief", "Improved flexibility", "Reduced dependence on painkillers", "Stronger joint tissue"],
    faqs: [
      { q: "How long before I feel relief?", a: "Most patients report noticeable improvement within 2–4 weeks, with deeper healing over a 2–3 month protocol." },
      { q: "Is the treatment surgery-free?", a: "Yes. Our approach is completely non-surgical and drug-free, using authentic Ayurvedic therapies." },
    ],
  },
  {
    slug: "nerve-disorders",
    title: "Brain & Nerve Care",
    short: "Nourish and rejuvenate the nervous system and brain function naturally.",
    icon: FaBrain,
    overview:
      "Brain fog, neuropathy, numbness, and nerve weakness are addressed with rejuvenating Rasayana therapies and specialised nervous system nourishment to restore clarity and sensation.",
    symptoms: ["Numbness or tingling", "Muscle weakness", "Burning sensation", "Poor coordination", "Tremors", "Brain fatigue or fog"],
    causes: ["Nerve aggravation", "Diabetes complications", "Nutrient deficiency", "Nerve compression", "Ageing"],
    approach: ["Nervine Rasayana therapy", "Medicated oil treatments", "Shirodhara for the nervous system", "Dietary nourishment", "Stress reduction"],
    benefits: ["Improved sensation", "Better strength", "Calmer nervous system", "Enhanced coordination"],
    faqs: [
      { q: "Can diabetic neuropathy be helped?", a: "Yes, alongside blood-sugar control we nourish nerves to reduce tingling and numbness." },
      { q: "How long is the protocol?", a: "Nerve healing is gradual; protocols typically run 8–12 weeks for meaningful improvement." },
    ],
  },
  {
    slug: "digestive-disorders",
    title: "Liver & Digestive Care",
    short: "Restore liver health, gut balance, and metabolic fire (Agni).",
    icon: FaSeedling,
    overview:
      "Ayurveda views digestion (Agni) as the root of health. We treat sluggish liver, fatty liver, acidity, IBS, and constipation by restoring liver enzymes and digestive balance.",
    symptoms: ["Acidity & heartburn", "Bloating & gas", "Irregular bowels", "Indigestion", "Low appetite", "Sluggish metabolism"],
    causes: ["Weak digestive fire", "Poor diet", "Stress", "Irregular meals", "Digestive imbalance"],
    approach: ["Agni-restoring herbs", "Deepana-Pachana therapy", "Personalised diet plan", "Gut-cleansing protocol", "Lifestyle routine (Dinacharya)"],
    benefits: ["Comfortable digestion", "Regular bowels", "Better nutrient absorption", "Increased energy"],
    faqs: [
      { q: "Can chronic acidity be cured?", a: "Yes, by correcting root causes most patients gain lasting relief without antacids." },
      { q: "Do you treat IBS?", a: "We have a strong track record managing IBS through diet, herbs, and stress balance." },
    ],
  },
  {
    slug: "allergy-management",
    title: "Allergy & Immunity",
    short: "Strengthen immunity and reduce recurring allergic reactions.",
    icon: FaShieldVirus,
    overview:
      "Recurring allergies signal a sensitive immune system and toxin buildup. We detoxify and rebuild immunity to reduce flare-ups naturally.",
    symptoms: ["Sneezing & congestion", "Skin rashes & itching", "Watery eyes", "Recurring sinus issues", "Breathing discomfort"],
    causes: ["Weak immunity", "Ama accumulation", "Internal imbalance", "Environmental triggers", "Poor gut health"],
    approach: ["Immune-strengthening Rasayana", "Detox therapy", "Anti-allergic herbs", "Trigger avoidance plan", "Nasya therapy"],
    benefits: ["Fewer flare-ups", "Stronger immunity", "Clearer breathing", "Healthier skin"],
    faqs: [
      { q: "Can seasonal allergies be reduced?", a: "Yes, preventive Ayurvedic care before seasons greatly reduces severity." },
      { q: "Do you treat skin allergies?", a: "We address skin allergies through internal detox and topical herbal support." },
    ],
  },
  {
    slug: "joint-pain",
    title: "Joint Pain",
    short: "Holistic relief for aching, inflamed joints across the body.",
    icon: FaBone,
    overview:
      "Generalised joint pain is often a sign of accumulated toxins and poor circulation. We detoxify, nourish, and rebuild joint health through individualized Ayurvedic care.",
    symptoms: ["Multiple aching joints", "Morning stiffness", "Warmth or swelling", "Fatigue", "Limited movement"],
    causes: ["Toxin (Ama) accumulation", "Poor circulation", "Poor digestion", "Ageing", "Inflammatory conditions"],
    approach: ["Detoxification (Shodhana)", "Anti-inflammatory herbs", "Medicated oil massage", "Customised diet plan", "Rasayana rejuvenation"],
    benefits: ["Whole-body comfort", "Better mobility", "Improved energy", "Natural anti-inflammation"],
    faqs: [
      { q: "Can it treat multiple joints together?", a: "Yes, our systemic approach addresses the root imbalance, helping all affected joints simultaneously." },
      { q: "Are the herbs safe long-term?", a: "Our formulations are 100% natural and prepared under strict quality control with no harmful side effects." },
    ],
  },
  {
    slug: "back-pain",
    title: "Back Pain",
    short: "Targeted spinal care for chronic and acute back pain.",
    icon: FaProcedures,
    overview:
      "From muscular strain to disc issues, our Kati Basti and herbal therapies relieve back pain at the root rather than masking it.",
    symptoms: ["Lower or upper back ache", "Stiffness on bending", "Radiating pain", "Muscle spasms", "Difficulty sitting long"],
    causes: ["Poor posture", "Disc degeneration", "Stiffness & tension", "Muscle weakness", "Sedentary work"],
    approach: ["Kati Basti therapy", "Spinal Abhyanga", "Herbal anti-spasmodics", "Posture & ergonomics coaching", "Therapeutic yoga"],
    benefits: ["Spinal relief", "Better posture", "Stronger core", "Reduced recurrence"],
    faqs: [
      { q: "Do you treat slipped disc?", a: "Yes, we manage many disc-related conditions conservatively with specialised Panchakarma and herbs." },
      { q: "Is bed rest required?", a: "We recommend guided gentle movement rather than prolonged rest for faster recovery." },
    ],
  },
  {
    slug: "arthritis",
    title: "Arthritis",
    short: "Manage rheumatoid & osteoarthritis with proven herbal care.",
    icon: FaHandHoldingMedical,
    overview:
      "Arthritis responds remarkably well to Ayurveda. We focus on halting progression, easing inflammation, and rebuilding joint integrity.",
    symptoms: ["Chronic joint inflammation", "Deformity over time", "Severe stiffness", "Persistent pain", "Reduced grip strength"],
    causes: ["Autoimmune response", "Ama toxins", "Genetic predisposition", "Metabolic imbalance", "Poor metabolism"],
    approach: ["Arthritis-specific protocol", "Virechana & Basti therapy", "Herbal decoctions", "Anti-inflammatory diet", "Stress & sleep management"],
    benefits: ["Slowed disease progression", "Reduced flare-ups", "Better quality of life", "Stronger joints"],
    faqs: [
      { q: "Can Ayurveda reverse arthritis?", a: "While severe structural damage can't be reversed, we significantly reduce symptoms and stop further progression in most patients." },
      { q: "Will I need lifelong medication?", a: "Many patients reduce or stop conventional medication under guidance after responding to treatment." },
    ],
  },
  {
    slug: "sciatica",
    title: "Sciatica",
    short: "Calm nerve pain radiating from the lower back to the legs.",
    icon: FaHeartbeat,
    overview:
      "Sciatica is a nerve disorder affecting the sciatic nerve. Our nerve-nourishing therapies relieve the shooting pain and restore comfort.",
    symptoms: ["Shooting leg pain", "Tingling or numbness", "Burning sensation", "Weakness in the leg", "Pain worsened by sitting"],
    causes: ["Nerve compression", "Nerve inflammation", "Disc herniation", "Piriformis tightness", "Inflammation"],
    approach: ["Sciatica protocol", "Basti (medicated enema) therapy", "Nerve-nourishing herbs", "Targeted oil therapy", "Stretching guidance"],
    benefits: ["Relief from radiating pain", "Restored sensation", "Better leg strength", "Improved sleep"],
    faqs: [
      { q: "How severe can cases be treated?", a: "We successfully manage mild to severe sciatica; severity guides the intensity and duration of therapy." },
      { q: "Is it permanent relief?", a: "With root-cause treatment and lifestyle correction, most patients enjoy long-lasting relief." },
    ],
  },
  {
    slug: "cervical-pain",
    title: "Cervical Pain",
    short: "Relief for neck stiffness, spondylosis, and related headaches.",
    icon: FaNotesMedical,
    overview:
      "Cervical spondylosis and neck pain are eased through Greeva Basti and herbal therapies that decompress and nourish the neck region.",
    symptoms: ["Neck stiffness", "Headaches", "Shoulder pain", "Arm numbness", "Dizziness"],
    causes: ["Degenerative changes", "Poor screen posture", "Nerve strain", "Stress", "Muscle tension"],
    approach: ["Greeva Basti therapy", "Neck & shoulder Abhyanga", "Herbal supplements", "Posture correction", "Relaxation techniques"],
    benefits: ["Reduced stiffness", "Fewer headaches", "Better neck mobility", "Less arm discomfort"],
    faqs: [
      { q: "Can it help tech-neck from desk work?", a: "Absolutely. We combine therapy with ergonomic and posture coaching ideal for desk professionals." },
      { q: "Are headaches related to my neck?", a: "Cervicogenic headaches are common and often resolve as the neck condition improves." },
    ],
  },
  {
    slug: "chronic-pain-relief",
    title: "Chronic Pain Relief",
    short: "Long-term, drug-free management of persistent pain.",
    icon: FaHandHoldingMedical,
    overview:
      "For pain that won't go away, we offer a comprehensive, root-cause approach combining Panchakarma, herbs, and lifestyle medicine.",
    symptoms: ["Persistent body pain", "Fatigue", "Disturbed sleep", "Reduced mobility", "Low mood from pain"],
    causes: ["Deep internal imbalance", "Chronic inflammation", "Toxin accumulation", "Stress", "Untreated old conditions"],
    approach: ["Comprehensive Panchakarma", "Pain-modulating herbs", "Therapeutic massage", "Mind-body relaxation", "Sustainable lifestyle plan"],
    benefits: ["Sustained relief", "Less medication", "Better sleep & mood", "Improved daily function"],
    faqs: [
      { q: "I've tried everything — can this help?", a: "Many of our patients come after exhausting other options and find meaningful, lasting relief." },
      { q: "Is it addictive like painkillers?", a: "No. Our natural approach has no dependency risk and supports overall health." },
    ],
  },
  {
    slug: "general-wellness",
    title: "General Wellness",
    short: "Preventive Ayurvedic care for lasting vitality and balance.",
    icon: FaSpa,
    overview:
      "Beyond treating illness, Ayurveda excels at prevention. Our wellness programs build immunity, energy, and balance for a healthier life.",
    symptoms: ["Low energy", "Frequent illness", "Poor sleep", "Stress & anxiety", "Sluggish digestion"],
    causes: ["Modern lifestyle", "Poor diet", "Chronic stress", "Lack of routine", "Internal imbalance"],
    approach: ["Personalised Rasayana", "Seasonal detox (Ritucharya)", "Daily routine (Dinacharya)", "Diet & nutrition plan", "Yoga & meditation guidance"],
    benefits: ["Higher energy", "Stronger immunity", "Better sleep", "Mental clarity & calm"],
    faqs: [
      { q: "Do I need to be sick to benefit?", a: "Not at all — preventive care keeps you healthy and helps you feel your best." },
      { q: "Is there a wellness package?", a: "Yes, we offer customised seasonal and rejuvenation packages." },
    ],
  },
  {
    slug: "diabetes-care",
    title: "Diabetes Care",
    short: "Manage blood sugar levels and prevent diabetic complications naturally.",
    icon: FaHeartbeat,
    overview:
      "Diabetes (Madhumeha) is addressed through metabolic correction (Agni restoration), panchakarma detox, and specialized herbal formulations to regulate insulin secretion and protect vital organs from diabetic complications.",
    symptoms: ["High blood sugar levels", "Frequent urination", "Excessive thirst & hunger", "Slow healing wounds", "Fatigue & weakness"],
    causes: ["Impaired metabolic fire (Agni)", "Sedentary lifestyle", "Toxin (Ama) accumulation", "Genetic factors", "High-stress levels"],
    approach: ["Metabolic correction therapies", "Insulin-supporting herbs", "Detoxification (Panchakarma)", "Dietary guidelines", "Daily activity planning"],
    benefits: ["Stabilized blood sugar levels", "Reduced dependency on chemical drugs", "Protection against neuropathy & retinopathy", "Higher energy levels"],
    faqs: [
      { q: "Can long-term diabetes be managed?", a: "Yes, we focus on restoring your metabolic health to manage sugar levels and prevent organ complications." },
      { q: "Are your herbal remedies safe?", a: "Absolutely. Our herbal formulations are 100% natural, non-toxic, and support pancreas function." },
    ],
  },
  {
    slug: "ear-care",
    title: "Ear & Tinnitus Care",
    short: "Relieve ear buzzing (tinnitus) and improve auditory health naturally.",
    icon: FaNotesMedical,
    overview:
      "Ear problems like Tinnitus (Karna Nada), ear discharge, and mild hearing loss are addressed using traditional Karnapoorana (medicated oil pooling in ears) and Vata-pacifying therapies to restore auditory function.",
    symptoms: ["Ringing or buzzing in ears (Tinnitus)", "Ear pain or stiffness", "Mild hearing impairment", "Sensation of ear blockage", "Dryness in ear canal"],
    causes: ["Aggravated Vata dosha", "Exposure to loud noise", "Nerve weakness", "Sinusitis congestion", "Ageing"],
    approach: ["Karnapoorana (Ear oil pooling)", "Nervine Rasayana formulations", "Nasya (Nasal drop therapy)", "Vata-reducing diet plan", "Head massage (Shiroabhyanga)"],
    benefits: ["Significant reduction in buzzing noise", "Improved hearing clarity", "Relief from ear pain & congestion", "Better sleep and calm mind"],
    faqs: [
      { q: "Does Karnapoorana therapy hurt?", a: "Not at all. It is a highly soothing therapy where warm, medicated herbal oils are pooled in the ears." },
      { q: "How soon can I expect results for tinnitus?", a: "Most patients notice a reduction in the ringing frequency and intensity within 3–4 weeks." },
    ],
  },
];

export const getTreatment = (slug: string) =>
  treatments.find((t) => t.slug === slug);
