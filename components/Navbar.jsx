import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Image from 'next/image';
import logoimg from '../public/favicon-32x32.png'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
           {/* <Image src={logoimg} alt='/' /> */}

      <p className="logo">
        <Link href="/">Mrs 12 Store</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar