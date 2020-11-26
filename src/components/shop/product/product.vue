<template>
  <!-- Card Light -->
  <div class="card mb-4">
    <!--Card image-->
    <div class="view overlay">
      <img
        class="card-img-top"
        v-bind:src="API + item.imageUrl"
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
import { API_IMG } from "../../../../config"

export default {
  name: "product",
    data() {
    return {
      API:"",
    };
  },
  props: ["item"],
  methods: {
    ...mapActions("cart", ["addItemAction"]),
    addToCart(item) {
      this.addItemAction(this.item);
      console.log(this.item)
    },
  },
  created(){
    this.API = API_IMG;
  }
};
</script>

<style lang="scss" scoped>
</style>