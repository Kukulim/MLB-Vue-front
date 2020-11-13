<template>
<div>
<h3 class="text-center">Enter:</h3>
<div class="wrapper">
  <div class="welcomeImage hover">
    <figure>
      <img
        src="@/assets/bookshelf.jpg"
        class="img-fluid imgBookshelf"
        alt="Responsive image"
      />
      <button class="btn btn-primary btn-lg enterbutton" @click="enter()">Enter</button>
    </figure>
  </div>
  </div>
  </div>
</template>

<script>

export default {
  methods: {
     enter() {
        this.$router.push({ name: "exploreHome" });
      }
    }
  }
</script>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
  height: 640px;
}
.hover figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 15s ease-in-out;
  transition: 7s ease-in-out;
    overflow: hidden;
  height: 640px;
}
.hover figure:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  -webkit-transform: rotate(5deg) scale(1.4);
  filter: blur(3px);
}
.enterbutton{
  display: none;
  z-index: 55656;
  position: fixed;
  top:47%;
  left: 47%;
}
img:hover + .enterbutton, .enterbutton:hover {
  display: inline-block;
}
</style>
