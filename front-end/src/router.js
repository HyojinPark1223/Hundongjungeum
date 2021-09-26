import Vue from "vue";
import Router from "vue-router";
import Loading from "./views/Loading.vue";
import Main from "./views/Main.vue";
import Intro from "./views/Intro.vue";
import CastleStory from "./views/CastleStory.vue";
import ForestStory from "./views/ForestStory.vue";
import OceanStory from "./views/OceanStory.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Loading",
      component: Loading,
    },
    {
      path: "/Main",
      name: "Main",
      component: Main,
    },
    {
      path: "/Intro",
      name: "Intro",
      component: Intro,
    },
    {
      path: "/CastleStory/:storyNum",
      name: "CastleStory",
      component: CastleStory,
    },
    {
      path: "/ForestStory/:storyNum",
      name: "ForestStory",
      component: ForestStory,
    },
    {
      path: "/OceanStory/:storyNum",
      name: "OceanStory",
      component: OceanStory,
    },
  ],
});
