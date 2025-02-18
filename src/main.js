import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import JsonViewer from "vue-json-viewer"
import 'vue-json-viewer/style.css'

const app = createApp(App)

app.use(router)

app.use(JsonViewer)

app.mount('#app')
