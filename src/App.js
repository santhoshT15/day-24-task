import React from "react";
import ProductList from "./ProductList";
import Product from "./Product";


function App() {
  return (
    <div className="App">
      <ProductList />

      <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Santhosh Website 2023</p></div>
        </footer>
    </div>
  );
}

export default App;
