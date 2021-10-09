import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import "ant-design-vue/dist/antd.css";
import Antd from './shared/antd';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// App
const app = createApp(App)

// MiddleWares
app.use(router)

// Registerign Antd components
Antd(app);


// Mounting the app
app.mount('#app')

