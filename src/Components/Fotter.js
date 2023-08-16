import React from "react";
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import '../Style/FooterStyle.css'


const Footer = () => {
    return (
        <>
            <div className="fluid-container  text-center mt-5 bg-light">
                <div className="dummy"></div>
                <div class="row" style={{ justifyContent: 'space-evenly' }}>
                    <div class="col-ms-2">
                        <h2>Code Buddy.</h2>
                        <p>© 2023 lezada</p>
                        <p>all right reserve</p>
                    </div>
                    <div class="col-ms-2 sections" >
                        <h5 className="fotterheading">REGARDING US</h5>
                        <ul className="liststyle">
                            <li><a href="#" className="footerites">about Us</a></li>
                            <li><a href="#" className="footerites">Store location</a></li>
                            <li><a href="#" className="footerites">Contact</a></li>
                            <li><a href="#" className="footerites">Oreder tracking</a></li>
                        </ul>
                    </div>
                    <div class="col-ms-2 sections" >
                        <h5 className="fotterheading">USEFULL LINKS</h5>
                        <ul className="liststyle">
                            <li><a href="#" className="footerites">Return</a></li>
                            <li><a href="#" className="footerites">Support Policy</a></li>
                            <li><a href="#" className="footerites">Size guide</a></li>
                            <li><a href="#" className="footerites">FAQ's</a></li>
                        </ul>
                    </div>
                    <div class="col-ms-2 sections">
                        <h5 className="fotterheading">FOLLOW ON US</h5>
                        <ul className="liststyle">

                            <li><a href="#" className="footerites"><AiOutlineTwitter /> Twitter</a></li>
                            <li><a href="#" className="footerites"><AiFillFacebook /> Faceboook</a></li>
                            <li><a href="#" className="footerites"><AiOutlineInstagram /> Instagram</a></li>
                            <li><a href="#" className="footerites"><AiFillYoutube /> You Tube</a></li>
                        </ul>
                    </div>
                    <div class="col-ms-3 mb-5">
                        <h4>SUBSCRIBE</h4>
                        <p>Subscribe to our newsletter to receive news on update.</p>
                        <input placeholder="your email adress" /><a href="#"><GrFormNextLink size='25px'/></a>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer;