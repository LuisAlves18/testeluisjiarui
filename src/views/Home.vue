<template>
  <div class="home">
    <input type="text" v-model="filterName" />
    <select name="user" id="" v-model="filterOwner">
      <option disabled value="">por favor escolha um utiliziador</option>
      <option
        v-for="user in this.$store.state.users"
        :key="user.id"
        :value="user.username"
      >
        {{ user.username }}
      </option>
    </select>

    <CardGames
      v-for="(game, i) in filteredGames"
      :game="game"
      :key="i"
    >
    </CardGames>
  </div>
</template>

<script>
import CardGames from "../components/CardGames";
export default {
  name: "Home",
  data() {
    return {
      filterName: "",
      filterOwner: "",
    };
  },
  components: {
    CardGames,
  },
  methods: {},
  computed: {
    filteredGames() {
      return this.$store.state.games.filter((game) => {
        let filterNameResult = true;
        let filterOwnerResult = true;

        // Filter continent
        if (this.filterName !== "") {
          filterNameResult = game.name === this.filterName;
        }
        if (this.filterOwner !== "") {
          filterOwnerResult = game.owner === this.filterOwner;
        }

        // Filter dates

        // return the conjunction of the two filters
        return filterNameResult && filterOwnerResult;
      });
    },
  },
};
</script>
