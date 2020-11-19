<template>
   <span class="badge badge-secondary">{{ cartCount }}</span>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Shopping",
  computed: {
    ...mapState("cart", { StoreCart: "StoreCart" }),
    ...mapGetters("cart", { cartCount: "getCartLenght" })
  }
};
</script>

<style lang="scss" scoped>
.badge{
  font-size: 16px;
}
</style>