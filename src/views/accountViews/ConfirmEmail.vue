<template>
  <div class="row">
    <div class="col">
      <h3>Confirm your email address</h3>
      <p>
        We have sent an email with a confirmation link to your email address. In
        order to complete the sign-up process, please click the confirmation
        link.
      </p>

      <p>
        If you do not see a confirmation email, please check your spam folder.
        Also, please verify that you entered a valid email address in our
        sign-up form.
      </p>

      <p>
        If you do not receive a confirmation email, please click button below to
        resend confirmation link to your email address.
      </p>
      <button class="btn btn-primary" @click="sendEmail()">Click me !</button>
    </div>
    <div class="col">
      <img src="@/assets/confirmEmail.jpg" class="fluid-img accountImg" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { data } from "@/shared";
export default {
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState("auth", { user: "user" }),
    ...mapState("auth", { accessToken: "accessToken" })
  },
  methods: {
    async sendEmail() {
      const Currentuser = {
        username: this.user.userName,
        useremail: this.user.email
      };
      await data.sendConfirmEmail(Currentuser, this.accessToken);
    }
  }
};
</script>

<style lang="scss" scoped></style>
