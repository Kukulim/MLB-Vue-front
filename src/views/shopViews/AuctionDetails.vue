<template>
  <div class="container">
    <div class="row" v-if="loading==true">
      <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
    </div>
  <div class="row" v-if="loading!=true">
    <div class="col-sm">
            <img
        class="card-img-top"
        v-bind:src="book.imageUrl"
      />
    </div>
    <div class="col-sm-10">
      <h1>{{book.name}}</h1>
      <h4><span>by</span> <span>{{book.author}}</span></h4>
    </div>

  </div>
  <button @click="BookDetails()" class="btn btn-primary btn-sm m-1">Book details</button>
</div>
</template>

<script>
import { booksdata } from "@/shared";
import { onMounted } from "vue";

export default {
  props: ["id"],
  data() {
    return {
      book: {},
      apidetails:{},
      loading:true
    };
  },
  async created() {
    this.book = await booksdata.getAuction(this.id);
console.log(this.book);
    const response = await booksdata.searchForBook(this.book.name);
    console.log(response);
    const author = this.book.author.split(" ");
    this.apidetails = response.GoodreadsResponse.search.results.work.find(
      (element) =>
      element.best_book.author.name.includes(author[0]) ||
        element.best_book.author.name.includes(author[1]) ||
        element.best_book.author.name.includes(this.book.author)
    );
    console.log(this.apidetails);
    this.loading=false;
  },
  methods: {
    BookDetails() {
      this.$router.push({
        name: "BookDetails",
        params: { bookname: this.book.name, bookauthor: this.book.author },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>