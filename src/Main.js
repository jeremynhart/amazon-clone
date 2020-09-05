import React from 'react'
import './Main.css'
import Product from './Product'

function Main() {
    return (
        <div className="main">
            <img 
            className='main_image'
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        
        <Product
        id="12345678"
        title="The Lean Startup: Innovation Creates Success"
        price={11.95}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        </div>
    )
}

export default Main
