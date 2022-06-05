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
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
