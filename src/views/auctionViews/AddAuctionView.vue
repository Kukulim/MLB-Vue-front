<template>
  <div>
    <div
      v-if="showmessage"
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Save success.</strong>
      <button type="button" class="close" @click="this.showmessage = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <form @submit="CreateAuction($event)">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          v-model="Book.name"
          placeholder="name..."
        />
      </div>

      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          v-model="Book.price"
        />
      </div>

      <div class="form-group">
        <label>Author</label>
        <input
          type="text"
          class="form-control"
          v-model="Book.author"
          placeholder="author..."
        />
      </div>

      <div class="form-group">
        <label>Category</label>
        <input
          type="text"
          class="form-control"
          v-model="Book.category"
          placeholder="category..."
        />
      </div>

      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          class="form-control"
          v-model="Book.imageUrl"
          placeholder="image url..."
        />
      </div>

      <button type="submit" class="btn btn-primary">Create Auction</button>
    </form>
  </div>
</template>

<script>
import { booksdata } from "@/shared/index";
import { mapState } from "vuex";
export default {
  data() {
    return {
      Book:{
        name:"",
        price:0,
        category:"",
        author:"",
        imageUrl:""
      },
      showmessage: false,
    };
  },
    computed: {
    ...mapState("auth", { accessToken: "accessToken" }),
  },
  methods: {

    async CreateAuction(event) {
      event.preventDefault();
      await booksdata.createAuction(this.Book,this.accessToken)
      this.$router.push({name:"MyAuctions"})
    },
  },
};
</script>

<style lang="scss" scoped></style>
