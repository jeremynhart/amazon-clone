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
                id="00012798"
                title="APPLE: IPAD 128 GB - White"
                price={299.95}
                rating={5}
                image="https://m.media-amazon.com/images/I/61NhHYq8AnL._AC_UY218_.jpg"
            />
                <Product
                id="00013695"
                title="KUPPET: 3 in 1 Stand Mixer - Green"
                price={129.95}
                rating={5}
                image="https://m.media-amazon.com/images/I/61KMt5q8VlL._AC_UY218_.jpg"
            />
            </div>
            <div className="main__row1">
                <Product
                id="00018923"
                title="OZS: 1080P Webcam with Microphone - Black"
                price={35.95}
                rating={5}
                image="https://m.media-amazon.com/images/I/61Wp+QwG8eL._AC_UY218_.jpg"
                />
                <Product
                id="00015674"
                title="LILLIPUT: A5 5” Camera-Top Broadcast Monitor 4K HDMI"
                price={119.95}
                rating={5}
                image="https://m.media-amazon.com/images/I/51lwKgfXhcL._AC_UY218_.jpg"
                />
                <Product
                id="00014448"
                title="CHEFTRONIC: SM985 Standing Mixer - Silver"
                price={89.95}
                rating={5}
                image="https://m.media-amazon.com/images/I/51iEegxCLcL._AC_UY218_.jpg"
                />
            </div>
            <div className="main__row1">
                <Product
                id="00012457"
                title="SONY: XBR-65X900F 65 Inch LED 4K Ultra HDR Smart-TV"
                price={995.95}
                rating={4}
                image="https://m.media-amazon.com/images/I/71uqLWUl2GL._AC_UY218_.jpg"
            />
            </div>
        </div>
    )
}

export default Main
