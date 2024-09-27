import React, { useState, useEffect } from "react";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const newData = await response.json();

      setRecipes(newData.recipes.slice(0, 8)); // Fetching the first 8 recipes
    } catch (error) {
      console.log("Error fetching recipes:", error);
    }
  };

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
              {/* Carousel Section */}
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
          <div className="container justify-content-center text-center">
            <div className="heading">
              <h1 className="display-4 fw-bold text-warning">
                True Italian Flavor
              </h1>
              <br />
              <p className="lead">
                Indulge in authentic Italian cuisine made with fresh ingredients
                and traditional recipes.
              </p>
              <p className="lead">
                Experience the rich flavors of Italy in every bite, from our
                handmade pasta to our wood-fired pizzas.
              </p>
            </div>
            <hr className="text-danger" />
          </div>
          <section id="pizza-menu" className="py-5">
            <div className="container">
              <div className="row text-center">
                {recipes.map((recipe, index) => (
                  <>
                    <div className="col-md-3 mb-4" key={recipe.id || index}>
                      <div className="pizza-box">
                        <div className="image-container">
                          <img
                            src={recipe.image}
                            className="img-fluid"
                            alt={recipe.name}
                          />
                        </div>
                        <h5 className="mt-3">{recipe.name}</h5>
                        <p>{recipe.title}</p>
                        <div className="button-container">
                          <button className="btn btn-warning mb-2 px-4">
                            ₹299
                          </button>
                          <button
                            className="btn btn-danger add-to-cart"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target={`#modal-${index}`}>
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id={`modal-${index}`}
                      tabIndex="-1"
                      aria-labelledby={`modalLabel-${index}`}
                      aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id={`modalLabel-${index}`}>
                              <i className="text-warning">FOOD HUNT PARADISE</i>
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"></button>
                          </div>
                          <div className="modal-body text-center">
                            <img
                              src={recipe.image}
                              className="img-fluid rounded-circle mb-3 w-50"
                              alt={recipe.name}
                            />
                            <p>{recipe.name}</p>
                            <h5>Rating: {recipe.rating}⭐</h5>
                            <b>
                              <h5 className="text-warning">
                                Review-count: {recipe.reviewCount}
                              </h5>
                            </b>
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
                  </>
                ))}
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
