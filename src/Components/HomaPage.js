import React from "react";
import '../Style/HomepageStyle.css'

const Image = [
    {
        id: '1',
        cat: 'Android',
        src: "https://i.dummyjson.com/data/products/5/2.jpg"
    },
    {
        id: '2',
        cat: 'IOS',
        src: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    },
    {
        id: '3',
        cat: 'Laptop',
        src: "https://i.dummyjson.com/data/products/8/2.jpg"
    }
]

const HomePage = () => {
    return (
        <>
            <div className="fluid-container bg-light ">
                <div className="row d-flex align-items-center justify-content-center">
                <div className="col-sm-5 align-items-center justify-content-center" data-aos="fade-up" style={{marginTop:'170px'}}>
                    <p className="imgtxt"><b>MEN'S & WOMEN'S COLLRCTION</b></p>
                    <h4 className="headingsize">Felling Relax's day,</h4>
                    <h4 className="headingsize1">Enjoy Weekend</h4>
                    <div className="mt-3">
                        <button className="btn btn-dark btnstyle" type="button">
                            SHOP NOW</button>
                    </div>

                </div>
                <div className="col-md-5" data-aos="fade-left">
                    <img
                        src="https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-two/3.png"
                        className="imgStyle"
                    />
                </div>
                </div>
                <div className="container mt-5">
                    <div className="row mt-5" data-aos="fade-up" style={{ justifyContent: 'space-around' }}>
                        {Image.map((img) =>
                            <div class="col-sm-3 zoom mt-5">
                                <img className="img-fluid" src={img.src} />
                                <div>
                                    <h4 className="mt-3" style={{ textAlign: 'left' }}>{img.cat}</h4>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >

        </>


    )
}

export default HomePage;