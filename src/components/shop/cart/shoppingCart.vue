<template>
  <div class="nav-link">
    <router-link class="btn btn-primary btn-sm cart" to="/cartdetails"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> <CartCounter /></router-link>
  </div>
</template>

<script>
import CartCounter from "@/components/shop/cart/CartCounter";

export default {
  name: "shoppingCart",
  components: {
    CartCounter,
  },
};
</script>

<style lang="scss" scoped>
.cart{
    color: white;
    border-radius: 5px;;
}
</style>