import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSmoothScroll from 'vue3-smooth-scroll'


const app = createApp(App).use(router).mount('#app');

// app.use(ScrollAnimation)
