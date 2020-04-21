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
          id: "",
          class: "",
          href: "",
          title: "弹出层",
          target: "_self",
          subList: [
            {
              id: "",
              class: "",
              to: "/w_cj_layer",
              title: "layer.js",
              target: "_self"
            },
            {
              id: "",
              class: "",
              to: "/w_cj_swal2",
              title: "sweetAlert2",
              target: "_self"
            },
          ]
        },
        {
          id: "",
          class: "",
          href: "",
          title: "富文本编辑",
          target: "_self",
          subList: [
            {
              id: "",
              class: "",
              to: "/w_cj_edit",
              title: "wangEdit",
              target: "_self"
            },
            // {
            //   id: "",
            //   class: "",
            //   to: "/w_cj_edit",
            //   title: "sweetAlert2",
            //   target: "_self"
            // },
          ]
        }
      ]
    };
  },
  mounted() {
    // $("#menu1").metisMenu();
  }
};
</script>

<style scoped>
.main {
  display: flex;
}

#content {
  /* background: #cccccc; */
}
.c-left {
  width: 220px;
  /* background: #ccc; */
}
.c-right {
  flex: 1;
  /* background: #fff; */
}
</style>
