<template>
  <div>
    <h1>Books:</h1>
    <div class="card-deck">
    <Product     
      v-for="product  in  products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :image="product.image"
      :price="product.price"
    /></div>
    </div>
</template>

<script>
import Product from "@/components/shop/product/product";
import { data } from "@/shared";

export default {
    data() {
    return {
      products:[]
    };
  },
  components: {
    Product
  },
    async created() {
    {
      this.products = await data.getAllBooks();
    }
  },
};
</script>

<style lang="scss" scoped></style>
