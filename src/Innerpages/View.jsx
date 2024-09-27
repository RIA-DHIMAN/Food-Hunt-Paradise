import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";

const View = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const newData = await response.json();
      setData(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div className="text-center text-danger">No pizza found!</div>;
  }

  return (
    <div className="details container w-75 mt-4 text-center">
      <h3 className="text-warning">
        <i>" Details "</i>
      </h3>
      <hr className="text-danger" />
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={data.image}
            alt={data.name}
            className=" img-thumbnail animated-image"
            style={{
              width: "300px",
              height: "290px",
              border: "4px solid #f39c12",
            }}
          />
        </div>

        <div className="col-md-6">
          <h2 className="text-warning">{data.name}</h2>
          <p className="text-muted">
            <strong>Cuisine:</strong> {data.cuisine}
          </p>
          <p className="text-muted">
            <strong>Difficulty:</strong> {data.difficulty}
          </p>
          <p className="text-muted">
            <strong>Prep Time:</strong> {data.prepTimeMinutes} min
          </p>
          <p className="text-muted">
            <strong>Cook Time:</strong> {data.cookTimeMinutes} min
          </p>
          <p className="text-muted">
            <strong>Servings:</strong> {data.servings}
          </p>
          <p className="text-warning">
            <strong>Rating:</strong> {data.rating} ⭐
          </p>
          <p className="text-muted">
            <strong>Calories per Serving:</strong> {data.caloriesPerServing}
          </p>
          <p className="text-muted">
            <strong>Review Count:</strong> {data.reviewCount}
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4 className="text-warning">Ingredients:</h4>
          <ul className="list-group">
            {data.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                <span>
                  <i class="fa-solid fa-feather-pointed"></i>
                </span>{" "}
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <h4 className="text-warning">Instructions:</h4>
          <ol className="list-group">
            {data.instructions.map((instruction, index) => (
              <li key={index} className="list-group-item">
                <span>
                  <i class="fa-solid fa-feather-pointed"></i>
                </span>{" "}
                {instruction}
              </li>
            ))}
          </ol>
        </div>
        <div className="display-flex">
          <h5 className="text-warning mt-3">
            <b>Tags: {data.tags.join(", ")} </b>
          </h5>

          <h5 className="text-warning">
            <b> Meal Type: {data.mealType.join(", ")}</b>
          </h5>
        </div>
      </div>
      <div className="text-end mt-3">
        <Link to="/pizzainfo">
          <button type="button" className="btn btn-outline-warning">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default View;
