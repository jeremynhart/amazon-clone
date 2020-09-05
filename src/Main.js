import React from 'react'
import './Main.css'
import Product from './Product'

function Main() {
    return (
        <div className="main">
            <img 
                className='main_image'
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZWQ5MDE4Nzgt/ZWQ5MDE4Nzgt-NjllYTY3M2Ut-w1500._CB410092205_.jpg" alt=""/>
            <div className="main__row1">
                <Product
                id="12345678"
                title="APPLE - IPAD: Innovation Creates Success"
                price={299.95}
                rating={5}
                image="https://m.media-amazon.com/images/I/61NhHYq8AnL._AC_UY218_.jpg"
            />
                <Product
                id="12345678"
                title="The Lean Startup: Innovation Creates Success"
                price={11.95}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            </div>
            <div className="main__row1">
                <Product
                id="12345678"
                title="The Lean Startup: Innovation Creates Success"
                price={11.95}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                id="12345678"
                title="The Lean Startup: Innovation Creates Success"
                price={11.95}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                id="12345678"
                title="The Lean Startup: Innovation Creates Success"
                price={11.95}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="main__row1">
                <Product
                id="12345678"
                title="The Lean Startup: Innovation Creates Success"
                price={11.95}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            </div>
        </div>
    )
}

export default Main
