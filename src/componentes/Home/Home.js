import React from 'react'
import "./Home.js"
import Banner from '../Banner/Banner'
import Eat from '../Eat/Eat.js'

import WhyEggy from '../WhyEggy/WhyEggy.js'
import Items from '../Items/Items.js'
import Restaurants from '../Restaurants/Restaurants.js'
import Partnership from '../Partnership/Partnership.js'



function Home() {
    return (
        <div>
            <Banner></Banner>
            <Eat></Eat>
            <WhyEggy></WhyEggy>
            <Items></Items>
            <Partnership></Partnership>
            <Restaurants></Restaurants>

        </div>
    )
}

export default Home
