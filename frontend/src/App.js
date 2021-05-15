import React from "react";
import data from "./data";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <div className="row center">
            {data.products.map((product) => {
              return <Product key={product._id} product={product}></Product>;
            })}
          </div>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </div>
  );
}

export default App;
