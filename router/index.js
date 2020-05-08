
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: httpVueLoader('./components/vue/w_ele.vue'),},
  {
    name : 'HTML',
    path: '/w_html/', component: httpVueLoader('./components/html/w_html.vue'),
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '', component: httpVueLoader('./components/html/main.vue') },
      { path: 'w_html_1', component: httpVueLoader('./components/html/main.vue') },
      { path: 'w_html_2', component: httpVueLoader('./components/html/main2.vue') },

      // ...其他子路由
    ]
  },
  {
    name: 'CSS',
    path: '/w_css/', component: httpVueLoader('./components/css/w_css.vue'),
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '', name: 'CSS', component: httpVueLoader('./components/css/w_css_1.vue') },
      { path: 'w_css_1', name : 'animate.css', component: httpVueLoader('./components/css/w_css_1.vue') },
      { path: 'w_css_11', name : 'hover.css', component: httpVueLoader('./components/css/w_css_11.vue') },
      { path: 'w_css_2', name : '进度条', component: httpVueLoader('./components/css/w_css_2.vue') },

      // ...其他子路由
    ]

  },
  {
    name: 'JS',
    path: '/w_js/', component: httpVueLoader('./components/javascript/w_js.vue'),
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '', name: 'JS', component: httpVueLoader('./components/javascript/main.vue') },
      { path: 'w_js_1',name: 'JS', component: httpVueLoader('./components/javascript/main.vue') },
      { path: 'w_js_2',name: 'JS', component: httpVueLoader('./components/javascript/main2.vue') },

      // ...其他子路由
    ]

  },
  {
    name: '插件',
    path: '/w_cj/', component: httpVueLoader('./components/cj/w_cj.vue'),
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '', name: 'layer', component: httpVueLoader('./components/cj/w_cj_layer.vue') },
      { path: 'w_cj_layer', name: 'layer', component: httpVueLoader('./components/cj/w_cj_layer.vue') },
      { path: 'w_cj_swal2', name: 'swal2', component: httpVueLoader('./components/cj/w_cj_swal2.vue') },
      { path: 'w_cj_edit', name: 'wangEdit', component: httpVueLoader('./components/cj/w_cj_edit.vue') },
      { path: 'w_cj_table', name: 'table', component: httpVueLoader('./components/cj/w_cj_table.vue') },
      { path: 'w_cj_code', name: '二维码', component: httpVueLoader('./components/cj/w_cj_code.vue') },
      { path: 'w_cj_chart', name: '图表', component: httpVueLoader('./components/cj/w_cj_chart.vue') },
      { path: 'w_cj_fabric', name: 'fabric', component: httpVueLoader('./components/cj/w_cj_fabric.vue') },
      { path: 'w_cj_tour', name: 'tour', component: httpVueLoader('./components/cj/w_cj_tour.vue') },

      // ...其他子路由
    ]

  },
  {
    name: 'vue',
    path: '/w_vue/', component: httpVueLoader('./components/vue/w_ele.vue'),
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '', name: 'vue', component: httpVueLoader('./components/vue/w_ele.vue') },
  

      // ...其他子路由
    ]

  },
  {
    name: '工具类',
    path: '/w_utils/', component: httpVueLoader('./components/utils/w_utils.vue'),
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '', name: 'lodash', component: httpVueLoader('./components/utils/w_utils.vue') },
  

      // ...其他子路由
    ]

  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})




// module.exports = router;
export default router 