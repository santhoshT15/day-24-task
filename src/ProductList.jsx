import React, { useState } from 'react'
import Product from './Product';

function ProductList() {

   

    let list =[
        {
            id: 0,
            name: "Fanncy Products",
            price:"$40.00 - $80.00",
            value:true,
        },
        {
            id: 1,
            name: "Special Item",
            rating:"⭐⭐⭐⭐⭐",
            price:"$20.00",
            value:true,
        },
        {
            id: 2,
            name: "Sale Item",
            price:"$50.00",
            value:true,
        },
        {
            id: 3,
            name: "Popular Item",
            rating:"⭐⭐⭐⭐⭐",
            price:"$40.00",
            value:true,
        },
        {
            id: 4,
            name: "Sale Item",
            price:"$50.00",
            value:true,
            
        },
        {
            id: 5,
            name: "Fancy Products",
            price:"$120.00 - $280.00",
            value:true,

        },
        {
            id: 6,
            name: "Special Item",
            rating:"⭐⭐⭐⭐⭐",
            price:"$20.00",
            value:true,

        },
        {
            id: 7,
            name: "Popular Item",
            rating:"⭐⭐⭐⭐⭐",
            price:"$40.00",
            value:true,

        },
    ];

   
    const [cartItem, setCartItem] = useState(list)
    const [cartItemCount, setCartItemCount] = useState(0);


    const toggleCartItem = (itemId) => {
        setCartItem((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId ? { ...item, value: !item.value } : item
           
          )
        );
        setCartItemCount((prevCount) => prevCount + 1);
      };

      

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <a href="" className="navbar-brand">Start Bootstarp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown show">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#!">All Products</a>
                                <hr className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">Popular Items</a>
                                <a className="dropdown-item" href="#!">New Arrivals</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItemCount}</span>
                        </button>
                    </form>
                </div>
            
            
            
        </nav>


        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>


        <div className="items">
            <Product list={cartItem} ccount={cartItemCount} toggleCartItem={toggleCartItem} />    
        </div>
    </div>
  )
}



export default ProductList