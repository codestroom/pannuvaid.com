export interface DiseaseCategory {
  id: number;
  punjabi: string;
  english: string;
  conditions: string[];
}

export const diseaseCategories: DiseaseCategory[] = [
  {
    id: 1,
    punjabi: "ਲੀਵਰ ਪ੍ਰੋਬਲਮ & ਪੇਟ ਦੇ ਰੋਗ",
    english: "Liver & Digestive Care",
    conditions: [
      "Gastritis (ਪੇਟ ਚ ਭਾਰੀਪਣ)",
      "Fatty Liver (ਫੈਟੀ ਲੀਵਰ)",
      "Loss of Appetite (ਭੁੱਖ ਘੱਟ ਲੱਗਣਾ)",
      "Chronic Constipation (ਕਬਜ਼)",
      "Heart Burn (ਗੈਸ ਤੇਜ਼ਾਬ)",
      "GERD (ਪੇਟ ਚ ਜਲਣ)"
    ]
  },
  {
    id: 2,
    punjabi: "ਦਿਮਾਗ ਅਤੇ ਨਾੜੀ ਪ੍ਰੋਬਲਮ",
    english: "Brain & Neurological Care",
    conditions: [
      "Brain Related Issues (ਦਿਮਾਗ ਦੀ ਕੋਈ ਵੀ ਪ੍ਰੋਬਲਮ)",
      "Neurological Disorders",
      "Anxiety (ਐਨਜ਼ਾਇਟੀ)",
      "Depression (ਡਿਪਰੈਸ਼ਨ)",
      "Insomnia (ਇੰਨਸੋਮਨੀਆ)",
      "Migraine (ਮਾਈਗ੍ਰੇਨ)",
      "Spine Problems (ਸਪਾਈਨ ਪ੍ਰੋਬਲਮ)",
      "Cervical (ਸਰਵਾਈਕਲ)"
    ]
  },
  {
    id: 3,
    punjabi: "ਕਣਕ ਅਤੇ ਦੁੱਧ ਦੀ ਐਲਰਜੀ",
    english: "Allergy Care",
    conditions: [
      "Wheat Allergy (ਕਣਕ ਐਲਰਜੀ)",
      "Dairy Product Allergy / Milk Intolerance",
      "Any Kind of Allergy (ਕਿਸੇ ਵੀ ਚੀਜ਼ ਤੋਂ ਐਲਰਜੀ)"
    ]
  },
  {
    id: 4,
    punjabi: "ਗਠੀਆ ਅਤੇ ਜੋੜਾਂ ਦੇ ਰੋਗ",
    english: "Arthritis & Autoimmune Care",
    conditions: [
      "Arthritis (ਗਠੀਆ)",
      "ANA Autoimmune Disease"
    ]
  },
  {
    id: 5,
    punjabi: "ਸਕਿਨ ਪ੍ਰੋਬਲਮ",
    english: "Skin Care & Dry Eczema",
    conditions: [
      "Dry Eczema (ਡਰਾਈ ਐਗਜ਼ੀਮਾ)",
      "Skin Irritations & Problems (ਸਕਿਨ ਪ੍ਰੋਬਲਮ)"
    ]
  },
  {
    id: 6,
    punjabi: "ਛਾਤੀ ਦੇ ਰੋਗ & ਸਾਹ ਦੀ ਤਕਲੀਫ਼",
    english: "Respiratory Health",
    conditions: [
      "Pneumonia (ਨਿਮੋਨੀਆ)",
      "COPD (Chronic Obstructive Pulmonary Disease)",
      "Asthma (ਦਮਾ)"
    ]
  },
  {
    id: 7,
    punjabi: "ਸੰਗ੍ਰਹਿਣੀ",
    english: "IBS & IBD Management",
    conditions: [
      "IBS (Irritable Bowel Syndrome)",
      "IBD (Inflammatory Bowel Disease)"
    ]
  },
  {
    id: 8,
    punjabi: "ਬੱਚੇਦਾਨੀ ਦੀਆਂ ਰਸੌਲੀਆਂ",
    english: "Uterus & Gynaecology Care",
    conditions: [
      "Uterus Fibroids",
      "Bulky Uterus"
    ]
  },
  {
    id: 9,
    punjabi: "ਪੱਥਰੀ ਦੀ ਸਮੱਸਿਆ",
    english: "Gallbladder & Kidney Stones",
    conditions: [
      "Gall Bladder Stone (ਪਿੱਤੇ ਦੀ ਪੱਥਰੀ)",
      "Kidney Stone (ਗੁਰਦੇ ਦੀ ਪੱਥਰੀ)"
    ]
  },
  {
    id: 10,
    punjabi: "ਪੀ.ਸੀ.ਓ.ਡੀ. & ਮਾਹਵਾਰੀ ਰੋਗ",
    english: "PCOD & Women Wellness",
    conditions: [
      "PCOD / PCOS",
      "Irregular Periods",
      "White Discharge (ਲਕੋਰੀਆ)"
    ]
  },
  {
    id: 11,
    punjabi: "ਪ੍ਰੋਸਟੇਟ ਅਤੇ ਯੂ.ਟੀ.ਆਈ.",
    english: "Prostate & Urinary Health",
    conditions: [
      "Prostate Problem (ਗਦੂਦਾਂ)",
      "UTI (Urinary Tract Infection)"
    ]
  },
  {
    id: 12,
    punjabi: "ਥਾਇਰਾਇਡ",
    english: "Thyroid Disorders",
    conditions: [
      "Thyroid (T3, T4, TSH)"
    ]
  },
  {
    id: 13,
    punjabi: "ਬੀ.ਪੀ. & ਕੋਲੈਸਟ੍ਰੋਲ",
    english: "Cardiovascular Health",
    conditions: [
      "High BP (ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ)",
      "High Cholesterol",
      "Triglycerides"
    ]
  },
  {
    id: 14,
    punjabi: "ਹਰਨੀਆ",
    english: "Hernia Support",
    conditions: [
      "Hernia (Without surgery / ਬਿਨ੍ਹਾਂ ਆਪ੍ਰੇਸ਼ਨ ਤੋਂ)"
    ]
  },
  {
    id: 15,
    punjabi: "ਬਾਂਝਪਨ & ਗਰਭਧਾਰਨ ਸਮੱਸਿਆ",
    english: "Infertility & Reproductive Care",
    conditions: [
      "Tube Block (ਬੰਦ ਨਲੀਆਂ)",
      "Conceiving Problem",
      "Miscarriage History",
      "Infertility (ਬੱਚਾ ਨਾ ਹੁੰਦਾ ਹੋਵੇ)"
    ]
  },
  {
    id: 16,
    punjabi: "ਸਪਰਮ ਕਾਊਂਟ",
    english: "Male Wellness",
    conditions: [
      "Low Sperm Count",
      "Nil Sperm Count"
    ]
  },
  {
    id: 17,
    punjabi: "ਗੈਂਗਰੀਨ & ਇਨਫੈਕਸ਼ਨ",
    english: "Gangrene & Infection Management",
    conditions: [
      "Gangrene (ਗੈਂਗਰੀਨ)",
      "Any Kind of Body Infection"
    ]
  },
  {
    id: 18,
    punjabi: "ਕੰਨ ਦੀ ਸਮੱਸਿਆ",
    english: "Ear & Hearing Care",
    conditions: [
      "Tinnitus (ਕੰਨ ਦੀ ਆਵਾਜ਼ / ਸਾਂ-ਸਾਂ ਹੋਣਾ)"
    ]
  },
  {
    id: 19,
    punjabi: "ਬਵਾਸੀਰ & ਫਿਸ਼ਰ",
    english: "Anorectal Care",
    conditions: [
      "Fissures (ਫਿਸ਼ਰ)",
      "Hemorrhoids / Piles (ਬਵਾਸੀਰ)"
    ]
  },
  {
    id: 20,
    punjabi: "ਸ਼ੂਗਰ",
    english: "Diabetes Management",
    conditions: [
      "Diabetes (ਸ਼ੂਗਰ)"
    ]
  }
];
