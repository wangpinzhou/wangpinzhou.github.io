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
      ],
      menuList: menuList,
      layer: null,


    },
    computed: {
    },
    mounted() {
      that = this;
      that.initKeyMaster()



    },
    created() {
    },
    methods: {

      initKeyMaster() {
        key('esc', function () {
          layer.closeAll()
          that.showAllRouter();
        });
        key('enter', function () {
          layer.closeAll()
        });

      },

      linkto(to) {
        // return
        this.$router.push(to);
        layer.close(this.layer)
      },
      showAllRouter() {
        this.layer = layer.open({
          type: 1, //Layer提供了5种层类型。可传入的值有：0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）,
          title: '全部路由展示页,可以拖拽调整位置', //标题
          area: ['90%', '90%'], //宽高 px/ %
          // offset: ['auto'], //位置 px/ %
          shade: 0.4, //遮罩透明度
          content: $('#showAllRouter'), //  dom 或 url 地址 $('#')  iframe 地址
          maxmin: true, // 显示 最小化 /最大化按键;
          // fixed: true, //不固定
          move: false,//来禁止拖拽
          // moveOut: true,//是否允许拖拽到窗口外
          // closeBtn: 1,  // 1, 显示关闭 0 不显示关闭按键
          // tips: [1, '#c00'], tips方向和颜色 4（tips层）
          scrollbar: false, //屏蔽浏览器滚动条
          shadeClose: true,
          // btn: ['确定', '取消'], //按钮组
          yes: function (index, layero) { // 按键 确定;
            //do something
            layer.close(index); //如果设定了yes回调，需进行手工关闭
          },
          btn2: function (index, layero) { // 按键 取消;
            //do something
            console.log('btn2');
            // layer.close(index); //如果设定了yes回调，需进行手工关闭
          },
          success: function (layero, index) {
            $('#showAllRouter').css('display', 'flex');

            // sortable 不依赖jq 这里使用dom 元素  document.getElementById() 或者 $('#id').get(0) 转js dom元素;
            // new Sortable($('#showAllRouter').get(0), {
            //   group: 'shared', // set both lists to same group
            //   animation: 150
            // });

            new Sortable(document.getElementById('showAllRouter'), {
              group: 'router', // set both lists to same group
              // handle: '.showAllRouter-handle',
              animation: 150
            })
            var routers = [...document.querySelectorAll('.showAllRouter')]
            routers.forEach(function (v) {
              new Sortable(v, {
                group: 'routers', // set both lists to same group
                // handle: '.showAllRouter-handle',
                animation: 150
              })
            });


            var routerSort = [...document.querySelectorAll('.routerSort')]
            routerSort.forEach(function (v) {
              new Sortable(v, {
                group: 'routerSort',
                handle: ".routerSort-handle",
                animation: 150
              });
            })

            var routerSort2 = [...document.querySelectorAll('.routerSort2')]
            routerSort2.forEach(function (v) {
              new Sortable(v, {
                group: 'routerSort2',
                ghostClass: 'blue-background-class',
                // handle: ".routerSort2-handle", 
                animation: 150
              });
            })




          }
        });
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
  })

})


