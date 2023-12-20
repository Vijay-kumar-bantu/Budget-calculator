import { useSelector } from "react-redux";

function Indicator() {
  const balance = useSelector((state) => state.treasury);
  const expenses = useSelector((state) => state.balance);

  return (
    <section className="indicator">
      <div className="balance">
        <h3>Amount in Treasury</h3>
        <h1>{balance}</h1>
      </div>
      <div className="expense">
        <h3>Total expenses</h3>
        <h1>{expenses}</h1>
      </div>
    </section>
  );
}

export default Indicator;
