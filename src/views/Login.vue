<template>
  <h1 class="m-5">
    Login page:
  </h1>
  <form @submit="Login($event)">
    <div class="form-group">
      <label for="exampleInputEmail1">User Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="name..."
        v-model="currentUser.username"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="password..."
        v-model="currentUser.password"
      />
    </div>


<div v-if="showerrormesage" class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Wrong username or password. Try again.</strong>
  <button type="button" class="close" @click="this.showerrormesage=false">
    <span aria-hidden="true">&times;</span>
  </button>
</div>


    <button type="submit" class="btn btn-primary">
      Login
    </button>
  </form>
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
      showerrormesage:false     
    };
  },
  methods: {
    ...mapActions([
      "loginAction",
    ]),
    async Login(event) {
      event.preventDefault()

        const response = await this.loginAction(this.currentUser);
        if (response=="error") {
          this.showerrormesage=true;
        }
        else this.$router.push({ name: "WelcomePage" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>