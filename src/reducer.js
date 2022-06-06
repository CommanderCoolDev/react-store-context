export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    case 'INCREMENT':
      return {
        ...state,
        order: state.order.map(el => {
          if (el.mainId === payload.id) {
            const newQua = el.qua + 1;
            return { ...el, qua: newQua };
          } else {
            return el;
          }
        }),
      };

    case 'DECREMENT':
      return {
        ...state,
        order: state.order.map(el => {
          if (el.mainId === payload.id) {
            const newQua = el.qua - 1;
            return { ...el, qua: newQua >= 0 ? newQua : 0 };
          } else {
            return el;
          }
        }),
      };

    case 'ADD_TO_CART': {
      const itemIndex = state.order.findIndex(
        orderItem => orderItem.mainId === payload.mainId,
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = { ...payload, qua: 1 };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              qua: orderItem.qua + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }
    case 'BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: state.order.filter(el => el.mainId !== payload.id),
      };
    default:
      return state;
  }
}
