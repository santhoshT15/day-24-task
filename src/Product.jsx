import React from 'react'

function Product({list,count,toggleCartItem}) {

    

   
  return (<div>
            <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            
                            {list.map((product) =>{
                                return(
                                    <div className="col mb-5">
                                <div className="card h-100">
                                    
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                        
                                            <h5 className="fw-bolder">{product.name}</h5>
                                            <span className="rating">{product.rating}</span>
                                            <p className="price">{product.price}</p>
                                        </div>
                                    </div>
                                
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        {/* {product.value ? (
                                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={addCart(product.id)}>Add to Cart</a></div>
                                                ):(
                                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={removeCart(product.id)}>Remove from Cart</a></div>
                                                    )} */}
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={toggleCartItem(product.id)}>
                                            {product.value ? 'Add to Cart' : 'Remove from Cart'}
                                            </a></div>            
                                    </div>
                                </div>
                                </div>
                                )
                                
                            
                            })

                            }
                            
                        </div>
                    </div>
                </section>    
    </div>
  )
}

export default Product