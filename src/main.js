import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import indexPage from './page/indexPage.vue'
Vue.use(VueRouter);
Vue.use(vueResource);
let router=new VueRouter({
    mode:'history',
    routes:[
        {
          path:'/',
          component:indexPage
        }
    ]
})
new Vue({
  el: '#app',
  // render: h => h(App)
    router,
    template:'<Layout/>',
    components:{Layout}
})
