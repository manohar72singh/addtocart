/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cartData from './Data';
import './style.css'
import { useDispatch } from 'react-redux';
import { ADD } from './redux/actions/action';
import { Link } from 'react-router-dom';
export default function Cards() {
  const [data, setdata] = useState(cartData);
  const dispatch = useDispatch();


  const send = (e) => {
    dispatch(ADD(e));
  }
  return (
    <div className='container mt-3'>
      <h2 className='text-center'> Add to cart</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element, id) => {
            const title = element.title.substring(0, 10);
            const desc = element.description.substring(0, 30) + '...';
            return (
              <>
                <Card style={{ width: '22rem' }} className="mx-2 mt-4 card_style">
                  <Link to={`/showproduct/${element.id}`} >
                    <Card.Img variant="top" src={element.image} style={{ height: "16rem" }} className="mt-3" />
                  </Link>

                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      {desc}
                      <p>price: ₹ {element.price}</p>
                    </Card.Text>
                    <div className='button_div d-flex justify-content-center'>
                      <Button variant="primary"
                        onClick={() => send(element)} className='col-lg-12'> <i class="fa-sharp fa-solid fa-cart-shopping"></i> Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
