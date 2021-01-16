const KartItem = (props) => {
  const { price, quantity, title, id, kart, setKart } = props;

  const handleIncrement = (event) => {
    event.preventDefault();
    const newKart = [...kart];
    for (let i = 0; i < kart.length; i++) {
      if (newKart[i].id === id) {
        newKart[i].quantity += 1;
        const newPrice =
          Number(newKart[i].price) + Number(newKart[i].individualPrice);
        newKart[i].price = Number(newPrice).toFixed(2);
      }
    }
    setKart(newKart);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      const newKart = [...kart];
      for (let i = 0; i < kart.length; i++) {
        if (newKart[i].id === id) {
          newKart[i].quantity -= 1;
          const newPrice =
            Number(newKart[i].price) - Number(newKart[i].individualPrice);
          newKart[i].price = Number(newPrice).toFixed(2);
        }
      }
      setKart(newKart);
    } else {
      const newKart = [];
      for (let i = 0; i < kart.length; i++) {
        if (kart[i].id !== id) {
          newKart.push(kart[i]);
        }
      }
      setKart(newKart);
    }
  };

  return (
    <li className="KartItem">
      <div className="quantity" key="index">
        <button onClick={handleDecrement}>-</button>
        {quantity}
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>{title}</p>
      <p>{price} €</p>
    </li>
  );
};

export default KartItem;
