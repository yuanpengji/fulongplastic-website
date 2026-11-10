import type { Locale } from "@/lib/content";

const englishPlaceholders: Record<string, string> = {
  不适用: "N/A",
  按规格匹配: "Varies by Specification"
};

export function localizeSpecPlaceholder(value: string, locale: Locale) {
  if (locale !== "en") return value;

  return value
    .split(/(\s*\/\s*)/)
    .map((part) => englishPlaceholders[part] ?? part)
    .join("");
}
