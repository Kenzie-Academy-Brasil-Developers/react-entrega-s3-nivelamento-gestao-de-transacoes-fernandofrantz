const Entrys = ({ show, setShow, entry }) => {
  return (
    <div>
      <ul>
        {show && (
          <div>
            <button onClick={() => setShow(false)}>Show sells</button>
            <h3>Entrys:</h3>
          </div>
        )}
        {show &&
          entry.map((entry) => (
            <li>
              <h3>
                {entry.name}, {entry.quantity} units, ${entry.price.toFixed(2)}
              </h3>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Entrys;
