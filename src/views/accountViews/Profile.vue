<template>
  <div>
    <div
      v-if="showmessage"
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Save success.</strong>
      <button type="button" class="close" @click="this.showmessage = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <form @submit="SaveChanges($event)">
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
  data() {
    return {
      showmessage: false,
    };
  },
  computed: {
    ...mapState("auth", { shippingAddress: "shippingAddress" }),
    ...mapState("auth", { CurrentUser: "user" }),
  },
  methods: {
    ...mapActions("auth", ["saveShippingAddressAction"]),

    async SaveChanges(event) {
      event.preventDefault();
      const UserToSave = {
        email: this.CurrentUser.email,
        accessToken: this.CurrentUser.accessToken,
        shippingAddress: this.shippingAddress,
      };
      await this.saveShippingAddressAction(UserToSave);
      this.showmessage = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>