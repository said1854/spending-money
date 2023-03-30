import { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import products from "./products.json";
import Footer from "./components/Footer";

function App() {
  const [money, setMoney] = useState(128000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      <div className="w-2/3 md:w-1/2 mx-auto">
        <div className="container flex flex-wrap">
          {products.map((product) => (
            <Product
              total={total}
              money={money}
              key={product.id}
              basket={basket}
              setBasket={setBasket}
              product={product}
            />
          ))}
        </div>
        {total > 0 && (
          <Basket
            resetBasket={resetBasket}
            products={products}
            total={total}
            basket={basket}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
