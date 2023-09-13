import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

interface Product {
  id: number;
  sku: string;
  brand: string;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    sku: 'SKU001',
    brand: 'Brand A',
    name: 'Product A',
    price: 29.99,
    description: 'Description for Product A',
  },
  {
    id: 2,
    sku: 'SKU002',
    brand: 'Brand B',
    name: 'Product B',
    price: 19.99,
    description: 'Description for Product B',
  },
  {
    id: 3,
    sku: 'SKU003',
    brand: 'Brand C',
    name: 'Product C',
    price: 39.99,
    description: 'Description for Product C',
  },
];

// Get all products
router.get('/', (req: Request, res: Response) => {
  res.json(products);
});

// Get a single product by ID
router.get('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

// Create a new product
router.post('/', (req: Request, res: Response) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update a product by ID
router.put('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const updatedProduct = req.body;
  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  }
});

// Delete a product by ID
router.delete('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    const deletedProduct = products.splice(index, 1);
    res.json(deletedProduct[0]);
  }
});

export default router;