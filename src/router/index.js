import Vue from 'vue'
import Router from 'vue-router'
import banner from '@/components/banner/banner'
import dhj from '@/components/dhj/dhj'
import detail from '@/components/detail/detail'

Vue.use(Router)

const router = new Router({
	routes:[
		{path:'/',redirect:"/goods"},
		{path:"/goods",component:banner},
		{path:"/list/:id",component:dhj},
		{path:"/detail/:id",component:detail}
	]
})

export default router;