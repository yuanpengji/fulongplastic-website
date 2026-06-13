export type KnowledgeArticle = {
  slug: string;
  category: string;
  publishDate: string;
  updatedDate: string;
  relatedProducts: string[];
  relatedArticles: string[];
  zh: {
    title: string;
    summary: string;
    body: string;
    seoTitle: string;
    metaDescription: string;
  };
  en: {
    title: string;
    summary: string;
    body: string;
    seoTitle: string;
    metaDescription: string;
  };
};
