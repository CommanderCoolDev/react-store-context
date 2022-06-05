import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [], cb = Function.prototype } = props;
  if (!goods.length) {
    return <h3>Nothing to show</h3>;
  }
  return (
    <div className="goods">
      {goods.map(item => (
        <GoodsItem key={item.mainId} {...item} addToCart={cb} />
      ))}
    </div>
  );
}
export { GoodsList };
