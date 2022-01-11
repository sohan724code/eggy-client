import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="main">
            <div className="banner">
                <div className="banner-card">
                    <h1 className="text-warning">HUNGRY?</h1>
                    <h4>If you are hungry..Click and Order</h4>
                    <p>If more of us valued food and cheer and song above hoarded gold, it would be a merrier world</p>
                    <a href="#" className="bg-warning">Order Now</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
