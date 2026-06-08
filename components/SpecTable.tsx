import { Locale, Product, text } from "@/lib/content";

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
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
