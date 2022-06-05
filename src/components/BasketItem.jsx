import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
  const {
    qua,
    mainId,
    displayName,
    finalPrice,
    removeFromCart = Function.prototype,
    increment = Function.prototype,
    decrement = Function.prototype,
  } = props;

  const { example } = useContext(ShopContext);
  console.log(example);
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
