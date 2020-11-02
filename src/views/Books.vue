<template>
  <div class="mt-5">
    <div v-if="loading" class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: true,
      showerrormesage: false
    };
  },
  computed: {
    ...mapState(
      "auth",
      {
        accessToken: "accessToken"
      },
      "books",
      { books: "books" }
    )
  },
  async created() {
    {
      try {
        const response = await axios.get(`https://localhost:44338/api/books/`, {
          headers: { Authorization: `Bearer ${this.accessToken}` }
        });
        this.books = response.data;
        this.loading = false;
        console.log(response);
      } catch (error) {
        this.showerrormesage = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>