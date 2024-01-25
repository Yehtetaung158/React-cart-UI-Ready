import React from "react";
import Header from "./Components/Header";
import CategoryGroup from "./Components/CategoryGroup";
import ProductGroup from "./Components/ProductGroup";
import Footer from "./Components/Footer";
import Spacing from "./Components/Spacing";
import Layot from "./Components/Layot";
import CartDarawer from "./Components/CartDarawer";

const App = () => {
  return (
    <div>
      <Layot>
        <Header />
        <Spacing size={100} />
        <CategoryGroup />
        <ProductGroup />
        <Footer />
        <CartDarawer/>
      </Layot>
    </div>
  );
};

export default App;
