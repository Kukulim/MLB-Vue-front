import { createStore } from "vuex";
import { data } from '@/shared';

export default createStore({
  state: {
    user: null,
    accessToken: null,
    refreshToken: null,
    remainingTokenTime: 0,
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
    },
    setRemainingTokenTime(state, remainingTokenTime) {
      state.remainingTokenTime = remainingTokenTime;
    },
    removeTokens(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    }

  },
  actions: {
    async loginAction({ dispatch }, currentUser) {
      try {
        const logedUser = await data.login(currentUser);
        await dispatch("authorizeAction", logedUser);
      } catch (error) {
        return "error"
      }
    },
    async authorizeAction({ commit, dispatch }, currentUser) {
        await commit("setCurrentUser", currentUser.username);
        await commit("setCurrentAccessToken", currentUser.accessToken);
        await commit("setCurrentRefreshToken", currentUser.refreshToken);
        return dispatch("refreshToken");
    },

    async refreshAction({ dispatch, state }) {
      console.log("refres action");
      console.log(state.refreshToken);
        const logedUser = await data.refreshToken(state.refreshToken, state.accessToken);
        console.log(logedUser.refreshToken);
        dispatch("authorizeAction", logedUser);

    },
    async refreshToken({ commit, dispatch, state }) {
      console.log("refreshtoken");
      commit("setRemainingTokenTime", 3000);
      setTimeout(() => {
        dispatch("refreshAction");
      }, state.remainingTokenTime);
    }
  },
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
