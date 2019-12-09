<template>
  <div id="app">
    <!-- <test></test> -->
    <router-view></router-view>
      <!-- Email: <input v-model="input1" type="text" name="fname"><br>
      Password: <input v-model="input2" type="text" name="lname"><br>
      <button type="button" @click="AddUser">Add User</button><br>

      Email: <input v-model="input1" type="text" name="fname"><br>
      Password: <input v-model="input2" type="text" name="lname"><br>
      <button type="button" @click="DeleteUser">Delete User</button><br>

      Email: <input v-model="input1" type="text" name="fname"><br>
      Password: <input v-model="input2" type="text" name="lname"><br>
      <button type="button" @click="Login">Login</button><br>

      Email: <input v-model="input1" type="text" name="fname"><br>
      Old Password: <input v-model="input2" type="text" name="lname"><br>
      New Password: <input v-model="input3" type="text" name="lname"><br>
      <button type="button" @click="ChangePass">Change Password</button><br>

      Email: <input v-model="input1" type="text" name="fname"><br>
      <button type="button" @click="ForgotPass">Forgot Password</button><br>

      Email: <input v-model="input1" type="text" name="fname"><br>
      Password: <input v-model="input2" type="text" name="lname"><br>
      <button type="button" @click="AddRole">Add role</button><br>


      Email: <input v-model="input1" type="text" name="fname"><br>
      Password: <input v-model="permisions1" type="text" name="lname"><br>
      Password: <input v-model="permisions2" type="text" name="lname"><br>
      Password: <input v-model="permisions3" type="text" name="lname"><br>
      <button type="button" @click="Permissions">Permissions</button><br> -->

  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input1: null,
      input2: null,
      input3: null,
      permisions: [],
      permisions1: null,
      permisions2: null,
      permisions3: null,
    }
  },
  methods: {
    AddUser(){
      event.preventDefault();
      axios
      .post('http://3b4ba40a.ngrok.io/add-user',{
        email: this.input1,
        password: this.input2,
      })
      .then(response=>{
        console.log(response,'hi');
      })
    },
    DeleteUser(){
      event.preventDefault();
      axios
      .post('http://3b4ba40a.ngrok.io/delete-user',{
        email: this.input1,
        password: this.input2,
      })
      .then(response=>{
        console.log(response,'hi');
      })
    },
    Login(){
      event.preventDefault();
      axios
      .post('http://3b4ba40a.ngrok.io/login',{
        email: this.input1,
        password: this.input2,
      })
      .then(response=>{
        console.log(response,'hi');
      })
    },
    ChangePass(){
      event.preventDefault();
      axios
      .post('http://3b4ba40a.ngrok.io/change-password',{
        email: this.input1,
        old_password: this.input2,
        new_password: this.input3,
      })
      .then(response=>{
        console.log(response,'hi');
      })
    },
    ForgotPass(){
      event.preventDefault();
      axios
      .post('http://3b4ba40a.ngrok.io/forgot-password',{
        email: this.input1,
      })
      .then(response=>{
        console.log(response,'hi');
      })
    },
    AddRole(){
      event.preventDefault();
      axios
      .post('http://3b4ba40a.ngrok.io/add-role',{
        email: this.input1,
        rolename: this.input2,
      })
      .then(response=>{
        console.log(response,'hi');
      })
    },
    Permissions(){
      event.preventDefault();
      this.permisions.push(this.permisions1);
      this.permisions.push(this.permisions2);
      this.permisions.push(this.permisions3);
      axios
      .post('http://3b4ba40a.ngrok.io/add-permissions',{
        email: this.input1,
        permissions: this.permisions,
      })
      .then(response=>{
        console.log(response,'hi');
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
