import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Product from "./components/Product";
import Item from "./components/Product/data";

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-white shadow">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Item.map((i) => {
            return (
              <Product
                id={i.id}
                name={i.name}
                href={i.href}
                imageSrc={i.imageSrc}
                imageAlt={i.imageAlt}
                price={i.price}
                currency={i.currency}
                rarity={i.rarity}
              />
            );
          })}
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
