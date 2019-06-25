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
        <WeatherSearch
          v-on:searchResolved="searchResolved"
          @openWeather="openWeather"
        ></WeatherSearch>
      </transition>
      <transition v-if="!revealWeather" name="fade" mode="out-in" appear>
        <Weatherlist v-bind:city="city"></Weatherlist>
      </transition>
    </div>
  </div>
</template>

<script>
import Weatherlist from "../components/Weatherlist";
import WeatherSearch from "../components/WeatherSearch";

export default {
  name: "weather-home",
  components: {
    Weatherlist,
    WeatherSearch
  },
  data() {
    return {
      city: {
        coord: { lon: 0, lat: 0 },
        weather: [{ id: 0, main: "", description: "", icon: "" }],
        main: {
          temp: 0,
          pressure: 0,
          humidity: 0,
          temp_min: 0,
          temp_max: 0
        },
        visibility: 0,
        wind: { speed: 0, deg: 0 },
        clouds: { all: 0 },
        rain: { "1h": 0, "3h": 0 },
        snow: { "1h": 0, "3h": 0 },
        dt: 0,
        sys: {
          country: "",
          sunrise: 0,
          sunset: 0
        },
        name: ""
      },
      revealWeather: true
    };
  },
  methods: {
    searchResolved: function(city) {
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

<style>
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
