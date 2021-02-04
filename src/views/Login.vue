<template>
  <div class="login">
    <form id="form-login" @submit.prevent="login">
      <input
        type="text"
        class="inputLogin"
        placeholder="username"
        v-model="username"
      />
      <br />
      <input
        type="text"
        class="inputLogin"
        placeholder="password"
        v-model="password"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      try {
        //chamar ação login
        this.$store.dispatch("login", this.$data);
        //saltar para a view Home
        this.$router.push({ name: "Home" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>
</style>