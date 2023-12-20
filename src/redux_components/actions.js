export const add_transaction = (data) => ({
  type: "add_transaction",
  payload: data,
});

export const update_balance = (data) => ({
  type: "update_balance",
  payload: data,
});

export const increment_treasury = (data) => ({
  type: "increment_treasury",
  payload: data,
});

export const decrement_treasury = (data) => ({
  type: "decrement_treasury",
  payload: data,
});
