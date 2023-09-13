interface Product {
  id: string;
  brand?: string
  name: string;
  price: number;
  description: string; 
}

export const tempProducts: Product[] = [
  {
    id: "1",
    name: "Product A",
    price: 29.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];