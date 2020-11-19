export default {
    getStoreCart(state) {
      return state.StoreCart;
    },
    getCartLenght(state){
        return state.StoreCart.length
    }
}