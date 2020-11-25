<template>
  <div>
    <h1>Books:</h1>
    <div class="card-deck">
    <Product     
      v-for="product  in  products"
      :key="product.id"
      :item="product"
    /></div>
    </div>
</template>

<script>
import Product from "@/components/shop/product/product";
import { booksdata } from "@/shared";

export default {
    data() {
    return {
      products:[]
    };
  },
  components: {
    Product,
  },
    async created() {
    {
      this.products = await booksdata.getAllBooks();
    }
  },
};
</script>

<style lang="scss" scoped></style>
