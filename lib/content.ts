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

export const company = {
  email: "sales@fulongplastic.com",
  whatsapp: "To be confirmed",
  zh: {
    positioning: "组织培养容器及相关配套产品源头生产厂家",
    about:
      "富龙塑业是一家专注于组织培养容器及相关配套产品的源头生产厂家，拥有20余年制造经验。公司产品涵盖PC组培瓶、PC组培试管、PC广口培养杯、PP培养容器、PP培养盒、组培袋、组培盖、透气膜、封口膜及培养篮等，适用于组织培养、科研实验、农业研究、种苗繁育及其他培养应用场景。",
    aboutMore:
      "多年来，富龙塑业服务于高校、科研院所、商业化繁育客户、农业科研客户及国际客户。公司重视产品规格稳定性、长期供货能力和实际使用需求，并支持根据不同培养场景进行产品定制开发。",
    proofPoints: [
      "20+年制造经验",
      "源头生产厂家",
      "高校及科研院所客户",
      "商业化繁育客户",
      "国际客户",
      "支持定制开发",
      "长期稳定供货"
    ]
  },
  en: {
    positioning: "Source manufacturer of tissue culture containers and related accessories",
    about:
      "Fulong Plastic is a source manufacturer specializing in tissue culture containers and related accessories, with more than 20 years of manufacturing experience. Our product range includes PC tissue culture bottles, PC culture tubes, PC wide mouth culture cups, PP culture containers, PP culture boxes, culture bags, culture lids, vent filter patches, sealing film, culture baskets, and related supplies.",
    aboutMore:
      "Fulong Plastic serves universities, research institutes, commercial propagation customers, agricultural research customers, and international customers. We focus on stable specifications, reliable long-term supply, practical usage requirements, and custom development for different research and cultivation applications.",
    proofPoints: [
      "20+ years manufacturing experience",
      "Source manufacturer",
      "University and research institute customers",
      "Commercial propagation customers",
      "International customers",
      "Custom development capability",
      "Stable long-term supply"
    ]
  }
};

export const applications = [
  {
    slug: "plant-tissue-culture",
    zh: "植物组织培养",
    en: "Plant Tissue Culture"
  },
  {
    slug: "micropropagation",
    zh: "微繁殖",
    en: "Micropropagation"
  },
  {
    slug: "seedling-propagation",
    zh: "种苗繁育",
    en: "Seedling Propagation"
  },
  {
    slug: "agricultural-research",
    zh: "农业科研",
    en: "Agricultural Research"
  },
  {
    slug: "university-laboratory-research",
    zh: "高校及实验室研究",
    en: "University & Laboratory Research"
  },
  {
    slug: "other-research-cultivation-applications",
    zh: "其他科研与培养应用",
    en: "Other Research & Cultivation Applications"
  }
];

export const productCategories = [
  {
    slug: "pc-series",
    image: "/products/pc-tissue-culture-bottles.jpg",
    zh: {
      name: "PC Series",
      title: "PC系列",
      description: "PC组培瓶、PC组培试管与PC广口培养杯，按容量、尺寸和适配盖进行规格化展示。"
    },
    en: {
      name: "PC Series",
      title: "PC Series",
      description: "PC tissue culture bottles, PC culture tubes, and PC wide mouth culture cups organized by capacity, dimensions, and compatible lids."
    }
  },
  {
    slug: "pp-series",
    image: "/products/pp-culture-containers.jpg",
    zh: {
      name: "PP Series",
      title: "PP系列",
      description: "PP培养容器、PP培养盒、热封组培袋与自封站立组培袋，适合规格对比和批量询价。"
    },
    en: {
      name: "PP Series",
      title: "PP Series",
      description: "PP culture containers, PP culture boxes, heat seal culture bags, and self-seal stand-up culture bags for specification comparison and B2B inquiries."
    }
  },
  {
    slug: "accessories",
    image: "/products/culture-lids.jpg",
    zh: {
      name: "Accessories",
      title: "配套产品",
      description: "组培盖、透气膜、封口膜与培养篮，围绕容器适配和培养流程配套供应。"
    },
    en: {
      name: "Accessories",
      title: "Accessories",
      description: "Culture lids, vent filter patches, sealing film, and culture baskets supplied for container compatibility and cultivation workflows."
    }
  },
  {
    slug: "featured",
    image: "/products/sugar-free-ventilated-culture-box.jpg",
    zh: {
      name: "Featured Product",
      title: "Featured Product",
      description: "无糖透气培养盒，作为重点产品独立展示规格与询价入口。"
    },
    en: {
      name: "Featured Product",
      title: "Featured Product",
      description: "Sugar-Free Ventilated Culture Box with a dedicated specification and inquiry page."
    }
  }
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
      capacity: "145ml / 160ml / 250ml / 300ml / 340ml / 430ml / 520ml / 600ml / 650ml / 800ml / 1000ml",
      height: "57-185mm",
      bottomDiameter: "60-100mm",
      material: "PC",
      compatibleLid: "Vented or sealed culture lids"
    },
    variants: ["96 x 60mm 145ml", "80 x 60mm 160ml", "90 x 82 x 65mm 340ml", "90 x 81 x 85mm 430ml", "108 x 91mm 520ml", "185 x 96mm 1000ml"],
    related: ["culture-lids", "vent-filter-patches", "culture-baskets"],
    zh: {
      name: "PC组培瓶",
      description: "多规格PC组培瓶，重点展示容量、尺寸、材质和适配盖信息。",
      features: ["多容量规格可选", "透明PC瓶身", "可配透气或密封盖", "支持规格化批量询价"],
      seoTitle: "PC组培瓶 | 富龙塑业组织培养容器",
      metaDescription: "富龙塑业提供多规格PC组培瓶，规格覆盖145ml至1000ml，重点参数包括容量、高度、底部直径、PC材质和适配盖。"
    },
    en: {
      name: "PC Tissue Culture Bottles",
      description: "PC tissue culture bottles organized by capacity, dimensions, material, and compatible lids.",
      features: ["Multiple capacities available", "Transparent PC body", "Compatible with vented or sealed lids", "Specification-based bulk inquiry"],
      seoTitle: "PC Tissue Culture Bottles | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies PC tissue culture bottles from 145ml to 1000ml with key specifications including capacity, height, bottom diameter, material, and compatible lids."
    }
  },
  {
    slug: "pc-culture-tubes",
    category: "pc-series",
    image: "/products/pc-culture-tubes.jpg",
    specs: {
      capacity: "Based on tube size",
      height: "91mm / 100mm / 150mm / 200mm",
      bottomDiameter: "30mm / 47mm",
      material: "PC",
      compatibleLid: "Matched tube caps"
    },
    variants: ["91 x 47mm", "100 x 30mm", "150 x 30mm", "200 x 30mm"],
    related: ["culture-lids", "vent-filter-patches"],
    zh: {
      name: "PC组培试管",
      description: "PC组培试管用于小容量培养与实验室培养，页面以尺寸和适配盖为核心。",
      features: ["多种高度规格", "透明管体", "适合小容量培养", "支持配套盖体选择"],
      seoTitle: "PC组培试管 | 富龙塑业",
      metaDescription: "富龙塑业PC组培试管提供91×47mm、100×30mm、150×30mm、200×30mm等规格，重点展示高度、底部直径、材质和适配盖。"
    },
    en: {
      name: "PC Culture Tubes",
      description: "PC culture tubes for small-volume culture and laboratory use, structured around dimensions and compatible caps.",
      features: ["Multiple height options", "Transparent tube body", "Suitable for small-volume culture", "Matched cap options available"],
      seoTitle: "PC Culture Tubes | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies PC culture tubes including 91×47mm, 100×30mm, 150×30mm, and 200×30mm sizes with specification-focused product information."
    }
  },
  {
    slug: "pc-wide-mouth-culture-cups",
    category: "pc-series",
    image: "/products/pc-wide-mouth-culture-cups.jpg",
    specs: {
      capacity: "340ml / 430ml",
      height: "95mm / 125mm",
      bottomDiameter: "83mm",
      material: "PC",
      compatibleLid: "Sealed lid / vented lid"
    },
    variants: ["90 x 83 x 95mm sealed lid", "90 x 83 x 95mm vented lid", "90 x 83 x 125mm sealed lid", "90 x 83 x 125mm vented lid"],
    related: ["culture-lids", "vent-filter-patches"],
    zh: {
      name: "PC广口培养杯",
      description: "PC广口培养杯提供不同高度和盖型选择，便于按培养需求选型。",
      features: ["340ml与430ml规格", "广口结构", "密封盖与透气盖可选", "规格清晰便于询价"],
      seoTitle: "PC广口培养杯 | 富龙塑业",
      metaDescription: "富龙塑业PC广口培养杯提供340ml、430ml及不同高度规格，可选择密封盖或透气盖，适合按规格选型。"
    },
    en: {
      name: "PC Wide Mouth Culture Cups",
      description: "PC wide mouth culture cups with different height and lid options for specification-based selection.",
      features: ["340ml and 430ml options", "Wide mouth structure", "Sealed and vented lid options", "Clear specification comparison"],
      seoTitle: "PC Wide Mouth Culture Cups | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies PC wide mouth culture cups in 340ml and 430ml options with sealed or vented lids and clear specification data."
    }
  },
  {
    slug: "pp-culture-containers",
    category: "pp-series",
    image: "/products/pp-culture-containers.jpg",
    specs: {
      capacity: "160ml / 200ml / 300ml / 500ml / 750ml / 1000ml",
      height: "54-95mm",
      bottomDiameter: "66-110mm",
      material: "PP",
      compatibleLid: "Matched PP culture lids"
    },
    variants: ["66 x 54mm 160ml", "73 x 78mm 300ml", "90 x 95mm 500ml", "110 x 95mm 750ml"],
    related: ["culture-lids", "vent-filter-patches", "culture-baskets"],
    zh: {
      name: "PP培养容器",
      description: "PP培养容器按容量和尺寸组织规格，适合批量采购前进行参数确认。",
      features: ["多容量规格", "PP材质", "配套盖体可选", "适合长期稳定供货"],
      seoTitle: "PP培养容器 | 富龙塑业",
      metaDescription: "富龙塑业供应PP培养容器，容量覆盖160ml、200ml、300ml、500ml、750ml、1000ml，重点展示容量、高度、底部直径、材质和适配盖。"
    },
    en: {
      name: "PP Culture Containers",
      description: "PP culture containers organized by capacity and dimensions for specification confirmation before bulk purchasing.",
      features: ["Multiple capacity options", "PP material", "Matched lid options", "Suitable for stable long-term supply"],
      seoTitle: "PP Culture Containers | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies PP culture containers from 160ml to 1000ml with capacity, height, bottom diameter, material, and compatible lid details."
    }
  },
  {
    slug: "pp-culture-boxes",
    category: "pp-series",
    image: "/products/pp-culture-boxes.jpg",
    specs: {
      capacity: "Based on box size",
      height: "45mm",
      bottomDiameter: "85 x 60mm",
      material: "PP",
      compatibleLid: "Matched box lid"
    },
    variants: ["85 x 60 x 45mm"],
    related: ["culture-lids", "vent-filter-patches"],
    zh: {
      name: "PP培养盒",
      description: "PP培养盒以尺寸、材质和盖体适配为主要选型信息。",
      features: ["紧凑盒型", "PP材质", "配套盖体", "适合按规格询价"],
      seoTitle: "PP培养盒 | 富龙塑业",
      metaDescription: "富龙塑业PP培养盒提供85×60×45mm等规格，页面重点展示容量、尺寸、材质和适配盖。"
    },
    en: {
      name: "PP Culture Boxes",
      description: "PP culture boxes focused on dimensions, material, and compatible lid information.",
      features: ["Compact box format", "PP material", "Matched lid", "Specification-based inquiry"],
      seoTitle: "PP Culture Boxes | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies PP culture boxes such as 85×60×45mm with specification-focused product information."
    }
  },
  {
    slug: "heat-seal-culture-bags",
    category: "pp-series",
    image: "/products/heat-seal-culture-bags.jpg",
    specs: {
      capacity: "Based on bag size",
      height: "14cm / 24cm",
      bottomDiameter: "12cm / 20cm width",
      material: "PP film",
      compatibleLid: "Heat seal closure"
    },
    variants: ["12 x 14cm", "20 x 24cm"],
    related: ["vent-filter-patches", "sealing-film"],
    zh: {
      name: "热封组培袋",
      description: "热封组培袋按袋体尺寸和封口方式展示，适合规格化询价。",
      features: ["12×14cm与20×24cm规格", "热封封口", "可配合透气膜使用", "适合批量供应"],
      seoTitle: "热封组培袋 | 富龙塑业",
      metaDescription: "富龙塑业热封组培袋提供12×14cm、20×24cm规格，支持按尺寸、材质和封口方式进行询价。"
    },
    en: {
      name: "Heat Seal Culture Bags",
      description: "Heat seal culture bags listed by bag size and closure method for specification-based inquiries.",
      features: ["12×14cm and 20×24cm sizes", "Heat seal closure", "Can be used with vent filter patches", "Bulk supply available"],
      seoTitle: "Heat Seal Culture Bags | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies heat seal culture bags in 12×14cm and 20×24cm sizes with specification-focused inquiry information."
    }
  },
  {
    slug: "self-seal-stand-up-culture-bags",
    category: "pp-series",
    image: "/products/heat-seal-culture-bags.jpg",
    specs: {
      capacity: "Based on bag size",
      height: "14cm / 18.5cm",
      bottomDiameter: "12cm / 16cm width",
      material: "PP film",
      compatibleLid: "Self-seal closure"
    },
    variants: ["12 x 14cm", "16 x 18.5cm"],
    related: ["vent-filter-patches", "sealing-film"],
    zh: {
      name: "自封站立组培袋",
      description: "自封站立组培袋以袋体尺寸、材质和封口方式为核心规格。",
      features: ["自封结构", "站立袋型", "两种基础规格", "支持批量询价"],
      seoTitle: "自封站立组培袋 | 富龙塑业",
      metaDescription: "富龙塑业自封站立组培袋提供12×14cm、16×18.5cm规格，重点展示尺寸、材质和封口方式。"
    },
    en: {
      name: "Self-Seal Stand-Up Culture Bags",
      description: "Self-seal stand-up culture bags focused on size, material, and closure specifications.",
      features: ["Self-seal structure", "Stand-up bag format", "Two base sizes", "Bulk inquiry supported"],
      seoTitle: "Self-Seal Stand-Up Culture Bags | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies self-seal stand-up culture bags in 12×14cm and 16×18.5cm sizes with clear specification details."
    }
  },
  {
    slug: "culture-lids",
    category: "accessories",
    image: "/products/culture-lids.jpg",
    specs: {
      capacity: "Not applicable",
      height: "Varies by lid model",
      bottomDiameter: "30# / 40# / 52# / 53# / 54# / 55# / 56# / 57# / 58# / 60# / 61# / 63# / 64# / 65# / 69# / 70# / 72# / 75# / 77# / 80# / 82# / 90# / 95#",
      material: "PP / PE options by model",
      compatibleLid: "Compatible with matching culture containers"
    },
    related: ["pc-tissue-culture-bottles", "pp-culture-containers", "vent-filter-patches"],
    zh: {
      name: "组培盖",
      description: "组培盖按型号和适配容器进行选择，可配合透气膜或密封应用。",
      features: ["多型号可选", "适配多类容器", "可做透气或密封配置", "支持配套询价"],
      seoTitle: "组培盖 | 富龙塑业",
      metaDescription: "富龙塑业供应多型号组培盖，包括30#至95#等规格，可与组培瓶、培养容器及透气膜配套使用。"
    },
    en: {
      name: "Culture Lids",
      description: "Culture lids selected by model and compatible container, available for vented or sealed use.",
      features: ["Multiple models available", "Compatible with different containers", "Vented or sealed configurations", "Accessory inquiry supported"],
      seoTitle: "Culture Lids | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies culture lids from 30# to 95# models for tissue culture bottles, culture containers, and vent filter patch applications."
    }
  },
  {
    slug: "vent-filter-patches",
    category: "accessories",
    image: "/products/vent-filter-patches.jpg",
    specs: {
      capacity: "Not applicable",
      height: "Patch thickness by material",
      bottomDiameter: "1.8cm / 2.0cm / 3.0cm",
      material: "Vent filter membrane",
      compatibleLid: "Culture lids and culture bags"
    },
    variants: ["1.8cm", "2.0cm", "3.0cm"],
    related: ["culture-lids", "heat-seal-culture-bags", "self-seal-stand-up-culture-bags"],
    zh: {
      name: "透气膜",
      description: "透气膜按直径规格和适配对象展示，可用于组培盖和组培袋。",
      features: ["1.8cm、2.0cm、3.0cm规格", "适配盖体或袋体", "用于透气配置", "支持配套供应"],
      seoTitle: "透气膜 | 富龙塑业组培配件",
      metaDescription: "富龙塑业供应1.8cm、2.0cm、3.0cm透气膜，可用于组培盖、组培袋及相关培养容器配套。"
    },
    en: {
      name: "Vent Filter Patches",
      description: "Vent filter patches listed by diameter and compatibility with lids or culture bags.",
      features: ["1.8cm, 2.0cm, and 3.0cm sizes", "For lids or bags", "Used for ventilation options", "Accessory supply available"],
      seoTitle: "Vent Filter Patches | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies 1.8cm, 2.0cm, and 3.0cm vent filter patches for culture lids, culture bags, and related containers."
    }
  },
  {
    slug: "sealing-film",
    category: "accessories",
    image: "/products/vent-filter-patches.jpg",
    specs: {
      capacity: "Not applicable",
      height: "By roll or sheet specification",
      bottomDiameter: "By requested width",
      material: "Sealing film",
      compatibleLid: "Culture vessels and containers"
    },
    related: ["heat-seal-culture-bags", "pp-culture-boxes"],
    zh: {
      name: "封口膜",
      description: "封口膜作为培养容器配套耗材，按宽度、规格和使用方式确认。",
      features: ["配套培养容器使用", "按规格询价", "适合耗材补充", "支持长期供应"],
      seoTitle: "封口膜 | 富龙塑业",
      metaDescription: "富龙塑业供应封口膜等组培配套耗材，可按规格、宽度和使用方式进行询价。"
    },
    en: {
      name: "Sealing Film",
      description: "Sealing film for culture container applications, confirmed by width, specification, and usage method.",
      features: ["For culture container use", "Specification-based inquiry", "Accessory supply item", "Long-term supply available"],
      seoTitle: "Sealing Film | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies sealing film and related tissue culture accessories with specification-based inquiry support."
    }
  },
  {
    slug: "culture-baskets",
    category: "accessories",
    image: "/products/culture-baskets.jpg",
    specs: {
      capacity: "Based on basket size",
      height: "50-70mm",
      bottomDiameter: "490 x 320mm to 670 x 455mm",
      material: "Plastic",
      compatibleLid: "Not applicable"
    },
    variants: ["490 x 320 x 50mm", "520 x 420 x 60mm", "520 x 420 x 70mm", "600 x 440 x 60mm", "620 x 520 x 60mm", "670 x 450 x 60mm"],
    related: ["pc-tissue-culture-bottles", "pp-culture-containers"],
    zh: {
      name: "培养篮",
      description: "培养篮按长宽高和重量规格展示，用于组培容器周转、清洗或存放。",
      features: ["多尺寸规格", "塑料网格结构", "适合容器周转", "支持批量供应"],
      seoTitle: "培养篮 | 富龙塑业组培配套产品",
      metaDescription: "富龙塑业供应多规格培养篮，尺寸覆盖490×320×50mm至670×450×60mm等，可用于组培容器周转和存放。"
    },
    en: {
      name: "Culture Baskets",
      description: "Culture baskets listed by length, width, height, and weight for handling, washing, or storage.",
      features: ["Multiple size options", "Plastic grid structure", "For container handling", "Bulk supply supported"],
      seoTitle: "Culture Baskets | Fulong Plastic",
      metaDescription: "Fulong Plastic supplies culture baskets in multiple sizes for tissue culture container handling, washing, and storage."
    }
  },
  {
    slug: "sugar-free-ventilated-culture-box",
    category: "featured",
    image: "/products/sugar-free-ventilated-culture-box.jpg",
    specs: {
      capacity: "Based on box model",
      height: "By model",
      bottomDiameter: "By model",
      material: "Transparent plastic",
      compatibleLid: "Ventilated box lid"
    },
    related: ["pp-culture-boxes", "vent-filter-patches"],
    zh: {
      name: "无糖透气培养盒",
      description: "无糖透气培养盒作为重点产品展示，页面保留简洁规格、特点和询价入口。",
      features: ["透气盒盖结构", "透明盒体", "适合无糖培养相关应用", "支持定制开发沟通"],
      seoTitle: "无糖透气培养盒 | 富龙塑业",
      metaDescription: "富龙塑业无糖透气培养盒展示容量、尺寸、材质、适配盖等核心规格，并支持定制开发与批量询价。"
    },
    en: {
      name: "Sugar-Free Ventilated Culture Box",
      description: "Sugar-Free Ventilated Culture Box presented with concise specifications, short features, and an inquiry entry.",
      features: ["Ventilated lid structure", "Transparent box body", "For sugar-free culture related applications", "Custom development discussion supported"],
      seoTitle: "Sugar-Free Ventilated Culture Box | Fulong Plastic",
      metaDescription: "Fulong Plastic presents the Sugar-Free Ventilated Culture Box with key specifications including capacity, dimensions, material, and lid compatibility."
    }
  }
];

export const knowledgeCategories = [
  {
    slug: "product-encyclopedia",
    zh: "Product Encyclopedia",
    en: "Product Encyclopedia"
  },
  {
    slug: "tissue-culture-knowledge",
    zh: "Tissue Culture Knowledge",
    en: "Tissue Culture Knowledge"
  },
  {
    slug: "faq",
    zh: "FAQ",
    en: "FAQ"
  },
  {
    slug: "industry-news-insights",
    zh: "Industry News & Insights",
    en: "Industry News & Insights"
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
      summary: "从容量、高度、底部直径、材质和适配盖五个字段理解组培容器规格。",
      body: "组织培养容器选型通常从容量、高度、底部直径、材质和适配盖开始。采购前建议先确认培养空间、容器稳定性、盖体密封或透气需求，再进行批量询价。",
      seoTitle: "如何阅读组织培养容器规格 | 富龙塑业知识库",
      metaDescription: "了解组织培养容器规格中的容量、高度、底部直径、材质和适配盖，帮助采购前完成基础选型。"
    },
    en: {
      title: "How to Read Tissue Culture Container Specifications",
      summary: "Understand tissue culture container specifications through capacity, height, bottom diameter, material, and compatible lid.",
      body: "Tissue culture container selection usually starts with capacity, height, bottom diameter, material, and compatible lid. Before bulk inquiry, buyers should confirm culture space, container stability, and sealed or vented lid requirements.",
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
      summary: "简要说明PC和PP培养容器在透明度、材质属性和规格选择上的差异。",
      body: "PC和PP培养容器可根据培养流程、观察需求、规格尺寸和配套盖体进行选择。实际采购时，应以具体规格、材质要求和使用场景为准。",
      seoTitle: "PC与PP培养容器区别 | 富龙塑业知识库",
      metaDescription: "了解PC培养容器和PP培养容器的基础区别，帮助按材质、规格和适配盖进行选型。"
    },
    en: {
      title: "Basic Differences Between PC and PP Culture Containers",
      summary: "A concise comparison of PC and PP culture containers by transparency, material, and specification selection.",
      body: "PC and PP culture containers can be selected based on process needs, observation requirements, dimensions, and compatible lids. Actual purchasing decisions should be based on confirmed specifications, material requirements, and use cases.",
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
      summary: "建议提供产品名称、容量、尺寸、材质、适配盖、数量和目的国家。",
      body: "为了提高报价效率，询价时建议提供产品名称、容量、高度、底部直径、材质、适配盖、预计数量、目的国家以及是否需要定制开发。",
      seoTitle: "组培容器询价需要哪些信息 | 富龙塑业FAQ",
      metaDescription: "组培容器询价建议提供产品名称、容量、尺寸、材质、适配盖、数量和目的国家，以便快速确认报价。"
    },
    en: {
      title: "What Information Is Needed for a Culture Container Quote?",
      summary: "Provide product name, capacity, dimensions, material, compatible lid, quantity, and destination country.",
      body: "For efficient quotation, buyers should provide product name, capacity, height, bottom diameter, material, compatible lid, estimated quantity, destination country, and whether custom development is required.",
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
      summary: "规格一致性有助于降低沟通成本，并提升长期供货中的产品匹配效率。",
      body: "对于高校、科研院所和商业化繁育客户，规格驱动的采购方式有助于清晰确认容量、尺寸、材质和适配关系，减少重复沟通，并支持长期稳定供应。",
      seoTitle: "组培耗材规格驱动采购 | 富龙塑业行业资讯",
      metaDescription: "规格驱动的组培耗材采购有助于确认容量、尺寸、材质和适配关系，提升长期供应中的沟通效率。"
    },
    en: {
      title: "Why Specification-Driven Procurement Matters for Culture Supplies",
      summary: "Specification consistency reduces communication cost and improves matching efficiency in long-term supply.",
      body: "For universities, research institutes, and commercial propagation customers, specification-driven procurement helps clarify capacity, dimensions, material, and compatibility, reducing repeated communication and supporting stable long-term supply.",
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
