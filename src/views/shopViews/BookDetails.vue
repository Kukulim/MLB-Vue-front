<template>
  <div class="container">
    <div class="row" v-if="loading==true">
      <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
    </div>
  <div class="row" v-if="loading!=true">
    <div class="col-sm">
details
    </div>

  </div>
</div>
</template>

<script>
import { booksdata } from "@/shared";

export default {
  props: ["bookname", "bookauthor"],
  data() {
    return {
      apidetails: {},
      loading:true,
    };
  },
  async created() {
    this.apidetails = await booksdata.searchForBookDetails(this.bookname,this.bookauthor);
    console.log(this.apidetails);
    this.loading=false;
  },
};
</script>

<style lang="scss" scoped>
  
</style>