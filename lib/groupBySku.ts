import { Product } from "@/typings/productTypings";

export function groupBySku(products: Product[]): Record<string, Product[]> {
  return products?.reduce((acc: Record<string, Product[]>, curr: Product) => {
    const sku = curr?.meta?.sku;
    if (!acc?.[sku]) {
      acc[sku] = [];
    }
    acc[sku].push(curr);
    return acc;
  }, {});
}
