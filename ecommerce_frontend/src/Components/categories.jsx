import React from 'react'
import dress from "../images/dress.svg"
import coat from "../images/coat.svg"
import glasses from "../images/glasses.svg"
import shorts from "../images/shorts.svg"
import tee from "../images/tee.svg"
import jacket from "../images/jacket.svg"
import watch from "../images/watch.svg"
import hat from "../images/hat.svg"
import Prod1 from './prod1'

const Categories = () => {
    return (
        <>
            {/* CATEGORIES  */}

            <div class="category">

                <div class="container">

                    <div class="category-item-container has-scrollbar">

                        <div class="category-item">

                            <div class="category-img-box">
                                <img src={dress} alt="dress & frock" width="30" />
                            </div>

                            <div class="category-content-box">

                                <div class="category-content-flex">
                                    <h3 class="category-item-title">Dress & frock</h3>

                                    <p class="category-item-amount">(53)</p>
                                </div>

                                <a href="/" class="category-btn">Show all</a>

                            </div>

                        </div>

                        <div class="category-item">

                            <div class="category-img-box">
                                <img src={coat} alt="winter wear" width="30" />
                            </div>

                            <div class="category-content-box">

                                <div class="category-content-flex">
                                    <h3 class="category-item-title">Winter wear</h3>

                                    <p class="category-item-amount">(58)</p>
                                </div>

                                <a href="/" class="category-btn">Show all</a>

                            </div>

                        </div>

                        <div class="category-item">

                            <div class="category-img-box">
                                <img src={glasses} alt="glasses & lens" width="30" />
                            </div>

                            <div class="category-content-box">

                                <div class="category-content-flex">
                                    <h3 class="category-item-title">Glasses & lens</h3>

                                    <p class="category-item-amount">(68)</p>
                                </div>

                                <a href="/" class="category-btn">Show all</a>

                            </div>

                        </div>

                        <div class="category-item">

                            <div class="category-img-box">
                                <img src={shorts} alt="shorts & jeans" width="30" />
                            </div>

                            <div class="category-content-box">

                                <div class="category-content-flex">
                                    <h3 class="category-item-title">Shorts & jeans</h3>

                                    <p class="category-item-amount">(84)</p>
                                </div>

                                <a href="/" class="category-btn">Show all</a>

                            </div>

                        </div>

                        <div class="category-item">

                            <div class="category-img-box">
                                <img src={tee} alt="t-shirts" width="30" />
                            </div>

                            <div class="category-content-box">

                                <div class="category-content-flex">
                                    <h3 class="category-item-title">T-shirts</h3>

                                    <p class="category-item-amount">(35)</p>
                                </div>

                                <a href="/" class="category-btn">Show all</a>

                            </div>

                        </div>

                        <div class="category-item">

                            <div class="category-img-box">
                                <img src={jacket} alt="jacket" width="30" />
                            </div>

                            <div class="category-content-box">

                                <div class="category-content-flex">
                                    <h3 class="category-item-title">Jacket</h3>

                                    <p class="category-item-amount">(16)</p>
                                </div>

                                <a href="/" class="category-btn">Show all</a>

                            </div>

                        </div>

                        <div class="category-item">

                            <div class="category-img-box">
                                <img src={watch} alt="watch" width="30" />
                            </div>

                            <div class="category-content-box">

                                <div class="category-content-flex">
                                    <h3 class="category-item-title">Watch</h3>

                                    <p class="category-item-amount">(27)</p>
                                </div>

                                <a href="/" class="category-btn">Show all</a>

                            </div>

                        </div>

                        <div class="category-item">

                            <div class="category-img-box">
                                <img src={hat} alt="hat & caps" width="30" />
                            </div>

                            <div class="category-content-box">

                                <div class="category-content-flex">
                                    <h3 class="category-item-title">Hat & caps</h3>

                                    <p class="category-item-amount">(39)</p>
                                </div>

                                <a href="/" class="category-btn">Show all</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Prod1 />


        </>
    )
}

export default Categories