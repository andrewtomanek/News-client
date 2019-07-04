<template>
  <div class="weather">
    <transition v-if="!revealElement" name="fade" mode="out-in" appear>
      <div class="weather__reload">
        <button class="submit__button" @click="resetSeach()">
          Vyhledat znovu
        </button>
      </div>
    </transition>
    <div class="weather__container">
      <transition v-if="revealElement" name="fade" mode="out-in" appear>
        <MemeSearch
          v-on:searchResolved="searchResolved"
          @showElement="showElement"
        ></MemeSearch>
      </transition>
      <transition v-if="!revealElement" name="fade" mode="out-in" appear>
        <Memelist v-bind:memeArr="memeArr"></Memelist>
      </transition>
    </div>
    <img src="../assets/giphy.png" />
  </div>
</template>

<script>
import Memelist from "../components/Memelist";
import MemeSearch from "../components/MemeSearch";

export default {
  name: "weather-home",
  components: {
    Memelist,
    MemeSearch
  },
  data() {
    return {
      revealElement: true
    };
  },
  methods: {
    searchResolved: function(memeArr) {
      this.memeArr = memeArr;
    },
    showElement: function() {
      this.revealElement = false;
    },
    resetSeach: function() {
      this.revealElement = true;
    }
  }
};
</script>

<style scoped>
#app {
  display: grid;
  grid-auto-flow: row;
}

.weather__container {
  display: grid;
  grid-auto-flow: row;
  width: 100%;
}

.weather__reload {
  display: grid;
  place-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: var(--water);
}

.submit__button {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 900;
  padding: 0.5rem;
  background-color: var(--green);
  border: 0.3rem solid white;
  cursor: pointer;
}
</style>
