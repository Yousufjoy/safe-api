import validator from "validator";
import { z } from "zod";

// Zod schema for variant
const variantSchema = z.object({
  type: z.string().nonempty("Variant type is required"),
  value: z.string().nonempty("Variant value is required"),
});

// Zod schema for inventory
const inventorySchema = z.object({
  quantity: z.number().min(0, "Quantity cannot be negative"),
  inStock: z.boolean(),
});

// Zod schema for product
const productSchema = z.object({
  name: z.string().max(20, "Name cannot be more than 20 characters"),
  description: z
    .string()
    .max(100, "Description cannot be more than 100 characters"),
  price: z.number().min(0, "Price cannot be negative"),
  category: z.string().nonempty("Category is required"),
  tags: z.array(
    z
      .string()
      .refine((tag) => validator.isAlphanumeric(tag.replace(/\s/g, "")), {
        message: "Tags must be alphanumeric",
      })
  ),
  variants: z.array(variantSchema).nonempty("At least one variant is required"),
  inventory: inventorySchema,
});

// Type inference for the product schema
type ProductInput = z.infer<typeof productSchema>;

export default productSchema;
