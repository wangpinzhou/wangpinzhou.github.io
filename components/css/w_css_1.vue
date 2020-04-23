<template>
  <div>
    <div class="flex-box">
      <div class="imgbox left-box text-center">
        <input type="text" id="box" readonly value />
        <button class="btn btn-info copyBtn" data-clipboard-target="#box">点击复制</button>
        <!-- <a href="https://clipboardjs.com/" target="_blank">clipboard.js</a> -->
        <!--   <h3 id="box"></h3> -->
        <div style="margin:30px;display:flex;  justify-content: center;align-items: center;border: 1px solid #ccc; height:500px">
          <!-- <img
            src="https://img.alicdn.com/imgextra/i3/4185520723/O1CN01rSGXFE1HDArePi4qH_!!4185520723.jpg_760x760Q90s50.jpg_.webp"
            alt
            width="400"
            height="300"
            class="animated fadeIn"
            id="img"
          /> -->
          <h1 class="bg-danger animated fadeIn" id="img" style="font-size:100px; border:15px solid #ff0; background-image:linear-gradient(90deg, #f00 69%, #0f0 0 ) ">animate.css</h1>
        </div>

        <hr />切换动画
        <br />
        <kbd>enter</kbd> 后,使用上下键 查看效果
        <br />
        <select id="input--dropdown" autofoucs>
          <optgroup label="Attention Seekers">
            <option value="bounce" selected>bounce</option>
            <option value="flash">flash</option>
            <option value="pulse">pulse</option>
            <option value="rubberBand">rubberBand</option>
            <option value="shake">shake</option>
            <option value="swing">swing</option>
            <option value="tada">tada</option>
            <option value="wobble">wobble</option>
            <option value="jello">jello</option>
          </optgroup>

          <optgroup label="Bouncing Entrances">
            <option value="bounceIn">bounceIn</option>
            <option value="bounceInDown">bounceInDown</option>
            <option value="bounceInLeft">bounceInLeft</option>
            <option value="bounceInRight">bounceInRight</option>
            <option value="bounceInUp">bounceInUp</option>
          </optgroup>

          <optgroup label="Bouncing Exits">
            <option value="bounceOut">bounceOut</option>
            <option value="bounceOutDown">bounceOutDown</option>
            <option value="bounceOutLeft">bounceOutLeft</option>
            <option value="bounceOutRight">bounceOutRight</option>
            <option value="bounceOutUp">bounceOutUp</option>
          </optgroup>

          <optgroup label="Fading Entrances">
            <option value="fadeIn">fadeIn</option>
            <option value="fadeInDown">fadeInDown</option>
            <option value="fadeInDownBig">fadeInDownBig</option>
            <option value="fadeInLeft">fadeInLeft</option>
            <option value="fadeInLeftBig">fadeInLeftBig</option>
            <option value="fadeInRight">fadeInRight</option>
            <option value="fadeInRightBig">fadeInRightBig</option>
            <option value="fadeInUp">fadeInUp</option>
            <option value="fadeInUpBig">fadeInUpBig</option>
          </optgroup>

          <optgroup label="Fading Exits">
            <option value="fadeOut">fadeOut</option>
            <option value="fadeOutDown">fadeOutDown</option>
            <option value="fadeOutDownBig">fadeOutDownBig</option>
            <option value="fadeOutLeft">fadeOutLeft</option>
            <option value="fadeOutLeftBig">fadeOutLeftBig</option>
            <option value="fadeOutRight">fadeOutRight</option>
            <option value="fadeOutRightBig">fadeOutRightBig</option>
            <option value="fadeOutUp">fadeOutUp</option>
            <option value="fadeOutUpBig">fadeOutUpBig</option>
          </optgroup>

          <optgroup label="Flippers">
            <option value="flip">flip</option>
            <option value="flipInX">flipInX</option>
            <option value="flipInY">flipInY</option>
            <option value="flipOutX">flipOutX</option>
            <option value="flipOutY">flipOutY</option>
          </optgroup>

          <optgroup label="Lightspeed">
            <option value="lightSpeedIn">lightSpeedIn</option>
            <option value="lightSpeedOut">lightSpeedOut</option>
          </optgroup>

          <optgroup label="Rotating Entrances">
            <option value="rotateIn">rotateIn</option>
            <option value="rotateInDownLeft">rotateInDownLeft</option>
            <option value="rotateInDownRight">rotateInDownRight</option>
            <option value="rotateInUpLeft">rotateInUpLeft</option>
            <option value="rotateInUpRight">rotateInUpRight</option>
          </optgroup>

          <optgroup label="Rotating Exits">
            <option value="rotateOut">rotateOut</option>
            <option value="rotateOutDownLeft">rotateOutDownLeft</option>
            <option value="rotateOutDownRight">rotateOutDownRight</option>
            <option value="rotateOutUpLeft">rotateOutUpLeft</option>
            <option value="rotateOutUpRight">rotateOutUpRight</option>
          </optgroup>

          <optgroup label="Sliding Entrances">
            <option value="slideInUp">slideInUp</option>
            <option value="slideInDown">slideInDown</option>
            <option value="slideInLeft">slideInLeft</option>
            <option value="slideInRight">slideInRight</option>
          </optgroup>
          <optgroup label="Sliding Exits">
            <option value="slideOutUp">slideOutUp</option>
            <option value="slideOutDown">slideOutDown</option>
            <option value="slideOutLeft">slideOutLeft</option>
            <option value="slideOutRight">slideOutRight</option>
          </optgroup>

          <optgroup label="Zoom Entrances">
            <option value="zoomIn">zoomIn</option>
            <option value="zoomInDown">zoomInDown</option>
            <option value="zoomInLeft">zoomInLeft</option>
            <option value="zoomInRight">zoomInRight</option>
            <option value="zoomInUp">zoomInUp</option>
          </optgroup>

          <optgroup label="Zoom Exits">
            <option value="zoomOut">zoomOut</option>
            <option value="zoomOutDown">zoomOutDown</option>
            <option value="zoomOutLeft">zoomOutLeft</option>
            <option value="zoomOutRight">zoomOutRight</option>
            <option value="zoomOutUp">zoomOutUp</option>
          </optgroup>

          <optgroup label="Specials">
            <option value="hinge">hinge</option>
            <option value="jackInTheBox">jackInTheBox</option>
            <option value="rollIn">rollIn</option>
            <option value="rollOut">rollOut</option>
          </optgroup>
        </select>
        <button id="auto" class="btn btn-success">自动切换</button>
      
      </div>
      <div class="right-box">
        <h3 class="bg-danger">可以通过添加下面的 class 修改delay 时间 是否无限循环 动作周期;<br>也可以 增加自定义class 修改这些参数</h3>
<pre>
.yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
</pre>
        <h3>animationend 动画结束事件</h3>
<pre>
const element =  document.querySelector('.my-element')
element.classList.add('animated', 'bounceOutLeft')
element.addEventListener('animationend', function() { doSomething() })
</pre>

        <h3>简单 封装动画</h3>
<pre>
You can use this simple function to add and remove the animations:

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
And use it like this:

animateCSS('.my-element', 'bounce')

// or
animateCSS('.my-element', 'bounce', function() {
  // Do something after animation
})
</pre>
<pre>
  <code>
  
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.animated.delay-2s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.animated.delay-3s {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.animated.delay-4s {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

.animated.delay-5s {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}

.animated.fast {
  -webkit-animation-duration: 800ms;
  animation-duration: 800ms;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.animated.slow {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.slower {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}
</code>
</pre>
      </div>
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
  // data() {
  //   return {
  //   }
  // }
  mounted() {
    $("#img").on("animationend", function() {
      console.log("动画结束");
    });

    //实例化 ClipboardJS对象;
    var copyBtn = new ClipboardJS(".copyBtn");

    copyBtn.on("success", function(e) {
      // 复制成功
      alert(e.text);
      e.clearSelection();
    });
    copyBtn.on("error", function(e) {
      //复制失败；
      console.log(e.action);
    });

    $("#input--dropdown").on("change", function() {
      clearInterval(timer);
      // $(#auto).html( "自动切换");
      $("#box").val($("#input--dropdown").val() + " animated");
      $("#img")
        .removeClass()
        .addClass($("#input--dropdown").val() + " animated");
    });
    $("#auto").on("click", function() {
      if ($(this).html() == "自动切换") {
        $(this).html("停止");
        var i = 0;

        timer = setInterval(function() {
          $("#box").val(
            $("#input--dropdown")
              .find("option")
              .eq(i++)
              .val() + " animated"
          );
          if (i >= 76) {
            i = 0;
          }
          $("#img")
            .removeClass()
            .addClass(
              $("#input--dropdown")
                .find("option")
                .eq(i++)
                .val() + " animated"
            );
        }, 1500);
      } else {
        clearInterval(timer);
        $(this).html("自动切换");
      }
    });
    // $("#auto").trigger("click");
  }
};
</script>

<style scoped>
.flex-box {
  display: flex;
}
.left-box {
  flex: 1;
}
.right-box {
  flex: 1;
  height: 80vh;
  overflow-y:auto;
}
pre {
  /* columns: 2; */
  column-gap: 5px;
  /* color: #fff; */
  padding: 2px 30px;
  /* background: #000; */
}
</style>
