import { createApp } from 'vue'
import App from './App.vue'
import StateAPIService from '@/Services/stateService'

// import createRouter() function from @router/index.js
import router from '@/router'

import 'leaflet/dist/leaflet.css'

let app = createApp(App)

// Make object containing API calls available to app
app.config.globalProperties.$stateService = StateAPIService

app.use(router)

app.mount('#app')
