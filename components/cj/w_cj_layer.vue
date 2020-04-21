<template>
  <div>
    <a
      target="_blank"
      href="https://www.layui.com/doc/modules/layer.html"
    >官方文档 https://www.layui.com/doc/modules/layer.html</a>
    <hr />

    <button class="btn btn-info" @click="msg">msg</button>
    <button class="btn btn-info" @click="msgIcon">msgIcon</button>
    <button class="btn btn-info" @click="msgCallback">msgCallback</button>
    <button class="btn btn-warning" @click="alert">alert</button>
    <button class="btn btn-success" @click="confirm">confirm</button>
    <button class="btn btn-warning" @click="prompt">prompt</button>
    <button class="btn btn-primary" @click="openDom">openDom</button>
    <button class="btn btn-primary" @click="openIframe">openIframe层</button>
    <button class="btn btn-danger" id="tipId" @click="tips">tips</button>
    <br />
    <br />

    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">提示</h4>
      <p>如需要修改confirm/prompt/open 的默认取消/确定 位置顺序 可以通过如下css</p>
      <p class="mb-0"></p>
    </div>

    <pre>
      /* 应要求修改layer 样式  确认 按键右边,  取消按键左边  */
      .xubox_botton .xubox_botton3 {
        margin-left: -80px !important;
      }
      .xubox_botton .xubox_botton2 {
        margin-left: 10px !important;
      }
      .layui-layer-btn0 {
        float: right !important;
      }
      .layui-layer-btn:after {
        content: '';
        display: block;
        clear: both;
        height: 0;
      }
      .layui-layer-btn .layui-layer-btn0 {
        background-color: #23c6c8 !important;
        border-color: #23c6c8 !important;
        color: #fff;
      }
    </pre>
    <div id="open" style="display:none">
      openDom
      <br />本页面的 模态框内容
    </div>
  </div>
</template>

<script>
module.exports = {
  // data() {
  //   // return {
  //   //   footer: "footer"
  //   // };
  // }
  data() {
    return {
      list: [{}]
    };
  },
  mounted() {},
  methods: {
    msg() {
      layer.msg("msg");
    },
    msgIcon() {
      var icon = _.random(1, 7);
      layer.msg(`msg   ${icon}`, { icon });
    },
    msgCallback() {
      layer.msg("msgCallback 加载中...", function(res) {
        // alert('msg');
        layer.msg("msgCallback完成了", { icon: 1 });
      });
    },
    alert(){
      layer.alert('alert');
    },
    confirm() {
      layer.confirm(
        "?????",
        function(index) {
          layer.close(index);
        },
        function() {}
      );
    },
    prompt() {
      layer.prompt({ title: "标题", value: "", formType: 0 }, function(
        val,
        index
      ) {
        //formType 输入框类型，支持0（文本）默认1（密码）2（多行文本） value: '', //初始时的值，默认空字符
        console.log(val);
        layer.close(index);
      });
    },
    tips() {
      //
      layer.tips("提示精准 ,在元素上提示", "#tipId", {
        tips: 1 // 位置 1- 4; 默认3
      });
    },
    openDom() {
      layer.open({
        type: 1, //Layer提供了5种层类型。可传入的值有：0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）,
        title: "title", //标题
        area: ["500px", "500px"], //宽高 px/ %
        // offset: ["auto"], //位置 px/ %
        shade: 0.4, //遮罩透明度
        content: $("#open"), //  dom 或 url 地址 $('#')  iframe 地址
        maxmin: true, // 显示 最小化 /最大化按键;
        // fixed: true, //不固定
        // move: false,//来禁止拖拽
        // moveOut: true,//是否允许拖拽到窗口外
        // closeBtn: 1,  // 1, 显示关闭 0 不显示关闭按键
        // tips: [1, '#c00'], tips方向和颜色 4（tips层）
        // scrollbar: false, //屏蔽浏览器滚动条
        shadeClose: true,
        btn: ["确定", "取消"], //按钮组
        yes: function(index, layero) {
          // 按键 确定;
          //do something
          layer.close(index); //如果设定了yes回调，需进行手工关闭
        },
        btn2: function(index, layero) {
          // 按键 取消;
          //do something
          console.log("btn2");
          // layer.close(index); //如果设定了yes回调，需进行手工关闭
        },
        success: function(layero, index) {
          // var body = layer.getChildFrame('body', index);
          // var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
          // console.log(body.html()) //得到iframe页的body内容
          // body.find('input').val('Hi，我是从父页来的')
          // iframeWin.childMethod()
        }
      });
    },
    openIframe() {
      layer.open({
        type: 2, //Layer提供了5种层类型。可传入的值有：0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）,
        title: "openIframe", //标题
        area: ["500px", "500px"], //宽高 px/ %
        // offset: ["auto"], //位置 px/ %
        shade: 0.4, //遮罩透明度
        content: "../../index.html", //  dom 或 url 地址 $('#')  iframe 地址
        maxmin: true, // 显示 最小化 /最大化按键;
        resize: true,
        // fixed: true, //不固定
        // move: false,//来禁止拖拽
        // moveOut: true,//是否允许拖拽到窗口外
        // closeBtn: 1,  // 1, 显示关闭 0 不显示关闭按键
        // tips: [1, '#c00'], tips方向和颜色 4（tips层）
        // scrollbar: false, //屏蔽浏览器滚动条
        shadeClose: true,
        btn: ["确定", "取消"], //按钮组
        yes: function(index, layero) {
          // 按键 确定;
          //do something
          layer.close(index); //如果设定了yes回调，需进行手工关闭
        },
        btn2: function(index, layero) {
          // 按键 取消;
          //do something
          console.log("btn2");
          // layer.close(index); //如果设定了yes回调，需进行手工关闭
        },
        success: function(layero, index) {
          // var body = layer.getChildFrame('body', index);
          // var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
          // console.log(body.html()) //得到iframe页的body内容
          // body.find('input').val('Hi，我是从父页来的')
          // iframeWin.childMethod()
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
