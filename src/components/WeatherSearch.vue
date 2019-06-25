<template>
  <div class="weather__search">
    <div class="weather__controls">
      <button class="submit__button" @click="getCoordinates()">
        Získat polohu
      </button>
      <form @submit.prevent="searchWord" class="search__form">
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.searchString.$error }"
        >
          <input
            class="search__input"
            v-model.trim="$v.searchString.$model"
            placeholder="Zadej město"
          />
          <button
            class="button submit__button"
            type="submit"
            :disabled="submitStatus === 'PENDING' || $v.$invalid"
          >
            Vyhledat
          </button>
        </div>
      </form>
    </div>
    <p class="error" v-if="!$v.searchString.alpha">
      Jméno pouze z písmen
    </p>
    <p class="error" v-if="!$v.searchString.minLength">
      Jméno musí mít nejméně
      {{ $v.searchString.$params.minLength.min }} písmena.
    </p>
    <p class="error" v-if="submitStatus === 'OK'">
      Požadavek odeslán!
    </p>
    <p class="error" v-if="submitStatus === 'ERROR'">
      Prosím vyplňte správně.
    </p>
    <p class="error" v-if="submitStatus === 'PENDING'">Odesílám...</p>
  </div>
</template>

<script>
import { required, alpha, minLength } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "search",
  data() {
    return {
      searchString: "",
      submitStatus: null,
      citySearch: ""
    };
  },
  validations: {
    searchString: {
      required,
      alpha,
      minLength: minLength(2)
    }
  },
  methods: {
    searchWord: function() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
      this.citySearch = this.$v.searchString.$model;
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/find?q=${
            this.citySearch
          }&units=metric&lang=cz&appid=${
            process.env.VUE_APP_OPEN_WEATHER_MAP_KEY
          }`
        )
        .then(response => {
          this.citySearch = "";
          this.$emit("searchResolved", response.data.list[0]);
          this.$emit("openWeather");
        });
    },
    getCoordinates: function() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.latitude = pos.coords.latitude;
          this.longitude = pos.coords.longitude;
          this.accuracy = pos.coords.accuracy;
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${
                this.latitude
              }&lon=${this.longitude}&units=metric&lang=cz&appid=${
                process.env.VUE_APP_OPEN_WEATHER_MAP_KEY
              }`
            )
            .then(response => {
              this.$emit("searchResolved", response.data);
              this.$emit("openWeather");
            });
        },

        error,
        options
      );

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    }
  }
};
</script>

<style scoped>
.weather__search {
  margin: 0;
  padding: 1rem;
  background-color: var(--water);
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  justify-content: space-around;
  overflow: hidden;
}

.weather__controls {
  margin: 0;
  padding: 1rem;
  background-color: var(--water);
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  justify-content: space-around;
  overflow: hidden;
}

.search__form {
  margin: 0;
  padding: 1rem;
  color: white;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: row;
  place-items: center;
  justify-content: space-around;
  overflow: hidden;
}

.weather__controls {
  margin: 0;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  justify-content: space-around;
  width: 100%;
}

.form-group {
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  place-items: center;
  justify-content: space-around;
  padding: 0.2rem;
  color: white;
}

.search__input {
  border-radius: 0.3rem;
  background-color: var(--blue);
  color: var(--water);
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
}

.input input {
  font: inherit;
  width: 100%;
  box-sizing: border-box;
  border: 0.1rem solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}

.dirty {
  border-color: #5a5;
  background: #efe;
}

.dirty:focus {
  outline-color: #8e8;
}

.error {
  background: var(--red);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.3rem 0.5rem;
}

.error:focus {
  outline-color: white;
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
