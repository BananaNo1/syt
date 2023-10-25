import {createApp} from 'vue'
import '@/styles/reset.scss'

import App from '@/App.vue'
import HospitalTop from '@/components/Hospital_top/index.vue'
import HospitalBottom from '@/components/Hospital_bottom/index.vue'

createApp(App)
    .component('HospitalTop', HospitalTop)
    .component('HospitalBottom', HospitalBottom)
    .mount('#app')

