<template>
  <h1 class="mt-4 mb-4">Fortoggen password:</h1>
  <div class="row container">
    <div class="col">
      <form @submit="SendPasswordEmail($event)">
        <div class="form-group input-wrapper">
          <label for="exampleInputPassword1">Email</label>
          <i class="fa fa-key input-icon"></i>
          <input class="form-control" placeholder="email..." v-model="email" />
        </div>

        <button type="submit" class="btn btn-primary mt-3">Send</button>
      </form>
    </div>
    <div class="col">
      <img src="@/assets/password.jpg" class="fluid-img accountImg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async SendPasswordEmail(event) {
      event.preventDefault();
      console.log(this.email);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>