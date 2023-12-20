export const add_transaction = (state = [], action) => {
  switch (action.type) {
    case "add_transaction":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

export const update_balance = (state = 0, action) => {
  switch (action.type) {
    case "update_balance":
      state = state + Number(action.payload);
      return state;
    default:
      return state;
  }
};

export const update_treasury = (state = 0, action) => {
  switch (action.type) {
    case "increment_treasury":
      state = state + Number(action.payload);
      return state;
    case "decrement_treasury":
      state = state - Number(action.payload);
      return state;
    default:
      return state;
  }
};
