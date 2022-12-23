import FontAwesomeIcon from '@/assets/icons';
import { createApp } from 'vue';
import router from '@/router';
import App from '@/App.vue';
import store from '@/store';
import '@/style/main.scss';

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#finance-planner-app');
