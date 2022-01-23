import React from "react";
import "./style.scss";
export default function ProductMainImage({ src, name }) {
  return (
    <div data-testid="product-main-image" className="product-main-image">
      {src && name && <img src={src} alt={name} />}
    </div>
  );
}
