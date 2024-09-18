import React from 'react'
// import "./mens.css"

const Mens = () => {
    return (
        <>
            <>
                <div className="container">
                    <h3 className="title"> Men's Wear </h3>
                    <div className="products-container">
                        <div className="product" data-name="p-1">
                            <img src="images/one.jpeg" alt="" />
                            <h3>Formal</h3>
                            <div className="price">Rs.330</div>
                        </div>
                        <div className="product" data-name="p-2">
                            <img src="images/two.jpg" alt="" />
                            <h3>Casual Were</h3>
                            <div className="price">Rs.220</div>
                        </div>
                        <div className="product" data-name="p-3">
                            <img src="images/three.jpg" alt="" />
                            <h3>Sportswear</h3>
                            <div className="price">Rs.770</div>
                        </div>
                        <div className="product" data-name="p-4">
                            <img src="images/third.jpg" alt="" />
                            <h3>Jacket</h3>
                            <div className="price">Rs.1200</div>
                        </div>
                        <div className="product" data-name="p-5">
                            <img src="images/four.jpg" alt="" />
                            <h3>Sunglasses</h3>
                            <div className="price">Rs.1000</div>
                        </div>
                        <div className="product" data-name="p-6">
                            <img src="images/five.jpg" alt="" />
                            <h3>Safety Shoes</h3>
                            <div className="price">Rs.2000</div>
                        </div>
                    </div>
                </div>
                <div className="products-preview">
                    <div className="preview" data-target="p-1">
                        <i className="fas fa-times" />
                        <img src="images/one.jpeg" alt="" />
                        <h3>Formal</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            A formal men's dress typically consists of a tailored suit, often in
                            darker colors such as navy, charcoal, or black.{" "}
                        </p>
                        <div className="price">Rs.330</div>
                        <div className="buttons">
                            <a href="/" className="buy">
                                buy now
                            </a>
                            <a href="/" className="cart">
                                add to cart
                            </a>
                        </div>
                    </div>
                    <div className="preview" data-target="p-2">
                        <i className="fas fa-times" />
                        <img src="images/two.jpg" alt="" />
                        <h3>Casual Wear</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            A casual men's wear ensemble is more relaxed and informal compared to
                            formal attire. It typically includes a variety of clothing options
                            depending on the setting and personal style preferences.{" "}
                        </p>
                        <div className="price">Rs.220</div>
                        <div className="buttons">
                            <a href="/" className="buy">
                                buy now
                            </a>
                            <a href="/" className="cart">
                                add to cart
                            </a>
                        </div>
                    </div>
                    <div className="preview" data-target="p-3">
                        <i className="fas fa-times" />
                        <img src="images/three.jpg" alt="" />
                        <h3>Sportswear</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Men's sportswear is designed for physical activity, providing comfort,
                            flexibility, and performance-enhancing features.{" "}
                        </p>
                        <div className="price">Rs.799</div>
                        <div className="buttons">
                            <a href="/" className="buy">
                                buy now
                            </a>
                            <a href="/" className="cart">
                                add to cart
                            </a>
                        </div>
                    </div>
                    <div className="preview" data-target="p-4">
                        <i className="fas fa-times" />
                        <img src="images/third.jpg" alt="" />
                        <h3>Jacket</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Men's jackets come in a wide variety of styles, each serving different
                            purposes and offering unique features.{" "}
                        </p>
                        <div className="price">Rs.1200</div>
                        <div className="buttons">
                            <a href="/" className="buy">
                                buy now
                            </a>
                            <a href="/" className="cart">
                                add to cart
                            </a>
                        </div>
                    </div>
                    <div className="preview" data-target="p-5">
                        <i className="fas fa-times" />
                        <img src="images/four.jpg" alt="" />
                        <h3>Sunglasses</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Men's sunglasses come in various styles, shapes, and materials to suit
                            different face shapes, fashion preferences, and activities
                        </p>
                        <div className="price">Rs.1000</div>
                        <div className="buttons">
                            <a href="/" className="buy">
                                buy now
                            </a>
                            <a href="/" className="cart">
                                add to cart
                            </a>
                        </div>
                    </div>
                    <div className="preview" data-target="p-6">
                        <i className="fas fa-times" />
                        <img src="images/five.jpg" alt="" />
                        <h3>Safety Shoes</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            {" "}
                            men's safety shoes are engineered to ensure maximum protection and
                            comfort in demanding work environments.{" "}
                        </p>
                        <div className="price">Rs.2000</div>
                        <div className="buttons">
                            <a href="/" className="buy">
                                buy now
                            </a>
                            <a href="/" className="cart">
                                add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default Mens