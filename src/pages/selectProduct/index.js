import React, { useState } from "react";
import "./style.scss";

import { formatCurrency } from "../../utils";

import { useOrderDetails } from "../../context/index";

import ProductMainImage from "../../components/productDisplay/mainImage";
import Thumbnail from "../../components/productDisplay/thumbnail";
import productsData from "../../products.json";

const headphones = productsData["beats-solo3"];

export default function SelectProduct() {
  const [activeImage, setActiveImage] = useState(0); //  get image by array index

  const { product } = useOrderDetails();

  const item = headphones[product];

  const image = item.images[activeImage]["full-size"];

  const handleClickThumb = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="product-container">
      <div className="product-display">
        <ProductMainImage src={image} name={item.title} />

        <div className="thumbnail-list" data-testid="product-thumbnail-list">
          {item.images.map((i, index) => (
            <Thumbnail
              onClick={() => handleClickThumb(index)}
              src={i.thumb}
              selected={index === activeImage}
              key={i.thumb}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <div className="product-name" data-testid="product-name">
          {item.title}
        </div>

        <div className="product-price" data-testid="product-price">
          {formatCurrency(item.price)}
        </div>

        <div className="product-details">
          <h3>About</h3>

          <div dangerouslySetInnerHTML={{ __html: item.description }} data-testid="product-details"></div>
        </div>
      </div>
    </div>
  );
}
