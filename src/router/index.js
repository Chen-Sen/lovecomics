import Vue from 'vue'
import Router from 'vue-router'
import Bookshelf from '../components/bookshelf/Bookshelf.vue'
import My from '../components/my/My.vue'
import Nominate from '../components/nominate/Nominate.vue'
import Stacks from '../components/stacks/Stacks.vue'

Vue.use(Router)

const routes = [
  {path: '/bookshelf', name: 'Bookshelf', component: Bookshelf},
  {path: '/my', name: 'My', component: My},
  {path: '/nominate', name: 'Nominate', component: Nominate},
  {path: '/stacks', name: 'Stacks', component: Stacks}
]

export default new Router({
  linkActiveClass: 'active',
  routes
})
