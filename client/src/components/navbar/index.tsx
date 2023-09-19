import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex w-full h-[80px] justify-center items-center'>
      <ul className="flex gap-8">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/admin'>Admin</Link></li>
      </ul>
    </div>
  )
}

export default Navbar