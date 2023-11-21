import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("login"));
const books = JSON.parse(localStorage.getItem("book"));
const shelv = JSON.parse(localStorage.getItem("shelves"));
const author = JSON.parse(localStorage.getItem("authors"));

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    user: user,
    book: books || [],
    shelves: shelv || [],
    authors: author || [],
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
        id: Math.random(),
      };
      state.book.push(bookin);
      localStorage.setItem("book", JSON.stringify(state.book));
    },
    Bookdelete: (state, action) => {
      const detete = action.payload;
      state.book = state.book.filter((book) => book.id !== detete);
      localStorage.setItem("book", JSON.stringify(state.book));
    },
    Bookedit: (state, action) => {
      const Bookedit = action.payload;
      state.book = state.book.map((bedit) =>
        bedit.id === Bookedit.id ? { ...Bookedit } : bedit
      );
      localStorage.setItem("book", JSON.stringify(state.book));
    },
    Addshelves: (state, action) => {
      const shelvein = {
        ...action.payload,
        id: Math.random(),
      };
      state.shelves.push(shelvein);
      localStorage.setItem("shelves", JSON.stringify(state.shelves));
    },
    Addauthor: (state, action) => {
      const authorin = {
        ...action.payload,
        id: Math.random(),
      };
      state.authors.push(authorin);
      localStorage.setItem("authors", JSON.stringify(state.authors));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginUser,
  logOut,
  showBook,
  Addshelves,
  Addauthor,
  Bookdelete,
  Bookedit,
} = librarySlice.actions;

export default librarySlice.reducer;
