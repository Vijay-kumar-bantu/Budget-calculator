import { useSelector } from "react-redux";

function Transactions() {
  const transactions = useSelector((state) => state.transactions);
  return (
    <div className="transactions">
      {transactions.map((transaction) => (
        <div
          className={
            transaction.category === "Add to treasury"
              ? "transaction treasury"
              : "transaction expenses"
          }
        >
          <h1>{transaction.message}</h1>
          <h1>
            {transaction.category === "Add to treasury" ? "+" : "-"}
            {transaction.money}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Transactions;
