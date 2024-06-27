import { TOrder } from "../order.interface";
import orderModel from "../order.model";

const createOrderIntoDB = async (order: TOrder) => {
  const result = await orderModel.create(order);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await orderModel.find();
  return result;
};

const getEmailOrderFromDB = async (email: string) => {
  const query = email ? { email } : {};
  const result = await orderModel.find(query);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getEmailOrderFromDB
};
