import React from "react";
import Mid from "../Style/Mid.css"
import { AiTwotoneCalendar } from "react-icons/ai";

const data = [

    {
        id: '2',
        title: 'Perfect Perfume & Cologne',
        date: '1 jun 2023',
        Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        src: 'https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-8-370x200.png'

    },
    {
        id: '3',
        title: 'Perfect Perfume & Cologne',
        date: '1 jun 2023',
        Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        src: 'https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-1-370x200.png'

    },
]

const data2 = [
    {
        id: '1',
        title: 'FREE SHIPPING',
        txt: 'On all orders over $75.00',

    },
    {
        id: '2',
        title: 'FREE RETURNS',
        txt: '30 days money back guarantee',

    },
    {
        id: '3',
        title: 'SECURE PAYMENT',
        src: 'https://lezada.jamstacktemplates.dev/assets/images/icon/pay.png'
    }
]


const Midsec = () => {
    return (
        <>
            <div className="container">
                <div className="row" style={{ justifyContent: 'space-between' }}>
                    <div className="col-sm-4 mt-5">
                        <h1>FROM OUR BLOG</h1>
                        <span style={{fontSize:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</span><br></br>
                        <button type="button" class="btn btn-dark mt-3">VIEW ALL</button>
                    </div>
                    {data.map((txt) =>
                        <div className="col-sm-4 mt-5" data-aos="fade-up" >
                            <img src={txt.src} className="img-fluid" />
                            <p className="mt-2" style={{ textAlign: 'left' }}><AiTwotoneCalendar />{txt.date}</p>
                            <h5 className="card-title">{txt.title}</h5>
                            <p className="card-text contxt">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a className='red' href="#">READ MORE </a>
                        </div>
                    )}
                </div>



                <div className="row mt-5" data-aos="fade-up" style={{ justifyContent: 'space-between' }}>
                    {data2.map((txt2) =>
                        <div className="col-md-3">
                            <h5>{txt2.title}</h5>
                            <p>{txt2.txt}</p>
                            <img src={txt2.src} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Midsec;