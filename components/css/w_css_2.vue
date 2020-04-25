<template>
  <div>
    <p>用width实现的百分比进度条;</p>
    <div class="pre" v-for="(item,index) in list" :key="index" style="margin-bottom:5px;">
      <div class="pre" :style="{width: item + '%'}" :class="color(item)">{{ item }}%</div>
    </div>
    <p>用渐变实现的百分比进度条;</p>
    <div
      class="pre"
      v-for="(item) in list"
      :key="item"
      style="margin-bottom:5px;"
      :style="{backgroundImage: 'linear-gradient(90deg, '+ color2(item) + ' '+ item +'%, transparent 1%)'}"
    >{{ item }}%</div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      list: [10, 20, 30, 40, 60, 80, 100]
    };
  },
  methods: {
    color(val) {
      if (val >= 80) {
        return "bg-success";
      } else if (val >= 60) {
        return "bg-primary";
      } else return "bg-danger";
    },
    color2(val) {
      if (val >= 80) {
        return "#0f0";
      } else if (val >= 60) {
        return "#00f";
      } else {
        return "#f00";
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
.pre {
  border: 1px solid #ccc;
  border-radius: 35px;
  text-indent: 1em;
  transition: all 1s;
  /* transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); */
}
.pre:hover {
  border: 1px solid #f00;
}
</style>
