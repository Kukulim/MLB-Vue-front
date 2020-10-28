
<template>
  <nav class="ml-auto">
    <ul v-if="!isLoggedIn" class="navbar-nav">
      <router-link to="/register" class="nav-link ">
        Register
      </router-link>
      <router-link to="/login" class="nav-link ">
        Login
      </router-link>
    </ul>
        <ul v-if="isLoggedIn" class="navbar-nav">
      <router-link to="/books" class="nav-link ">
        Books
      </router-link>
       <router-link to="/" class="nav-link" @click="logout()">
        Logout
      </router-link>
    </ul>
  </nav>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods:{
      ...mapMutations([
      "setCurrentUser",
      "setCurrentAccessToken",
      "setCurrentRefreshToken"
    ]),
    logout(){
        this.setCurrentUser(null);
        this.setCurrentAccessToken(null);
        this.setCurrentRefreshToken(null);
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>
<style scoped>
</style>