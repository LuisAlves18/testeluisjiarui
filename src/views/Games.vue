<template>
  <div class="games">
    <img :src="currentGame.img" alt="foto do jogo" />
    <h1>{{ currentGame.name }}</h1>
    <h3>{{ currentGame.owner }}</h3>
    <table>
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>VEZES JOGADAS</th>
        
      </tr>
      <div>
        <span v-if="currentGame.state == 'aberto'">
          <tr v-for="player in currentGame.players" :key="player.idPlayer">
            <td>{{ player.idPlayer }}</td>
            <td>{{ getPlayerById(player.idPlayer) }}</td>
            <td>{{ player.timesPlayed }}</td>
          </tr>
        </span>
        <span v-else>
          <tr>
            <td>
              {{ currentGame.players[0].idPlayer }}
            </td>
            <td>
              {{ getPlayerById(currentGame.players[0].idPlayer) }}
            </td>
            <td>
              {{ currentGame.players[0].timesPlayed }}
            </td>
          </tr>
        </span>
      </div>
    </table>
    <div v-if="isUserIn">
      <p>O user já está inscrito</p>
    </div>
    <div v-else-if="this.$store.getters.isLoggedAdmin">
      <button id="closeGame" @click="closeGame()">Fechar</button>
    </div>
    <div v-else>
      <button>INSCREVER</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games",
  data() {
    return {
      idGame: this.$route.params.gameid,
      currentGame: this.$store.state.games.find(
        (game) => game.id === this.$route.params.gameid
      ),
      userIn: "",
    };
  },
  methods: {
    closeGame() {
      this.$store.dispatch("close", this.$data);
    },
    getPlayerById(id) {
      return this.$store.state.users.find((user) => user.id == id).username;
    },
    comparePlayers(a, b) {
      if (a.timesPlayed > b.timesPlayed) return -1;
      if (a.timesPlayed < b.timesPlayed) return 1;
      if (a.timesPlayed === b.timesPlayed) return 0;
    },
  },
  created() {
    this.currentGame.players.sort(this.comparePlayers);
  },
  computed: {
    isUserIn() {
      this.currentGame.players.forEach((player) => {
        if (player.idPlayer === this.$store.state.loggedUser.id) {
          this.userIn = true;
        } else {
          this.userIn = false;
        }
      });
      return this.userIn;
    },
  },
};
</script>

<style>
</style>