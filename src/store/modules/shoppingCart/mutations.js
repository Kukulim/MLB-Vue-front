export default {
  addItem(state, product) {
    state.StoreCart.push(product);
  },

  removeItem(state, id) {
    state.StoreCart = state.StoreCart.filter( el => el.id !== id );;
},
};
