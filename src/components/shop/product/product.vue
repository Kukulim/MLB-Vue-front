<template>
  <!-- Card Light -->
  <div class="card mb-4">
    <!--Card image-->
    <div class="view overlay">
      <img
        v-if="item.imageUrl != null"
        class="card-img-top"
        v-bind:src="item.imageUrl"
        alt="Card image cap"
      />
      <img
        v-if="item.imageUrl == null"
        class="card-img-top"
        src="@/assets/mockBook.jpg"
        alt="Card image cap"
      />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <!--Card content-->
    <div class="card-body">
      <!--Title-->
      <h4 class="card-title">{{ item.name }}</h4>
      <!--Text-->
      <p class="card-text">{{ item.price }}</p>
      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
      <button
        type="button"
        class="btn btn-light-blue btn-md"
        @click="addToCart()"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "product",
  props: ["item"],
  methods: {
    ...mapActions("cart", ["addItemAction"]),
    addToCart(item) {
      this.addItemAction(this.item);
      console.log(this.item)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>