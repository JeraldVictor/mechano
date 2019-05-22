import home from '../components/home.vue'
import login from '../components/login.vue'

export default [
    { path: '/', component:login  },
    { path: '/home', component:home  },
    { path: '/ogout', component:login  },
]