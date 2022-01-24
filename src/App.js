import Layout from "./components/layout";

import SelectProduct from "./pages/selectProduct";
import DeliveryDetails from "./pages/deliveryDetails";
import PaymentInfo from "./pages/payment";

import { OrderDetailsProvider, OrderDetails } from "./context/index";

function App() {
  const { orderPhase } = OrderDetails;

  let Component = SelectProduct; // default to order page

  switch (orderPhase) {
    case "select-product":
      Component = SelectProduct;
      break;
    case "delivery-details":
      Component = DeliveryDetails;
      break;
    case "payment-info":
      Component = PaymentInfo;
      break;
    default:
  }

  return (
    <OrderDetailsProvider>
      <Layout>{<Component />}</Layout>
    </OrderDetailsProvider>
  );
}

export default App;
