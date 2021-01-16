import Menu from "./Menu";

const Category = (props) => {
  const { title, meals, kart, setKart } = props;

  const createMenu = (item, index) => {
    return (
      <Menu
        title={item.title}
        key={index}
        menuDescription={item.description}
        price={item.price}
        popular={item.popular}
        picture={item.picture}
        kart={kart}
        setKart={setKart}
      />
    );
  };

  return (
    <div className="Category">
      <h2>{title}</h2>
      <div className="meals">{meals.map(createMenu)}</div>
    </div>
  );
};

export default Category;
