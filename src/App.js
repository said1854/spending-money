import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  return (
    <div>
      <Header money={money} />
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default App;
