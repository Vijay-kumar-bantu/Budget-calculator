import { configureStore } from "@reduxjs/toolkit";
import { add_transaction, update_balance, update_treasury } from "./reducers";

const store = configureStore({
  reducer: {
    treasury: update_treasury,
    balance: update_balance,
    transactions: add_transaction,
  },
});

export default store;
