import FontAwesomeIcon from '@/assets/icons';
import { createApp } from 'vue';
import router from '@/router';
import '@/style/style.scss';
import App from '@/App.vue';

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#finance-planner-app');
