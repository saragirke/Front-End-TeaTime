import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

const app = createApp(App)

app.use(router)

app.mount('#app')

