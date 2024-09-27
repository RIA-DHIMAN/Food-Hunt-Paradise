import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container mt-5">
      <h3 className="text-center text-warning fw-bold">Your Favourites</h3>
      {cartItems.length === 0 ? (
        <p className="text-center">
          <i>" No items in your Favourites "</i>
        </p>
      ) : (
        <ul className="list-group">
          <hr className="text-danger" />
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center border rounded p-3 mb-2 shadow-sm">
              <div className="me-3">
                <h6 className="text-dark">{item.name}</h6>
                <small className="text-muted">ID: {item.id}</small>
              </div>
              <div className="d-flex align-items-center">
                <span className="badge bg-warning rounded me-2">
                  <i className="fa-solid fa-heart fa-lg"></i> {item.price}
                </span>
                <Link
                  to={`/view/${item.id}`}
                  className="btn btn-danger btn-sm mx-3">
                  View Details
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
