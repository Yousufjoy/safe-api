import { TProductDocument } from "../product.interface";
import ProductModel from "../product.model";

const createProductIntoDB = async (product: TProductDocument) => {
  const result = await ProductModel.create(product);
  return result; // Returning because i'll call it from controlller
};

export const ProductServices = {
  createProductIntoDB,
};
