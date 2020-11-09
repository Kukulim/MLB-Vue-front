<template>
  <div id="app">
    <HeaderBar />
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/header/header-bar.vue'

export default {
  name: 'App',
  components: 
  { HeaderBar }
}
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
