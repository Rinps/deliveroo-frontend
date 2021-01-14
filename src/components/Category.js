import Menu from "./Menu";

const Category = (props) => {
  const createMenu = (item, index) => {
    return (
      <Menu
        title={item.title}
        key={item.index}
        menuDescription={item.description}
        price={item.price}
        popular={item.popular}
        picture={item.picture}
      />
    );
  };

  const { title, meals } = props;
  return (
    <div className="Category">
      <h2>{title}</h2>
      <div className="meals">{meals.map(createMenu)}</div>
    </div>
  );
};

export default Category;
