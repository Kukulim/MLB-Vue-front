<template>
  <!-- Card Light -->
  <div class="card mb-4">
    <!--Card image-->
    <div class="view overlay">
      <img
        class="card-img-top"
        src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
        alt="Card image cap"
      />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <!--Card content-->
    <div class="card-body">
      <!--Title-->
      <h4 class="card-title">{{ name }}</h4>
      <!--Text-->
      <p class="card-text">{{ price }}</p>
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
  props: ["id", "name", "image", "price"],
  methods: {
    ...mapActions("cart", ["addItemAction"]),
    addToCart(id) {
      this.addItemAction(id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>