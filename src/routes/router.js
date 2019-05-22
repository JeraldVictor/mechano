import home from '../components/home.vue'
import login from '../components/login.vue'

import addComp from '../components/comp/add.vue'
import deleteComp from '../components/comp/delete.vue'
import updateComp from '../components/comp/update.vue'
import addValue from '../components/value/add.vue'
import updateValue from '../components/value/update.vue'
import deleteValue from '../components/value/delete.vue'
import report from '../components/report/projection.vue'
import nullPage from '../components/nullPage'

export default [
    { path: '/', component:login  },
    { path: '/dashboard', component:home  },
    {path:'/components/add',component: addComp},
    {path:'/components/update',component: updateComp},
    {path:'/components/delete',component: deleteComp},
    {path:'/value/add',component:addValue},
    {path:'/value/update',component:updateValue},
    {path:'/value/delete',component:deleteValue},
    {path:'/report/project',component:report},
    {path: '*' , component: nullPage}
]