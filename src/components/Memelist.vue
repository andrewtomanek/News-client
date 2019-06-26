<template>
  <div class="giphy__box">
    <div class="giphy__trending-results">
      <article
        class="giphy__item"
        v-for="memeItem in memeArr"
        :key="memeItem.id"
      >
        <div class="giphy__content">
          <div class="giphy__cover">
            <div class="giphy__preview">
              <img
                class="giphy__img-preview"
                v-bind:src="memeItem.images.preview_gif.url"
              />
            </div>
            <div class="giphy__original">
              <img
                class="giphy__img-original"
                v-bind:src="memeItem.images.original.url"
              />
            </div>
          </div>
          <div class="giphy__text">
            <h5 class="giphy__title">{{ memeItem.title }}</h5>
            <a class="giphy__link-source" :href="memeItem.url">go to Giphy</a>
            <a class="giphy__link-author" :href="memeItem.source_post_url">{{
              memeItem.source_tld
            }}</a>
            <p class="giphy__time">
              {{ memeItem.trending_datetime }}
            </p>
          </div>
        </div>
      </article>
    </div>
    <img src="../assets/giphy.png" />
  </div>
</template>

<script>
export default {
  name: "Memelist",
  props: {
    memeArr: Array
  }
};
</script>

<style scoped>
.giphy__container {
  margin: 0;
  padding: 0rem;
  background-color: var(--blue);
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
}

.giphy__box {
  padding: 0rem;
  margin: 0;
  background-color: var(--blue);
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  justify-content: space-around;
  width: 100vw;
}

.giphy__trending-results {
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  align-content: space-evenly;
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(30vh, 1fr));
  width: 99vw;
}

.giphy__controls {
  padding: 1rem;
  margin: 0;
  background-color: var(--water);
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
}

.giphy__item {
  padding: 0rem;
  margin: 0;
  display: flex;
  flex-flow: column;
  place-items: center;
  justify-content: space-around;
  width: 100%;
}

.giphy__item:first-child {
  grid-row-end: span 3;
  grid-column-end: span 3;
  width: 100%;
  height: 60vh;
  overflow: hidden;
}

.giphy__item:first-child .giphy__content .giphy__cover .giphy__preview {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.giphy__item:first-child .giphy__content .giphy__cover .giphy__img-preview {
  width: 90vw;
  height: 100%;
}

.giphy__item:first-child .giphy__content .giphy__cover .giphy__original {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.giphy__item:first-child .giphy__content .giphy__cover .giphy__img-original {
  width: 90vw;
  height: 100%;
}

.giphy__content {
  display: grid;
  grid: 1fr / 1fr;
  place-items: center;
  align-items: center;
  padding: 0rem;
  margin: 0rem;
  width: 100%;
}

.giphy__cover {
  grid-area: 1 / 1 / 1 / 1;
  display: grid;
  grid: 1fr / 1fr;
  overflow: hidden;
  z-index: 7;
}

.giphy__item:hover .giphy__content .giphy__cover {
  z-index: 1;
}

.giphy__preview {
  grid-area: 1 / 1 / 1 / 1;
  display: grid;
  place-items: center;
  place-content: space-around;
  width: 100%;
  height: 30vh;
  z-index: 3;
  overflow: hidden;
}

.giphy__img-preview {
  width: 100%;
  height: 30vh;
}

.giphy__original {
  grid-area: 1 / 1 / 1 / 1;
  display: grid;
  place-items: center;
  place-content: space-around;
  width: 100%;
  height: 30vh;
  z-index: 6;
  overflow: hidden;
}

.giphy__img-original {
  width: 100%;
  height: 30vh;
}

.giphy__text {
  place-self: end center;
  grid-area: 1 / 1 / 1 / 1;
  margin: 0;
  padding: 0rem;
  display: grid;
  place-items: center;
  justify-content: space-around;
  align-content: end;
  width: 100%;
  font-size: 1rem;
  z-index: 1;
}

.giphy__item:hover .giphy__content .giphy__text {
  z-index: 9;
}

.giphy__link-source {
  color: white;
  background-color: hsla(358, 83%, 46%, 0.3);
  font-size: 1rem;
  font-weight: 700;
  padding: 0.2rem;
  margin: 0.2rem;
  text-decoration: none;
  cursor: pointer;
}

.giphy__link-author {
  color: white;
  background-color: hsla(138, 83%, 46%, 0.3);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.2rem;
  margin: 0.2rem;
  text-decoration: none;
  cursor: pointer;
}

.giphy__title {
  color: white;
  padding: 0.2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
}

.giphy__time {
  font-size: 1rem;
  color: white;
  padding: 0.2rem;
  text-align: center;
  font-weight: 400;
}
</style>
