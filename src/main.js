import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ContentHeader from './components/ContentHeader.vue'
import Content from './components/Content.vue'
const app=createApp(App)
app.component('content-header',ContentHeader)
.component('content',Content)
.use(store).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap'