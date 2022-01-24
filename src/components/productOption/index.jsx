import React from "react";
import "./style.scss";

export default function ProductOption({ item, onClick }) {
  return (
    <div data-testid="product-option" onClick={onClick} title={item.title} className="product-option">
      <img src={item.images[0].thumb} alt="" />
    </div>
  );
}
