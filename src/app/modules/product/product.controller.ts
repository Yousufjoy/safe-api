import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import productSchema from "../product.validation.zod";

// Create a Single Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;
    const zodParsedData = productSchema.parse(product);
    // will call service func to send this data
    const result = await ProductServices.createProductIntoDB(zodParsedData);
    // send response
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get All Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    // send response
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get a single data

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);
    // send response
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Updae product

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    const updatedProduct = req.body;
    const result = await ProductServices.updateProductInDB(
      productId,
      updatedProduct
    );
    // send response
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Product

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deletProductFromDB(productId);
    
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: err,
    });
  }
};
export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
