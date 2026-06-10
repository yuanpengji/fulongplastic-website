export type Locale = "zh" | "en";

export const siteUrl = "https://www.fulongplastic.com";

export const locales: Locale[] = ["zh", "en"];

export const localePrefix = (locale: Locale) => (locale === "en" ? "/en" : "");

export const text = {
  zh: {
    brand: "富龙塑业",
    nav: {
      home: "首页",
      products: "产品中心",
      applications: "应用领域",
      knowledge: "知识库",
      about: "关于我们",
      contact: "联系我们"
    },
    actions: {
      viewProducts: "查看产品",
      requestQuote: "获取报价",
      learnMore: "了解更多",
      viewDetails: "查看规格",
      relatedProducts: "相关产品",
      relatedArticles: "相关文章"
    },
    fields: {
      capacity: "容量",
      height: "高度",
      bottomDiameter: "底部直径",
      openingDiameter: "口径",
      length: "长度",
      width: "宽度",
      weight: "重量",
      modelNumber: "型号",
      filmSize: "膜片尺寸",
      ventHoleDiameter: "透气孔径",
      filterPatchInfo: "透气膜选项",
      material: "材质",
      compatibleLid: "适配盖",
      name: "姓名",
      company: "公司",
      country: "国家",
      email: "邮箱",
      message: "留言"
    }
  },
  en: {
    brand: "Fulong Plastic",
    nav: {
      home: "Home",
      products: "Products",
      applications: "Applications",
      knowledge: "Knowledge Base",
      about: "About Us",
      contact: "Contact"
    },
    actions: {
      viewProducts: "View Products",
      requestQuote: "Request Quote",
      learnMore: "Learn More",
      viewDetails: "View Specifications",
      relatedProducts: "Related Products",
      relatedArticles: "Related Articles"
    },
    fields: {
      capacity: "Capacity",
      height: "Height",
      bottomDiameter: "Bottom Diameter",
      openingDiameter: "Opening Diameter",
      length: "Length",
      width: "Width",
      weight: "Weight",
      modelNumber: "Model",
      filmSize: "Film Size",
      ventHoleDiameter: "Vent Hole Diameter",
      filterPatchInfo: "Breathable Membrane Option",
      material: "Material",
      compatibleLid: "Compatible Lid",
      name: "Name",
      company: "Company",
      country: "Country",
      email: "Email",
      message: "Message"
    }
  }
} as const;

export const homepage = {
  zh: {
    heroTitle: "组织培养容器源头生产厂家",
    heroSubtitle: "富龙塑业深耕组织培养容器制造20余年，长期为高校、科研院所、组培实验室、种苗繁育企业及海外客户提供规格稳定的容器与配套耗材。",
    knowledgePreviewTitles: {
      "product-encyclopedia": "产品资料库",
      "tissue-culture-knowledge": "组织培养知识库",
      faq: "常见问题",
      "industry-news-insights": "行业资讯"
    }
  },
  en: {
    heroTitle: "Tissue Culture Container Manufacturer & Supplier",
    heroSubtitle:
      "With more than 20 years of manufacturing experience, Fulong Plastic supplies specification-stable tissue culture containers and accessories for universities, research institutes, tissue culture laboratories, commercial propagation companies, and international buyers.",
    knowledgePreviewTitles: {
      "product-encyclopedia": "Product Library",
      "tissue-culture-knowledge": "Tissue Culture Knowledge Base",
      faq: "FAQ",
      "industry-news-insights": "Industry Insights"
    }
  }
};

export const company = {
  email: "sales@fulongplastic.com",
  whatsapp: "To be confirmed",
  phone: "+86 18358715006",
  zh: {
    positioning: "组织培养容器及相关配套产品源头生产厂家",
    about:
      "富龙塑业是一家专注于组织培养容器及配套耗材的源头生产厂家，拥有20余年塑料培养容器制造经验。公司产品涵盖PC组培瓶、PC组培试管、PC广口培养杯、PP组培容器、PP培养盒、组培袋、组培盖、封口膜及组培筐等，服务于植物组织培养、科研实验、农业研究、种苗繁育及相关培养场景。",
    aboutMore:
      "公司长期服务高校、科研院所、商业化繁育企业、农业科研客户及国际客户，重视规格一致性、容器适配性和长期供货稳定性。针对不同培养流程和使用习惯，富龙塑业可配合客户进行产品结构、规格和配套方案的开发沟通。",
    proofPoints: [
      "20+年组织培养容器制造经验",
      "组织培养容器源头工厂",
      "服务高校与科研机构",
      "服务商业化种苗繁育企业",
      "全球客户长期供货",
      "定制化产品开发能力",
      "稳定批量交付能力"
    ]
  },
  en: {
    positioning: "Original manufacturer of tissue culture containers and related accessories",
    about:
      "Fulong Plastic is an original manufacturer focused on tissue culture containers and related consumables, with more than 20 years of experience in plastic culture vessel manufacturing. The product range includes PC tissue culture bottles, PC culture tubes, PC wide-mouth culture cups, PP tissue culture containers, PP culture boxes, culture bags, culture lids, sealing film, culture baskets, and supporting supplies.",
    aboutMore:
      "We supply universities, research institutes, commercial propagation companies, agricultural research customers, and international buyers. Our work focuses on specification consistency, container compatibility, reliable long-term supply, and practical product development for different tissue culture and cultivation workflows.",
    proofPoints: [
      "20+ years in tissue culture container manufacturing",
      "Original factory for tissue culture containers",
      "Serving universities and research institutions",
      "Serving commercial seedling propagation companies",
      "Long-term supply for global customers",
      "Custom product development capability",
      "Stable bulk delivery capability"
    ]
  }
};

export const applications = [
  {
    slug: "plant-tissue-culture",
    zh: "植物组织培养实验",
    en: "Plant Tissue Culture Research"
  },
  {
    slug: "seedling-propagation",
    zh: "商业化种苗繁育",
    en: "Commercial Seedling Propagation"
  },
  {
    slug: "micropropagation",
    zh: "植物微繁殖生产",
    en: "Plant Micropropagation Production"
  },
  {
    slug: "agricultural-research",
    zh: "农业与园艺科研",
    en: "Agricultural and Horticultural Research"
  },
  {
    slug: "university-laboratory-research",
    zh: "高校与科研机构",
    en: "Universities and Research Institutions"
  },
  {
    slug: "other-research-cultivation-applications",
    zh: "其他培养与繁育应用",
    en: "Other Culture and Propagation Applications"
  }
];

export const productCategories = [
  {
    slug: "pc-series",
    image: "/products/pc-tissue-culture-bottles.jpg",
    zh: {
      name: "PC组培系列",
      title: "PC组培系列",
      description: "富龙塑业PC组培系列采用高透明聚碳酸酯（PC）材料制造，具有优异的透光性和机械强度。产品支持透气培养，可重复使用，并可耐受最高130℃高温高压灭菌。"
    },
    en: {
      name: "PC Tissue Culture Series",
      title: "PC Tissue Culture Series",
      description: "Manufactured from high-transparency polycarbonate (PC), these products provide excellent clarity and durability. They support ventilated culture and are autoclavable up to 130°C."
    }
  },
  {
    slug: "pp-series",
    image: "/products/pp-culture-containers.jpg",
    zh: {
      name: "PP组培系列",
      title: "PP组培系列",
      description: "富龙塑业PP组培系列采用优质聚丙烯（PP）材料制造，具有良好的透明度、耐热性和化学稳定性，兼顾培养效果与经济性。"
    },
    en: {
      name: "PP Culture Series",
      title: "PP Culture Series",
      description: "Fulong PP tissue culture products are manufactured from high-quality polypropylene (PP), offering excellent transparency, heat resistance, chemical stability, and cost efficiency."
    }
  },
  {
    slug: "accessories",
    image: "/products/culture-lids.jpg",
    zh: {
      name: "组培配套产品",
      title: "组培配套产品",
      description: "涵盖组培盖、封口膜与组培筐，围绕容器适配、封口透气、集中摆放、转运和管理需求供应。"
    },
    en: {
      name: "Accessories",
      title: "Accessories",
      description: "Culture lids, sealing films, and tissue culture baskets for container matching, sealing, ventilation, organized placement, transportation, and management."
    }
  },
  {
    slug: "featured",
    image: "/products/sugar-free-ventilated-culture-box.jpg",
    zh: {
      name: "特色产品",
      title: "特色产品",
      description: "展示无糖透气培养盒等特色培养设备，支持无糖培养及特殊培养环境应用。"
    },
    en: {
      name: "Featured Products",
      title: "Featured Products",
      description: "Featuring specialty cultivation equipment such as the Sugar-Free Ventilated Culture Box for sugar-free culture and specialized cultivation environments."
    }
  },
] as const;

export type Product = {
  slug: string;
  category: "pc-series" | "pp-series" | "accessories" | "featured";
  image: string;
  specs: {
    capacity: string;
    height: string;
    bottomDiameter: string;
    material: string;
    compatibleLid: string;
  };
  variants?: string[];
  related: string[];
  zh: {
    name: string;
    description: string;
    features: string[];
    seoTitle: string;
    metaDescription: string;
  };
  en: {
    name: string;
    description: string;
    features: string[];
    seoTitle: string;
    metaDescription: string;
  };
};

export const products: Product[] = [
  {
    slug: "pc-tissue-culture-bottles",
    category: "pc-series",
    image: "/products/pc-tissue-culture-bottles.jpg",
    specs: {
      capacity: "145mL / 160mL / 180mL / 240mL / 250mL / 260mL / 270mL / 300mL / 350mL / 520mL / 600mL / 650mL / 800mL / 1000mL",
      height: "96mm / 80mm / 57mm / 72mm / 98mm / 90mm / 108mm / 110mm / 100mm / 145mm / 185mm",
      bottomDiameter: "60mm / 77x77mm / 77mm / 67mm / 70mm / 68mm / 91mm / 95x95mm / 96mm",
      material: "PC",
      compatibleLid: "41# / 53# / 58# / 60# / 72# / 61# / 64# / 69# / 77# / 95#"
    },
    variants: ["96×60mm", "80×60mm", "57×77×77mm", "80×77mm", "72×77×77mm", "98×67mm", "90×70mm", "108×68mm", "96×77mm", "96×77×77mm", "110×77mm", "108×91mm", "100×95×95mm", "110×95×95mm", "145×96mm", "185×96mm"],
    related: ["pc-culture-tubes", "pc-wide-mouth-culture-cups", "culture-lids"],
    zh: {
      name: "PC组培瓶",
      description: "富龙塑业PC组培瓶采用高透明PC材料制造，透光性优异，便于观察培养状态。产品支持透气培养，可重复使用，并可耐受最高130℃高温高压灭菌，适用于植物组织培养、种苗繁育及科研实验等应用场景。",
      features: ["高透明PC材质", "支持透气培养", "可重复使用", "可耐受最高130℃高温高压灭菌"],
      seoTitle: "PC组培瓶 | 富龙塑业组织培养容器",
      metaDescription: "富龙塑业PC组培瓶采用高透明PC材料制造，支持透气培养、重复使用及最高130℃高温高压灭菌。"
    },
    en: {
      name: "PC Tissue Culture Bottles",
      description: "Fulong PC tissue culture bottles are manufactured from high-transparency polycarbonate, offering excellent clarity and durability. They support ventilated culture, are reusable, and autoclavable up to 130°C for tissue culture, propagation, and laboratory applications.",
      features: ["High-transparency PC material", "Ventilated culture supported", "Reusable design", "Autoclavable up to 130°C"],
      seoTitle: "PC Tissue Culture Bottles | Fulong Plastic",
      metaDescription: "Fulong PC tissue culture bottles offer excellent clarity, ventilated culture support, reusability, and autoclaving up to 130°C."
    }
  },
  {
    slug: "pc-culture-tubes",
    category: "pc-series",
    image: "/products/pc-culture-tubes.jpg",
    specs: {
      capacity: "50mL / 80mL / 100mL / 120mL",
      height: "100mm / 150mm / 200mm / 91mm",
      bottomDiameter: "30mm / 47mm",
      material: "PC",
      compatibleLid: "30# / 40#"
    },
    variants: ["100×30mm", "150×30mm", "200×30mm", "91×47mm"],
    related: ["pc-tissue-culture-bottles", "pc-wide-mouth-culture-cups", "culture-lids"],
    zh: {
      name: "PC组培试管",
      description: "富龙塑业PC组培试管采用高透明聚碳酸酯（PC）材料制造，具有优异的透光性和机械强度。产品支持透气培养，并可耐受最高130℃高温高压灭菌。试管培养方式有助于降低污染风险，特别适用于植物组织培养初代培养阶段、无菌实验及科研培养应用。",
      features: ["高透明PC材质", "支持透气培养", "最高130℃高温高压灭菌", "适用于初代培养与无菌实验"],
      seoTitle: "PC组培试管 | 富龙塑业",
      metaDescription: "富龙塑业PC组培试管采用高透明PC材料，支持透气培养和最高130℃高温高压灭菌，适用于初代培养与无菌实验。"
    },
    en: {
      name: "PC Culture Tubes",
      description: "Fulong PC culture tubes are manufactured from high-transparency polycarbonate (PC), providing excellent clarity and durability. They support ventilated culture and are autoclavable up to 130°C. The tube format helps reduce contamination risk and is particularly suitable for primary culture stages, sterile laboratory work, and research applications.",
      features: ["High-transparency PC material", "Ventilated culture supported", "Autoclavable up to 130°C", "Suitable for primary culture and sterile work"],
      seoTitle: "PC Culture Tubes | Fulong Plastic",
      metaDescription: "Fulong PC culture tubes provide excellent clarity, ventilated culture support, and autoclaving up to 130°C for primary culture and sterile laboratory work."
    }
  },
  {
    slug: "pc-wide-mouth-culture-cups",
    category: "pc-series",
    image: "/products/pc-wide-mouth-culture-cups.jpg",
    specs: {
      capacity: "340mL / 430mL / /",
      height: "65mm / 85mm / 95mm / 125mm",
      bottomDiameter: "82mm / 81mm / 83mm",
      material: "PC",
      compatibleLid: "90# / 透气款 / 密封款"
    },
    variants: ["65×90×82mm", "85×90×81mm", "95×90×83mm", "125×90×83mm"],
    related: ["pc-tissue-culture-bottles", "pc-culture-tubes", "culture-lids"],
    zh: {
      name: "PC广口培养杯",
      description: "富龙塑业PC广口培养杯采用高透明PC材料制造，广口设计便于接种、观察和取样。产品支持透气培养，可重复使用，并可耐受最高130℃高温高压灭菌，广泛应用于植物组织培养及实验培养领域。",
      features: ["广口设计", "高透明PC材质", "支持透气培养", "可耐受最高130℃高温高压灭菌"],
      seoTitle: "PC广口培养杯 | 富龙塑业",
      metaDescription: "富龙塑业PC广口培养杯采用高透明PC材料，广口设计便于接种、观察和取样，支持透气培养及最高130℃灭菌。"
    },
    en: {
      name: "PC Wide-Mouth Culture Cups",
      description: "The wide-mouth design allows easier inoculation, observation, and sampling. Manufactured from high-transparency PC, these culture cups support ventilated culture and are autoclavable up to 130°C.",
      features: ["Wide-mouth design", "High-transparency PC material", "Ventilated culture supported", "Autoclavable up to 130°C"],
      seoTitle: "PC Wide-Mouth Culture Cups | Fulong Plastic",
      metaDescription: "Fulong PC wide-mouth culture cups support easier inoculation, observation, sampling, ventilated culture, and autoclaving up to 130°C."
    }
  },
  {
    slug: "pp-culture-containers",
    category: "pp-series",
    image: "/products/pp-culture-containers.jpg",
    specs: {
      capacity: "160mL / 200mL / 300mL / 500mL / 750mL / 1000mL",
      height: "68mm / 65mm / 73mm / 90mm / 110mm / 124mm",
      bottomDiameter: "55mm / 73mm / 77mm / 92mm / 96mm / 105mm",
      material: "PP",
      compatibleLid: "/"
    },
    variants: ["68×67×55mm", "65×80×73mm", "73×100×77mm", "90×120×92mm", "110×122×96mm", "124×130×105mm"],
    related: ["pp-culture-boxes", "heat-seal-culture-bags", "culture-lids"],
    zh: {
      name: "PP组培容器",
      description: "富龙塑业PP组培容器采用优质PP材料制造，具有良好的透明度、耐热性和化学稳定性。产品支持透气培养，并可耐受最高120℃高温高压灭菌。兼顾培养效果与经济性，适用于科研实验及大批量培养需求。",
      features: ["优质PP材质", "支持透气培养", "最高120℃高温高压灭菌", "适合大批量培养需求"],
      seoTitle: "PP组培容器 | 富龙塑业",
      metaDescription: "富龙塑业PP组培容器采用优质PP材料，支持透气培养和最高120℃高温高压灭菌，适用于科研实验及大批量培养。"
    },
    en: {
      name: "PP Tissue Culture Containers",
      description: "Manufactured from high-quality polypropylene (PP), these culture containers provide excellent transparency, heat resistance, and chemical stability. They support ventilated culture and are autoclavable up to 120°C. Combining cultivation performance with cost efficiency, they are suitable for laboratory and large-scale cultivation applications.",
      features: ["High-quality PP material", "Ventilated culture supported", "Autoclavable up to 120°C", "Suitable for large-scale cultivation"],
      seoTitle: "PP Tissue Culture Containers | Fulong Plastic",
      metaDescription: "Fulong PP tissue culture containers provide transparency, heat resistance, ventilated culture support, and autoclaving up to 120°C."
    }
  },
  {
    slug: "pp-culture-boxes",
    category: "pp-series",
    image: "/products/pp-culture-boxes.jpg",
    specs: {
      capacity: "150mL",
      height: "60mm",
      bottomDiameter: "85mm",
      material: "PP",
      compatibleLid: "/"
    },
    variants: ["85×45×60mm"],
    related: ["pp-culture-containers", "heat-seal-culture-bags", "culture-baskets"],
    zh: {
      name: "PP培养盒",
      description: "富龙塑业PP培养盒采用优质PP材料制造，重量轻、耐高温、耐腐蚀，并支持高温高压灭菌。适用于植物组织培养、种苗培养及实验培养应用，在保证培养效果的同时兼顾经济性需求。",
      features: ["优质PP材质", "重量轻", "耐高温耐腐蚀", "兼顾培养效果与经济性"],
      seoTitle: "PP培养盒 | 富龙塑业",
      metaDescription: "富龙塑业PP培养盒重量轻、耐高温、耐腐蚀，支持高温高压灭菌，适用于组织培养、种苗培养和实验培养。"
    },
    en: {
      name: "PP Culture Boxes",
      description: "Fulong PP culture boxes are manufactured from high-quality polypropylene. Lightweight, heat-resistant, and autoclavable, they are suitable for plant tissue culture, propagation, and laboratory cultivation while maintaining excellent cost efficiency.",
      features: ["High-quality PP material", "Lightweight design", "Heat-resistant and autoclavable", "Cost-efficient cultivation option"],
      seoTitle: "PP Culture Boxes | Fulong Plastic",
      metaDescription: "Fulong PP culture boxes are lightweight, heat-resistant, autoclavable, and suitable for plant tissue culture, propagation, and laboratory cultivation."
    }
  },
  {
    slug: "heat-seal-culture-bags",
    category: "pp-series",
    image: "/products/heat-seal-culture-bags.jpg",
    specs: {
      capacity: "按规格匹配",
      height: "14cm / 18cm",
      bottomDiameter: "12cm / 8cm",
      material: "PP",
      compatibleLid: "密封 / 单孔 / 双孔可选"
    },
    variants: ["12×14cm 平口袋", "12×8×18cm 自立袋"],
    related: ["self-seal-stand-up-culture-bags", "sealing-film", "culture-lids"],
    zh: {
      name: "热封组培袋",
      description: "热封组培袋具有重量轻、运输方便、存储空间占用小等特点。产品支持高温高压灭菌，可选密封、单孔透气或双孔透气结构，适用于植物组织培养及无菌培养应用。作为一次性培养耗材，具有良好的经济性和使用便利性。",
      features: ["重量轻便于运输", "节省存储空间", "可选密封或透气结构", "适用于无菌培养应用"],
      seoTitle: "热封组培袋 | 富龙塑业",
      metaDescription: "热封组培袋重量轻、运输方便、节省存储空间，可选密封、单孔透气或双孔透气结构，适用于无菌培养应用。"
    },
    en: {
      name: "Heat-Seal Tissue Culture Bags",
      description: "Heat-seal culture bags are lightweight, easy to transport, and require minimal storage space. Available with sealed, single-vent, or dual-vent configurations for sterile culture applications.",
      features: ["Lightweight and easy to transport", "Minimal storage space", "Sealed or vented options", "For sterile culture applications"],
      seoTitle: "Heat-Seal Tissue Culture Bags | Fulong Plastic",
      metaDescription: "Heat-seal culture bags are lightweight, easy to transport, space-efficient, and available with sealed, single-vent, or dual-vent configurations."
    }
  },
  {
    slug: "self-seal-stand-up-culture-bags",
    category: "pp-series",
    image: "/products/heat-seal-culture-bags.jpg",
    specs: {
      capacity: "按规格匹配",
      height: "14cm / 18.5cm",
      bottomDiameter: "12cm / 16cm",
      material: "PP",
      compatibleLid: "密封 / 单孔 / 双孔可选"
    },
    variants: ["12×14cm 自立袋", "16×18.5cm 自立袋"],
    related: ["heat-seal-culture-bags", "sealing-film", "culture-lids"],
    zh: {
      name: "自封自立组培袋",
      description: "自封自立组培袋兼具便捷封装和稳定摆放优势，重量轻、运输成本低、存储方便。产品支持高温高压灭菌，可选密封、单孔透气或双孔透气结构，适用于植物组织培养及无菌培养应用。作为一次性培养耗材，具有较高的经济效益。",
      features: ["自封自立结构", "重量轻且便于运输", "可选密封或透气结构", "适用于无菌培养应用"],
      seoTitle: "自封自立组培袋 | 富龙塑业",
      metaDescription: "自封自立组培袋便于封装和稳定摆放，支持高温高压灭菌，可选密封、单孔透气或双孔透气结构。"
    },
    en: {
      name: "Self-Seal Stand-Up Tissue Culture Bags",
      description: "Self-standing culture bags combine convenient sealing with stable placement. Lightweight and cost-efficient, they are available with sealed, single-vent, or dual-vent configurations for sterile culture applications.",
      features: ["Self-seal stand-up structure", "Lightweight and cost-efficient", "Sealed or vented options", "For sterile culture applications"],
      seoTitle: "Self-Seal Stand-Up Tissue Culture Bags | Fulong Plastic",
      metaDescription: "Self-standing culture bags combine convenient sealing with stable placement and are available with sealed, single-vent, or dual-vent configurations."
    }
  },
  {
    slug: "culture-lids",
    category: "accessories",
    image: "/products/culture-lids.jpg",
    specs: {
      capacity: "不适用",
      height: "/",
      bottomDiameter: "30# / 40# / 52# / 53# / 54# / 55# / 56# / 57# / 58# / 60# / 61# / 63# / 64# / 65# / 69# / 70# / 72# / 75# / 77# / 80# / 82# / 90# / 95#",
      material: "/",
      compatibleLid: "按容器型号匹配"
    },
    variants: ["30#", "40#", "52#", "53#", "54#", "55#", "56#", "57#", "58#", "60#", "61#", "63#", "64#", "65#", "69#", "70#", "72#", "75#", "77#", "80#", "82#", "90#", "95#"],
    related: ["pc-tissue-culture-bottles", "pp-culture-containers", "sealing-film"],
    zh: {
      name: "组培盖",
      description: "可定制透气膜，膜片直径支持1cm、2cm、3cm，安装方式支持内置膜和外置膜。",
      features: ["支持透气膜定制", "1cm、2cm、3cm膜片直径", "支持内置膜和外置膜", "适配多类培养容器"],
      seoTitle: "组培盖 | 富龙塑业",
      metaDescription: "可定制透气膜，膜片直径支持1cm、2cm、3cm，安装方式支持内置膜和外置膜。"
    },
    en: {
      name: "Tissue Culture Lids",
      description: "Breathable membrane customization is available with 1 cm, 2 cm, and 3 cm membrane diameters, using internal or external membrane installation.",
      features: ["Breathable membrane customization", "1cm, 2cm, and 3cm membrane diameters", "Internal and external installation options", "Compatible with multiple culture containers"],
      seoTitle: "Tissue Culture Lids | Fulong Plastic",
      metaDescription: "Breathable membrane customization is available with 1 cm, 2 cm, and 3 cm membrane diameters, using internal or external membrane installation."
    }
  },
  {
    slug: "sealing-film",
    category: "accessories",
    image: "/products/vent-filter-patches.jpg",
    specs: {
      capacity: "不适用",
      height: "/",
      bottomDiameter: "12×12cm / 14×14cm / 16×16cm",
      material: "PP",
      compatibleLid: "1cm / 2cm / 3cm"
    },
    variants: ["12×12cm", "14×14cm", "16×16cm"],
    related: ["culture-lids", "heat-seal-culture-bags", "self-seal-stand-up-culture-bags"],
    zh: {
      name: "封口膜",
      description: "富龙塑业封口膜可根据培养容器尺寸及培养需求进行定制。目前常规尺寸包括12×12cm、14×14cm及16×16cm，中心透气孔支持1cm、2cm及3cm规格。可根据客户需求定制更大尺寸及不同孔径方案，并支持多种透气膜配置，以满足不同培养环境要求。",
      features: ["支持尺寸定制", "常规尺寸12×12cm、14×14cm、16×16cm", "支持1cm、2cm、3cm中心透气孔", "可配置多种透气膜方案"],
      seoTitle: "封口膜 | 富龙塑业",
      metaDescription: "富龙塑业封口膜支持12×12cm、14×14cm、16×16cm常规尺寸及1cm、2cm、3cm中心透气孔，并可按需求定制。"
    },
    en: {
      name: "Sealing Films",
      description: "Sealing films can be customized according to container size and cultivation requirements. Standard sizes include 12×12cm, 14×14cm, and 16×16cm, with vent diameters of 1cm, 2cm, and 3cm. Larger dimensions, custom vent sizes, and different membrane options are available.",
      features: ["Custom film sizes available", "Standard 12×12cm, 14×14cm, and 16×16cm sizes", "1cm, 2cm, and 3cm central vent options", "Multiple membrane configurations available"],
      seoTitle: "Sealing Films | Fulong Plastic",
      metaDescription: "Fulong sealing films support standard and custom sizes, 1cm, 2cm, and 3cm vent diameters, and multiple membrane configurations."
    }
  },
  {
    slug: "culture-baskets",
    category: "accessories",
    image: "/products/culture-baskets.jpg",
    specs: {
      capacity: "按规格匹配",
      height: "70mm / 50mm / 60mm",
      bottomDiameter: "510mm / 490mm / 520mm / 530mm / 600mm / 620mm / 670mm",
      material: "/",
      compatibleLid: "不适用"
    },
    variants: ["510×310×70mm", "490×320×50mm", "520×420×60mm", "520×420×70mm", "530×430×70mm", "600×440×60mm（网格A）", "600×440×60mm（网格B）", "620×520×60mm", "670×450×60mm"],
    related: ["pc-tissue-culture-bottles", "pp-culture-containers", "culture-lids"],
    zh: {
      name: "组培筐",
      description: "富龙塑业组培筐采用耐高温PP材料制造，具有良好的通风性和排水性。适用于组培瓶、培养杯等培养容器的集中摆放、转运和管理。不同规格组培筐可适配不同培养容器数量和尺寸需求，如需适配方案可联系富龙塑业获取专业建议。",
      features: ["耐高温PP材质", "良好通风性和排水性", "适用于集中摆放和转运", "支持不同容器适配需求"],
      seoTitle: "组培筐 | 富龙塑业",
      metaDescription: "富龙塑业组培筐采用耐高温PP材料，适用于组培瓶、培养杯等培养容器的集中摆放、转运和管理。"
    },
    en: {
      name: "Tissue Culture Baskets",
      description: "Manufactured from heat-resistant PP, tissue culture baskets provide excellent airflow and drainage. Designed for organized placement, transportation, and management of culture containers. Different basket sizes fit different cultivation requirements.",
      features: ["Heat-resistant PP material", "Excellent airflow and drainage", "For organized placement and transportation", "Multiple sizes for different cultivation needs"],
      seoTitle: "Tissue Culture Baskets | Fulong Plastic",
      metaDescription: "Fulong tissue culture baskets are manufactured from heat-resistant PP for organized placement, transportation, and management of culture containers."
    }
  },
  {
    slug: "sugar-free-ventilated-culture-box",
    category: "featured",
    image: "/products/sugar-free-ventilated-culture-box.jpg",
    specs: {
      capacity: "/",
      height: "170mm",
      bottomDiameter: "240mm",
      material: "PP",
      compatibleLid: "透气盒盖"
    },
    variants: ["无糖透气培养盒"],
    related: ["pp-culture-boxes", "culture-lids", "sealing-film"],
    zh: {
      name: "无糖透气培养盒",
      description: "富龙塑业无糖透气培养盒采用主动换气设计，可外接换气泵、二氧化碳监测器及调节阀使用。产品采用四角出气、中央进气结构，并结合防菌膜与过滤器双重保护，实现空气流通同时有效阻隔污染源，提高培养稳定性和成活率。本产品拥有自主专利技术，适用于无糖培养及特殊培养环境应用。",
      features: ["主动换气设计", "可外接换气泵、二氧化碳监测器及调节阀", "防菌膜与过滤器双重保护", "自主专利技术"],
      seoTitle: "无糖透气培养盒 | 富龙塑业",
      metaDescription: "富龙塑业无糖透气培养盒采用主动换气设计，可外接换气泵、二氧化碳监测器及调节阀，适用于无糖培养及特殊培养环境。"
    },
    en: {
      name: "Sterile Ventilated Tissue Culture Box",
      description: "The Sugar-Free Ventilated Culture Box features an active ventilation system and can be connected to air pumps, CO₂ monitors, and airflow control valves. Its four-corner exhaust and central intake design, combined with dual protection from filtration and antimicrobial membranes, improves cultivation stability and survival rates. This product is protected by proprietary patented technology.",
      features: ["Active ventilation system", "Compatible with air pumps, CO₂ monitors, and airflow control valves", "Dual filtration and antimicrobial membrane protection", "Proprietary patented technology"],
      seoTitle: "Sterile Ventilated Tissue Culture Box | Fulong Plastic",
      metaDescription: "The Sugar-Free Ventilated Culture Box features active ventilation, air pump and CO₂ monitor compatibility, dual protection, and proprietary patented technology."
    }
  },
];

type FieldKey = keyof (typeof text)["zh"]["fields"];

export type SpecCard = {
  id: string;
  image: string;
  imageFileName?: string;
  sourceName?: string;
  remark?: string;
  hiddenFields?: FieldKey[];
  fields: Partial<Record<FieldKey, string>>;
};

export type ProductSpecGroup = {
  category: "pc-series" | "pp-series" | "accessories" | "featured";
  slug: string;
  image: string;
  zh: {
    name: string;
    description?: string;
  };
  en: {
    name: string;
    description?: string;
  };
  cards: SpecCard[];
};

const pcBottleImage = "/products/pc-tissue-culture-bottles.jpg";
const pcTubeImage = "/products/pc-culture-tubes.jpg";
const pcCupImage = "/products/pc-wide-mouth-culture-cups.jpg";
const ppContainerImage = "/products/pp-culture-containers.jpg";
const ppBoxImage = "/products/pp-culture-boxes.jpg";
const bagImage = "/products/heat-seal-culture-bags.jpg";
const lidImage = "/products/culture-lids.jpg";
const filmImage = "/products/vent-filter-patches.jpg";
const basketImage = "/products/culture-baskets.jpg";
const sugarFreeImage = "/products/sugar-free-ventilated-culture-box.jpg";

export const productSpecGroups: ProductSpecGroup[] = [
  {
    category: "pc-series",
    slug: "pc-tissue-culture-bottles",
    image: pcBottleImage,
    zh: { name: "PC组培瓶", description: "富龙塑业PC组培瓶采用高透明PC材料制造，透光性优异，便于观察培养状态。" },
    en: { name: "PC Tissue Culture Bottles", description: "Fulong PC tissue culture bottles are manufactured from high-transparency polycarbonate for excellent clarity and durability." },
    cards: [
      { id: "pc-tissue-culture-bottles-1", image: pcBottleImage, imageFileName: "96x60.jpg", sourceName: "96×60mm", hiddenFields: ["openingDiameter"], fields: { capacity: "145mL", openingDiameter: "/", bottomDiameter: "60mm", height: "96mm", material: "PC", compatibleLid: "41#" } },
      { id: "pc-tissue-culture-bottles-2", image: pcBottleImage, imageFileName: "80x60.jpg", sourceName: "80×60mm", hiddenFields: ["openingDiameter"], fields: { capacity: "160mL", openingDiameter: "/", bottomDiameter: "60mm", height: "80mm", material: "PC", compatibleLid: "53#" } },
      { id: "pc-tissue-culture-bottles-3", image: pcBottleImage, imageFileName: "57x77x77.jpg", sourceName: "57×77×77mm", hiddenFields: ["openingDiameter"], fields: { capacity: "180mL", openingDiameter: "/", bottomDiameter: "77x77mm", height: "57mm", material: "PC", compatibleLid: "58#" } },
      { id: "pc-tissue-culture-bottles-4", image: pcBottleImage, imageFileName: "80x77.jpg", sourceName: "80×77mm", hiddenFields: ["openingDiameter"], fields: { capacity: "240mL", openingDiameter: "/", bottomDiameter: "77mm", height: "80mm", material: "PC", compatibleLid: "60#" } },
      { id: "pc-tissue-culture-bottles-5", image: pcBottleImage, imageFileName: "72x77x77.jpg", sourceName: "72×77×77mm", hiddenFields: ["openingDiameter"], fields: { capacity: "250mL", openingDiameter: "/", bottomDiameter: "77x77mm", height: "72mm", material: "PC", compatibleLid: "72#" } },
      { id: "pc-tissue-culture-bottles-6", image: pcBottleImage, imageFileName: "98x67.jpg", sourceName: "98×67mm", hiddenFields: ["openingDiameter"], fields: { capacity: "250mL", openingDiameter: "/", bottomDiameter: "67mm", height: "98mm", material: "PC", compatibleLid: "61#" } },
      { id: "pc-tissue-culture-bottles-7", image: pcBottleImage, imageFileName: "90x70.jpg", sourceName: "90×70mm", hiddenFields: ["openingDiameter"], fields: { capacity: "260mL", openingDiameter: "/", bottomDiameter: "70mm", height: "90mm", material: "PC", compatibleLid: "64#" } },
      { id: "pc-tissue-culture-bottles-8", image: pcBottleImage, imageFileName: "108x68.jpg", sourceName: "108×68mm", hiddenFields: ["openingDiameter"], fields: { capacity: "270mL", openingDiameter: "/", bottomDiameter: "68mm", height: "108mm", material: "PC", compatibleLid: "60#" } },
      { id: "pc-tissue-culture-bottles-9", image: pcBottleImage, imageFileName: "96x77.jpg", sourceName: "96×77mm", hiddenFields: ["openingDiameter"], fields: { capacity: "300mL", openingDiameter: "/", bottomDiameter: "77mm", height: "96mm", material: "PC", compatibleLid: "64#" } },
      { id: "pc-tissue-culture-bottles-10", image: pcBottleImage, imageFileName: "96x77x77.jpg", sourceName: "96×77×77mm", hiddenFields: ["openingDiameter"], fields: { capacity: "350mL", openingDiameter: "/", bottomDiameter: "77x77mm", height: "96mm", material: "PC", compatibleLid: "72#" } },
      { id: "pc-tissue-culture-bottles-11", image: pcBottleImage, imageFileName: "110x77.jpg", sourceName: "110×77mm", hiddenFields: ["openingDiameter"], fields: { capacity: "350mL", openingDiameter: "/", bottomDiameter: "77mm", height: "110mm", material: "PC", compatibleLid: "64#" } },
      { id: "pc-tissue-culture-bottles-12", image: pcBottleImage, imageFileName: "108x91.jpg", sourceName: "108×91mm", hiddenFields: ["openingDiameter"], fields: { capacity: "520mL", openingDiameter: "/", bottomDiameter: "91mm", height: "108mm", material: "PC", compatibleLid: "69#" } },
      { id: "pc-tissue-culture-bottles-13", image: pcBottleImage, imageFileName: "100x95x95.jpg", sourceName: "100×95×95mm", hiddenFields: ["openingDiameter"], fields: { capacity: "600mL", openingDiameter: "/", bottomDiameter: "95x95mm", height: "100mm", material: "PC", compatibleLid: "77#" } },
      { id: "pc-tissue-culture-bottles-14", image: pcBottleImage, imageFileName: "110x95x95.jpg", sourceName: "110×95×95mm", hiddenFields: ["openingDiameter"], fields: { capacity: "650mL", openingDiameter: "/", bottomDiameter: "95x95mm", height: "110mm", material: "PC", compatibleLid: "95#" } },
      { id: "pc-tissue-culture-bottles-15", image: pcBottleImage, imageFileName: "145x96.jpg", sourceName: "145×96mm", hiddenFields: ["openingDiameter"], fields: { capacity: "800mL", openingDiameter: "/", bottomDiameter: "96mm", height: "145mm", material: "PC", compatibleLid: "77#" } },
      { id: "pc-tissue-culture-bottles-16", image: pcBottleImage, imageFileName: "185x96.jpg", sourceName: "185×96mm", hiddenFields: ["openingDiameter"], fields: { capacity: "1000mL", openingDiameter: "/", bottomDiameter: "96mm", height: "185mm", material: "PC", compatibleLid: "77#" } },
    ]
  },
  {
    category: "pc-series",
    slug: "pc-culture-tubes",
    image: pcTubeImage,
    zh: { name: "PC组培试管", description: "富龙塑业PC组培试管适用于植物组织培养初代培养阶段、无菌实验及科研培养应用。" },
    en: { name: "PC Culture Tubes", description: "Fulong PC culture tubes are suitable for primary culture stages, sterile laboratory work, and research applications." },
    cards: [
      { id: "pc-culture-tubes-1", image: pcTubeImage, imageFileName: "100x30.jpg", sourceName: "100×30mm", hiddenFields: ["openingDiameter"], fields: { capacity: "50mL", openingDiameter: "/", bottomDiameter: "30mm", height: "100mm", material: "PC", compatibleLid: "30#" } },
      { id: "pc-culture-tubes-2", image: pcTubeImage, imageFileName: "150x30.jpg", sourceName: "150×30mm", hiddenFields: ["openingDiameter"], fields: { capacity: "80mL", openingDiameter: "/", bottomDiameter: "30mm", height: "150mm", material: "PC", compatibleLid: "30#" } },
      { id: "pc-culture-tubes-3", image: pcTubeImage, imageFileName: "200x30.jpg", sourceName: "200×30mm", hiddenFields: ["openingDiameter"], fields: { capacity: "100mL", openingDiameter: "/", bottomDiameter: "30mm", height: "200mm", material: "PC", compatibleLid: "30#" } },
      { id: "pc-culture-tubes-4", image: pcTubeImage, imageFileName: "91x47.jpg", sourceName: "91×47mm", hiddenFields: ["openingDiameter"], fields: { capacity: "120mL", openingDiameter: "/", bottomDiameter: "47mm", height: "91mm", material: "PC", compatibleLid: "40#" } },
    ]
  },
  {
    category: "pc-series",
    slug: "pc-wide-mouth-culture-cups",
    image: pcCupImage,
    zh: { name: "PC广口培养杯", description: "广口设计便于接种、观察和取样，适用于植物组织培养及实验培养领域。" },
    en: { name: "PC Wide-Mouth Culture Cups", description: "The wide-mouth design allows easier inoculation, observation, and sampling in tissue culture and laboratory cultivation." },
    cards: [
      { id: "pc-wide-mouth-culture-cups-1", image: pcCupImage, imageFileName: "65x90x82.jpg", sourceName: "65×90×82mm", fields: { capacity: "340mL", openingDiameter: "90mm", bottomDiameter: "82mm", height: "65mm", material: "PC", compatibleLid: "90#" } },
      { id: "pc-wide-mouth-culture-cups-2", image: pcCupImage, imageFileName: "85x90x81.jpg", sourceName: "85×90×81mm", fields: { capacity: "430mL", openingDiameter: "90mm", bottomDiameter: "81mm", height: "85mm", material: "PC", compatibleLid: "90#" } },
      { id: "pc-wide-mouth-culture-cups-3", image: pcCupImage, imageFileName: "95x90x83-vent.jpg", sourceName: "95×90×83mm", fields: { capacity: "/", openingDiameter: "90mm", bottomDiameter: "83mm", height: "95mm", material: "PC", compatibleLid: "透气款" } },
      { id: "pc-wide-mouth-culture-cups-4", image: pcCupImage, imageFileName: "125x90x83-vent.jpg", sourceName: "125×90×83mm", fields: { capacity: "/", openingDiameter: "90mm", bottomDiameter: "83mm", height: "125mm", material: "PC", compatibleLid: "透气款" } },
      { id: "pc-wide-mouth-culture-cups-5", image: pcCupImage, imageFileName: "95x90x83-solid.jpg", sourceName: "95×90×83mm", fields: { capacity: "/", openingDiameter: "90mm", bottomDiameter: "83mm", height: "95mm", material: "PC", compatibleLid: "密封款" } },
      { id: "pc-wide-mouth-culture-cups-6", image: pcCupImage, imageFileName: "125x90x83-solid.jpg", sourceName: "125×90×83mm", fields: { capacity: "/", openingDiameter: "90mm", bottomDiameter: "83mm", height: "125mm", material: "PC", compatibleLid: "密封款" } },
    ]
  },
  {
    category: "pp-series",
    slug: "pp-culture-containers",
    image: ppContainerImage,
    zh: { name: "PP组培容器", description: "富龙塑业PP组培容器兼顾培养效果与经济性，适用于科研实验及大批量培养需求。" },
    en: { name: "PP Tissue Culture Containers", description: "Fulong PP tissue culture containers combine cultivation performance with cost efficiency for laboratory and large-scale use." },
    cards: [
      { id: "pp-culture-containers-1", image: ppContainerImage, imageFileName: "68x67x55.jpg", sourceName: "68×67×55mm", hiddenFields: ["compatibleLid"], fields: { capacity: "160mL", openingDiameter: "67mm", bottomDiameter: "55mm", height: "68mm", material: "PP", compatibleLid: "/" } },
      { id: "pp-culture-containers-2", image: ppContainerImage, imageFileName: "65x80x73.jpg", sourceName: "65×80×73mm", hiddenFields: ["compatibleLid"], fields: { capacity: "200mL", openingDiameter: "80mm", bottomDiameter: "73mm", height: "65mm", material: "PP", compatibleLid: "/" } },
      { id: "pp-culture-containers-3", image: ppContainerImage, imageFileName: "73x100x77.jpg", sourceName: "73×100×77mm", hiddenFields: ["compatibleLid"], fields: { capacity: "300mL", openingDiameter: "100mm", bottomDiameter: "77mm", height: "73mm", material: "PP", compatibleLid: "/" } },
      { id: "pp-culture-containers-4", image: ppContainerImage, imageFileName: "90x120x92.jpg", sourceName: "90×120×92mm", hiddenFields: ["compatibleLid"], fields: { capacity: "500mL", openingDiameter: "120mm", bottomDiameter: "92mm", height: "90mm", material: "PP", compatibleLid: "/" } },
      { id: "pp-culture-containers-5", image: ppContainerImage, imageFileName: "110x122x96.jpg", sourceName: "110×122×96mm", hiddenFields: ["compatibleLid"], fields: { capacity: "750mL", openingDiameter: "122mm", bottomDiameter: "96mm", height: "110mm", material: "PP", compatibleLid: "/" } },
      { id: "pp-culture-containers-6", image: ppContainerImage, imageFileName: "124x130x105.jpg", sourceName: "124×130×105mm", hiddenFields: ["compatibleLid"], fields: { capacity: "1000mL", openingDiameter: "130mm", bottomDiameter: "105mm", height: "124mm", material: "PP", compatibleLid: "/" } },
    ]
  },
  {
    category: "pp-series",
    slug: "pp-culture-boxes",
    image: ppBoxImage,
    zh: { name: "PP培养盒", description: "富龙塑业PP培养盒重量轻、耐高温、耐腐蚀，并支持高温高压灭菌。" },
    en: { name: "PP Culture Boxes", description: "Fulong PP culture boxes are lightweight, heat-resistant, corrosion-resistant, and autoclavable." },
    cards: [
      { id: "pp-culture-boxes-1", image: ppBoxImage, imageFileName: "85x45x60.jpg", sourceName: "85×45×60mm", fields: { capacity: "150mL", length: "85mm", width: "45mm", height: "60mm", material: "PP" } },
    ]
  },
  {
    category: "pp-series",
    slug: "heat-seal-culture-bags",
    image: bagImage,
    zh: { name: "热封组培袋", description: "热封组培袋重量轻、运输方便、存储空间占用小，适用于植物组织培养及无菌培养应用。" },
    en: { name: "Heat-Seal Tissue Culture Bags", description: "Heat-seal culture bags are lightweight, easy to transport, and require minimal storage space for sterile culture applications." },
    cards: [
      { id: "heat-seal-culture-bags-1", image: bagImage, imageFileName: "bag-12x14-flat.jpg", sourceName: "12×14cm 平口袋", fields: { length: "/", width: "12cm", height: "14cm", material: "PP", filterPatchInfo: "密封 / 单孔 / 双孔可选" } },
      { id: "heat-seal-culture-bags-2", image: bagImage, imageFileName: "bag-12x8x18-standup.jpg", sourceName: "12×8×18cm 自立袋", fields: { length: "12cm", width: "8cm", height: "18cm", material: "PP", filterPatchInfo: "密封 / 单孔 / 双孔可选" } },
    ]
  },
  {
    category: "pp-series",
    slug: "self-seal-stand-up-culture-bags",
    image: bagImage,
    zh: { name: "自封自立组培袋", description: "自封自立组培袋兼具便捷封装和稳定摆放优势，适用于植物组织培养及无菌培养应用。" },
    en: { name: "Self-Seal Stand-Up Tissue Culture Bags", description: "Self-standing culture bags combine convenient sealing with stable placement for sterile culture applications." },
    cards: [
      { id: "self-seal-stand-up-culture-bags-1", image: bagImage, imageFileName: "bag-12x14-standup.jpg", sourceName: "12×14cm 自立袋", fields: { length: "/", width: "12cm", height: "14cm", material: "PP", filterPatchInfo: "密封 / 单孔 / 双孔可选" } },
      { id: "self-seal-stand-up-culture-bags-2", image: bagImage, imageFileName: "bag-16x18.5-standup.jpg", sourceName: "16×18.5cm 自立袋", fields: { length: "/", width: "16cm", height: "18.5cm", material: "PP", filterPatchInfo: "密封 / 单孔 / 双孔可选" } },
    ]
  },
  {
    category: "accessories",
    slug: "culture-lids",
    image: lidImage,
    zh: { name: "组培盖", description: "可定制透气膜，膜片直径支持1cm、2cm、3cm，安装方式支持内置膜和外置膜。" },
    en: { name: "Tissue Culture Lids", description: "Breathable membrane customization is available with 1 cm, 2 cm, and 3 cm membrane diameters, using internal or external membrane installation." },
    cards: [
      { id: "culture-lids-1", image: lidImage, imageFileName: "30.jpg", sourceName: "30#", fields: { modelNumber: "30#" } },
      { id: "culture-lids-2", image: lidImage, imageFileName: "40.jpg", sourceName: "40#", fields: { modelNumber: "40#" } },
      { id: "culture-lids-3", image: lidImage, imageFileName: "52.jpg", sourceName: "52#", fields: { modelNumber: "52#" } },
      { id: "culture-lids-4", image: lidImage, imageFileName: "53.jpg", sourceName: "53#", fields: { modelNumber: "53#" } },
      { id: "culture-lids-5", image: lidImage, imageFileName: "54.jpg", sourceName: "54#", fields: { modelNumber: "54#" } },
      { id: "culture-lids-6", image: lidImage, imageFileName: "55.jpg", sourceName: "55#", fields: { modelNumber: "55#" } },
      { id: "culture-lids-7", image: lidImage, imageFileName: "56.jpg", sourceName: "56#", fields: { modelNumber: "56#" } },
      { id: "culture-lids-8", image: lidImage, imageFileName: "57.jpg", sourceName: "57#", fields: { modelNumber: "57#" } },
      { id: "culture-lids-9", image: lidImage, imageFileName: "58.jpg", sourceName: "58#", fields: { modelNumber: "58#" } },
      { id: "culture-lids-10", image: lidImage, imageFileName: "60.jpg", sourceName: "60#", fields: { modelNumber: "60#" } },
      { id: "culture-lids-11", image: lidImage, imageFileName: "61.jpg", sourceName: "61#", fields: { modelNumber: "61#" } },
      { id: "culture-lids-12", image: lidImage, imageFileName: "63.jpg", sourceName: "63#", fields: { modelNumber: "63#" } },
      { id: "culture-lids-13", image: lidImage, imageFileName: "64.jpg", sourceName: "64#", fields: { modelNumber: "64#" } },
      { id: "culture-lids-14", image: lidImage, imageFileName: "65.jpg", sourceName: "65#", fields: { modelNumber: "65#" } },
      { id: "culture-lids-15", image: lidImage, imageFileName: "69.jpg", sourceName: "69#", fields: { modelNumber: "69#" } },
      { id: "culture-lids-16", image: lidImage, imageFileName: "70.jpg", sourceName: "70#", fields: { modelNumber: "70#" } },
      { id: "culture-lids-17", image: lidImage, imageFileName: "72.jpg", sourceName: "72#", fields: { modelNumber: "72#" } },
      { id: "culture-lids-18", image: lidImage, imageFileName: "75.jpg", sourceName: "75#", fields: { modelNumber: "75#" } },
      { id: "culture-lids-19", image: lidImage, imageFileName: "77.jpg", sourceName: "77#", fields: { modelNumber: "77#" } },
      { id: "culture-lids-20", image: lidImage, imageFileName: "80.jpg", sourceName: "80#", fields: { modelNumber: "80#" } },
      { id: "culture-lids-21", image: lidImage, imageFileName: "82.jpg", sourceName: "82#", fields: { modelNumber: "82#" } },
      { id: "culture-lids-22", image: lidImage, imageFileName: "90.jpg", sourceName: "90#", fields: { modelNumber: "90#" } },
      { id: "culture-lids-23", image: lidImage, imageFileName: "95.jpg", sourceName: "95#", fields: { modelNumber: "95#" } },
    ]
  },
  {
    category: "accessories",
    slug: "sealing-film",
    image: filmImage,
    zh: { name: "封口膜", description: "富龙塑业封口膜可根据培养容器尺寸及培养需求进行定制。" },
    en: { name: "Sealing Films", description: "Sealing films can be customized according to container size and cultivation requirements." },
    cards: [
      { id: "sealing-film-1", image: filmImage, imageFileName: "film-12x12-1cm.jpg", sourceName: "12×12cm", fields: { filmSize: "12×12cm", ventHoleDiameter: "1cm" } },
      { id: "sealing-film-2", image: filmImage, imageFileName: "film-12x12-2cm.jpg", sourceName: "12×12cm", fields: { filmSize: "12×12cm", ventHoleDiameter: "2cm" } },
      { id: "sealing-film-3", image: filmImage, imageFileName: "film-12x12-3cm.jpg", sourceName: "12×12cm", fields: { filmSize: "12×12cm", ventHoleDiameter: "3cm" } },
      { id: "sealing-film-4", image: filmImage, imageFileName: "film-14x14-1cm.jpg", sourceName: "14×14cm", fields: { filmSize: "14×14cm", ventHoleDiameter: "1cm" } },
      { id: "sealing-film-5", image: filmImage, imageFileName: "film-14x14-2cm.jpg", sourceName: "14×14cm", fields: { filmSize: "14×14cm", ventHoleDiameter: "2cm" } },
      { id: "sealing-film-6", image: filmImage, imageFileName: "film-14x14-3cm.jpg", sourceName: "14×14cm", fields: { filmSize: "14×14cm", ventHoleDiameter: "3cm" } },
      { id: "sealing-film-7", image: filmImage, imageFileName: "film-16x16-1cm.jpg", sourceName: "16×16cm", fields: { filmSize: "16×16cm", ventHoleDiameter: "1cm" } },
      { id: "sealing-film-8", image: filmImage, imageFileName: "film-16x16-2cm.jpg", sourceName: "16×16cm", fields: { filmSize: "16×16cm", ventHoleDiameter: "2cm" } },
      { id: "sealing-film-9", image: filmImage, imageFileName: "film-16x16-3cm.jpg", sourceName: "16×16cm", fields: { filmSize: "16×16cm", ventHoleDiameter: "3cm" } },
    ]
  },
  {
    category: "accessories",
    slug: "culture-baskets",
    image: basketImage,
    zh: { name: "组培筐", description: "富龙塑业组培筐采用耐高温PP材料制造，适用于培养容器集中摆放、转运和管理。" },
    en: { name: "Tissue Culture Baskets", description: "Tissue culture baskets are manufactured from heat-resistant PP for organized placement, transportation, and management." },
    cards: [
      { id: "culture-baskets-1", image: basketImage, imageFileName: "basket-510x310x70.jpg", sourceName: "510×310×70mm", fields: { length: "510mm", width: "310mm", height: "70mm", weight: "270g" } },
      { id: "culture-baskets-2", image: basketImage, imageFileName: "basket-490x320x50.jpg", sourceName: "490×320×50mm", fields: { length: "490mm", width: "320mm", height: "50mm", weight: "300g" } },
      { id: "culture-baskets-3", image: basketImage, imageFileName: "basket-520x420x60.jpg", sourceName: "520×420×60mm", fields: { length: "520mm", width: "420mm", height: "60mm", weight: "430g" } },
      { id: "culture-baskets-4", image: basketImage, imageFileName: "basket-520x420x70.jpg", sourceName: "520×420×70mm", fields: { length: "520mm", width: "420mm", height: "70mm", weight: "440g" } },
      { id: "culture-baskets-5", image: basketImage, imageFileName: "basket-530x430x70.jpg", sourceName: "530×430×70mm", fields: { length: "530mm", width: "430mm", height: "70mm", weight: "480g" } },
      { id: "basket-grid-a", image: basketImage, imageFileName: "basket-600x440x60-a.jpg", sourceName: "600×440×60mm（网格A）", fields: { length: "600mm", width: "440mm", height: "60mm", weight: "500g" } },
      { id: "basket-grid-b", image: basketImage, imageFileName: "basket-600x440x60-b.jpg", sourceName: "600×440×60mm（网格B）", fields: { length: "600mm", width: "440mm", height: "60mm", weight: "500g" } },
      { id: "culture-baskets-8", image: basketImage, imageFileName: "basket-620x520x60.jpg", sourceName: "620×520×60mm", fields: { length: "620mm", width: "520mm", height: "60mm", weight: "700g" } },
      { id: "culture-baskets-9", image: basketImage, imageFileName: "basket-670x450x60.jpg", sourceName: "670×450×60mm", fields: { length: "670mm", width: "450mm", height: "60mm", weight: "700g" } },
    ]
  },
  {
    category: "featured",
    slug: "sugar-free-ventilated-culture-box",
    image: sugarFreeImage,
    zh: { name: "无糖透气培养盒", description: "可配套换气泵、CO₂监测器、调节阀等设备使用。" },
    en: { name: "Sterile Ventilated Tissue Culture Box", description: "Compatible with air pumps, CO₂ monitors and flow control valves." },
    cards: [
      { id: "sugar-free-ventilated-culture-box-1", image: sugarFreeImage, imageFileName: "vented-culture-box.jpg", sourceName: "无糖透气培养盒", remark: "可配套换气泵、CO2监测器、调节阀等", fields: { capacity: "/", length: "240mm", width: "195mm", height: "170mm", material: "PP" } },
    ]
  },
];

export function getSpecGroupsByCategory(categorySlug: string) {
  return productSpecGroups.filter((group) => group.category === categorySlug);
}

export const knowledgeCategories = [
  {
    slug: "product-encyclopedia",
    zh: "产品资料库",
    en: "Product Library"
  },
  {
    slug: "tissue-culture-knowledge",
    zh: "组织培养知识库",
    en: "Tissue Culture Knowledge Base"
  },
  {
    slug: "faq",
    zh: "常见问题",
    en: "FAQ"
  },
  {
    slug: "industry-news-insights",
    zh: "行业资讯",
    en: "Industry Insights"
  }
] as const;

export const articles = [
  {
    slug: "how-to-read-tissue-culture-container-specifications",
    category: "product-encyclopedia",
    publishDate: "2026-06-07",
    updatedDate: "2026-06-07",
    relatedProducts: ["pc-tissue-culture-bottles", "pp-culture-containers"],
    relatedArticles: ["pc-vs-pp-culture-containers"],
    zh: {
      title: "如何阅读组织培养容器规格",
      summary: "从容量、口径、底径、高度、材质和适配盖等参数判断组培容器是否适合具体培养流程。",
      body: "组织培养容器选型通常需要先确认容量、口径、底径、高度、材质和适配盖。对于高校实验室、科研项目和商业化繁育生产，规格一致性和容器适配性会直接影响采购沟通、耗材管理和长期供货安排。",
      seoTitle: "如何阅读组织培养容器规格 | 富龙塑业知识库",
      metaDescription: "了解组织培养容器规格中的容量、高度、底部直径、材质和适配盖，帮助采购前完成基础选型。"
    },
    en: {
      title: "How to Read Tissue Culture Container Specifications",
      summary: "Evaluate tissue culture containers by capacity, opening diameter, bottom diameter, height, material, and compatible lid.",
      body: "Tissue culture container selection typically starts with capacity, opening diameter, bottom diameter, height, material, and compatible lid. For laboratories, research projects, and commercial propagation operations, specification consistency and container compatibility are important for procurement communication, consumable management, and long-term supply planning.",
      seoTitle: "How to Read Tissue Culture Container Specifications | Fulong Plastic",
      metaDescription: "Learn how capacity, height, bottom diameter, material, and compatible lid help buyers select tissue culture containers."
    }
  },
  {
    slug: "pc-vs-pp-culture-containers",
    category: "tissue-culture-knowledge",
    publishDate: "2026-06-07",
    updatedDate: "2026-06-07",
    relatedProducts: ["pc-tissue-culture-bottles", "pp-culture-containers"],
    relatedArticles: ["how-to-read-tissue-culture-container-specifications"],
    zh: {
      title: "PC与PP培养容器的基础区别",
      summary: "了解PC与PP培养容器在透明度、材质特性、使用场景和规格选择上的基础差异。",
      body: "PC和PP培养容器可根据观察需求、培养流程、灭菌方式、规格尺寸和配套盖体进行选择。实际采购时，应结合培养对象、操作习惯、容器容量和材质要求进行确认。",
      seoTitle: "PC与PP培养容器区别 | 富龙塑业知识库",
      metaDescription: "了解PC培养容器和PP培养容器的基础区别，帮助按材质、规格和适配盖进行选型。"
    },
    en: {
      title: "Basic Differences Between PC and PP Culture Containers",
      summary: "Compare PC and PP culture containers by transparency, material properties, use case, and specification requirements.",
      body: "PC and PP culture containers can be selected according to observation needs, culture workflow, sterilization method, dimensions, and compatible lids. Purchasing decisions should be based on the target culture process, operating habits, container capacity, and material requirements.",
      seoTitle: "PC vs PP Culture Containers | Fulong Plastic Knowledge Base",
      metaDescription: "Understand basic differences between PC and PP culture containers for material, specification, and lid compatibility selection."
    }
  },
  {
    slug: "requesting-a-quote-for-culture-containers",
    category: "faq",
    publishDate: "2026-06-07",
    updatedDate: "2026-06-07",
    relatedProducts: ["pc-tissue-culture-bottles", "culture-lids"],
    relatedArticles: ["how-to-read-tissue-culture-container-specifications"],
    zh: {
      title: "询价组织培养容器时需要提供哪些信息？",
      summary: "建议提供产品类型、规格参数、适配盖、预计数量、用途和目的国家，以便更快确认报价。",
      body: "为了提高报价效率，询价时建议提供产品类型、容量、口径、底径、高度、材质、适配盖、预计数量、使用场景和目的国家。如涉及特殊尺寸、盖体结构或透气配置，也可一并说明。",
      seoTitle: "组培容器询价需要哪些信息 | 富龙塑业FAQ",
      metaDescription: "组培容器询价建议提供产品名称、容量、尺寸、材质、适配盖、数量和目的国家，以便快速确认报价。"
    },
    en: {
      title: "What Information Is Needed for a Culture Container Quote?",
      summary: "Provide product type, key specifications, compatible lid, estimated quantity, application, and destination country for faster quotation.",
      body: "For an efficient quotation, buyers should provide product type, capacity, opening diameter, bottom diameter, height, material, compatible lid, estimated quantity, application, and destination country. If special dimensions, lid structures, or ventilation configurations are required, they should be noted as well.",
      seoTitle: "What Information Is Needed for a Culture Container Quote | Fulong Plastic FAQ",
      metaDescription: "For tissue culture container quotes, provide product name, capacity, dimensions, material, compatible lid, quantity, and destination country."
    }
  },
  {
    slug: "specification-driven-procurement-for-culture-supplies",
    category: "industry-news-insights",
    publishDate: "2026-06-07",
    updatedDate: "2026-06-07",
    relatedProducts: ["pc-tissue-culture-bottles", "pp-culture-containers", "culture-lids"],
    relatedArticles: ["requesting-a-quote-for-culture-containers"],
    zh: {
      title: "组培耗材采购为什么需要规格驱动",
      summary: "规格驱动的采购方式有助于提高选型效率，减少重复沟通，并保障长期供货中的产品一致性。",
      body: "对于高校、科研院所、组培实验室和商业化繁育客户，规格驱动的采购方式有助于清晰确认容量、口径、尺寸、材质和适配关系，减少重复沟通，并支持长期稳定供应和后续补货管理。",
      seoTitle: "组培耗材规格驱动采购 | 富龙塑业行业资讯",
      metaDescription: "规格驱动的组培耗材采购有助于确认容量、尺寸、材质和适配关系，提升长期供应中的沟通效率。"
    },
    en: {
      title: "Why Specification-Driven Procurement Matters for Culture Supplies",
      summary: "Specification-driven procurement improves selection efficiency, reduces repeated communication, and supports product consistency in long-term supply.",
      body: "For universities, research institutes, tissue culture laboratories, and commercial propagation customers, specification-driven procurement helps clarify capacity, opening size, dimensions, material, and compatibility. This reduces repeated communication and supports stable long-term supply and repeat purchasing.",
      seoTitle: "Specification-Driven Procurement for Culture Supplies | Fulong Plastic",
      metaDescription: "Specification-driven procurement helps buyers confirm capacity, dimensions, material, and compatibility for long-term tissue culture supply."
    }
  }
];

export function getCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.category === categorySlug);
}

export function getKnowledgeCategory(slug: string) {
  return knowledgeCategories.find((category) => category.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return articles.filter((article) => article.category === categorySlug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function localizePath(path: string, locale: Locale) {
  if (locale === "en") {
    return `/en${path === "/" ? "" : path}`;
  }
  return path;
}

export function productPath(product: Product, locale: Locale) {
  const base =
    product.category === "featured"
      ? `/products/featured/${product.slug}/`
      : `/products/${product.category}/${product.slug}/`;
  return localizePath(base, locale);
}
