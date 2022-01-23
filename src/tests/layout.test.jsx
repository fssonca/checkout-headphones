import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductMainImage from "../components/productDisplay/mainImage";

import App from "../App";

import productInfo from "../products.json";

describe("layout components", () => {
  test("progressSteps is displayed", () => {
    render(<App />);
    const elem = screen.getByTestId("progress-steps");
    expect(elem).toBeVisible();
  });

  test("main image is displayed", async () => {
    render(<App />);

    const elem = screen.getByTestId("product-main-image");

    expect(elem).toBeVisible();
  });

  test("main image panel displays a product image", async () => {
    const imgUrl = productInfo["beats-solo3"].red.images[0]["full-size"];

    render(<ProductMainImage src={imgUrl} name="product-img - Beats Solo3 Red" />);
    const elem = await screen.findByRole("img"); // , { name: /\b(product-img)\b/i }
    // TODO - alt needs to be a string
    expect(elem).toBeVisible();
  });

  test("when clicking on a thumbnail, the main product image is changed and the thumbnail is highlighted", async () => {
    render(<App />);

    const thumbListPanel = screen.getByTestId("product-thumbnail-list");

    const thumbList = within(thumbListPanel).getAllByTestId("product-thumbnail");

    let mainImageUrl = "";
    let mainImage;

    for (let i = 0; i < thumbList.length; i++) {
      mainImage = await within(screen.getByTestId("product-main-image")).findByRole("img");

      // if the current main image.src is equal to the previous one, then the main image didn't change.
      if (mainImageUrl === mainImage.src) {
        throw new Error("Main Image was not changed");
      }

      mainImage = mainImage.src;

      userEvent.click(thumbList[i]);

      screen.getByTestId("product-main-image");

      await waitFor(async () => {
        const newThumbList = await within(thumbListPanel).findAllByTestId("product-thumbnail");

        expect(newThumbList[i]).toHaveClass("image-selected");
      });
    }
  });

  test("product details are displayed correctly", () => {
    render(<App />);

    // product name is a string non empty
    const productName = screen.getByTestId("product-name");
    expect(productName.textContent).not.toBe("");

    // product price is a correct number
    const productPrice = screen.getByTestId("product-price");
    expect(productPrice.textContent).not.toMatch(/NaN/i);

    // product price is a correct number
    const productDetails = screen.getByTestId("product-details");
    expect(productDetails.textContent).not.toBe("");
  });
});
