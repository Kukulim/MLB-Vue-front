<template>
  <h1 class="mt-4 mb-4">
    Login page:
  </h1>
  <div class="row container">
<div class="col">
  <form @submit="Login($event)">
    <div class="form-group input-wrapper">
      <label for="exampleInputEmail1">User Name</label>
      <i class="fa fa-user input-icon"></i>
      <input
        type="text"
        class="form-control"
        placeholder="name..."
        v-model="currentUser.username"
      />
    </div>
    <div class="form-group input-wrapper">
      <label for="exampleInputPassword1">Password</label>
      <i class="fa fa-key input-icon"></i>
      <input
        type="password"
        class="form-control"
        placeholder="password..."
        v-model="currentUser.password"
      />
    </div>

    <div
      v-if="showerrormesage"
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Wrong username or password. Try again.</strong>
      <button type="button" class="close" @click="this.showerrormesage = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <button type="submit" class="btn btn-primary">
      Login
    </button>
  </form>
  </div>
  <div class="col">
        <img src="@/assets/login.jpg" class="fluid-img accountImg">  
  </div>
  </div>
</template>

<script>
import * as axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      currentUser: {
        username: "",
        password: ""
      },
      showerrormesage: false
    };
  },
  methods: {
    ...mapActions("auth", ["loginAction"]),
    async Login(event) {
      event.preventDefault();

      const response = await this.loginAction(this.currentUser);
      if (response == "error") {
        this.showerrormesage = true;
      } else this.$router.push({ name: "WelcomePage" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>