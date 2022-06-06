import { useContext } from 'react';
import { ShopContext } from '../context';
function Cart() {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const qua = order.length;
  return (
    <div className="cart white-text teal accent-4" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {qua ? <span className="cartQua">{qua}</span> : null}
    </div>
  );
}
export { Cart };
