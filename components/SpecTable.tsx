import { Locale, Product, text } from "@/lib/content";

function formatTableValue(value: string, locale: Locale) {
  if (locale === "zh") {
    return value;
  }

  const fullValueTranslations: Record<string, string> = {
    透气款: "Vented Lid",
    密封款: "Solid Lid",
    透气盒盖: "Vented Lid",
    按容器型号匹配: "Matched To Container Size",
    按规格匹配: "Depends On Model",
    不适用: "Not Applicable",
    密封: "Sealed",
    单孔: "Single Vent Hole",
    双孔: "Double Vent Hole",
    双孔可选: "Double Vent Hole Optional",
    可选: "Optional"
  };

  if (fullValueTranslations[value]) {
    return fullValueTranslations[value];
  }

  if (value.includes(" / ")) {
    return value
      .split(" / ")
      .map((part) => fullValueTranslations[part] ?? part)
      .join(" / ");
  }

  return value
    .replace(/密封款/g, "Solid Lid")
    .replace(/透气款/g, "Vented Lid")
    .replace(/双孔可选/g, "Double Vent Hole Optional")
    .replace(/单孔/g, "Single Vent Hole")
    .replace(/双孔/g, "Double Vent Hole")
    .replace(/密封/g, "Sealed")
    .replace(/可选/g, "Optional");
}

export function SpecTable({ product, locale }: { product: Product; locale: Locale }) {
  const t = text[locale];
  const rows = [
    [t.fields.capacity, product.specs.capacity],
    [t.fields.height, product.specs.height],
    [t.fields.bottomDiameter, product.specs.bottomDiameter],
    [t.fields.material, product.specs.material],
    [t.fields.compatibleLid, product.specs.compatibleLid]
  ];

  return (
    <table className="spec-table">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <th>{label}</th>
            <td>{formatTableValue(value, locale)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
