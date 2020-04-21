<template>
  <div>
    <button class="btn btn-info" id="gethtml">获取html</button>
    <button class="btn btn-info" id="defaultHtml">填充默认的文本信息</button>
    <hr />
    <div id="editor" style="min-height:500px"></div>
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
  mounted() {
    var defaultHtml = `
                  <table border="0" cellpadding="0" cellspacing="0" width="800" height="570">
                    <colgroup>
                      <col width="">
                      <col width="">
                      <col width="">
                      <col width="">
                    </colgroup>
                    <tbody>
                      <tr height="19">
                        <td class="et2" height="19" width="110" x:str="">联系人</td>
                        <td class="et2" width="288"></td>
                        <td class="et2" width="110" x:str="">联系电话</td>
                        <td class="et2" width="288"></td>
                      </tr>
                      <tr height="19">
                        <td class="et2" height="19" x:str="">负责人</td>
                        <td class="et2"></td>
                        <td class="et2" x:str="">联系电话</td>
                        <td class="et2"></td>
                      </tr>
                      <tr height="19">
                        <td class="et2" height="19" x:str="">模式</td>
                        <td class="et2"></td>
                        <td class="et2" x:str="">地址</td>
                        <td class="et2"></td>
                      </tr>
                      <tr height="19">
                        <td colspan="4" class="et3" height="133" width="690" x:str="">常用功能：<br>例如：批打爆款、退款重发</td>
                      </tr>

                      <tr height="19">
                        <td colspan="4" class="et3" height="114" width="690" x:str="">
                          注意事项：<br>1.刷单要先处理<br>2.蓝旗不发货<br>3.有COD订单<br></td>
                      </tr>
                    
                      <tr height="19">
                        <td colspan="4" class="et4" height="266" x:str="">每日例行操作：</td>
                      </tr>
                      
                    </tbody>
                  </table>`;

    var E = window.wangEditor;
    var editor = new E("#editor");
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片

    editor.create();

    // $.ajax({
    //   type: "post",
    //   url: "/hpiApp/web-isure/security/getCompanyOpenInfo.do",
    //   // data: "data",
    //   dataType: "json",
    //   success: function (res) {
    //     if (res.status == 'fail') {
    //       layer.alert(res.msg);
    //       return;
    //     }
    //     // layer.msg(res.msg);
    //     if (!res.data.openInfo) {
    //       editor.txt.html(defaultHtml)
    //     } else {
    //       editor.txt.html(res.data.openInfo)
    //     }
    //   }
    // });

    // $('body').on('click', '#saveBtn', function (v) {

    //   $.ajax({
    //     type: "post",
    //     url: "/hpiApp/web-isure/security/saveCompanyOpenInfo.do",
    //     data: {
    //       openInfo: editor.txt.html(),
    //       openTime: $('#openTime').val()
    //     },
    //     dataType: "json",
    //     success: function (res) {
    //       if (res.status == 'fail') {
    //         layer.alert(res.msg);
    //         return;
    //       }
    //       layer.msg(res.msg);
    //     }
    //   });
    // })

    document.getElementById("gethtml").addEventListener(
      "click",
      function() {
        layer.alert(editor.txt.html());
      },
      false
    );

    document.getElementById("defaultHtml").addEventListener(
      "click",
      function() {
        // 读取 text
        editor.txt.html(defaultHtml);
      },
      false
    );
  },
  methods: {}
};
</script>

<style scoped>
button {
  margin: 4px;
}
.w-e-text-container {
  height: calc(100vh - 300px) !important;
  /*!important是重点，因为原div是行内样式设置的高度300px*/
}
</style>
