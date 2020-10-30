import { data } from '@/shared';

export default {
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
        commit("setRemainingTokenTime", 1000*60*19);
        setTimeout(() => {
          dispatch("refreshAction");
        }, state.remainingTokenTime);
      }
    }
