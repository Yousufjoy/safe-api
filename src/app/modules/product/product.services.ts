import { TProductDocument } from "../product.interface";
import ProductModel from "../product.model";

const createProductIntoDB = async (product: TProductDocument) => {
  const result = await ProductModel.create(product);
  return result; // Returning because i'll call it from controlller
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
 
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
};
