<template>
  <div>auction details</div>
  <router-link :to="{ name: 'BookDetails', params: { book: found }}">Book details</router-link>
</template>

<script>
import { booksdata } from "@/shared";
import { onMounted } from 'vue';

export default {
  props: ["id"],
  data() {
    return {
      book: {},
    };
  },
   async mounted() {
    this.book = await booksdata.getAuction(this.id);
    const response = await booksdata.searchForBook(this.book.name)
    const author = this.book.author.split(' ');
    const found = response.GoodreadsResponse.search.results.work.find(element => element.best_book.author.name.includes(author[1])||element.best_book.author.name.includes(this.book.author));
    console.log(found);
  },
};
</script>

<style lang="scss" scoped>
</style>