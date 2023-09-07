import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";

const routes = [
  /* {
    path: "/",
    name: "home",
    component: HomeView,
  },*/
  {
    path: "/face1",
    name: "MyFace1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ "../views/MyFace1.vue"
      ),
  },
  {
    path: "/face2",
    name: "MyFace2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ "../views/MyFace2.vue"
      ),
  },
  {
    path: "/face3",
    name: "MyFace3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ "../views/MyFace3.vue"
      ),
  },
  {
    path: "/face4",
    name: "MyFace4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ "../views/MyFace4.vue"
      ),
  },
  {
    path: "/face5",
    name: "MyFace5",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ "../views/MyFace5.vue"
      ),
  },
  {
    path: "/face6",
    name: "MyFace6",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ "../views/MyFace6.vue"
      ),
  },
  {
    path: "/face7",
    name: "MyFace7",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ "../views/MyFace7.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
