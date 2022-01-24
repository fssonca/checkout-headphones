import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  orderPhase: "select-product",
  productVariant: "black",
};

export const OrderDetails = createContext(INITIAL_STATE);

const mainReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_OPTION":
      return { ...state, productVariant: action.payload };
    case "CHANGE_ORDER_PHASE":
      return { ...state, orderPhase: action.payload };
    default:
      return state;
  }
};

export function OrderDetailsProvider(props) {
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);

  return <OrderDetails.Provider value={{ state, dispatch }} {...props} />;
}
