<template>
  <div class="navbar">
    <router-link to="/">Home</router-link> | |
    <router-link to="/meusjogos">MeusJogos</router-link>
    <div v-if="!this.$store.getters.isLoggedUser">
      <span>
        <router-link class="navRouter" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </span>
    </div>
    <div v-else>
      <span>
        {{ this.$store.getters.getLoggedUser.username }}|
        <router-link @click.native="logout" to="/">Logout</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
</style>