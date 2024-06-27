import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/orders/order.route";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/v1/products", ProductRoutes);
app.use("/api/v1/orders", OrderRoutes);



const getAController = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getAController);

export default app;
