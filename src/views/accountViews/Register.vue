<template>
  <h1 class="mt-4 mb-4">
    Register page:
  </h1>
  <div class="row">
    <div class="col">
      <form>
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
          <label for="exampleInputEmail1">Email:</label>
          <i class="fa fa-envelope input-icon"></i>
          <input
            type="email"
            class="form-control"
            placeholder="email@email..."
            v-model="currentUser.email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
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

        <button type="submit" class="btn btn-primary" @click="createUser()">
          Register
        </button>
      </form>
    </div>
    <div class="col">
      <img src="@/assets/register.jpg" class="fluid-img accountImg" />
    </div>
  </div>
</template>

<script>
import { data } from "@/shared";

export default {
  data() {
    return {
      currentUser: {
        username: "",
        password: "",
        email: "",
        isEmailConfirmed: false
      }
    };
  },
  methods: {
    async createUser() {
      await data.register(this.currentUser);
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
