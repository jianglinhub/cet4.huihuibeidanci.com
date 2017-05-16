// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'

require('!style-loader!css-loader!less-loader!./assets/css/main.less')

Vue.use(VueRouter)

import index from './page/index.vue'
import Creat from './page/Creat.vue'
import CreatSelect from './page/CreatSelect.vue'
import CreatFinsh from './page/CreatFinsh.vue'
import CreatSuccess from './page/CreatSuccess.vue'

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: index},
		{path: '/index', component: index},
		{path: '/Creat', component: Creat},
		{path: '/CreatSelect', component: CreatSelect},
		{path: '/CreatFinsh', component: CreatFinsh},
		{path: '/CreatSuccess', component: CreatSuccess},
		{path: '*', component: index}
	]
})

/* eslint-disable no-new */
var vm = new Vue({
  router,
  store,
  data: {
  	examTime: '2017-6-17',
  	preExamDay: '30'
  },
  template: `
		<div>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
  `,
  beforeCreate: function () {
  	if (this.$store.state.serverIP === 0) {
  		router.push({ path: '/error' })
  	}
  	if (this.$store.state.newbi === 1) {
  		router.push({ path: '/index' })
  	} else {
  		router.push({ path: '/Creat' })
  	}
  }
}).$mount('#app')
