
const w_html = httpVueLoader('./components/html/w-html.vue')
const w_html_1 = httpVueLoader('./components/html/main.vue')
const w_html_2 = httpVueLoader('./components/html/main2.vue')


const w_css = httpVueLoader('./components/css/w_css.vue')
const w_css_1 = httpVueLoader('./components/css/w_css_1.vue')
const w_css_2 = httpVueLoader('./components/css/w_css_2.vue')


const w_js = httpVueLoader('./components/javascript/w-js.vue')
const w_js_1 = httpVueLoader('./components/javascript/main.vue')
const w_js_2 = httpVueLoader('./components/javascript/main2.vue')


const w_cj = httpVueLoader('./components/cj/w_cj.vue')
const w_cj_layer = httpVueLoader('./components/cj/w_cj_layer.vue')
const w_cj_swal2 = httpVueLoader('./components/cj/w_cj_swal2.vue')
const w_cj_edit = httpVueLoader('./components/cj/w_cj_edit.vue')
const w_cj_table = httpVueLoader('./components/cj/w_cj_table.vue')

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: w_html },
  {
    path: '/w_html', component: w_html,
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '/', component: w_html_1 },
      { path: '/w_html_1', component: w_html_1 },
      { path: '/w_html_2', component: w_html_2 },

      // ...其他子路由
    ]
  },
  {
    path: '/w_css', component: w_css,
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '/', component: w_css_1 },
      { path: '/w_css_1', component: w_css_1 },
      { path: '/w_css_2', component: w_css_2 },

      // ...其他子路由
    ]

  },
  {
    path: '/w_js', component: w_js,
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '/', component: w_js_1 },
      { path: '/w_js_1', component: w_js_1 },
      { path: '/w_js_2', component: w_js_2 },

      // ...其他子路由
    ]

  },
  {
    path: '/w_cj', component: w_cj,
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '/', component: w_cj_layer },
      { path: '/w_cj_layer', component: w_cj_layer },
      { path: '/w_cj_swal2', component: w_cj_swal2 },
      { path: '/w_cj_edit', component: w_cj_edit },
      { path: '/w_cj_table', component: w_cj_table },

      // ...其他子路由
    ]

  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})




// module.exports = router;
export default router 