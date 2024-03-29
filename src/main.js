/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// styles
import './assets/main.sass'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

registerPlugins(app)
AOS.init()

app.mount('#app')
