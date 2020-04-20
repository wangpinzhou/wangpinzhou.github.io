<template>
  <div>
    <input type="button" id="btn" class="btn btn-sm btn-info" value="点击打印图片" />
    <table id="table" class="table table-bordered table-responsive bg-success">
      <thead class="">
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 10" :key="item">
          <td scope="row">{{item}}</td>
          <td scope="row">{{item}}</td>
          <td scope="row">{{item}}</td>
        </tr>
       
      </tbody>
    </table>
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
      list:[
        {}
      ]
    };
  },
  mounted() {
    $("#btn").click(function() {
      //插入图片到html
      var node = document.getElementById("table");
      // domtoimage.toPng(node).then(function(dataUrl) {
      //   //console.log(dataUrl)  //生成图片的base64路径
      //   var img = new Image();
      //   img.src = dataUrl;
      //   document.body.appendChild(img);
      // });
      // 下载png图片
      domtoimage.toBlob(node).then(function(blob) {
        //console.log(blob)
        //my-node.png：自定义图片名称，可随意更改
        window.saveAs(blob, "my-node.png");
      });
    });
  }
};
</script>

<style scoped>
</style>
