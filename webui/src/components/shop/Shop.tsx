import { useEffect, useState } from 'react'
import axios from "axios"
import ShopItem from "./ShopItem"

export interface Product {
  _id: number;
  sku: string;
  brand: string;
  name: string;
  price: number;
  description: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_SERVER_API}/products`;
    console.log(apiUrl)
    const headers = {
      'Content-Type': 'application/json',
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        // Handle the successful response
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1280px] mx-auto" >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {products.map((product: Product) => {
            // console.log(product)
            return (
            <ShopItem 
              key={product._id}
              item={product}
            />
            )
          })}
        </>
      )}
    </div>
  )
}

export default Shop