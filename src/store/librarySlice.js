import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("login"));
const books = JSON.parse(localStorage.getItem("book"));


export const librarySlice = createSlice({
  name: "library",
  initialState: {
    user: user,
    book: books  || [],
    authors: [],
    shelves: [],
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("login", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.user = null;
    },
    showBook: (state, action) => {
        const bookin = {
            ...action.payload,
            id: Math.random()
        }
        state.book.push(bookin)
        localStorage.setItem("book",JSON.stringify(state.book))
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logOut, showBook } = librarySlice.actions;

export default librarySlice.reducer;
