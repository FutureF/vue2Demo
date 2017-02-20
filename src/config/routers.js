import App from '../app'
export default [{
  path: '/',
  component: App,

  children: [{
    path: '/', //首页
    component: resolve => require(['../view/index/'], resolve)
  }, {
    path: '/login', //登陆
    meta: {
      auth: false
    },
    component: resolve => require(['../view/login/'], resolve)
  }, {
    path: '/signout', //退出
    component: resolve => require(['../view/signout/'], resolve)
  }, {
    path: '/membercenter',
    component: resolve => require(['../view/memberCenter/'], resolve)
  }, {
    path: "*",
    redirect: '/login'
  }]
}]
