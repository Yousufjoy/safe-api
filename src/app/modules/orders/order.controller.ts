import { Request, Response } from "express";
import { OrderServices } from "./order..services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const result = await OrderServices.createOrderIntoDB(order);
    // send response
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: "Order Retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserEmailOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await OrderServices.getEmailOrderFromDB(email);
    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getUserEmailOrder,
};
