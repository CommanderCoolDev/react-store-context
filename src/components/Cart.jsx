function Cart(props) {
  const { qua = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="cart white-text teal accent-4" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {qua ? <span className="cartQua">{qua}</span> : null}
    </div>
  );
}
export { Cart };
