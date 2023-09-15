// import { useState } from 'react';
import {Button} from '@components/ui'
import { CartItem, Navbar } from '@components';

interface CartItemProps {
  id: string;
  brand?: string;
  name: string;
  price: number;
  description?: string;
  onClick?: () => void;
}

function Cart() {

  const tempCartList: CartItemProps[] = [
  {
    id: "1",
    brand: "Nike",
    name: "Product A",
    price: 29.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    brand: "Adidas",
    name: "Product B",
    price: 59.99,
    description: "Aute anim nostrud in culpa quis.",
  },
  {
    id: "3",
    brand: "Brooks",
    name: "Product C",
    price: 99.99,
    description: "Consectetur sunt pariatur fugiat quis dolor minim tempor sunt nisi excepteur excepteur aliquip excepteur.",
  },
]
  
  const handleDeleteItem = () => {
    return
  }

  const handleClick = () => {
    alert('click')
  }
  return (
    <>

    <Navbar />
    <div className='grid md:grid-cols-4 bg-gray-300 p-12 min-h-screen'>
      <div className='md:col-span-3 bg-white rounded-md'>
        <h1 className='text-xl md:text-2xl lg:text-3xl p-8'>Shopping Cart</h1>
        <div className='p-8'>

          {tempCartList.map(item => {
            return (
              <CartItem
                info={item}
                onClick={handleDeleteItem}
              />
            )
          })}

        </div>
      </div>
      <div className='border-l px-8'>
        <div className='bg-white flex flex-col justify-between rounded-md p-4'>
          <p>Subtotal ({tempCartList.length} item{tempCartList.length>1 && 's'}): $20.29</p>
          <div>
            <Button 
              className="mt-4 uppercase font-medium" 
              label="Proceeed to Checkout" 
              onClick={handleClick}
              />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart