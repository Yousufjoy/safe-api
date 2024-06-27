import { Schema, model } from 'mongoose';
import { TProductDocument, TInventory, TVariant } from './product.interface';
import validator from 'validator';

// 2. Create a Schema corresponding to the document interface.
const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
    min: [0, 'Quantity cannot be negative'],
  },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProductDocument>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [100, 'Description cannot be more than 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: (tags: string[]) =>
        tags.every((tag) => validator.isAlphanumeric(tag.replace(/\s/g, ''))),
      message: 'Tags must be alphanumeric',
    },
  },
  variants: {
    type: [variantSchema],
    required: [true, 'At least one variant is required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory information is required'],
  },
});

// 3. Create model
const ProductModel = model<TProductDocument>('Product', productSchema);

export default ProductModel;
