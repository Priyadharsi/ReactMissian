import React, { useState } from 'react'
import './Products.css';




const Products = () => {
  const productdetails=[{image:'https://rubiktheme.com/demo/rb_kosi_demo/37-home_default/the-best-is-yet-to-come-framed-poster.jpg',Design:"Graphic Corner",Furnituretype:"Bobber Small Pendant Light",Price:"RS.12000"},
                        {image:'https://rubiktheme.com/demo/rb_kosi_demo/25-home_default/hummingbird-printed-t-shirt.jpg',Design:"Studio Design",Furnituretype:"Bobber Table Lamp",Price:"RS.14000"},
                        {image:'https://rubiktheme.com/demo/rb_kosi_demo/42-home_default/the-adventure-begins-framed-poster.jpg',Design:"Graphic Corner",Furnituretype:"Cast Scone Wall Lamp",Price:"RS.16000"},
                        {image:'https://rubiktheme.com/demo/rb_kosi_demo/63-home_default/mug-today-is-a-good-day.jpg',Design:"Graphic Corner",Furnituretype:"Franklin Chandelier",Price:"RS.18000"},
                        {image:'https://rubiktheme.com/demo/rb_kosi_demo/52-home_default/mug-the-best-is-yet-to-come.jpg',Design:"Studio Design",Furnituretype:"Afternoon Dining Chair",Price:"RS.17000"},
                        {image:'https://rubiktheme.com/demo/rb_kosi_demo/68-home_default/mountain-fox-cushion.jpg',Design:"Graphic Corner",Furnituretype:"Bollard Lamp",Price:"RS.11000"},
                        {image:'https://rubiktheme.com/demo/rb_kosi_demo/79-home_default/hummingbird-cushion.jpg',Design:"Studio Design",Furnituretype:"Clean Cut Dining Chair",Price:"RS.20000"},
                        {image:'https://rubiktheme.com/demo/rb_kosi_demo/73-home_default/brown-bear-cushion.jpg',Design:"Graphic Corner",Furnituretype:"Circula Coffee Table",Price:"RS.22000"},
                        {image:'https://rubiktheme.com/demo/rb_kosi_demo/106-home_default/mountain-fox-notebook.jpg',Design:"Studio Design",Furnituretype:"Heavy Sound Travel Speaker",Price:"RS.8000"}
]
    // const [name,setName]=useState(productdetails);

    // const newdata=()=>{const newobj=[...name].sort((a,b)=>a.Price-b.Price);setName(newobj)}
  return (
    <div className='furniture-section'>
      <div className='container'>
        <div class="furniture-content">
          <h3>Top Picks For You</h3>
          <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </div>
          {/* <div className='row'>
            <div className='col-lg-3'> */}
             <div className='furnimgs'>
                <div className='row'> 
            {productdetails.map((item,index)=>{
              return(
                // <div className='furnimgs'>
                // <div className='row'>
                 <div className='col-lg-3 col-sm-5'>
                   <div className='images' key={index}>
                    <div className='img-div'>
                      <img src={item.image} alt="picture"></img>
                      <h4 className='furdesign'>{item.Design}</h4>
                      <p className='furtype'>{item.Furnituretype}</p>
                      <p className='furprice'>{item.Price}</p>
                      </div>
                      </div>
                      </div>
                      
        
                      
                                    )
            })}
          </div>
       </div>
      </div>
    </div>
  )
}

export default Products