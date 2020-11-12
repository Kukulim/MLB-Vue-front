<template>
  <div class="welcomeImage hover">
    <figure>
      <img
        src="@/assets/bookshelf.jpg"
        class="img-fluid imgBookshelf"
        alt="Responsive image"
      />
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomePage"
});
</script>

<style scoped lang="scss">
.figure {
  overflow: hidden;
}
.hover figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 2s ease-in-out;
  transition: 1s ease-in-out;
}
.hover figure:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  -webkit-transform: rotate(15deg) scale(1.4);
  filter: blur(3px);
}
</style>
