<template>
  <div class="news__container">
    <ul class="news__list">
      <li class="news__item" v-for="article in newsData" :key="article.id">
        <div class="news__img-box">
          <a class="news__link-img" v-bind:href="article.url" target="_blank">
            <img class="news__img" v-bind:src="article.urlToImage" />
          </a>
        </div>
        <div class="news__text-box">
          <div class="news__header">
            <h4 class="news__title">
              <a
                class="news__link-txt"
                v-bind:href="article.url"
                target="_blank"
                >{{ article.title }}</a
              >
            </h4>
            <h5 class="news__author">{{ article.author }}</h5>
          </div>
          <p class="news__content">{{ article.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newslist",
  props: ["newsData"]
};
</script>

<style scoped>
.news__container {
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  justify-content: space-around;
  overflow: hidden;
}

.news__list {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(30vh, 1fr));
  overflow: hidden;
  margin: 0;
  padding: 0.5rem;
}
.news__item {
  display: grid;
  grid: 1fr / 1fr;
  overflow: hidden;
}

.news__item:first-child {
  grid-area: 1 / 1 / 3 / 3;
}

.news__item:first-child .news__img-box .news__link-img .news__img {
  width: 120%;
  height: 100%;
}

.news__item:nth-child(7) {
  grid-row-end: span 3;
  grid-column-end: span 3;
}

.news__item:nth-child(7) .news__img-box .news__link-img .news__img {
  width: 100%;
  height: 100%;
}

.news__img-box {
  grid-area: 1 / 1 / 1 / 1;
  display: grid;
  place-items: center;
  place-content: space-around;
}

.news__link-img {
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.news__img {
  width: 100%;
  height: 30vh;
  filter: invert(0%);
}

.news__item:hover .news__img-box .news__link-img .news__img {
  filter: grayscale(50) blur(5px);
}

.news__text-box {
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

.news__header {
  grid-area: 1 / 1 / 1 / 1;
  width: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;
  place-content: space-around;
  opacity: 1;
  transition: all 0.4s ease-out;
}

.news__item:hover .news__text-box .news__header {
  opacity: 0;
}

.news__title {
  color: white;
  background-color: hsla(358, 83%, 46%, 0.5);
  width: 100%;
  padding: 0.1rem;
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Tahoma";
  text-align: center;
}

.news__link-txt {
  color: white;
  text-decoration: none;
}

.news__author {
  color: white;
  font-family: georgia, arial;
  font-size: 0.8rem;
  font-weight: 300;
}

.news__content {
  grid-area: 1 / 1 / 1 / 1;
  color: white;
  text-align: left;
  font-family: georgia, arial;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  opacity: 0;
}

.news__item:hover .news__text-box .news__content {
  opacity: 1;
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
