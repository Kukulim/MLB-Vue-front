<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <HeaderBarBrand />
        <Cart />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <HeaderNav />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderBarBrand from "@/components/header/header-bar-brand";
import HeaderNav from "@/components/header/header-nav";
import Cart from "@/components/cart/shoppingCart";

export default {
  name: "HeaderBar",
  components: { HeaderBarBrand, HeaderNav, Cart }
};
</script>
<style lang="scss" scoped>
.navbar {
  max-height: 70px;
}
</style>
