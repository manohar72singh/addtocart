import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import Cards from './Cards';
import Home  from './Home';
import CardDetails from './CardDetails';
import Checkout from './Checkout';
import ShowSingleProduct from './ShowSingleProduct';
export default function NavRouter() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<Cards/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cart/:id' element={<CardDetails/>}/>
            <Route path='/showproduct/:id' element={<ShowSingleProduct/>}/>
            <Route path='/checkout' element={<Checkout />}/>
        </Routes>
    </>
  )
}
