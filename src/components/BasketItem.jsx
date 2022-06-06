import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
  const { qua, mainId, displayName, finalPrice } = props;

  const { removeFromCart, increment, decrement } = useContext(ShopContext);

  return (
    <li className="collection-item ">
      {displayName} x
      <i
        className="material-icons basket-qua"
        onClick={() => decrement(mainId)}
      >
        remove
      </i>
      {qua}
      <i
        className="material-icons basket-qua"
        onClick={() => increment(mainId)}
      >
        add
      </i>
      = {finalPrice * qua} EU
      <span
        className="secondary-content"
        onClick={() => removeFromCart(mainId)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}
export { BasketItem };
