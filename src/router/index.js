import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DevicesView from '../views/DevicesView.vue'
import MotherboardView from '../views/Iphone/MotherboardView.vue'
import BackChangeView from '../views/Iphone/BackChangeView.vue'
import BatteryChangeView from '../views/Iphone/BatteryChangeView.vue'
import ScreenChangeView from '../views/Iphone/ScreenChangeView.vue'
import ModularChangeView from '../views/Iphone/ModularChangeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/keszulekek',
      name: 'keszulekek',
      component: DevicesView
    },
    {
      path: '/iphone-alaplap-javitas',
      name: 'iphone-alaplap',
      component: MotherboardView
    },
    {
      path: '/iphone-hatlap-csere',
      name: 'iphone-hatlap',
      component: BackChangeView
    },
    {
      path: '/iphone-akkumulator-csere',
      name: 'iphone-akkumulator',
      component: BatteryChangeView,
    },
    {
      path: '/iphone-kijelzo-javitas',
      name: 'iphone-kijelzo',
      component: ScreenChangeView,
    },
    {
      path: '/iphone-modularis-csere',
      name: 'iphone-modularis',
      component: ModularChangeView
    },
  ]
})

export default router
