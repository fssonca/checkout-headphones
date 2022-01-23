import React from "react";

export default function Thumbnail({ src, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      data-testid="product-thumbnail"
      className={`product-thumbnail  ${selected ? "image-selected" : ""}`}
    >
      <img src={src} alt="" />
    </div>
  );
}
