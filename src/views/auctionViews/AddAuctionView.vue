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
      <div class="form-group">
        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          class="form-control"
          placeholder="image url..."
          @change="uploadImage($event)"
          id="file-input"
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
        imageUrl:"",
        UserId:""
      },
      uploadedImageUrl: "",
      showmessage: false,
    };
  },
    computed: {
    ...mapState("auth", { currentUser: "user" }),
  },
  methods: {
    async CreateAuction(event) {
      event.preventDefault();
      this.Book.imageUrl=this.uploadedImageUrl;
      this.Book.UserId = this.currentUser.userId;
      await booksdata.createAuction(this.Book,this.currentUser.accessToken)
      this.$router.push({name:"MyAuctions"})
    },
    async uploadImage(event) {
          const data = new FormData();
            data.append('name', 'my-picture');
            data.append('file', event.target.files[0]);
      const response = await booksdata.updateImage(data,this.currentUser.accessToken);
      this.uploadedImageUrl = response.dbPath;
    }
  },
};
</script>

<style lang="scss" scoped></style>
