import "./App.css";
import { useState } from "react";
import FormFruits from "./FormFruits";
import ShowTransactions from "./ShowTransactions";
import Entrys from "./ShowEntrys";
import Sells from "./ShowSells";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const [entry, setEntry] = useState(
    transactions.filter((fruit) => fruit.quantity > 0)
  );
  const [leave, setLeave] = useState(
    transactions.filter((fruit) => fruit.quantity < 0)
  );

  const [show, setShow] = useState(false);

  console.log("transactions", transactions);
  return (
    <div className="App App-header">
      <FormFruits
        entry={entry}
        setEntry={setEntry}
        leave={leave}
        setLeave={setLeave}
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <Entrys show={show} setShow={setShow} entry={entry} />
      <Sells show={show} setShow={setShow} leave={leave} />

      <ShowTransactions
        transactions={transactions}
        entry={entry}
        leave={leave}
      />
    </div>
  );
}

export default App;
