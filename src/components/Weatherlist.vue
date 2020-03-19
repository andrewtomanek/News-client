<template>
  <div class="weather__box">
    <div class="weather__city">
      <p class="city medium">Délka: {{ city.coord.lon }}</p>
      <p class="city medium">Šířka: {{ city.coord.lat }}</p>
      <p class="city large">Oblačnost: {{ city.weather[0].description }}</p>
      <img
        :src="
          'https://openweathermap.org/img/w/' + city.weather[0].icon + '.png'
        "
        alt=""
        class="icon large"
      />
      <p class="city small">Teplota:{{ city.main.temp }} °C</p>
      <p class="city medium">Tlak: {{ city.main.pressure }} hPa</p>
      <p class="city medium">Vlkost: {{ city.main.humidity }} %</p>
      <p class="city small">Max teplota: {{ city.main.temp_min }} °C</p>
      <p class="city small">Min teplota: {{ city.main.temp_max }} °C</p>
      <p class="city small" v-if="city.main.sea_level">
        {{ city.main.sea_level }}
      </p>
      <p class="city small" v-if="city.main.grnd_level">
        {{ city.main.grnd_level }}
      </p>
      <p class="city medium">Rychlost větru: {{ city.wind.speed }} m/s</p>
      <p class="city small">Směr větru: {{ city.wind.deg }}°</p>
      <p class="city small" v-if="city.clouds.all">
        Oblačnost {{ city.clouds.all }} %
      </p>
      <p class="city small" v-if="city.rain">
        Déšť za 1h {{ city.rain ? city.rain["1h"] : 0 }}mm
      </p>
      <p class="city small" v-if="city.rain">
        Déšť za 3h {{ city.rain ? city.rain["3h"] : 0 }}mm
      </p>
      <p class="city small" v-if="city.snow">
        Sníh za 1h {{ city.snow ? city.snow["1h"] : 0 }}mm
      </p>
      <p class="city small" v-if="city.snow">
        Sníh za 3h {{ city.snow ? city.snow["3h"] : 0 }}mm
      </p>
      <p class="city large">Stát: {{ city.sys.country }}</p>
      <p class="city large">Město: {{ city.name }}</p>
      <p class="city small" v-if="city.sys.sunrise">
        Východ slunce
        {{ new Date(city.sys.sunrise * 1000).toLocaleTimeString() }}
      </p>
      <p class="city small" v-if="city.sys.sunset">
        Západ slunce
        {{ new Date(city.sys.sunset * 1000).toLocaleTimeString() }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchlist",
  props: {
    city: Object,
    revealWeather: Boolean
  }
};
</script>

<style scoped>
.weather {
  height: 100%;
  background-color: skyblue;
  overflow: hidden;
}

.weather__box {
  display: grid;
  grid-auto-flow: row;
  margin: 0;
  width: 100%;
}

.weather__city {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}

.city {
  font-size: 1rem;
  color: white;
  background: var(--orange);
  padding: 0.2rem;
  margin: 0.2rem;
  text-align: center;
  border-radius: 1rem;
}

.icon {
  padding: 0.3rem 0.6rem;
  background-color: var(--water);
  border-radius: 1rem;
}

.small {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.7rem 0.2rem;
  height: 3vh;
}

.medium {
  font-size: 2rem;
  font-weight: 600;
  padding: 1.2rem 0.4rem;
}

.large {
  font-size: 3rem;
  font-weight: 700;
  padding: 0.3rem 0.6rem;
}
</style>
