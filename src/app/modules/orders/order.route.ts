import express, { Request, Response } from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// router.post("/create-product", ProductController.createProduct);
router.post('/create-order', OrderController.createOrder);
router.get('/get-orders', OrderController.getAllOrders);
router.get('/search', OrderController.getAllOrders);

// Middleware for handling "Not Found" routes
router.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});
export const OrderRoutes = router;
