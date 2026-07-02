# Fulong Plastic EXW Catalog Framework

Generated from the current website product data. This first version is an EXW catalog and pricing maintenance framework only. No price calculation or non-EXW quotation term is included. International freight, insurance, destination customs clearance, and import tax are outside this framework.

## Source Files Scanned

- lib/content.ts
- app/products/[category]/[product]/page.tsx
- app/[locale]/products/[category]/[product]/page.tsx
- components/SpecTable.tsx
- components/ProductCard.tsx
- public/products/**

Primary structured source: `lib/content.ts`

## Product Classification Structure

### PC Tissue Culture Series / PC组培系列
- PC Tissue Culture Bottles / PC组培瓶: 16 specification rows
- PC Culture Tubes / PC组培试管: 4 specification rows
- PC Wide-Mouth Culture Cups / PC广口培养杯: 6 specification rows

### PP Culture Series / PP组培系列
- PP Tissue Culture Containers / PP组培容器: 6 specification rows
- PP Culture Boxes / PP培养盒: 9 specification rows
- Heat-Seal Tissue Culture Bags / 热封组培袋: 2 specification rows
- Self-Seal Stand-Up Tissue Culture Bags / 自封自立组培袋: 2 specification rows

### Accessories / 组培配套产品
- Tissue Culture Lids / 组培盖: 23 specification rows
- Sealing Films / 封口膜: 9 specification rows
- Tissue Culture Baskets / 组培筐: 9 specification rows

### Featured Products / 特色产品
- Sterile Ventilated Tissue Culture Box / 无糖透气培养盒: 1 specification rows

## Extracted Field Summary

- Product category and series names: extracted from `productCategories` and `productSpecGroups`.
- English and Chinese product names: extracted from `products` and `productSpecGroups`.
- Model / specification: extracted from spec card `sourceName` or `modelNumber`.
- Capacity: extracted when present in spec card fields.
- Dimensions: composed from existing fields only: `topDimensions`, `bottomDimensions`, `length`, `width`, `openingDiameter`, `bottomDiameter`, `height`, `weight`.
- Material: extracted when present in spec card fields.
- Lid / cap: extracted from `compatibleLid` or cap model number where applicable.
- Filter membrane: extracted from `filterPatchInfo`, `filterMembraneDiameter`, `ventHoleDiameter`, or product feature notes where the current page describes membrane customization.
- Product URL: generated with the existing English product route logic.
- Image path: extracted from each spec card image path.
- Notes: extracted from existing English feature lists and card remarks.

Product-level spec fields found: bottomDiameter, bottomDimensions, capacity, compatibleLid, filterMembraneDiameter, height, material, topDimensions

Specification-card fields found: bottomDiameter, bottomDimensions, capacity, compatibleLid, filmSize, filterMembraneDiameter, filterPatchInfo, height, length, material, modelNumber, openingDiameter, topDimensions, ventHoleDiameter, weight, width

## Missing Fields

Fields intentionally left as `TBD` when not available in the current website data:

- Packing: 87 rows
- MOQ: 87 rows
- EXW Price USD: 87 rows
- Filter Membrane: 65 rows
- Capacity: 50 rows
- Material: 41 rows
- Lid / Cap: 38 rows
- Dimensions: 32 rows

## Fields Requiring Manual Completion

- Packing
- MOQ
- EXW Price USD
- Domestic Reference Price RMB
- Factory Cost RMB
- EXW Base Price USD
- EXW Standard Price USD
- EXW Distributor Price USD
- Recommended Export Level
- Any missing capacity/material/lid/filter membrane values where marked `TBD`

## Price Field Policy

All price fields are set to `TBD`. No prices were estimated or inferred. EXW means ex works / factory price only and does not include international freight, insurance, destination port charges, customs clearance, duties, or import taxes.

## Suggested EXW Price Completion Workflow

1. Confirm packing units and MOQ for each specification.
2. Fill domestic reference price and factory cost from internal systems.
3. Add EXW base, standard, and distributor USD prices manually.
4. Review currency conversion and margin assumptions outside this file before sending to customers.
5. Keep customer-facing CSV limited to EXW Price USD and avoid exposing internal cost fields.

## Duplicate / Uncertain Items

- No exact duplicate rows by product category + model/specification + image path were detected.

## EXW Pricing Rule Draft

1. At this stage, EXW should remain the primary quotation basis. A freight-inclusive main quotation table is not recommended as the default customer-facing format.
2. EXW price means factory ex works price only. It does not include international freight, insurance, destination customs clearance, or import taxes.
3. Internal draft exchange rate: 1 USD = 6.8 RMB.
4. Customer-facing catalog should show only the Standard EXW Price after manual completion.
5. Internal pricing table keeps three reference levels:
   - Small Order Price: small-order or trial-order price.
   - Standard EXW Price: standard customer catalog price.
   - Distributor Price: key-account or long-term distributor price.
6. MOQ should be set by standard packing unit, for example:
   - 1 carton
   - 1 standard package
   - 1 bag
   - 1 set
   Specific MOQ must be manually confirmed by product type.
7. Avoid setting MOQ as 1 piece, because scattered small orders increase communication and packing cost.
8. If a customer needs a shipping-based quotation, calculate it separately after confirming exact products, quantities, packing volume, and transport method.
9. The current TBD version must not be sent directly to customers.

## Recommended Pricing Priority

### High Priority

- PP Tissue Culture Containers
- PC Tissue Culture Bottles
- PC Wide-Mouth Culture Cups
- PC Culture Tubes
- Heat-Seal Tissue Culture Bags
- Self-Seal Stand-Up Tissue Culture Bags
- Tissue Culture Lids
- Sealing Films

### Medium Priority

- Tissue Culture Baskets
- PP Culture Boxes
- Other accessories

### Low Priority

- Sterile Ventilated Tissue Culture Box
- Products with incomplete specifications

## Workflow: Internal Pricing Master Table and Customer Catalog

- `internal-exw-pricing.csv` is the only manual pricing master table. Maintain Packing, MOQ, domestic reference price, factory cost, EXW small-order price, EXW standard price, EXW distributor price, export priority, and risk notes there.
- `customer-exw-catalog.csv` is the customer-facing export/send version. It should be synchronized from the internal master table, not maintained independently.
- Do not manually maintain both CSV files at the same time; this creates pricing drift and duplicate work.
- `Catalog ID` is the shared stable matching key between the two CSV files. Keep it unchanged once assigned.
- The customer catalog must not include internal fields such as Factory Cost RMB, Domestic Reference Price RMB, Distributor Price, pricing formulas, Risk Note, or other internal review notes.
- Customer-facing `EXW Price USD` should come from internal `EXW Standard Price USD` after manual price approval.
- Distributor prices should be quoted separately only when the customer is clearly a long-term or bulk cooperation partner. They should not appear in the general customer catalog.

## Product Code / SKU System

The public website and customer-facing documents use `Product Code` in English and `产品编号` in Chinese. The term `SKU` may be used internally, but it should not be used as the customer-facing label.

Product Code is required because capacity alone can be ambiguous. For example, `500mL` may refer to a PC tissue culture bottle, a PP tissue culture container, a PP culture box, or another product type. A stable Product Code helps avoid confusion during inquiry, sample confirmation, quotation, order confirmation, and shipment.

Product Code is different from `Catalog ID`:

- `Catalog ID` is the internal catalog and CSV matching key.
- `Product Code` is the customer-facing specification identifier shown on the website and used in customer communication.
- Both fields should remain stable after assignment.
- `Product Code` should appear immediately after `Catalog ID` in EXW catalog files.

Product Code naming rules prioritize dimensions over capacity:

- PC tissue culture bottles: `PC-BTL-` + height + bottom diameter.
- PC culture tubes: `PC-TUB-` + height + diameter.
- PC wide-mouth culture cups: `PC-CUP-` + height + opening diameter + bottom diameter, with `-V` for vented lid and `-S` for solid lid where needed.
- PP tissue culture containers: `PP-CON-` + height + opening diameter + bottom diameter.
- PP culture boxes: `PP-BOX-` + top dimension + bottom dimension + height, with `-M02` or `-M03` for 2cm or 3cm membrane diameter.
- Heat-seal tissue culture bags: `PP-BAG-HS-` + dimensions.
- Self-seal stand-up tissue culture bags: `PP-BAG-ZIP-` + dimensions.
- Culture lids: `CAP-` + matching cap diameter/model number.
- Sealing films: `FILM-` + film size + vent hole diameter.
- Tissue culture baskets: `BASKET-` + dimensions, with `-A` and `-B` for same-size grid variants.

In quotations, sample confirmation, customer emails, and order communication, Product Code should be used before capacity whenever possible. If a customer only says `500mL`, sales staff should guide the customer to confirm the exact Product Code.

## Output Files

- `customer-exw-catalog.csv`: customer-facing EXW catalog framework.
- `internal-exw-pricing.csv`: internal EXW pricing maintenance framework.
