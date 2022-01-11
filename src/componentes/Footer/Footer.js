import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer ">




                <div>
                    <h3 className="text-warning fs-5" >Contact</h3>
                    <h5 className="fs-6">Phone</h5>
                    <p className="fs-6">018430518xx</p>
                    <h5 className="fs-6">Email</h5>
                    <p className="fs-6">eggy-delivery@gmail.com</p>
                    <h5 className="fs-6">Address</h5>
                    <p className="fs-6">Dhaka-1361,Bangladesh</p>
                </div>

                <div className="explore ">
                    <h3 className="text-warning fs-5">Explore</h3>
                    <Link to='/Services' className="p-3 text-light footer-link" >items</Link>
                    <br />

                    <Link to='/doctors' className="p-3 text-light footer-link">Popular-Restaurant</Link>
                    <br />
                    <Link to='/appointment' className="p-3 text-light footer-link">Order Now</Link>



                </div>

                <div>

                    <h3 className="text-warning fs-5">Support</h3>
                    <h5 className="fs-6 px-5">Free Delivery Service In Dhaka</h5>
                    <h5 className="fs-6">Day/Night Delivery</h5>

                </div>

            </div>
            <div className="copywrite py-3">
                <small className="text-light">Copyright &copy; 2021 eggy.com</small>
            </div>

        </div>
    );
};

export default Footer;