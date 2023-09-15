import { useState } from 'react'
import Shoes from '@assets/stock-shoes.jpg'
import { BsChevronLeft, BsChevronRight, BsTrash3 } from 'react-icons/bs'

interface ItemInfoProps {
  id: string;
  brand?: string;
  name: string;
  price: number;
  description?: string;
}

interface CartItemProps {
  info: ItemInfoProps;
  onClick: () => void;
}


const CartItem = (props: CartItemProps) => {
  const [qty, setQty] = useState(1)

  const handleQtyChange = (value: string) => {
    if (value === 'reduce') {
      if (qty === 1) return;
      setQty(qty - 1)
    } else if (value === 'increase') {
      setQty(qty + 1)
    }
  }

  console.log(props)
  return (
    <div className='grid md:grid-cols-4 border-b-2 border-gray-400 py-8'>
            <div className='flex justify-center'>
              <img className='w-[150px]' src={Shoes} alt="shoes" />
            </div>
            <div className='md:col-span-2'>
              <p>{props.info.brand}</p>
              <h3 className='text-xl'>{props.info.name}</h3>
              <p>{`$${(props.info.price * qty).toFixed(2)}`}</p>
              <p className='mt-4'>{props.info.description}</p>
            </div>
            <div className='flex justify-center items-center gap-8'>
              <button className="w-[50px] h-[50px] flex justify-center items-center" type="button" onClick={() => handleQtyChange('reduce')}><BsChevronLeft size={20} /></button>
              <p className='align-center'>{qty}</p>
              <button className="w-[50px] h-[50px] flex justify-center items-center" type="button" onClick={() => handleQtyChange('increase')}><BsChevronRight size={20} /></button>
              <button className="w-[50px] h-[50px] flex justify-center items-center" type="button"><BsTrash3 size={20} /></button>
            </div>
          </div>
  )
}

export default CartItem