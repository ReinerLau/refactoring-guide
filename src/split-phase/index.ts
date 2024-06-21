export interface Product {
  basePrice: number;
  discountThreshold: number;
  discountRate: number;
}

export interface ShippingMethod {
  discountThreshold: number;
  discountedFee: number;
  feePerCase: number;
}

export function priceOrder(
  product: Product,
  quantity: number,
  shippingMethod: ShippingMethod
) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const priceData = {
    basePrice,
    quantity,
    discount,
  };
  const price = applyShipping(priceData, shippingMethod);
  return price;
}

function applyShipping(
  priceData: {
    basePrice: number;
    quantity: number;
    discount: number;
  },
  shippingMethod: ShippingMethod
) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price;
}
