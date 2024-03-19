import { SupportedLang } from '@/store'
import { setLanguage } from '@/utils/utils'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:lang',
    name: 'homeWithLang',
    component: HomeView,
  },
];

const router = createRouter({
  //history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang; // Get the value of :lang
  if (typeof lang === 'string' && (lang === 'en' || lang === 'fr')) {
    setLanguage(lang as SupportedLang);
  } else {
    setLanguage('en');
  }
  next();
})

export default router
