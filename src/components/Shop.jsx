import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertNAme] = useState('');

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };
  const addToCart = item => {
    const itemIndex = order.findIndex(
      orderItem => orderItem.mainId === item.mainId,
    );
    if (itemIndex < 0) {
      const newItem = { ...item, qua: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            qua: orderItem.qua + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertNAme(item.displayName);
  };
  const removeFromCart = itemId => {
    const newOrder = order.filter(el => el.mainId !== itemId);

    setOrder(newOrder);
  };
  const increment = itemId => {
    const newOrder = order.map(el => {
      if (el.mainId === itemId) {
        const newQua = el.qua + 1;
        return { ...el, qua: newQua };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decrement = itemId => {
    const newOrder = order.map(el => {
      if (el.mainId === itemId) {
        const newQua = el.qua - 1;
        return { ...el, qua: newQua >= 0 ? newQua : 0 };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const closeAlert = () => {
    setAlertNAme('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then(response => response.json())
      .then(data => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart qua={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} cb={addToCart} />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromCart={removeFromCart}
          increment={increment}
          decrement={decrement}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}
export { Shop };
