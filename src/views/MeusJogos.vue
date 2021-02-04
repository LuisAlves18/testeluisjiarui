<template>
  <div class="meusjogos">
    <div v-for="game in gamesIn" :key="game.id">
      <div class="card" style="width: 18rem">
        <img class="card-img-top" :src="game.img" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ game.name }}</h5>
          <p class="card-text">
            {{ game.owner }}
          </p>
          <button @click="play(game.id)">JOGAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeusJogos",
  data() {
    return {
      gamesIn:[],
      loggedUser: this.$store.state.loggedUser.id,
      gameId: ''
    };
  },
  methods: {
    play(id){
      this.gameId= id
      this.$store.dispatch('play', this.$data);
      
    }
  },
  created(){
    this.$store.state.games.forEach((game) => {
        game.players.forEach((player) => {
          if (player.idPlayer == this.loggedUser) {
            console.log("entrei");
            this.gamesIn.push(game);
          }
        });
      });
  }
};
</script>

<style>
</style>
