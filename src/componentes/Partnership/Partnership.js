import React from 'react';
import "./Partnarship.css"

const Partnership = () => {
    return (
        <div className="my-5 py-5 bg-dark">
            <h1 className="text-warning">Want to Join Partnership?</h1>
            <p className="text-light">Want to join with us send your information</p>


            <div className="d-flex justify-content-center">
                <div class="row row-cols-1 row-cols-md-2 g-4 w-50">
                    <div class="col  ">
                        <div className="border py-4 rounded bg-warning" >
                            <img src="https://demo.moxcreative.com/defood/wp-content/uploads/sites/24/elementor/thumbs/Delivery-Service_10-Courier-1-p5uclu43ynv76e8z7ibrdcacr44ua3nkmfwl0gexa8.png" alt="" />
                            <h3>Become A Courier</h3>
                            <p>Become a courier join with us!</p>
                            <button className=" px-3 py-2 rounded fw-bold">Earn Money</button>
                        </div>
                    </div>
                    <div class="col  ">
                        <div className="border py-4 rounded  bg-light">
                            <img src="https://demo.moxcreative.com/defood/wp-content/uploads/sites/24/elementor/thumbs/Delivery-Service_11-Chef-e1619053801647-p62hd4jvnlcymjcc5oaz6adizrbdb4wlb30kk3pcsg.png" alt="" />
                            <h3>Become A Courier</h3>
                            <p>Become a courier join with us!</p>
                            <button className=" px-3 py-2 rounded bg-warning fw-bold">Earn Money</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Partnership;