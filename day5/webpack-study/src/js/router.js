import VueRouter from 'vue-router'
import com1 from '../components/tmp1.vue'
import com2 from '../components/tmp2.vue'
import com3 from '../components/tmp3.vue'
import com31 from '../components/tmp31.vue'
import com32 from '../components/tmp32.vue'

var router = new VueRouter({
  routes: [
    {
      path: '/', components: {
        'comt1': com1,
        'comt2': com2,
        'comt3': com3
      }
    },
    { path: '/com1', component: com1 },
    { path: '/com2', component: com2 },
    {
      path: '/com3', component: com3,
      children: [
        { path: 'com31', component: com31 },
        { path: 'com32', component: com32 }
      ]
    }
  ]
})
export default router