<template>
  <section class="forecast__box">
    <div class="forecast__gps">
      <p class="forecast__data medium">Délka: {{ city.coord.lon }}</p>
      <p class="forecast__data medium">Šířka: {{ city.coord.lat }}</p>
      <p class="forecast__data small">Stát: {{ city.country }}</p>
      <p class="forecast__data large">Město: {{ city.name }}</p>
      <p class="forecast__data large">Populace: {{ city.population }}</p>
    </div>
    <article
      class="forecast__item"
      v-for="searchItem in forecastData"
      :key="searchItem.dt"
    >
      <div class="forecast__text">
        <div class="forecast__time">
          <p class="forecast__data small">
            Místní čas:
            {{
              new Date(searchItem.dt * 1000).toLocaleTimeString().slice(0, 5)
            }}
          </p>
          <p class="forecast__data small">UTC čas: {{ searchItem.dt_txt }}</p>
        </div>
        <div class="forecast__description">
          <p class="forecast__data large">
            Oblačnost: {{ searchItem.weather[0].description }}
          </p>
          <img
            :src="
              'https://openweathermap.org/img/w/' +
                searchItem.weather[0].icon +
                '.png'
            "
            alt=""
            class="icon"
          />
        </div>
        <div class="forecast__temperature">
          <p class="forecast__data large">
            Teplota: {{ searchItem.main.temp }} °C
          </p>
          <p class="forecast__data small">
            Min teplota: {{ searchItem.main.temp_min }} °C
          </p>
          <p class="forecast__data small">
            Max teplota: {{ searchItem.main.temp_max }} °C
          </p>
        </div>
        <div class="forecast__air">
          <p class="forecast__data medium">
            Rychlost větru: {{ searchItem.wind.speed }} m/s
          </p>
          <p class="forecast__data small">
            Směr větru: {{ searchItem.wind.deg }} °C
          </p>
          <p class="forecast__data medium">
            Vlkost: {{ searchItem.main.humidity }} %
          </p>
        </div>
        <div class="forecast__sky">
          <p class="forecast__data medium">
            Tlak: {{ searchItem.main.pressure }} hPa
          </p>
          <p class="forecast__data small" v-if="searchItem.main.sea_level">
            na hladině moře {{ searchItem.main.sea_level }}
          </p>
          <p class="forecast__data small" v-if="searchItem.main.grnd_level">
            na povrchu {{ searchItem.main.grnd_level }}
          </p>
          <p class="forecast__data small" v-if="searchItem.clouds.all">
            {{ searchItem.clouds.all }}
          </p>
          <p class="forecast__data small" v-if="searchItem.rain">
            Déšť za 1h
            {{ searchItem.rain ? searchItem.rain["1h"] : 0 }} mm
          </p>
          <p class="forecast__data small" v-if="searchItem.rain">
            Déšť za 3h
            {{ searchItem.rain ? searchItem.rain["3h"] : 0 }} mm
          </p>
          <p class="forecast__data small" v-if="searchItem.snow">
            Sníh za 1h
            {{ searchItem.snow ? searchItem.snow["1h"] : 0 }} mm
          </p>
          <p class="forecast__data small" v-if="searchItem.snow">
            Sníh za 3h
            {{ searchItem.snow ? searchItem.snow["3h"] : 0 }} mm
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "forecastlist",
  props: {
    forecastData: Array,
    city: Object,
    revealWeather: Boolean
  }
};
</script>

<style scoped>
.forecast__box {
  padding: 0rem;
  margin: 0;
  background-color: var(--blue);
  display: grid;
  place-items: center;
  justify-content: space-around;
  width: 100%;
}

.weather__city {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.forecast__list {
  padding: 0rem;
  margin: 0;
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  justify-content: space-around;
  grid-gap: 3rem 0rem;
  width: 100%;
}

.forecast__item {
  padding: 0rem;
  margin: 1rem 0;
  display: flex;
  flex-flow: column;
  place-items: center;
  justify-content: space-around;
  width: 100%;
}

.forecast__data {
  font-size: 1rem;
  color: white;
  padding: 0rem 0.2rem;
  margin: 0rem;
  text-align: center;
  border-radius: 1rem;
}

.forecast__gps {
  padding: 0rem;
  margin: 1rem 0;
  background-color: var(--water);
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  justify-content: space-around;
  width: 100%;
}

.forecast__text {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  place-items: center;
  align-items: center;
  padding: 0rem;
  margin: 0rem;
  width: 100%;
}

.forecast__time {
  padding: 0rem;
  margin: 0;
  background-color: var(--orange);
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 8vh;
}

.forecast__description {
  padding: 0rem;
  margin: 0;
  background-color: var(--water);
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 8vh;
}

.forecast__temperature {
  padding: 0rem;
  margin: 0;
  background: var(--orange);
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 8vh;
}

.forecast__air {
  padding: 0rem;
  margin: 0;
  background-color: var(--water);
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 8vh;
}

.forecast__sky {
  padding: 0rem;
  margin: 0;
  background: var(--orange);
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 8vh;
}

.icon {
  width: 100%;
  height: 100%;
}

.small {
  font-size: 1rem;
  font-weight: 500;
}

.medium {
  font-size: 1rem;
  font-weight: 600;
}

.large {
  font-size: 1rem;
  font-weight: 700;
}

.city {
  font-size: 1rem;
  color: white;
  background: var(--blue);
  padding: 0.2rem;
  margin: 0.2rem;
  text-align: center;
  z-index: 2;
  cursor: pointer;
}
</style>
