<template>
<h1 class="m-5">
  Register page:
</h1>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">User Name</label>
    <input type="text" class="form-control" placeholder="name..." v-model="currentUser.username">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" placeholder="password..." v-model="currentUser.password">
  </div>

  <button type="submit" class="btn btn-primary" @click="createUser()">Register</button>
</form>
</template>

<script>
  import * as axios from 'axios';

  export default {
      data() {
    return {  
      currentUser:{
        username:"",
        password:""
      },
    };
  },
  methods:{
    createUser(){
        try{
    axios.post(`https://localhost:44338/api/Account/register`, this.currentUser, {headers: {"Content-Type": "application/json"}});
    this.$router.push({ name: 'Login' });
  } catch (error) {
    console.error(error);
    return null;
}
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>