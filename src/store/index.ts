import { createStore } from "vuex";
import { data } from '@/shared';

export default createStore({
  state: {
    user: null,
    accessToken: null,
    refreshToken: null,
  },
  mutations: {
    setCurrentUser(state, user) {
      state.user = user;
    },
    setCurrentAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setCurrentRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
    }

  },
  actions: {},
  modules: {},
  getters: {
    isLoggedIn(state) {
      return !!state.accessToken;
    },
    getCurrentUser(state) {
      return state.user;
    },
    getCurrentaccessToken(state) {
      return state.accessToken;
    },
    getCurrentRefreshToken(state) {
      return state.refreshToken;
    }
  }
});
