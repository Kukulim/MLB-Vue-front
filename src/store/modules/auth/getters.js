export default {
  isLoggedIn(state) {
    return !!state.accessToken;
  },
  getCurrentUser(state) {
    return state.user;
  },
  getCurrentUserShippingAddress(state) {
    return state.shippingAdress;
  },
  getCurrentaccessToken(state) {
    return state.accessToken;
  },
  getCurrentRefreshToken(state) {
    return state.refreshToken;
  }
};
