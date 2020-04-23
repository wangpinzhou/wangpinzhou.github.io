<template>
  <div>
    <pre>
qrcode 二维码生成器
render 定义二维码的渲染方式，有table和canvas两种渲染方式
width 定义二维码的宽度
height 定义二维码的高度
text 定义二维码内容
typeNumber 二维码的计算模式 一般默认为-1
correctLevel 二维码的纠错级别
background 定义二维码的背景颜色
foreground 定义二维码的前景色
    </pre>内容:
    <input v-model="option.text" type="text" @change="render" />
    宽高:
    <input v-model="option.width" type="number" @change="render" />
    前景色:
    <input v-model="option.foreground" type="color" @change="render" />
    背景颜色:
    <input v-model="option.background" type="color" @change="render" />
    <hr />
    <div id="code"></div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      option: {
        text: "qrcode 二维码生成器",
        width: "200",
        height: 0,
        foreground: "#00cc00",
        background: "#000"
      }
    };
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      this.option.height = this.option.width;
      text = utf16to8(this.option.text); // 处理中文乱码问题;
      $("#code")
        .empty()
        .qrcode({...this.option, text});
    }
  }
};
function utf16to8(str) {
  var out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if (c >= 0x0001 && c <= 0x007f) {
      out += str.charAt(i);
    } else if (c > 0x07ff) {
      out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    } else {
      out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    }
  }
  return out;
}
</script>

<style scoped>
</style>
