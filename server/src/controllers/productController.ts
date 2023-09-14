// controllers/productController.ts

import { Request, Response } from 'express';
import Product, { IProduct } from '../models/product';

// Controller functions for products
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  const productId: string = req.params.id;
  try {
    const product: IProduct | null = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const postProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const newProduct: IProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const putProduct = async (req: Request, res: Response): Promise<void> => {
  const productId: string = req.params.id;
  try {
    const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const productId: string = req.params.id;
  try {
    const deletedProduct: IProduct | null = await Product.findByIdAndRemove(productId);
    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

