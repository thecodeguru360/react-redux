import React from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import { store } from "./redux/store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
        <hr />
        <Products />
      </div>
    </Provider>
  );
}

export default App;
