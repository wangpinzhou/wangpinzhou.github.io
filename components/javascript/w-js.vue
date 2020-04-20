<template>
  <div class="main">
    <div class="c-left">
      <w-menu :list="list"></w-menu>
    </div>

    <div class="c-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
module.exports = {
  components: {
    "w-menu": httpVueLoader("/components/w-menu.vue")
  },
  data() {
    return {
      list: [
        {
          to: "/w_js_1",
          val: "bootstrapTable合并"
        },
        {
          to: "/w_js_2",
          val: "domtoimage"
        }
      ]
    };
  },
  mounted() {
    $("#menu1").metisMenu();
  }
};
</script>

<style scoped>
.main {
  display: flex;
}

#content {
  background: #cccccc;
}
.c-left {
  width: 220px;
  background: #ccc;
}
.c-right {
  flex: 1;
  background: #fff;
}
</style>
