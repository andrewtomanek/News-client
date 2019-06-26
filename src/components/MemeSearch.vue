<template>
  <div class="meme__search">
    <div class="meme__controls">
      <button class="giphy__button" @click="getTrending()">
        Zobraz populární
      </button>
      <form @submit.prevent="searchWord" class="search__form">
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.searchString.$error }"
        >
          <input
            class="search__input"
            v-model.trim="$v.searchString.$model"
            placeholder="Zadej slovo"
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
      Slovo pouze z písmen
    </p>
    <p class="error" v-if="!$v.searchString.minLength">
      Slovo musí mít nejméně
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
  name: "newsinput",
  data() {
    return {
      searchString: "",
      apiString: "",
      submitStatus: null,
      errorText: false
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
      this.hideSource = false;
      this.apiString = this.$v.searchString.$model;
      axios
        .get(
          `http://api.giphy.com/v1/gifs/search?q=${this.apiString}&api_key=${
            process.env.VUE_APP_GIPHY_API_KEY
          }&limit=10`
        )
        .then(response => {
          this.$emit("searchResolved", response.data.data);
          this.$emit("showElement");
        });
    },
    getTrending: function() {
      this.showSearch = false;
      this.showTrending = true;
      axios
        .get(
          `http://api.giphy.com/v1/gifs/trending?api_key=${
            process.env.VUE_APP_GIPHY_API_KEY
          }`
        )
        .then(response => {
          this.$emit("searchResolved", response.data.data);
          this.$emit("showElement");
        });
    }
  }
};
</script>

<style scoped>
.meme__search {
  margin: 0;
  padding: 1rem;
  background-color: var(--water);
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  justify-content: space-around;
  overflow: hidden;
}

.meme__controls {
  margin: 0;
  padding: 1rem;
  background-color: var(--water);
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  place-items: center;
  justify-content: space-around;
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

.giphy__button {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 900;
  padding: 0.5rem;
  background-color: var(--green);
  border: 0.3rem solid white;
  cursor: pointer;
}

@media all and (max-width: 736px) {
  .meme__controls {
    grid-auto-flow: row;
  }

  .form-group {
    grid-auto-flow: row;
  }
}

@media all and (max-width: 480px) {
  .meme__controls {
    grid-auto-flow: row;
  }

  .form-group {
    grid-auto-flow: row;
  }
}
</style>
