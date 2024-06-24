import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router(); // It's an object because we can get .post, .get etc

router.post("/create-product", ProductController.createProduct);

export const ProductRoutes = router;
