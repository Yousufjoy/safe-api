
import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router(); // It's an object because we can get .post, .get etc

router.post("/create-product", ProductController.createProduct);

router.get("/get-products", ProductController.getAllProducts);

router.get("/:productId", ProductController.getSingleProduct);

export const ProductRoutes = router;

