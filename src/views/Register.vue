<template>
  <h1 class="m-5">
    Register page:
  </h1>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">User Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="name..."
        v-model="currentUser.username"
      />
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Email:</label>
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

    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
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
        isEmailConfirmed:false
      }
    };
  },
  methods: {
    async createUser() {
        await data.register(this.currentUser);
        this.$router.push({ name: "Login" });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>