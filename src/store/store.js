import { createStore } from "vuex";
import auth from "./modules/auth";
import books from "./modules/books";
import cart from "./modules/shoppingCart";

export default createStore({
  modules: {
    auth,
    books,
    cart
  }
});
