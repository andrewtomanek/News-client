<template>
  <div class="weather">
    <transition v-if="!revealWeather" name="fade" mode="out-in" appear>
      <div class="weather__reload">
        <button class="submit__button" @click="resetSeach()">
          Vyhledat znovu
        </button>
      </div>
    </transition>
    <div class="weather__container">
      <transition v-if="revealWeather" name="fade" mode="out-in" appear>
        <ForecastSearch
          v-on:fetchedData="fetchedData"
          v-on:fetchedCity="fetchedCity"
          @openWeather="openWeather"
        ></ForecastSearch>
      </transition>
      <transition v-if="!revealWeather" name="fade" mode="out-in" appear>
        <ForecastList
          v-bind:forecastData="forecastData"
          v-bind:city="city"
        ></ForecastList>
      </transition>
    </div>
  </div>
</template>

<script>
import ForecastList from "../components/ForecastList";
import ForecastSearch from "../components/ForecastSearch";

export default {
  name: "weather-home",
  components: {
    ForecastList,
    ForecastSearch
  },
  data() {
    return {
      forecastData: [],
      city: {
        id: 0,
        name: "",
        coord: {
          lat: 0,
          lon: 0
        },
        country: "",
        population: 0
      },
      revealWeather: true
    };
  },
  methods: {
    fetchedData: function(forecastData) {
      this.forecastData = forecastData;
    },
    fetchedCity: function(city) {
      this.city = city;
    },
    openWeather: function() {
      this.revealWeather = false;
    },
    resetSeach: function() {
      this.revealWeather = true;
    }
  }
};
</script>

<style scoped>
.weather {
  width: 100%;
  margin: 0;
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
