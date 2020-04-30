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
      list :[],

    };
  },
  mounted() {
    this.list =  menuList.find(function (v) { return v.item == 'htmlList' }).list;
  }
};
</script>

<style scoped>
</style>
