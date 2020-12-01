<template>
    <div>
book details
    </div>
</template>

<script>
    export default {
          props: ["book"],
          created(){
              console.log(this.book);
          }
    }
</script>

<style lang="scss" scoped>

</style>