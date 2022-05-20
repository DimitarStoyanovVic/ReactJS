import Button from "../button/button.component";

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styless.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-item'>
        {[].map(item => <CartItem cartItem={item} />)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;