import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import tiezifenleiList from '../pages/tiezifenlei/list'
import tiezifenleiDetail from '../pages/tiezifenlei/detail'
import tiezifenleiAdd from '../pages/tiezifenlei/add'
import tiezixinxiList from '../pages/tiezixinxi/list'
import tiezixinxiDetail from '../pages/tiezixinxi/detail'
import tiezixinxiAdd from '../pages/tiezixinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'tiezifenlei',
					component: tiezifenleiList
				},
				{
					path: 'tiezifenleiDetail',
					component: tiezifenleiDetail
				},
				{
					path: 'tiezifenleiAdd',
					component: tiezifenleiAdd
				},
				{
					path: 'tiezixinxi',
					component: tiezixinxiList
				},
				{
					path: 'tiezixinxiDetail',
					component: tiezixinxiDetail
				},
				{
					path: 'tiezixinxiAdd',
					component: tiezixinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
