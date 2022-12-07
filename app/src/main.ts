import FontAwesomeIcon from '@/assets/icons';
import { createApp } from 'vue';
import router from '@/router';
import App from '@/App.vue';
import '@/style.scss';

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#finance-planner-app');
