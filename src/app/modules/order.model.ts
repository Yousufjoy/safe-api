import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

// 2. Create a Schema corresponding to the document interface.
const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  iStock: { type: Number },
});

// 3. Create model
const orderModel = model<TOrder>("Order", orderSchema);

export default orderModel;
