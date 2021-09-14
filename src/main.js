import { createApp } from 'vue';
import router from './router';
import DefaultPage from './pages/default.vue';

// App
const app = createApp(DefaultPage)

// MiddleWares
app.use(router)

// Mounting the app
app.mount('#app')

