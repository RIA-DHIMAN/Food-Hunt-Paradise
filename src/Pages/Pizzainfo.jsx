import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

const Pizzainfo = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const newData = await response.json();
      setData(newData.recipes);
      setFilter(newData.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const filterData = data.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(filterData);
  }, [search, data]);

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center text-warning fw-bold">Pizza List</h3>
        <div className="search mt-4 p-2 text-center">
          <input
            type="text"
            className="form-control w-50 mx-auto"
            placeholder="Type to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <hr className="text-danger" />

        {data.length > 0 ? (
          <div className="row">
            {filter.map((pizza, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <h5 className="card-title text-danger mt-3">
                        {pizza.name}
                      </h5>
                    </div>

                    <div className="flip-card-back">
                      <h5 className="text-danger">{pizza.name}</h5>
                      <p className="text-danger">
                        ID: <span>{pizza.id}</span>
                      </p>
                      <Link to={`/view/${pizza.id}`} className="btn btn-danger">
                        View Details
                      </Link>
                      <button
                        className="btn btn-success mt-2"
                        onClick={() => addToCart(pizza)}>
                        Add to Favourite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Pizzainfo;
