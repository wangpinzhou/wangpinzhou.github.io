<template>
  <div>
    <a target="_blank" href="https://sweetalert2.github.io">官方文档 https://sweetalert2.github.io</a>
    <hr />
    <div>
      5种简单的提示 : "success", "error", "warning", "info" or "question"
      <code>swal.fire(arr[key], arr[key], arr[key]);</code>
    </div>
    <button v-for="item in 5" :key="item" class="btn btn-info" @click="swal(item-1)">swal - {{item}}</button>
    <pre>
      Swal.fire(arr[key], arr[key], arr[key]);
    </pre>
    <hr />
    <button class="btn btn-info" @click="swal2">支持 html</button>
    <pre>
      Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html: "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i
  class="fa fa-thumbs-up"
></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i
  class="fa fa-thumbs-down"
></i>',
        cancelButtonAriaLabel: "Thumbs down"
      });
    </pre>
    <button class="btn btn-info" @click="swal3">confirm</button>
    <pre>
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        reverseButtons: true // 反转 按键
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    </pre>
    <button class="btn btn-info" @click="swal4">带输入框</button>
    <a target="_blank" href="https://sweetalert2.github.io/#input-types">更多 表单类型</a>
    <pre>
      Swal.fire({
        title: 'Enter your IP address',
        input: 'text',
        inputValue: '填充值',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        }
      }).then(function (res) { 
        console.log('返回值' + res.value);;
       })
    </pre>
  </div>
</template>

<script>
module.exports = {
  // data() {
  //   // return {
  //   //   footer: "footer"
  //   // };
  // }
  data() {
    return {
      list: [{}]
    };
  },
  mounted() {},
  methods: {
    swal(key) {
      // "success", "error", "warning", "info" or "question"
      var arr = ["success", "error", "warning", "info", "question"];
      Swal.fire(arr[key], arr[key], arr[key]);
    },
    swal2() {
      Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down"
      });
    },
    swal3() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        reverseButtons: true // 反转 按键
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    swal4() {
      Swal.fire({
        title: "标题",
        input: "text",
        inputValue: "填充值",
        showCancelButton: true,
        reverseButtons: true, // 反转 按键
        inputValidator: value => {
          if (!value) {
            return "You need to write something!";
          }
        }
      }).then(function(res) {
        console.log("返回值" + res.value);
      });
    }
  }
};
</script>

<style scoped>
button {
  margin: 4px;
}
</style>
