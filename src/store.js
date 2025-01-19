import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortPrice: "optimal",
  transfers: ["all", 0, 1, 2, 3],
};

const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
      setSortPrice(state, action) {
        state.sortPrice = action.payload;
      },
      setTransfers(state, action) {
        const selected = action.payload;
        if (selected === "all") {
          state.transfers = state.transfers.includes("all")
            ? []
            : ["all", 0, 1, 2, 3];
        } else {
          const updatedTransfers = state.transfers.includes(selected)
            ? state.transfers.filter((t) => t !== selected)
            : [...state.transfers, selected];
  
          const cleanedTransfers = updatedTransfers.filter((t) => t !== "all");
          const allOptions = [0, 1, 2, 3];
  
          if (
            allOptions.every((opt) => cleanedTransfers.includes(opt)) &&
            !cleanedTransfers.includes("all")
          ) {
            cleanedTransfers.push("all");
          }
  
          state.transfers = cleanedTransfers;
        }
      },
    },
  });
  

export const { setSortPrice, setTransfers } = ticketsSlice.actions;

const store = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
  },
});

export default store;
