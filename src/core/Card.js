import React from 'react';
import {Link} from 'react-router-dom';
import ShowImage from "./ShowImage"

const Card = ({ product }) => {
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <ShowImage item={product} url="product"/>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to="/">
            <button className="btn btn-outline-primary m-3">
              View Product
            </button>
          </Link>
          <button className="btn btn-outline-warning m-3">
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  )
}

export default Card 