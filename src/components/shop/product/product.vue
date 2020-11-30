<template>
  <!-- Card Light -->
  <div class="card mb-4" style="width: 18rem;">
    <!--Card image-->
    <router-link :to="{ name: 'AuctionDetails', params: { id: item.id }}">

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

</router-link>
    <!--Card content-->
    <div class="card-body">
          <ul class="list-unstyled list-inline rating mb-0">
      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"> </i></li>
      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>
      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>
      <li class="list-inline-item mr-0"><i class="far fa-star amber-text"></i></li>
      <li class="list-inline-item"><i class="fas fa-star-half-alt amber-text"></i></li>
      <li class="list-inline-item"><p class="text-muted">4.5 (413)</p></li>
    </ul>
      <!--Title-->
      <h4 class="card-title">{{ item.name }}</h4>
      <!--Text-->
      <p class="card-text">{{ item.price }}</p>
      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
      <button
        type="button"
        class="btn btn-secondary btn-md"
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
.card{
  min-width: 200px;
  max-width: 200px;
}
.card-img-top {
width: 100%;
height: 30vh;
object-fit: contain;
}
</style>