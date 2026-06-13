import { readdirSync, readFileSync } from "fs";
import path from "path";
import { howToReadTissueCultureContainerSpecifications } from "./how-to-read-tissue-culture-container-specifications";
import { requestingAQuoteForCultureContainers } from "./requesting-a-quote-for-culture-containers";
import { specificationDrivenProcurementForCultureSupplies } from "./specification-driven-procurement-for-culture-supplies";
import type { KnowledgeArticle } from "./types";

export type { KnowledgeArticle } from "./types";

type ArticleMeta = Record<string, string | string[]>;

const articlesDirectory = path.join(process.cwd(), "content", "articles");

function parseListValue(value: string) {
  if (value === "[]") {
    return [];
  }
  return value
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(",")
    .map((item) => item.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function parseArticleMeta(rawMeta: string) {
  const meta: ArticleMeta = {};
  let activeListKey: string | null = null;

  rawMeta
    .replace(/^---\s*/, "")
    .replace(/\s*---$/, "")
    .split(/\r?\n/)
    .forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line || line === "---") return;

      const listMatch = line.match(/^[-*]\s+(.+)$/);
      if (listMatch && activeListKey) {
        const current = Array.isArray(meta[activeListKey]) ? meta[activeListKey] as string[] : [];
        meta[activeListKey] = [...current, listMatch[1].trim()];
        return;
      }

      const fieldMatch = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
      if (!fieldMatch) return;

      const [, key, value] = fieldMatch;
      if (!value) {
        meta[key] = [];
        activeListKey = key;
        return;
      }

      meta[key] = value.startsWith("[") && value.endsWith("]") ? parseListValue(value) : value;
      activeListKey = null;
    });

  return meta;
}

function getString(meta: ArticleMeta, key: string) {
  const value = meta[key];
  return Array.isArray(value) ? value.join(", ") : value ?? "";
}

function getList(meta: ArticleMeta, key: string) {
  const value = meta[key];
  if (Array.isArray(value)) {
    return value;
  }
  if (!value) {
    return [];
  }
  return parseListValue(value);
}

function parseMarkdownArticle(markdown: string): KnowledgeArticle {
  const zhMarker = "<!-- zh -->";
  const enMarker = "<!-- en -->";
  const zhStart = markdown.indexOf(zhMarker);
  const enStart = markdown.indexOf(enMarker);
  const meta = parseArticleMeta(markdown.slice(0, zhStart).trim());

  return {
    slug: getString(meta, "slug"),
    category: getString(meta, "category"),
    publishDate: getString(meta, "publishDate"),
    updatedDate: getString(meta, "updatedDate"),
    relatedProducts: getList(meta, "relatedProducts"),
    relatedArticles: getList(meta, "relatedArticles"),
    zh: {
      title: getString(meta, "zhTitle"),
      summary: getString(meta, "zhSummary"),
      body: markdown.slice(zhStart + zhMarker.length, enStart).trim(),
      seoTitle: getString(meta, "zhSeoTitle"),
      metaDescription: getString(meta, "zhMetaDescription")
    },
    en: {
      title: getString(meta, "enTitle"),
      summary: getString(meta, "enSummary"),
      body: markdown.slice(enStart + enMarker.length).trim(),
      seoTitle: getString(meta, "enSeoTitle"),
      metaDescription: getString(meta, "enMetaDescription")
    }
  };
}

function loadMarkdownArticles() {
  return readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort()
    .map((fileName) => parseMarkdownArticle(readFileSync(path.join(articlesDirectory, fileName), "utf8")));
}

const markdownArticles = loadMarkdownArticles();

export const articles = [
  howToReadTissueCultureContainerSpecifications,
  requestingAQuoteForCultureContainers,
  specificationDrivenProcurementForCultureSupplies,
  ...markdownArticles
];
