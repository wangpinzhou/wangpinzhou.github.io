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
// import menuList form '../../router/menu'
module.exports = {
  components: {
    "w-menu": httpVueLoader("/components/w-menu.vue")
  },
  data() {
    return {
      list: menuList.jsList,

    }
  },
  mounted() {
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
