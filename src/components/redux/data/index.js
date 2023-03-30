import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameDehyari: ".....",
  date: ".....",
  number: ".....",
  joined: ".....",
  price: "00000",
  priceWords: ".....",
  fors: ".....",
  payTo: ".....",
  numberSheets: ".....",
  typeAccount: "جاری",
  account: ".....",
  ckeckNumber: ".....",
  admin: ".....",
  years: ".....",
  financial: ".....",
  table: [],
  fakeTable: [],
};

const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    nameDehyari: (state, action) => {
      state.nameDehyari = action.payload;
    },
    date: (state, action) => {
      state.date = action.payload;
    },
    number: (state, action) => {
      state.number = action.payload;
    },
    joined: (state, action) => {
      state.joined = action.payload;
    },
    price: (state, action) => {
      state.price = action.payload;
    },
    priceWords: (state, action) => {
      state.priceWords = action.payload;
    },
    fors: (state, action) => {
      state.fors = action.payload;
    },
    payTo: (state, action) => {
      state.payTo = action.payload;
    },
    numberSheets: (state, action) => {
      state.numberSheets = action.payload;
    },
    typeAccount: (state, action) => {
      state.typeAccount = action.payload;
    },
    account: (state, action) => {
      state.account = action.payload;
    },
    ckeckNumber: (state, action) => {
      state.ckeckNumber = action.payload;
    },
    admin: (state, action) => {
      state.admin = action.payload;
    },
    years: (state, action) => {
      state.years = action.payload;
    },
    financial: (state, action) => {
      state.financial = action.payload;
    },
    table: (state, action) => {
      state.table = [...state.table, { ...action.payload }];
    },
    deleteTable: (state, action) => {
      const itemId = action.payload;
      state.table = state.table.filter((item) => item.id !== itemId);
    },
    fakeTable: (state) => {
      const countTable = state.table.length;
      state.fakeTable = state.table;
      if (countTable < 12) {
        for (let index = 0; index < 12 - countTable; index++) {
          state.fakeTable = [...state.fakeTable, { id: " " }];
        }
      }
    },
    reset: () => initialState,
  },
});

export const {
  nameDehyari,
  date,
  number,
  joined,
  price,
  priceWords,
  fors,
  financial,
  ckeckNumber,
  account,
  admin,
  typeAccount,
  numberSheets,
  payTo,
  years,
  handleUpdate,
  table,
  deleteTable,
  reset,
  fakeTable,
} = data.actions;

export default data.reducer;
