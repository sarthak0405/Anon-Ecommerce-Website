import React from 'react'
import b1 from "../images/banner-1.jpg"
import b2 from "../images/banner-2.jpg"
import b3 from "../images/banner-3.jpg"
import Categories from './categories'
import Navbar from './navbar'
import Footer from './footer'

const Hero = () => {
    return (
        <>
            <Navbar />

            {/* BANNER */}

            <div class="banner">

                <div class="container">

                    <div class="slider-container has-scrollbar">

                        <div class="slider-item">

                            <img src={b1} alt="women's latest fashion sale" class="banner-img" />

                            <div class="banner-content">

                                <p class="banner-subtitle">Trending item</p>

                                <h2 class="banner-title">Women's latest fashion sale</h2>

                                <p class="banner-text">
                                    starting at &dollar; <b>20</b>.00
                                </p>

                                <a href="/" class="banner-btn">Shop now</a>

                            </div>

                        </div>

                        <div class="slider-item">

                            <img src={b2} alt="modern sunglasses" class="banner-img" />

                            <div class="banner-content">

                                <p class="banner-subtitle">Trending accessories</p>

                                <h2 class="banner-title">Modern sunglasses</h2>

                                <p class="banner-text">
                                    starting at &dollar; <b>15</b>.00
                                </p>

                                <a href="/" class="banner-btn">Shop now</a>

                            </div>

                        </div>

                        <div class="slider-item">

                            <img src={b3} alt="new fashion summer sale" class="banner-img" />

                            <div class="banner-content">

                                <p class="banner-subtitle">Sale Offer</p>

                                <h2 class="banner-title">New fashion summer sale</h2>

                                <p class="banner-text">
                                    starting at &dollar; <b>29</b>.99
                                </p>

                                <a href="/" class="banner-btn">Shop now</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Categories />

            <Footer />



        </>
    )
}

export default Hero