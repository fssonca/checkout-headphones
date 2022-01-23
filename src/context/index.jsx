import { createContext, useContext, useState, useMemo } from "react";

const INITIAL_STATE = {
  orderPhase: "select-product",
  product: "black",
};

const OrderDetails = createContext(INITIAL_STATE);

// create custom hook to check whether we're inside a provider
export function useOrderDetails() {
  try {
    const context = useContext(OrderDetails);

    return context;
  } catch (e) {
    console.error(e);
  }
}

export function OrderDetailsProvider(props) {
  const [product, setProduct] = useState("black");
  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  //   const value = useMemo(() => {}, []);

  return <OrderDetails.Provider value={useOrderDetails()} {...props} />;
}
