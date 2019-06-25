import Vue from "vue";
import Router from "vue-router";
import NotFoundComponent from "./views/NotFoundComponent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "news",
      component: () => import("./views/News.vue")
    },
    {
      path: "/weather",
      name: "weather",
      component: () => import("./views/Weather.vue")
    },
    {
      path: "/memes",
      name: "memes",
      component: () => import("./views/Memes.vue")
    },
    {
      path: "/forecast",
      name: "forecast",
      component: () => import("./views/Forecast.vue")
    },
    { path: "*", component: NotFoundComponent }
  ]
});
