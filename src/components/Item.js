import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState('')

  const inCartHandler = () => setInCart(inCart => {
    // debugger
    return inCart ? '' : 'in-cart'
  })

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? 'remove' : 'add'} onClick={inCartHandler}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
