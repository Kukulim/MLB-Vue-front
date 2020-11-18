export default {
  addItem(state, id) {
    state.StoreCart.push(id);
  },

  removeItem(state, index) {
    state.StoreCart.splice(index, 1);
},
};
