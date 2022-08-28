// (1)コンポーネントの設定
const Home = { template: '<div>初めてのVue Resource</div>'}
const News = { template: '<div>今週のニュースは....</div>'}
const About = { template: '<div>会社までのアクセス方法は....</div>'}

// (2)ルーティングの設定
const router = new VueRouter({
	routes : [
		{path:'/', component : Home},
		{path:'/news',component: News},
		{path:'/about',component: About}
	]
})

var app = new Vue({
    el: '#app',
    data:{
        title: 'Vue Resource',
    },
    router,
});