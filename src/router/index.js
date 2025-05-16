import { createRouter, createWebHistory } from 'vue-router';
import LandRoverMainPage from '../components/LandRoverMainPage.vue';
import AllModels from '../components/AllModels.vue';
import DiscoveryMain from '../components/DiscoveryMain.vue';
import DiscoverySpecs from '../components/DiscoverySpecs.vue';
import EvoqueMain from '../components/EvoqueMain.vue';
import EvoqueSpecs from '../components/EvoqueSpecs.vue';
import SportMain from '../components/SportMain.vue';
import SportSpecs from '../components/SportSpecs.vue';
import VelarMain from '../components/VelarMain.vue';
import VelarSpecs from '../components/VelarSpecs.vue';
import VogueMain from '../components/VogueMain.vue';
import VogueSpecs from '../components/VogueSpecs.vue';
import AboutLandRover from '@/components/AboutLandRover.vue';
import TestDrive from '../components/TestDrive.vue';
import OrderForm from '../components/Order.vue';
import TermsOfUse from '../components/Terms.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue';

// Оголошення маршрутів з meta.title для тайтлів
const routes = [
  { path: '/', component: LandRoverMainPage, meta: { title: 'Land Rover - Головна' } },
  { path: '/about-land-rover', component: AboutLandRover, meta: { title: 'Історія Land Rover' } },
  { path: '/test-drive', name: 'TestDrive', component: TestDrive, meta: { title: 'Запис на тест-драйв' } },
  { path: '/order-form', name: 'Order', component: OrderForm, meta: { title: 'Оформлення замовлення' } },
  { path: '/terms', name: 'Terms', component: TermsOfUse, meta: { title: 'Умови використання' } },
  { path: '/privacy-policy', component: PrivacyPolicy, meta: { title: 'Політика конфіденційності' } },
  { path: '/all-models', component: AllModels, meta: { title: 'Модельний ряд Land Rover' } },
  { path: '/discovery-main', component: DiscoveryMain, meta: { title: 'Авто Land Rover Discovery' } },
  { path: '/discovery-specs', component: DiscoverySpecs, meta: { title: 'Характеристики Land Rover Discovery' } },
  { path: '/evoque-main', component: EvoqueMain, meta: { title: 'Авто Land Rover Evoque' } },
  { path: '/evoque-specs', component: EvoqueSpecs, meta: { title: 'Характеристики Land Rover Evoque' } },
  { path: '/sport-main', component: SportMain, meta: { title: 'Авто Land Rover Sport' } },
  { path: '/sport-specs', component: SportSpecs, meta: { title: 'Характеристики Land Rover Sport' } },
  { path: '/velar-main', component: VelarMain, meta: { title: 'Авто Land Rover Velar' } },
  { path: '/velar-specs', component: VelarSpecs, meta: { title: 'Характеристики Land Rover Velar' } },
  { path: '/vogue-main', component: VogueMain, meta: { title: 'Авто Land Rover Vogue' } },
  { path: '/vogue-specs', component: VogueSpecs, meta: { title: 'Характеристики Land Rover Vogue' } },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Автоматична зміна заголовка сторінки
router.afterEach((to) => {
  document.title = to.meta.title || 'Land Rover - Офіційний сайт';
});

export default router;
