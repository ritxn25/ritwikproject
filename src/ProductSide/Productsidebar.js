import React from "react";
import "./Productsidebar.css";
import { IconCircleFilled } from "@tabler/icons-react";

const Productsidebar = () => {
  return (
    <div className="product-card">
      <div className="card-content">Popular Product</div>
      <ul className="product-list">
        <li>
          <div className="product-item">
            <IconCircleFilled color="black" />
            <span>Gadget Converter</span>
          </div>
          <div className="product-price">$200</div>
        </li>
        <li>
          <div className="product-item">
            <IconCircleFilled color="black" />
            <span>Lens Camera</span>
          </div>
          <div className="product-price">$300</div>
        </li>
        <li>
          <div className="product-item">
            <IconCircleFilled color="black" />
            <span>Airpods</span>
          </div>
          <div className="product-price">$400</div>
        </li>
        <li>
          <div className="product-item">
            <IconCircleFilled color="black" />
            <span>Macbook</span>
          </div>
          <div className="product-price">$1500</div>
        </li>
      </ul>
      <div className="card-content" style={{ marginTop: "20px" }}>
        Chat
      </div>
      <ul className="product-list">
        <li>
          <div className="product-item">
            <IconCircleFilled color="black" />
            <span>Debra Young</span>
          </div>
          <div className="product-price">How's my product?</div>
        </li>
        <li>
          <div className="product-item">
            <IconCircleFilled color="black" />
            <span>Dorothy Collins</span>
          </div>
          <div className="product-price">How was the meeting</div>
        </li>
        <li>
          <div className="product-item">
            <IconCircleFilled color="black" />
            <span>Chris Jordan</span>
          </div>
          <div className="product-price">How employee performance</div>
        </li>
        <li>
          <div className="product-item">
            <IconCircleFilled color="black" />
            <span>Denise Murphy</span>
          </div>
          <div className="product-price">How was the meeting</div>
        </li>
      </ul>
    </div>
  );
};

export default Productsidebar;
