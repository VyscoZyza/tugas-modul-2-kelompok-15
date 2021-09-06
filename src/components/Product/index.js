import React from "react";
function Product(props) {
  return (
    <div key={props.id} className="group relative shadow">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={props.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.name}
            </a>
          </h3>

          <img src={props.rarity} className="lg:block h-10 w-auto " alt="" />
          {/* <p className="mt-1 text-sm text-gray-500">{props.color}</p> */}
        </div>
        <div className="mt-4 flex justify-end">
          <p className="text-sm font-medium text-gray-900">{props.price}</p>{" "}
          <img src={props.currency} className="lg:block h-5 w-auto" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Product;
