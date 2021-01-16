import KartItem from "./KartItem";

const Kart = (props) => {
  // Start with creating variables.
  const { kart, setKart } = props;

  // Now, the createKart uses a map to populate the Kart component with every meal ordered.
  const createKart = (item, index) => {
    return (
      <KartItem
        quantity={item.quantity}
        title={item.title}
        price={item.price}
        id={item.id}
        kart={kart}
        setKart={setKart}
      />
    );
  };

  // The priceList is an array wich contain every prices from the kart array. The sumList function will be use in order to sum every member of priceList into a unique number.
  const priceList = [];
  for (let i = 0; i < kart.length; i++) {
    priceList.push(Number(kart[i].price));
  }

  const calculSousTotal = () => {
    if (priceList.length > 0) {
      return priceList.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  };

  const noSubmitForNow = (event) => {
    event.preventDefault();
  };

  const sousTotal = calculSousTotal();
  const total = sousTotal + 2.5;

  return kart.length > 0 ? (
    <div className="Kart">
      <form onSubmit={noSubmitForNow}>
        <input type="submit" id="kartSubmit" value="Valider mon panier" />
        <ul>{kart.map(createKart)}</ul>
      </form>
      <div className="bill">
        <div className="detailFacture">
          <h3>Sous-total </h3>
          <h3>{sousTotal.toFixed(2)} €</h3>
        </div>
        <div className="detailFacture">
          <h3>Frais de livraison</h3>
          <h3>2.50 €</h3>
        </div>
        <div className="total">
          <h3>Total</h3>
          <h3>{total.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  ) : (
    <div className="Kart">
      <p className="deactivated">Valider mon panier</p>
      <h3>Votre panier est vide</h3>
    </div>
  );
};

export default Kart;
