<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in StoreCart" :key="product.id">
          <th>{{ product.name }}</th>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.author }}</td>
          <button class="btn btn-warning" @click="removeItem(product.id)"><i class="fa fa-trash"></i></button>
        </tr>
      </tbody>
    </table>

    <router-link class="btn btn-primary" to="/shophome">Back to shop</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("cart", { StoreCart: "StoreCart" }),
  },
    methods: {
    ...mapActions("cart", ["removeItemAction"]),
    async removeItem(id){
        await this.removeItemAction(id);
    }
    }
};
</script>

<style lang="scss" scoped>
</style>