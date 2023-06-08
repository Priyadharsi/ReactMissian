import React from 'react'
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Category from '../Category/Category'


const Routing = () => {
  return (
    <div>
        <BrowserRouter>
         <Routes>
         <Route path="/" element={<Category />}/>
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing