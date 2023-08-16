import { React, useState, useEffect } from 'react';
import '../Style/MainStyle.css'
import { SlHeart } from "react-icons/sl";

const Main = () => {

    const [error, setError] = useState(null);
    const [isload, setIsLoad] = useState(true)
    const [item, setItem] = useState([]);
    const [q, setQ] = useState("")
    const [searchParam] = useState(["capital", "name", "price"]);
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoad(true);
                    setItem(result)
                },
                (error) => {
                    setIsLoad(true);
                    setError(error);
                }
            );

    }, []);

    const data = Object.values(item)


    return (
        <>
            
                <div className='container text-center mt-5' data-aos="fade-up"><h1>Spring summer 2023</h1>
                    <p>Find your style. Fall fashion 20xx</p>
                

                <div className="row mt-5 cart" data-aos="fade-up">
                    {data.slice(0, 12).map((item) =>
                        <div className='col-sm-3 zoom'>
                            <div className="rating"><SlHeart />
                            </div>
                            <div style={{ backgroundColor: 'white' }}>
                                <img className="imgstyle" src={item.image} />
                            </div>
                            <div className='mt-5'><p style={{ marginLeft: '10px' }}>{item.title}</p></div>
                            <p className="price">${item.price}</p>
                        </div>
                    )}

                </div>
                </div>
        </>
    )

}
export default Main;
