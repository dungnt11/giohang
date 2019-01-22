import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = resolve => {
  require.ensure(['@/components/HelloWorld'], () => {
    resolve(require('@/components/HelloWorld'))
  })
}

const user = resolve => {
  require.ensure(['@/components/User'], () => {
    resolve(require('@/components/User'))
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   }
  //   if (to.hash) {
  //     return { selector: to.hash }
  //   }
  // }
})
