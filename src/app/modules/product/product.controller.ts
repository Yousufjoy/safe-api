import { Request, Response } from "express";
import { ProductServices } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;

    // will call service func to send this data

    const result = await ProductServices.createProductIntoDB(product);
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

export const ProductController = {
  createProduct,
};
