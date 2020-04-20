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
          to: "/w_css_1",
          val: "/w_css_1"
        },
        {
          to: "/w_css_2",
          val: "/w_css_2"
        },
        {
          to: "/w_css_2",
          val: "/w_css_2"
        },
        {
          to: "/w_css_2",
          val: "/w_css_2"
        },
        {
          to: "/w_css_2",
          val: "/w_css_2"
        },
        {
          to: "/w_css_2",
          val: "/w_css_2"
        },
      ]
    }
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

.c-right {
  flex: 1;
}
</style>
