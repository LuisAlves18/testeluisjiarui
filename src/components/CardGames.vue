<template>
  <div class="cardgames">
    <div class="CardGame">
      <div class="card" style="width: 18rem">
        <img class="card-img-top" :src="game.img" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ game.name }}</h5>
          <p class="card-text">
            {{ game.owner }}
          </p>
          <router-link 
                    :to="{ name: 'Games', params: { gameid: game.id } }">
                    VER
                  </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardGames",
  data() {
    return {};
  },
  props: {
    game: {
      type: Object
    }
  }
};
</script>

<style>
</style>