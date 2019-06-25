<template>
  <div class="sourceselection">
    <div class="source__box">
      <span
        class="source__item"
        v-for="source in sources"
        v-bind:value="source.id"
        @click="pickSource(source.id)"
        :key="source.id"
      >
        {{ source.name }}
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sourceselection",
  data() {
    return {
      sources: [],
      source: "",
      hideSource: true,
      errorText: false
    };
  },
  methods: {
    pickSource: function(id) {
      if (!id) return;
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${
            process.env.VUE_APP_NEWS_API_KEY
          }`
        )
        .then(response => {
          this.$emit("newsResults", response.data.articles);
          this.$emit("hideSource");
        });
    }
  },
  created: function() {
    axios
      .get(
        `https://newsapi.org/v2/sources?language=en&apiKey=${
          process.env.VUE_APP_NEWS_API_KEY
        }`
      )
      .then(response => {
        this.sources = response.data.sources;
      });
  }
};
</script>

<style scoped>
.source__box {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 95vw;
}

.source__item {
  font-size: 1rem;
  color: white;
  background: var(--red);
  padding: 0.2rem;
  margin: 0.2rem;
  text-align: center;
  z-index: 2;
  cursor: pointer;
}

.search__form {
  margin: 0;
  padding: 2rem;
  background: var(--red);
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
}

.search__container {
  display: grid;
  grid-auto-flow: row;
  margin: 0;
  width: 100%;
}

.search__input {
  color: var(--red);
  width: 100%;
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Tahoma";
  text-align: center;
}

.search__box {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(30vh, 1fr));
  width: 99vw;
  overflow: hidden;
}
.search__item {
  display: grid;
  grid: 1fr / 1fr;
  overflow: hidden;
}

.search__item:first-child {
  grid-area: 1 / 1 / 3 / 3;
  overflow: hidden;
}

.search__item:first-child .search__img-box .search__link-img .search__img {
  width: 120%;
  height: 100%;
}

.search__item:nth-child(4n) {
  grid-row-end: span 3;
  grid-column-end: span 3;
  overflow: hidden;
}

.search__item:nth-child(4n) .search__img-box .search__link-img .search__img {
  width: 100vw;
  height: 100%;
}

.search__img-box {
  grid-area: 1 / 1 / 1 / 1;
  display: grid;
  place-items: center;
  place-content: space-around;
}

.search__link-img {
  text-decoration: none;
  width: 100%;
}

.search__img {
  width: 100%;
  height: 30vh;
  filter: invert(0%);
}
.search__item:hover .search__img-box .search__link-img .search__img {
  filter: grayscale(50) blur(5px);
}

.search__text-box {
  grid: 1fr / 1fr;
  grid-area: 1 / 1 / 1 / 1;
  display: grid;
  grid-auto-flow: row;
  margin: 0;
  width: 100%;
  height: 30vh;
  z-index: 9;
  overflow: hidden;
}

.search__header {
  grid-area: 1 / 1 / 1 / 1;
  width: 100%;
  overflow: hidden;
  opacity: 1;
}

.search__item:hover .search__text-box .search__header {
  opacity: 0;
}

.search__title {
  color: white;
  background-color: hsla(13, 69%, 50%, 0.6);
  width: 100%;
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Tahoma";
  text-align: center;
}

.search__link-txt {
  color: white;
  text-decoration: none;
}

.search__author {
  color: white;
  font-family: georgia, arial;
  font-size: 0.8rem;
  font-weight: 300;
}

.search__content {
  grid-area: 1 / 1 / 1 / 1;
  color: white;
  text-align: left;
  font-family: georgia, arial;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  opacity: 0;
}

.search__item:hover .search__text-box .search__content {
  opacity: 1;
}
</style>
