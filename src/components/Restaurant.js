import React from "react";
import Category from "./Category";

const Restaurant = (props) => {
  const { name, description, picture, categories } = props;

  const editCategory = (item, index) => {
    if (item.meals.length) {
      return <Category title={item.name} meals={item.meals} key={index} />;
    }
  };

  return (
    <div className="Restaurant container">
      {/* The description and picture of the restaurant */}
      <div className="restaurantDescription">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <img src={picture} alt="title" />
      </div>

      {/* The list of every menu */}
      {categories.map(editCategory)}
    </div>
  );
};

export default Restaurant;
