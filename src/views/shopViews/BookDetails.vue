<template>
  <div>book details</div>
</template>

<script>
import { booksdata } from "@/shared";

export default {
  props: ["bookname", "bookauthor"],
  data() {
    return {
      apidetails: {},
    };
  },
  async mounted() {
    const response = await booksdata.searchForBook(this.bookname);
    const author = this.bookauthor.split(" ");
    this.apidetails = response.GoodreadsResponse.search.results.work.find(
      (element) =>
        element.best_book.author.name.includes(author[1]) ||
        element.best_book.author.name.includes(this.book.author)
    );
    console.log(this.apidetails);
  },
};
</script>

<style lang="scss" scoped>
</style>