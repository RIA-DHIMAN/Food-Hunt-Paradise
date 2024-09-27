import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <section id="hero" className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <h1 className="display-4 fw-bold text-warning">
                  Welcome to Food Hunt Paradise!
                </h1>
                <p className="lead">
                  Experience the best, hand-tossed pizza made with fresh
                  ingredients and lots of love. From classic Margherita to
                  gourmet toppings, we have something to satisfy your pizza
                  cravings and other food carvings!
                </p>
                <a href="#pizza-menu" className="btn btn-danger btn-lg mt-3">
                  Explore Our Menu
                </a>
              </div>

              <div className="col-md-6">
                <div
                  id="pizzaCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="4000">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="image-container">
                        <img
                          src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg"
                          className="d-block w-100 img-fluid"
                          alt="Image-1"
                        />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="image-container">
                        <img
                          src="https://cmjjgourmet.com/wp-content/uploads/2024/03/A-table-full-of-cold-buffet-food.jpg"
                          className="d-block w-100 img-fluid"
                          alt="Image-2"
                        />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="image-container">
                        <img
                          src="https://media.timeout.com/images/106090008/image.jpg"
                          className="d-block w-100 img-fluid"
                          alt="Image-3"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#pizzaCarousel"
                    data-bs-slide="prev">
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#pizzaCarousel"
                    data-bs-slide="next">
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pizza-menu">
          <div className="container justify-content center text-center">
            <div className="heading">
              <h1 className="display-4 fw-bold text-warning">
                True Italian Flavor
              </h1>
              <br />
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptas veritatis earum?
              </p>
              <p className="lead">
                Voluptas, dolores? Laboriosam nobis magnam sunt eaque quod!
              </p>
            </div>
            <hr className="text-danger" />
          </div>
          <section id="pizza-menu" className="py-5">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="pizza-box">
                    <div className="image-container">
                      <img
                        src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg"
                        className="img-fluid"
                        alt="Pizza 1"
                      />
                    </div>
                    <h5 className="mt-3">Classic Margherita</h5>
                    <p>Fresh mozzarella, tomatoes, and basil</p>
                    <div className="button-container">
                      <button className="btn btn-warning mb-2 px-4">
                        ₹299
                      </button>
                      <button
                        className="btn btn-danger add-to-cart"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalMargherita">
                        Let's Enjoy Meal
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="modalMargherita"
                  tabindex="-1"
                  aria-labelledby="modalMargheritaLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalMargheritaLabel">
                          Classic Margherita
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg"
                          className="img-fluid rounded-circle mb-3 w-50"
                          alt="Pizza 1"
                        />
                        <p>
                          Enjoy a classic Margherita pizza with fresh
                          mozzarella, tomatoes, and basil for the perfect taste.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="pizza-box">
                    <div className="image-container">
                      <img
                        src="https://static.toiimg.com/thumb/54699659.cms?imgsize=2071173&width=800&height=800"
                        className="img-fluid"
                        alt="Pizza 2"
                      />
                    </div>
                    <h5 className="mt-3">Pepperoni Feast</h5>
                    <p>Loaded with pepperoni and cheese</p>
                    <div className="button-container">
                      <button className="btn btn-warning mb-2 px-4">
                        ₹399
                      </button>
                      <button
                        className="btn btn-danger add-to-cart"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalPepperoni">
                        Let's Enjoy Meal
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="modalPepperoni"
                  tabindex="-1"
                  aria-labelledby="modalPepperoniLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalPepperoniLabel">
                          Pepperoni Feast
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="https://static.toiimg.com/thumb/54699659.cms?imgsize=2071173&width=800&height=800"
                          className="img-fluid rounded-circle mb-3 w-50"
                          alt="Pizza 2"
                        />
                        <p>
                          A perfect pizza loaded with pepperoni and melted
                          cheese for meat lovers.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="pizza-box">
                    <div className="image-container">
                      <img
                        src="https://img.freepik.com/premium-photo/fresh-homemade-italian-pizza-margherita-with-buffalo-mozzarella-basil_914391-415.jpg"
                        className="img-fluid"
                        alt="Pizza 3"
                      />
                    </div>
                    <h5 className="mt-3">Veggie Delight</h5>
                    <p>Crispy vegetables with a cheesy layer</p>
                    <div className="button-container">
                      <button className="btn btn-warning mb-2 px-4">
                        ₹349
                      </button>
                      <button
                        className="btn btn-danger add-to-cart"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalVeggie">
                        Let's Enjoy Meal
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="modalVeggie"
                  tabindex="-1"
                  aria-labelledby="modalVeggieLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalVeggieLabel">
                          Veggie Delight
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="https://img.freepik.com/premium-photo/fresh-homemade-italian-pizza-margherita-with-buffalo-mozzarella-basil_914391-415.jpg"
                          className="img-fluid rounded-circle mb-3 w-50"
                          alt="Pizza 3"
                        />
                        <p>
                          Enjoy a delicious Veggie Delight pizza topped with
                          crispy vegetables and a cheesy layer. Perfect for your
                          cravings!
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="pizza-box">
                    <div className="image-container">
                      <img
                        src="https://img.freepik.com/free-photo/side-view-pizza-with-chopped-pepper-board-cookware_176474-3183.jpg"
                        className="img-fluid"
                        alt="Pizza 4"
                      />
                    </div>
                    <h5 className="mt-3">BBQ Chicken Pizza</h5>
                    <p>Barbecue sauce with grilled chicken</p>
                    <div className="button-container">
                      <button className="btn btn-warning mb-2 px-4">
                        ₹449
                      </button>
                      <button
                        className="btn btn-danger add-to-cart"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalBBQ">
                        Let's Enjoy Meal
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="modalBBQ"
                  tabindex="-1"
                  aria-labelledby="modalBBQLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalBBQLabel">
                          BBQ Chicken Pizza
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="https://img.freepik.com/free-photo/side-view-pizza-with-chopped-pepper-board-cookware_176474-3183.jpg"
                          className="img-fluid rounded-circle mb-3 w-50"
                          alt="Pizza 4"
                        />
                        <p>
                          Indulge in BBQ chicken pizza with rich barbecue sauce
                          and grilled chicken.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="pizza-menu">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="pizza-box">
                    <div className="image-container">
                      <img
                        src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"
                        className="img-fluid"
                        alt="Pancakes with Honey"
                      />
                    </div>
                    <h5 className="mt-3">Honey Pancakes</h5>
                    <p>Fluffy pancakes topped with sweet honey drizzle</p>
                    <div className="button-container">
                      <button className="btn btn-warning mb-2 px-4">
                        ₹299
                      </button>
                      <button
                        className="btn btn-danger add-to-cart"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalPancakes">
                        Let's Enjoy Meal
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="modalPancakes"
                  tabindex="-1"
                  aria-labelledby="modalPancakesLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalPancakesLabel">
                          Honey Pancakes
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"
                          className="img-fluid rounded-circle mb-3 w-50"
                          alt="Pancakes with Honey"
                        />
                        <p>
                          Enjoy warm, fluffy pancakes drizzled with golden honey
                          for the perfect breakfast treat.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="pizza-box">
                    <div className="image-container">
                      <img
                        src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg"
                        className="img-fluid"
                        alt="Fish and Vegetables"
                      />
                    </div>
                    <h5 className="mt-3">Fish & Veggies Bowl</h5>
                    <p>Healthy bowl of grilled fish and fresh vegetables</p>
                    <div className="button-container">
                      <button className="btn btn-warning mb-2 px-4">
                        ₹399
                      </button>
                      <button
                        className="btn btn-danger add-to-cart"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalFishBowl">
                        Let's Enjoy Meal
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="modalFishBowl"
                  tabindex="-1"
                  aria-labelledby="modalFishBowlLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalFishBowlLabel">
                          Fish & Veggies Bowl
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg"
                          className="img-fluid rounded-circle mb-3 w-50"
                          alt="Fish and Vegetables"
                        />
                        <p>
                          A nutritious bowl of grilled fish, paired with a
                          medley of fresh vegetables for a wholesome meal.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="pizza-box">
                    <div className="image-container">
                      <img
                        src="https://img.freepik.com/premium-photo/delicious-spaghetti-noodles-tomatoes-italian-food_812426-48623.jpg"
                        className="img-fluid"
                        alt="Spaghetti"
                      />
                    </div>
                    <h5 className="mt-3">Italian Spaghetti</h5>
                    <p>
                      Classic Italian spaghetti with fresh tomatoes and herbs
                    </p>
                    <div className="button-container">
                      <button className="btn btn-warning mb-2 px-4">
                        ₹349
                      </button>
                      <button
                        className="btn btn-danger add-to-cart"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalSpaghetti">
                        Let's Enjoy Meal
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="modalSpaghetti"
                  tabindex="-1"
                  aria-labelledby="modalSpaghettiLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalSpaghettiLabel">
                          Italian Spaghetti
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="https://img.freepik.com/premium-photo/delicious-spaghetti-noodles-tomatoes-italian-food_812426-48623.jpg"
                          className="img-fluid rounded-circle mb-3 w-50"
                          alt="Spaghetti"
                        />
                        <p>
                          Experience the taste of Italy with this classic
                          spaghetti, seasoned with herbs and topped with fresh
                          tomatoes.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="pizza-box">
                    <div className="image-container">
                      <img
                        src="https://cdn.pixabay.com/photo/2022/08/31/10/16/hamburger-7422961_960_720.jpg"
                        className="img-fluid"
                        alt="Hamburger"
                      />
                    </div>
                    <h5 className="mt-3">Grilled Hamburger</h5>
                    <p>
                      Juicy grilled hamburger with fresh vegetables and BBQ
                      sauce
                    </p>
                    <div className="button-container">
                      <button className="btn btn-warning mb-2 px-4">
                        ₹449
                      </button>
                      <button
                        className="btn btn-danger add-to-cart"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalBurger">
                        Let's Enjoy Meal
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="modalBurger"
                  tabindex="-1"
                  aria-labelledby="modalBurgerLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalBurgerLabel">
                          Grilled Hamburger
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="https://cdn.pixabay.com/photo/2022/08/31/10/16/hamburger-7422961_960_720.jpg"
                          className="img-fluid rounded-circle mb-3 w-50"
                          alt="Hamburger"
                        />
                        <p>
                          Enjoy a succulent grilled hamburger, served with crisp
                          vegetables and tangy BBQ sauce.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="footer mt-4">
          <div className="container justify-content-center text-center">
            <div className="row">
              <div className="col-md-4">
                <div className="heading">
                  <h1>
                    <i className="fa-solid fa-map-location-dot fa-lg"></i> Our
                    Location
                  </h1>
                  <p>lorem Street</p>
                  <p>1234 zonal near mid</p>
                  <p>Any Country</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="heading">
                  <h1>
                    <i className="fa-solid fa-address-book fa-lg"></i> Contact
                    Us
                  </h1>
                  <p>Call At :</p>
                  <p>+91 1008 108 888</p>
                  <p>+91 1008 899 880</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="heading">
                  <h1>
                    <i className="fa-solid fa-clock fa-lg"></i> Working Hours
                  </h1>
                  <p>Start at : 10:00am</p>
                  <p>End at : 10:00am</p>
                  <p>Enjoy!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="restaurant-logos" className="py-5 bg-light">
          <div className="container">
            <div
              id="logoCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row text-center">
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/736x/9f/45/22/9f4522804779ac9a22032ec02adea640.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 1"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/77/ed/01/77ed015955558e13cb4b425602f1585c.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 2"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/f8/32/a5/f832a59135baa1b4d46c5000565e1e36.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 3"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/e7/54/14/e75414fd4625d9e218419c6516ade7a8.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 4"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/0f/26/25/0f26251bd6dae53aa203c88c49730e9f.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 5"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/7c/00/1a/7c001ab183f5ed7b850c7ac9ea9d47e5.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 6"
                      />
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row text-center">
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/736x/9f/45/22/9f4522804779ac9a22032ec02adea640.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 1"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/77/ed/01/77ed015955558e13cb4b425602f1585c.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 2"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/f8/32/a5/f832a59135baa1b4d46c5000565e1e36.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 3"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/e7/54/14/e75414fd4625d9e218419c6516ade7a8.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 4"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/0f/26/25/0f26251bd6dae53aa203c88c49730e9f.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 5"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src="https://i.pinimg.com/564x/7c/00/1a/7c001ab183f5ed7b850c7ac9ea9d47e5.jpg"
                        className="img-fluid"
                        alt="Restaurant Logo 6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#logoCarousel"
                data-bs-slide="prev">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#logoCarousel"
                data-bs-slide="next">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        <section className="end">
          <div className="container justify-content-center text-center">
            <div className="logo">
              <h1>
                <i>
                  <b className="text-danger">Food Hunt Paradise</b>
                </i>
              </h1>
              <p>
                <i className="text-warning mx-3 mt-3 fa-brands fa-facebook-f fa-xl"></i>
                <i className="text-warning mx-3 mt-3 fa-brands fa-square-instagram fa-lg"></i>
                <i className="text-warning mx-3 mt-3 fa-brands fa-youtube fa-lg"></i>
                <i className="text-warning mx-3 mt-3 fa-brands fa-twitter fa-xl"></i>
              </p>
              <h5 className="lead p-3">
                Food Hunt Paradise © 2024. All Rights Reserved
              </h5>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
