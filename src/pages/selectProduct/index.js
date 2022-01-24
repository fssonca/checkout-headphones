import React, { useState, useContext } from "react";
import "./style.scss";

import { formatCurrency } from "../../utils";

import { OrderDetails } from "../../context/index";

import ProductMainImage from "../../components/productDisplay/mainImage";
import Thumbnail from "../../components/productDisplay/thumbnail";
import ProductOption from "../../components/productOption";

import productsData from "../../products.json";

const product = productsData["beats-solo3"];

export default function SelectProduct() {
  const [activeImage, setActiveImage] = useState(0); //  get image by array index

  const { state, dispatch } = useContext(OrderDetails);

  const item = product[state.productVariant];

  const image = item.images[activeImage]["full-size"];

  const handleClickThumb = (index) => {
    setActiveImage(index);
  };

  const handleClickOption = (option) => {
    dispatch({
      type: "CHANGE_OPTION",
      payload: option.option_key,
    });
  };

  const allOptions = () => {
    const arrayOptions = Object.keys(product);

    return arrayOptions.map((key) => {
      return { ...product[key], option_key: key };
    });
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

        <div className="product-other-options">
          <h3>Available Colors</h3>

          <div data-testid="product-other-options" className="row">
            {allOptions().map((i) => (
              <ProductOption
                item={i}
                key={i.title}
                onClick={() => {
                  handleClickOption(i);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
