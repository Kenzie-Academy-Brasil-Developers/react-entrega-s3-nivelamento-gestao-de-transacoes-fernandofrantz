import { useState } from "react";

const ShowTransactions = ({ transactions }) => {
  return (
    <>
      <div>
        <ul>
          <h3>All transactions:</h3>
          {transactions.map((fruit) => (
            <li>
              <h4>
                {fruit.name}, {fruit.quantity} units, R${fruit.price.toFixed(2)}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ShowTransactions;
