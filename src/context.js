import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};
export const ShopContext = createContext();
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };
  value.removeFromCart = itemId => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: 'BASKET_SHOW' });
  };
  value.addToCart = item => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };
  value.increment = itemId => {
    dispatch({ type: 'INCREMENT', payload: { id: itemId } });
  };
  value.decrement = itemId => {
    dispatch({ type: 'DECREMENT', payload: { id: itemId } });
  };
  value.setGoods = data => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
