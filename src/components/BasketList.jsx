import { BasketItem } from './BasketItem';

function BasketList(prop) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromCart = Function.prototype,
    increment = Function.prototype,
    decrement = Function.prototype,
  } = prop;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.qua;
  }, 0);

  return (
    <ul className="collection basket-list ">
      <li className="collection-item active">Cart</li>
      {order.length ? (
        order.map(item => (
          <BasketItem
            key={item.mainId}
            removeFromCart={removeFromCart}
            increment={increment}
            decrement={decrement}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item ">Cart is empty</li>
      )}
      <li className="collection-item active">Total Price: {totalPrice} EU</li>
      <li className="collection-item active">
        <button className=" btn-small">BUY!</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
export { BasketList };
