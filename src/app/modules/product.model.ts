import mongoose, { Schema, model } from "mongoose";
import { TProductDocument, TInventory, TVariant } from "./product.interface";

// 2. Create a Schema corresponding to the document interface.

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProductDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});


// 3. Create model

const ProductModel = mongoose.model<TProductDocument>("Product", productSchema);

export default ProductModel;
