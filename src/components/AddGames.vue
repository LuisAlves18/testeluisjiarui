<template>
  <div id="addgames">
    <form @submit.prevent="addGame">
      <input type="text" placeholder="Nome" v-model="name" />
      <input type="url" placeholder="Imagem" v-model="img" />
      <input type="submit" placeholder="ADICIONAR" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddGames",
  data() {
    return {
      id: this.getNextId(),
      name: "",
      owner: this.$store.state.loggedUser.username,
      img: "",
      players:[],
      state:'aberto'
    }
  },
  methods:{
      getNextId(){
          if (this.$store.state.games.length == 0) {
                    return 1
                } else {
                    return this.$store.state.games[this.$store.state.games.length - 1].id + 1
                }
      },
      addGame(){
          this.$store.dispatch("addGame", this.$data);
      }
  }
};
</script>

<style>
</style>