/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE } from "./redux/actions/action";
import { ADD } from "./redux/actions/action";
import { DECRESE_QUNTY_ONE } from "./redux/actions/action";
export default function Checkout() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartreducer.carts);
  const [price, setPrice] = useState(0);
  const send = (e) => {
    dispatch(ADD(e));
  }
  const deleteItem = (id) => {
    dispatch(REMOVE(id));
  }
  const removeItem = (item) => {
    dispatch(DECRESE_QUNTY_ONE(item));
  }

  const totalPrice = ()=>{
    let countPrice =0;
    getData.map((item)=>{
      countPrice = item.price*item.qnty + countPrice;
    });
    setPrice(countPrice);
  }
  
  useEffect(()=>{
    totalPrice();
  }, [totalPrice])
  console.log(getData);
  return (
    <>
      <h3
        classNameName="text-center mt-2"
        style={{ color: "green", textAlign: "center", margin: "15px" }}
      >
        Checkout
      </h3>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                {
                  getData.map((item) => {
                    return (
                      <>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                              <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                <img src={item.image}
                                  className="w-100" alt='img' style={{ width: '150px', height: '150px' }} />
                                <a href="#!">
                                  <div className="hover-overlay">
                                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                              <h5>{item.title}</h5>
                              <div className="d-flex flex-row">
                                <div className="text-danger mb-1 me-2">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <span>{item.rating.rate}</span>
                              </div>
                              <div className="mt-1 mb-0 text-muted small">
                                <span>100% cotton</span>
                                <span className="text-primary"> • </span>
                                <span>Light weight</span>
                                <span className="text-primary"> • </span>
                                <span>Best finish<br /></span>
                              </div>
                              <div className="mb-2 text-muted small">
                                <span>Unique design</span>
                                <span className="text-primary"> • </span>
                                <span>For men</span>
                                <span className="text-primary"> • </span>
                                <span>Casual<br /></span>
                              </div>
                              <p className="text-truncate mb-4 mb-md-0">
                                {item.description}
                              </p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1"><span>&#8377;</span>{item.price}</h4>
                                <span className="text-danger"><s> <span>&#8377;</span>20.99</s></span>
                              </div>
                              <h6 className="text-success">Free shipping</h6>
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button type="button" className="btn btn-danger" style={{ margin: 2, fontSize: 10 }} onClick={item.qnty <= 1 ? () => deleteItem(item.id) : () => removeItem(item)}>
                                    <i className="fa-solid fa-minus"></i>
                                  </button>
                                </span>
                                <input type="text" className="form-control" value={item.qnty} style={{ borderRadius: 15, textAlign: "center", fontSize: 12, }} readonly />
                                <span className="input-group-btn">
                                  <button type="button" className="btn btn-success" style={{ margin: 2, fontSize: 10 }} onClick={() => send(item)}>
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                </span>
                              </div>
                              <div className="d-flex flex-column mt-1">
                                <button className="btn btn-outline-success btn-sm mt-2" type="button">
                                  <i className="fa-solid fa-heart"></i> Add to Wishlist
                                </button>
                              </div>
                              <div className="d-flex flex-column mt-1">
                                <button className="btn btn-outline-danger btn-sm mt-2" type="button" onClick={() => deleteItem(item.id)}>
                                  <i className="fas fa-trash"></i> Delete
                                </button>
                                <hr />
                                <span className="text-danger" style={{textAlign:"right", fontWeight:"500",fontSize:"13px"}}> <span>&#8377;</span>: {item.price * item.qnty}</span>
                              </div>
                            </div>
                            <hr className="mt-2" style={{border:"1px solid black"}}/>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
                
                <div>
              <p className="mr-1" style={{ textAlign: "right",margin:"0px", paddingRight:"10px" }}><strong>Total </strong><span>&#8377;</span> : {price}</p>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
