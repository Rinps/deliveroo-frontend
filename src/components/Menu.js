import { v4 as uuidv4 } from "uuid";

const Menu = (props) => {
  const {
    title,
    menuDescription,
    price,
    popular,
    picture,
    kart,
    setKart,
  } = props;

  // If the user click on a menu, it is automatically added to the kart.
  const handleClick = () => {
    const newKart = [...kart];
    let addNewMeal = true;

    // First, we have to explain what to do if no item was put in the kart.
    if (newKart.length === 0) {
      newKart.push({
        title: title,
        quantity: 1,
        individualPrice: Number(price).toFixed(2),
        price: Number(price).toFixed(2),
        id: uuidv4(),
      });
    } else {
      // If something was already in the kart, we have to check if it already exists in the kart array. This is where the addNewMeal variable comes handy.
      for (let i = 0; i < kart.length; i++) {
        if (newKart[i].title === title) {
          newKart[i].quantity += 1;
          const totalPrice = newKart[i].individualPrice * newKart[i].quantity;
          newKart[i].price = totalPrice.toFixed(2);
          addNewMeal = false;
        }
      }
      if (addNewMeal) {
        newKart.push({
          title: title,
          quantity: 1,
          individualPrice: Number(price).toFixed(2),
          price: Number(price).toFixed(2),
          id: uuidv4(),
        });
      }
    }
    setKart(newKart);
  };

  return (
    <div className="Menu" onClick={handleClick}>
      <div>
        <h3>{title}</h3>
        <p>{menuDescription}</p>
        <div>
          <p>{Number(price).toFixed(2)}€</p>
          {popular && <p>isGOOOD!</p>}
        </div>
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default Menu;
