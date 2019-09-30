import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },  {
      path: '/branchType',
      name: 'branchType',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( './views/BranchType.vue')
    },  {
      path: '/cart',
      name: 'cart',
      component: () => import( './views/Cart.vue')
    },  {
      path: '/login',
      name: 'login',
      component: () => import( './views/Login.vue')
    },
    {
      path: '/requestPassword',
      name: 'requestPassword',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( './views/requestPassword.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( './views/Register.vue')
    }, {
      path: '/branchTypeDetail/:url',
      name: 'branchTypeDetail',
      component: () => import( './views/BranchTypeDetail.vue')
    }, {
      path: '/home/detailslistcart',
      name: 'detailslistcart',
      component: () => import( './components/DetailsListCart.vue')
    }, {
      path: '/personalCenter',
      name: 'personalCenter',
      component: () => import( './components/PersonalCenter.vue')
    }
  ]
})
