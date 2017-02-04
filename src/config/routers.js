import App from '../app'
export default [{
  path: '/',
  component: App,

  children: [{
    path: '/', //首页
    component: resolve => require(['../pages/index/'], resolve)
  }, {
    path: '/login', //登陆
    meta: {
      auth: false
    },
    component: resolve => require(['../pages/login/'], resolve)
  }, {
    path: '/signout', //退出
    component: resolve => require(['../pages/signout/'], resolve)
  }, {
    path: '/membercenter',
    component: resolve => require(['../pages/memberCenter/'], resolve)
  }, {
    path: "*",
    redirect: '/login'
  }]
}]
