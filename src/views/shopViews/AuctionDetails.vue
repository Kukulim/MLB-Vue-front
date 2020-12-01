<template>
  <div>auction details</div>
  <button @click="BookDetails()">Book details</button>
</template>

<script>
import { booksdata } from "@/shared";
import { onMounted } from "vue";

export default {
  props: ["id"],
  data() {
    return {
      book: {},
    };
  },
  async mounted() {
    this.book = await booksdata.getAuction(this.id);
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