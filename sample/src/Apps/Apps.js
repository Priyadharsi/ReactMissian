import React from 'react'
import kosi_banner1 from '../image/kosi_banner1.webp';
import kosi_banner2 from '../image/kosi_banner2.webp';
import './Apps.css'
import Grid  from "@mui/material/Grid"

const App = () => {
  return (
    <div className='app-section'>
        <div className='container'>
            <div className='row'> 
                <div className='col-lg-5 col-12 col-sm-5 app'>
                    <div className='app-box'>
                        <img src={kosi_banner1} alt='picture'></img>
                    </div>
                    <div className='app-content'>
                        <h3>Chairs</h3>
                        <button class="app-btn"><a href="#">View All</a></button>
                    </div>
                 </div> 
                <div className='col-lg-5 col-12 col-sm-5 app'>
                    <div className='app-img'>
                        <img src={kosi_banner2} alt="picture"></img>

                    </div>
                    <div className='app-content'>
                        <h3>Lighting</h3>
                        <button className='app-btn'><a href="#">View All</a></button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default App