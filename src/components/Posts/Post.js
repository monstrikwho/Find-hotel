import React, { useState } from "react";

import Rating from "@mui/material/Rating";

export default function Post({ data }) {
  const [status, setStatus] = useState(false);

  const handleClick = () => setStatus(!status);

  return (
    <div className="post">
      <div className="title">{data.title}</div>
      <div className="rating">
        <Rating name="read-only" value={data.stars} readOnly />
        <div className="reviews">{data.reviews} отзыва</div>
      </div>
      <div className="desc">{data.description}</div>
      <div className="booking">
        <div
          className={status ? "btn active" : "btn"}
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          {status ? "Забронировано" : "Забронировать"}
        </div>
        <div className="price">
          {data.price} ₽ <span>Цена за 1 ночь</span>
        </div>
      </div>
    </div>
  );
}
