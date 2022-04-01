import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

import "./assets/styles/main.css"

createApp(App)
    .use(VueFullPage)
    .mount('#app')
