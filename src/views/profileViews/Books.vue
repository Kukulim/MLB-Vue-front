<template>
  <div class="mt-5">
    <div v-if="loading" class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading... Please wait.</span>
    </div>
    <div
      v-if="showerrormesage"
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>We're sorry, but something went wrong.</strong>
      <button type="button" class="close" @click="this.showerrormesage = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <th>{{ book.name }}</th>
          <td>{{ book.price }}</td>
          <td>{{ book.category }}</td>
          <td>{{ book.author }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: true,
      showerrormesage: false
    };
  },
  computed: {
    ...mapState("books", { books: "books" }),
    ...mapState("auth", { accessToken: "accessToken" }),
    ...mapState("auth", { user: "user" })
  },
  async created() {
    {
      if (!this.user.isEmailConfirmed) this.$router.push({ name: "ConfirmEmail" });
      await this.loadBooks();
      this.loading = false;
    }
  },
  methods: {
    ...mapActions("books", ["getBooksAction"]),
    async loadBooks() {
      await this.getBooksAction(this.accessToken);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>