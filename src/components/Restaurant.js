import React from "react";
import Category from "./Category";
import Kart from "./Kart";

const Restaurant = (props) => {
  const { name, description, picture, categories, kart, setKart } = props;

  const createCategory = (item, index) => {
    if (item.meals.length) {
      return (
        <Category
          title={item.name}
          meals={item.meals}
          key={index}
          kart={kart}
          setKart={setKart}
        />
      );
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
      <div className="mealsAndKart">
        <div className="meals">{categories.map(createCategory)}</div>
        <Kart kart={kart} setKart={setKart} />
      </div>
    </div>
  );
};

export default Restaurant;
