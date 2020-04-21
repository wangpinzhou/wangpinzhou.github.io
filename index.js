import router from './router/index.js';
$(function () {


  var that;


  var vm = new Vue({
    router,
    el: '#app',
    components: {
      'w-footer': httpVueLoader('./components/w-footer.vue'),
    },
    data: {
      // test: '不用 webpack 使用 vue 开发的项目'
      activeNav: 0,
      navList: [
        { to: '/w_html', val: 'HTML' },
        { to: '/w_css', val: 'CSS' },
        { to: '/w_js', val: 'JS' },
        { to: '/w_cj', val: '插件' },
      ]

    },
    computed: {
    },
    mounted() {
      that = this;

    },
    created() {
    },
    methods: {
      alert() {
        $('#alert').alert()
      }
    },
  })



  // 给全部 pre  代码快添加 复制按键 ; 按键使用:after 伪类 生成 ;

  $("body").on("click", "pre", function (ev) {
    var textArea = document.createElement("textarea");

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = "fixed";
    textArea.style.top = 0;
    textArea.style.left = 0;

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.opacity = "0";

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;

    // Clean up any borders.
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = "transparent";

    //Set value to text to be copied
    textArea.value = $(this).html();

    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      layer.msg(`复制完成`)
    } catch (err) {
      layer.msg(`复制失败`)
    }
  });
})


