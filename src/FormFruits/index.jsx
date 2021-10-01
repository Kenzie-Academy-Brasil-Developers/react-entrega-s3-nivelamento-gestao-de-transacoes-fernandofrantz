import { useState } from "react";
import "./styles.css";
const FormFruits = ({
  setTransactions,
  transactions,
  leave,
  setLeave,
  entry,
  setEntry,
}) => {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const handleForm = () => {
    setTransactions([
      ...transactions,
      {
        name: name,
        quantity: Number(quantity),
        price: Number(price),
      },
    ]);

    quantity > 0
      ? setEntry([
          ...entry,
          {
            name: name,
            quantity: Number(quantity),
            price: Number(price),
          },
        ])
      : setLeave([
          ...leave,
          {
            name: name,
            quantity: Number(quantity),
            price: Number(price),
          },
        ]);
  };

  return (
    <>
      <div>
        <form id="form">
          <input
            onChange={(evt) => setName(evt.target.value)}
            placeholder="Name"
            type="text"
          />
          <input
            onChange={(evt) => setQuantity(evt.target.value)}
            placeholder="Quantity"
            type="number"
          />
          <input
            onChange={(evt) => setPrice(evt.target.value)}
            placeholder="Price"
            type="number"
          />
          <button onClick={handleForm} type="button">
            Set trasaction
          </button>
        </form>
      </div>
    </>
  );
};
export default FormFruits;
