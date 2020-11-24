<template>
  <div>
    <form>
      <div class="form-group">
        <label>Firstname (or company name)</label>
        <input
          type="text"
          class="form-control"
          v-model="shippingAddress.surName"
          placeholder="fist name..."
        />
      </div>

      <div class="form-group">
        <label>Lastname (or NIP)</label>
        <input
          type="text"
          class="form-control"
          v-model="shippingAddress.lastName"
          placeholder="last name..."
        />
      </div>

      <div class="form-group">
        <label>State</label>
        <input
          type="text"
          class="form-control"
          v-model="shippingAddress.state"
          placeholder="state..."
        />
      </div>

      <div class="form-group">
        <label>Street</label>
        <input
          type="text"
          class="form-control"
          v-model="shippingAddress.street"
          placeholder="street..."
        />
      </div>

      <div class="form-group">
        <label>HouseNumber</label>
        <input
          type="text"
          class="form-control"
          v-model="shippingAddress.houseNumber"
          placeholder="house number..."
        />
      </div>

      <div class="form-group">
        <label>ApartmentNumber</label>
        <input
          type="text"
          class="form-control"
          v-model="shippingAddress.apartmentNumber"
          placeholder="apartment number..."
        />
      </div>

      <div class="form-group">
        <label>ZipCode</label>
        <input
          type="text"
          class="form-control"
          v-model="shippingAddress.zipCode"
          placeholder="zip code..."
        />
      </div>

      <div class="form-group">
        <label>City</label>
        <input
          type="text"
          class="form-control"
          v-model="shippingAddress.city"
          placeholder="city..."
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("auth", { shippingAddress: "shippingAddress" }),
  },
};
</script>

<style lang="scss" scoped>
</style>