
<template>
  <div>
    <canvas id="cas"></canvas>
    <img width="50" id="my-image" src="https://s.cdpn.io/profiles/user/2299556/80.jpg" alt />
    <button @click="setImg()">读取图片地址，设置画布背景</button>
    <button @click="imgAdd1()">添加图片(id)</button>
    <button @click="imgAdd2()">添加图片(url)</button>
    <button @click="addTextbox()">添加文字</button>
    <button @click="setAngle(10)">旋转10</button>
    <button @click="setAngle(-10)">旋转-10</button>
    <button @click="scaleX()">翻转图层X</button>
    <button @click="scaleY()">翻转图层Y</button>
    <button @click="remove()">remove</button>
    <button @click="bringForward()">上移图层bringForward</button>
    <button @click="sendBackwards()">下移图层sendBackwards</button>

    <button @click="toJSON()">将画布导出toJSON</button>
    <button @click="canvasToImage()">将画布导出成图片下载</button>
    <button @click="setbackcolor1()">画布背景色1</button>
    <button @click="setbackcolor2()">画布背景色2</button>
    <button @click="addelement()">添加 图像(三角 圆 方...)</button>
    <button @click="clearAll()">clearAll</button>
    <button @click="onDrawingMode()" id="onDrawingMode">打开画笔</button>
    <button @click="addGroup()">addgroup添加组合图形</button>

    <hr />
    <code>
      <br />下移：canvas.sendBackwards(canvas.getActiveObject());
      <br />上移：canvas.bringForward(canvas.getActiveObject());
      <br />置顶：canvas.bringToFront(canvas.getActiveObject());
      <br />置底：canvas.sendToBack(canvas.getActiveObject());
    </code>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      card: null,
      selectedObj: null
    };
  },
  mounted() {
    this.card = new fabric.Canvas("cas", {
      backgroundColor: "#fefefe", // 画布背景色为蓝色
      isDrawingMode: false //设置是否可以绘制
    });

    // 在画布初始化后设置
    this.card.preserveObjectStacking = true; // 禁止选中图层时自定置于顶部

    this.card.setWidth(600);
    this.card.setHeight(400);

    // 方式一
    this.selectedObj = this.card.getActiveObject(); // 返回当前画布中被选中的图层

    // 方式二
    this.card.on("mouse:down", e => {
      // 选中图层事件触发时，动态更新赋值
      this.selectedObj = e.target;
      // console.log(e.target);
    });

    // 按键盘 ⬅删除
    this.delSelected();

    this.card.on("object:rotating", function() {
      console.log("rotating");
    });
    this.card.on("object:moving", function() {
      console.log("object:moving");
    });
    this.card.on("object:removed", function() {
      console.log("object:removed");
    });
    this.card.on("mouse:up", function(e) {
      console.log("mouse:up");
      // console.log(e);
    });
    this.card.on("mouse:down", function(e) {
      console.log("mouse:down");
    });
  },
  computed: {},
  methods: {
    addTextbox() {
      /**
       * 如何向画布添加一个Textbox对象？
       */

      const textbox = new fabric.Textbox("这是一段文字", {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20, // 字体大小
        fontWeight: 800, // 字体粗细
        // fill: 'red', // 字体颜色
        // fontStyle: 'italic',  // 斜体
        // fontFamily: 'Delicious', // 设置字体
        // stroke: 'green', // 描边颜色
        // strokeWidth: 3, // 描边宽度
        hasControls: false,
        borderColor: "orange",
        editingBorderColor: "blue" // 点击文字进入编辑状态时的边框颜色
      });
      // 添加文字后，如下图
      this.card.add(textbox);
    },

    // 读取图片地址，设置画布背景
    setImg() {
      // 方式一（通过img元素添加）

      var that = this;
      var img1 = document.createElement("img");
      img1.onload = function() {
        const imgInstance = new fabric.Image(img1, {
          scaleX: that.card.width / img1.width,
          scaleY: that.card.height / img1.height
        });
        that.card.setBackgroundImage(
          imgInstance,
          that.card.renderAll.bind(that.card)
        );
        // 添加对象后, 如下图
      };
      img1.crossOrigin = "Anonymous";
      //记得加上，不然会出现画布污染（Uncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported）等错误
      img1.src =
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2347348831,4245317090&fm=26&gp=0.jpg";
    },
    setbackcolor1() {
      this.card.backgroundColor = "blue";
      this.card.renderAll();
    },

    setbackcolor2() {
      this.card.setBackgroundColor("#FF0");
      this.card.renderAll();
    },

    /**
     * 如何向画布添加一个Image对象？
     */
    imgAdd1() {
      // 方式一（通过img元素添加）
      // const imgElement = document.getElementById("my-image");

      var that = this;
      var img = document.createElement("img");
      img.onload = function() {
        const imgInstance = new fabric.Image(img, {
          left: 100, // 图片相对画布的左侧距离
          top: 100, // 图片相对画布的顶部距离
          angle: 30, // 图片旋转角度
          opacity: 1, // 图片透明度
          // 这里可以通过scaleX和scaleY来设置图片绘制后的大小，这里为原来大小的一半
          scaleX: 0.25,
          scaleY: 0.25
        });
        // 添加对象后, 如下图
        that.card.add(imgInstance);
      };
      img.crossOrigin = "Anonymous";
      //记得加上，不然会出现画布污染（Uncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported）等错误
      img.src =
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=160856206,831390008&fm=26&gp=0.jpg";
    },

    imgAdd2() {
      // 方式二（通过图片路径添加）
      fabric.Image.fromURL(
        "https://s.cdpn.io/profiles/user/2299556/80.jpg?1536541376",
        img => {
          img.set({
            hasControls: true, // 是否开启图层的控件
            borderColor: "orange" // 图层控件边框的颜色
          });

          // 添加对象后, 如下图

          this.card.add(img);
        }
      );

      // img.crossOrigin = "Anonymous"; //记得加上，不然会出现画布污染（Uncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported）等错误
    },

    addTextbox() {
      /**
       * 如何向画布添加一个Textbox对象？
       */

      const textbox = new fabric.Textbox("这是一段文字", {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20, // 字体大小
        fontWeight: 800, // 字体粗细
        // fill: 'red', // 字体颜色
        // fontStyle: 'italic',  // 斜体
        // fontFamily: 'Delicious', // 设置字体
        // stroke: 'green', // 描边颜色
        // strokeWidth: 3, // 描边宽度
        hasControls: false,
        borderColor: "orange",
        editingBorderColor: "blue" // 点击文字进入编辑状态时的边框颜色
      });
      // 添加文字后，如下图
      this.card.add(textbox);
    },

    setAngle(deg) {
      // 顺时针90°旋转
      const currAngle = this.selectedObj.angle; // 当前图层的角度
      const angle = currAngle === 360 ? deg : currAngle + deg;
      this.selectedObj.rotate(angle);
      // 如果是通过滑块的方式控制旋转
      // this.selectedObj.rotate(slideValue);

      // 所有图层的操作之后，都需要调用这个方法
      this.card.renderAll();
    },

    scaleX() {
      // 水平翻转，同理垂直翻转改为scaleY属性
      this.selectedObj.set({
        scaleX: -this.selectedObj.scaleX
      });

      this.card.renderAll();
    },
    scaleY() {
      // 水平翻转，同理垂直翻转改为scaleY属性
      this.selectedObj.set({
        scaleY: -this.selectedObj.scaleY
      });

      this.card.renderAll();
    },
    remove() {
      this.card.remove(this.selectedObj); // 传入需要移除的object
      this.card.renderAll();
    },

    bringForward() {
      // this.selectedObj = this.card.getActiveObject(); // 返回当前画布中被选中的图层
      // this.selectedObj.bringForward();
      // this.card.renderAll();
      this.card.bringForward(this.card.getActiveObject());
      // this.selectedObj.moveTo(this.card, 11);
    },
    sendBackwards() {
      // this.selectedObj = this.card.getActiveObject(); // 返回当前画布中被选中的图层
      // this.selectedObj.sendBackwards();
      // canvas.getActiveObject()
      this.card.sendBackwards(this.card.getActiveObject());
      // this.card.renderAll();
      // this.selectedObj.moveTo(this.card, 1);
    },

    toJSON() {
      var toJSON = this.card.toJSON();

      console.log(toJSON);
      // $("#my-image").attr("src", dataURL);
    },

    //canvas导出为图片并下载;
    canvasToImage() {
      var MIME_TYPE = "image/png";
      //转换成base64
      var imgURL = this.card.toDataURL({
        format: "png", // jpeg或png
        quality: 0.8 // 图片质量，仅jpeg时可用
        // 截取指定位置和大小
        // left: 100,
        // top: 100,
        // width: 200,
        // height: 200
      }); //创建一个a链接，模拟点击下载
      // console.log(imgURL);
      var dlLink = document.createElement("a");
      var filename = "个人画板_" + new Date().getTime() + ".png";
      dlLink.download = filename;
      dlLink.href = imgURL;
      dlLink.dataset.downloadurl = [
        MIME_TYPE,
        dlLink.download,
        dlLink.href
      ].join(":");
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
    },

    addelement() {
      var circle = new fabric.Circle({
        radius: 20,
        fill: "green",
        left: 100,
        top: 100
      });

      circle.setGradient("fill", {
        x1: 0,
        y1: 0,
        x2: circle.width,
        y2: 0,
        colorStops: {
          0: "red",
          0.2: "orange",
          0.4: "yellow",
          0.6: "green",
          0.8: "blue",
          1: "purple"
        }
      });
      var triangle = new fabric.Triangle({
        width: 20,
        height: 30,
        fill: "blue",
        left: 50,
        top: 50
      });
      var Rect = new fabric.Rect({
        width: 55,
        height: 55,
        fill: "green",
        left: 200,
        top: 200
      });
      this.card.add(circle, triangle, Rect);

      // 画不规则的线
      var path = new fabric.Path("M 0 0 L 200 100 L 170 200 z");

      // path.set({ left: 120, top: 120, fill: "red" });

      this.card.add(path);
    },

    clearAll() {
      console.log("清除数据");
      this.card.clear().renderAll();
    },

    onDrawingMode() {
      if (this.card.isDrawingMode == true) {
        this.card.isDrawingMode = false;
        $("#onDrawingMode").html("打开画笔");
      } else {
        this.card.isDrawingMode = true;
        $("#onDrawingMode").html("关闭画笔");
      }
    },
    delSelected() {
      var that = this;
      this.card.on("mouse:down", function(options) {
        if (options.target) {
          document.onkeydown = function(e) {
            console.log(e.keyCode);
            if (e.keyCode == 8) {
              that.card.remove(options.target);
            }
          };
        }
      });
    },
    // addGroup()
    addGroup() {
      var circle1 = new fabric.Circle({
        radius: 20,
        fill: "green",
        left: 100,
        top: 100
        // originX: 'center',
        // originY: 'center',
      });
      var circle2 = new fabric.Circle({
        radius: 10,
        fill: "red",
        left: 100,
        top: 100
        // originX: 'center',
        // originY: 'center',
      });
      group = new fabric.Group([circle1, circle2], {
        originX: "center",
        originY: "center"
      });

      this.card.add(group);
      group.on("selected", function() {
        console.log("selected");
      });

      group.animate("angle", 360, {
        onChange: this.card.renderAll.bind(this.card)
      });
      group.animate("left", "+=200", {
        onChange: this.card.renderAll.bind(this.card)
      });
      group.animate("top", "+=200", {
        onChange: this.card.renderAll.bind(this.card),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
    }
  }
};
</script>

<style scoped>
body {
  padding: 10px;
}

canvas {
  border: 1px solid #000;
}
</style>
