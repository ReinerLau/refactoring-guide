import { expect, it } from "vitest";
import { priceOrder, Product, ShippingMethod } from ".";

it("拆分阶段", () => {
  const product: Product = {
    basePrice: 1,
    discountThreshold: 1,
    discountRate: 1,
  };
  const quantity = 1;
  const shippingMethod: ShippingMethod = {
    discountThreshold: 1,
    discountedFee: 1,
    feePerCase: 1,
  };

  const price = priceOrder(product, quantity, shippingMethod);

  expect(price).toBe(2);
});
