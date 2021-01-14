const Menu = (props) => {
  const { title, menuDescription, price, popular, picture } = props;
  return (
    <div className="Menu">
      <div>
        <h3>{title}</h3>
        <p>{menuDescription}</p>
        <div>
          <p>{price}€</p>
          {popular && <p>isGOOOD!</p>}
        </div>
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default Menu;
