import React from 'react'

const Womens = () => {
    return (
        <>
            <>
                <div className="container">
                    <h3 className="title"> Women Fashion </h3>
                    <div className="products-container">
                        <div className="product" data-name="p-1">
                            <img src="images\d6ad8a34dad6ee9a9764d5b8620e616b.jpg" alt="" />
                            <h3>Formal Dress</h3>
                            <div className="price">Rs.1100</div>
                        </div>
                        <div className="product" data-name="p-2">
                            <img src="images\Photo-Jul-14-11-19-55-AM.jpg" alt="" />
                            <h3>Causual Wear</h3>
                            <div className="price">Rs.480</div>
                        </div>
                        <div className="product" data-name="p-3">
                            <img src="images\best-top-10-women-perfume.jpg" alt="" />
                            <h3>Perfume</h3>
                            <div className="price">Rs.2000</div>
                        </div>
                        <div className="product" data-name="p-4">
                            <img
                                src="images\hero-desk_2_a7af6170-3cff-4876-8b2d-043b294b4927.webp"
                                alt=""
                            />
                            <h3>Cosmetics</h3>
                            <div className="price">Rs.560</div>
                        </div>
                        <div className="product" data-name="p-5">
                            <img
                                src="images\women-bag-handbag-png-transparent-image-pngpix-33.png"
                                alt=""
                            />
                            <h3>Bags</h3>
                            <div className="price">Rs.400</div>
                        </div>
                        <div className="product" data-name="p-6">
                            <img src="images\foot.webp" alt="" />
                            <h3>Footwear</h3>
                            <div className="price">Rs.420</div>
                        </div>
                    </div>
                </div>
                <div className="products-preview">
                    <div className="preview" data-target="p-1">
                        <i className="fas fa-times" />
                        <img src="images\d6ad8a34dad6ee9a9764d5b8620e616b.jpg" alt="" />
                        <h3>Formal Dresses</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Formal dresses for women typically adhere to certain styles and
                            guidelines appropriate for formal events like weddings, galas, proms, or
                            cocktail parties.
                        </p>
                        <div className="price">Rs.1100</div>
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
                        <img src="images\Photo-Jul-14-11-19-55-AM.jpg" alt="" />
                        <h3>Causual Wear</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Casual dresses for women offer comfort and style for everyday wear,
                            social gatherings, or relaxed outings.{" "}
                        </p>
                        <div className="price">Rs.480</div>
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
                        <img src="images\best-top-10-women-perfume.jpg" alt="" />
                        <h3>Perfume</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Women's perfume is a popular form of fragrance designed specifically for
                            women, offering a wide array of scents, compositions, and styles to suit
                            various tastes and preferences.
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
                    <div className="preview" data-target="p-4">
                        <i className="fas fa-times" />
                        <img
                            src="images\hero-desk_2_a7af6170-3cff-4876-8b2d-043b294b4927.webp"
                            alt=""
                        />
                        <h3>Cosmetics</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                            dolorem. Cosmetics for women encompass a wide range of products designed
                            to enhance or alter the appearance of the face, skin, eyes, lips, and
                            nails.
                        </p>
                        <div className="price">Rs.560</div>
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
                        <img
                            src="images\women-bag-handbag-png-transparent-image-pngpix-33.png"
                            alt=""
                        />
                        <h3>Bags</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Women’s bags were created to hold any belongings women might need while
                            they were out and about.
                        </p>
                        <div className="price">Rs.400</div>
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
                        <img src="images\foot.webp" alt="" />
                        <h3>Footwear</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>( 250 )</span>
                        </div>
                        <p>
                            Women's footwear is an essential part of any wardrobe, and the right
                            pair of shoes can complete an outfit and make a woman look and feel
                            confident and stylish.
                        </p>
                        <div className="price">Rs.420</div>
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

export default Womens