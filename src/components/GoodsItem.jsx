function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    granted,
    addToCart = Function.prototype,
  } = props;
  const [data] = granted;
  const finalPrice = price.finalPrice;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={data.images.full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToCart({ mainId, displayName, finalPrice })}
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {finalPrice} EU
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
