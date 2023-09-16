import Shoes from '@assets/stock-shoes.jpg'
import { Button } from '@components/ui'
import { Link } from 'react-router-dom'
import { Product } from './Shop';

interface ItemProps {
  item: Product;
}

const ShopItem = ({item}: ItemProps) => {
  return (
    <div className='bg-white shadow-sm hover:scale-[1.01] duration-200'>
      <Link to="/shop">
        <img src={Shoes} alt="shoes" />
      </Link>
      <div className='py-8 px-4'>
        <Link className="hover:text-blue-500" to="/">
          <p className='font-bold'>{item.brand}</p>
          <h3>{item.name}</h3>
        </Link>
        <p className='font-bold text-xl'>${item.price}</p>
        <Button
          className='mt-8'
          label="Add to Cart"
        />
      </div>
    </div>
  )
}

export default ShopItem