<template>
  <div>
    Bootstrap Tour --- The easiest way to show people how to use your website./ 操作指引
    <a
      href="http://bootstraptour.com/"
      target="_blank"
    >官方链接</a>
    <hr />
    <button class="btn btn-info" @click="restart">重新开始引导</button>
    <button class="btn btn-info" id="ele1">ele1</button>
    <button class="btn btn-info" id="ele2">ele2</button>
    <button class="btn btn-info" id="ele3">ele3</button>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      // list: [{}]
      tour: null
    };
  },
  mounted() {
    // Instance the tour
    var tour = new Tour({
      name: "tour123", //完成后保存在本地的名字
      backdrop: true, // 背景高亮;
      template: `<div class='popover tour'>
                  <div class='arrow'></div>
                  <h3 class='popover-title'></h3>
                  <div class='popover-content'></div>
                  <div class='popover-navigation'>
                    <button class='btn btn-default btn-sm' data-role='prev'>« 上一步</button>
                    <span data-role='separator'>|</span>
                    <button class='btn btn-default btn-sm' data-role='next'>下一步 »</button>
                    <button class='btn btn-default btn-sm' data-role='end'>结束</button>
                  </div>
                </div>`,
      steps: [
        {
          element: "#ele1",
          title: "第一步....",
          content: "第一步第一步第一步第一步第一步第一步"
        },
        {
          element: "#ele2",
          title: "第二步...",
          content: "第二步第二步第二步第二步第二步第二步第二步"
        },
        {
          element: "#ele3",
          title: "第三步...",
          content: "第三步第三步第三步第三步第三步第三步第三步"
        }
      ]
    });

    this.tour = tour;

    // var dome = new Tour({
    //   name: "tour",
    //   steps: [],
    //   container: "body",
    //   smartPlacement: true,
    //   keyboard: true,
    //   storage: window.localStorage,
    //   debug: false,
    //   backdrop: false,
    //   backdropContainer: "body",
    //   backdropPadding: 0,
    //   redirect: true,
    //   orphan: false,
    //   duration: false,
    //   delay: false,
    //   basePath: "",
    //   template: `<div class='popover tour'>
    //               <div class='arrow'></div>
    //               <h3 class='popover-title'></h3>
    //               <div class='popover-content'></div>
    //               <div class='popover-navigation'>
    //                   <button class='btn btn-default' data-role='prev'>« Prev</button>
    //                   <span data-role='separator'>|</span>
    //                   <button class='btn btn-default' data-role='next'>Next »</button>
    //               </div>
    //               <button class='btn btn-default' data-role='end'>End tour</button>
    //             </div>`,
    //   afterGetState: function(key, value) {},
    //   afterSetState: function(key, value) {},
    //   afterRemoveState: function(key, value) {},
    //   onStart: function(tour) {},
    //   onEnd: function(tour) {},
    //   onShow: function(tour) {},
    //   onShown: function(tour) {},
    //   onHide: function(tour) {},
    //   onHidden: function(tour) {},
    //   onNext: function(tour) {},
    //   onPrev: function(tour) {},
    //   onPause: function(tour, duration) {},
    //   onResume: function(tour, duration) {},
    //   onRedirectError: function(tour) {}
    // });

    // Initialize the tour
    tour.init();

    // Start the tour
    // tour.start(true);  // true 每次刷新页面都引导;
    tour.start(); // true 每次刷新页面都引导;
  },
  methods: {
    restart() {
      this.tour.restart();
    }
  }
};
</script>

<style scoped>
button {
  margin: 4px;
}
</style>
