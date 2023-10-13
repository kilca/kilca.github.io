import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from "../views/PrivacyPolicy.vue"
import Faq from "../views/Faq.vue"
import { setLanguage } from '@/utils/utils'
import { SupportedLang } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPolicy,
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq,
  },
  {
    path: '/:lang',
    name: 'homeWithLang',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  //history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang; // Get the value of :lang
  if (typeof lang === 'string' && (lang === 'en' || lang === 'fr')) {
    // Set 'myLang' to 'lang'
    setLanguage(lang as SupportedLang);
  } else {
    setLanguage('en');
  }
  next();
})

export default router
