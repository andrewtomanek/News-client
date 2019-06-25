<template>
  <div class="news__container">
    <transition v-if="showSource" name="fade" mode="out-in" appear>
      <div class="news__reload">
        <button class="submit__button" @click="resetSeach()">
          Vyhledat znovu
        </button>
      </div>
    </transition>
    <transition v-if="!showSource" name="fade" mode="out-in" appear>
      <NewsInput
        v-on:newsResults="newsResults"
        @hideSource="hideSource"
      ></NewsInput>
    </transition>
    <transition v-if="!showSource" name="fade" mode="out-in" appear>
      <SourceSelection
        v-on:newsResults="newsResults"
        @hideSource="hideSource"
      ></SourceSelection>
    </transition>
    <transition v-if="showSource" name="fade" mode="out-in" appear>
      <Newslist v-bind:newsData="newsData"> </Newslist>
    </transition>
  </div>
</template>

<script>
import Newslist from "../components/Newslist";
import NewsInput from "../components/NewsInput";
import SourceSelection from "../components/SourceSelection";

export default {
  name: "app",
  components: {
    Newslist,
    NewsInput,
    SourceSelection
  },
  data() {
    return {
      newsData: [],
      showSource: false
    };
  },
  methods: {
    newsResults: function(newsData) {
      this.newsData = newsData;
    },
    hideSource: function() {
      this.showSource = true;
    },
    resetSeach: function() {
      this.showSource = false;
    }
  }
};
</script>

<style>
#app {
  display: grid;
  grid-auto-flow: row;
}
.news__reload {
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
