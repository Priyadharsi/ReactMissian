import React from 'react'
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Apps from '../Apps/Apps';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import './Main.css';
import Order from '../Order/Order';
import Insta from '../Insta/Insta';

const Main = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Apps />
        <Products />
        <Order />
        <Insta />
        <Footer />
    </div>
  )
}

export default Main