<template>
  <div>details</div>
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
    console.log(response.GoodreadsResponse.search.results.work);
  },
};
</script>

<style lang="scss" scoped>
</style>