const Sells = ({ show, setShow, leave }) => {
  return (
    <div>
      <ul>
        {show === false && (
          <div>
            <button onClick={() => setShow(true)}>Show entrys</button>
            <h3>Sells:</h3>
          </div>
        )}
        {show === false &&
          leave.map((leave) => (
            <li>
              <h4>
                {leave.name}, {leave.quantity} units, ${leave.price.toFixed(2)}
              </h4>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Sells;
