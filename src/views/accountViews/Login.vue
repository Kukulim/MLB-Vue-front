<template>
  <h1 class="mt-4 mb-4">Login page:</h1>
  <div class="row container">
    <div class="col">
      <form @submit="Login($event)">
        <div class="form-group input-wrapper">
          <label for="exampleInputEmail1">Email</label>
          <i class="fa fa-envelope input-icon"></i>
          <input
            type="email"
            class="form-control"
            placeholder="email@email..."
            v-model="currentUser.email"
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
        <div>
          <router-link to="/forgottenpassword"> Forgotten Password </router-link>
        </div>

        <div
          v-if="showerrormesage"
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Wrong username or password. Try again.</strong>
          <button
            type="button"
            class="close"
            @click="this.showerrormesage = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <button type="submit" class="btn btn-primary mt-3">Login</button>
      </form>
    </div>
    <div class="col">
      <img src="@/assets/login.jpg" class="fluid-img accountImg" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      currentUser: {
        email: "",
        password: "",
      },
      showerrormesage: false,
    };
  },
  methods: {
    ...mapActions("auth", ["loginAction"]),
    async Login(event) {
      event.preventDefault();

      const response = await this.loginAction(this.currentUser);
      if (response == "error") {
        this.showerrormesage = true;
      } else this.$router.push({ name: "ShopHome" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
