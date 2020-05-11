<template>
  <div>
    <a href="https://www.cnblogs.com/liuxianan/p/js-excel.html">学习 js-xlxs的链接 from 小茗同学的博客园</a>
    <pre>
官方github：https://github.com/SheetJS/js-xlsx 
cdn: https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.0/xlsx.full.min.js
    </pre>
    <!-- <script src="https://cdn.bootcss.com/xlsx/0.15.1/xlsx.full.min.js"></script> -->

    <h1>sheetJS xlsx.js</h1>
    <button id="tablebtn">table 导出</button>
    <button id="aoabtn">aoa_to_worksheet 导出</button>
    <button id="jsonbtn">json 导出</button>
    <hr />选择xlsx 文件; 在控制台查看 导入的数据;(注意读取出来的key 对应的是中文 ,)
    <br />
    <input type="file" id="file" />
    <div id="filetable"></div>
    <br />
    <h2>table 导出数据</h2>
    <table id="table" border>
      <thead>
        <tr>
          <th>表头</th>
          <th>表头</th>
          <th>表头</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11</td>
          <td>11</td>
          <td>11</td>
        </tr>
        <tr>
          <td>11</td>
          <td>11</td>
          <td>11</td>
        </tr>
        <tr>
          <td>11</td>
          <td>11</td>
          <td>11</td>
        </tr>
      </tbody>
    </table>

    <h2>aoa 导出数据</h2>
    <pre>
  let data = [
    ["标题1", "标题2", "标题3"],
    ["内容1", "内容2", "内容3", "多了一列"],
    ["内容1", "内容2", "内容3","多了二列","多了二列"],
  ];
</pre>
    <h2>json 导出数据</h2>
    <p>这里注意 后台返回的json数据通常是英文的key的;</p>
    <pre>
  let data = [
    { 标题1: "内容1", 标题2: "内容2", 标题3: "内容3" },
    { 标题1: "内容4", 标题2: "内容4", 标题3: "内容5" }
  ];
</pre>
    <hr />
    <hr />
    <pre>
明确三个概念：
cell---单元格
workbook---方法中简称book
worhsheet---方法中简称sheet
一个完整的导表流程
1.创建一个新的workbook

var workbook=XLSX.utils.book_new()

2.获取table的DOM元素

const table=document.getElementById("table")

3.把table数据转化成worksheet

const worksheet=XLSX.utils.table_to_sheet(table)

4.workbook中插入worksheet

XLSX.utils.book_append_sheet(workbook,worksheet,'sheet名称')

5.调起下载

XLSX.writeFile(workbook,'表格名称.xlsx')

</pre>

    <hr />
    <button class="btn btn-info" @click="export2222">不用插件导出 excel 文件</button>
    <div class="text-danger">可以导出单元格合并, 样式 图片 但是样式必须是行内样式;</div>
    <div id="table2222">
      <table border="1">
        <tr>
          <th style="width:100px; height:100px;background:#eee;" colspan="2">1</th>
          <th style="width:100px; height:100px;background:#eee;">3</th>
        </tr>
        <tr>
          <td style="width:100px; height:100px;background:#eee;">1</td>
          <td style="width:100px; height:100px;background:#eee;">2</td>
          <td style="width:100px; height:100px;background:#eee;">3</td>
        </tr>
        <tr>
          <td style="width:100px; height:100px;background:#eee;">
            <img
              src="https://s.cdpn.io/profiles/user/2299556/80.jpg?1574072282"
              style="width:100%;height:100%"
            />
          </td>
          <td style="width:100px; height:100px;background:#eee;">
            <img
              src="https://s.cdpn.io/profiles/user/2299556/80.jpg?1574072282"
              style="width:100%;height:100%"
            />
          </td>
          <td style="width:100px; height:100px;background:#eee;">
            <img
              src="https://s.cdpn.io/profiles/user/2299556/80.jpg?1574072282"
              style="width:100%;height:100%"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// 加载 js css 文件;
function loadjscssfile(filename, filetype) {
  if (filetype == "js") {
    var fileref = document.createElement("script");
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", filename);
  } else if (filetype == "css") {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
  }
  if (typeof fileref != "undefined") {
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
}

module.exports = {
  data() {
    return {};
  },
  created() {
    loadjscssfile("https://cdn.bootcss.com/xlsx/0.15.1/xlsx.full.min.js", "js");
  },
  mounted() {
    file.addEventListener("change", function(e) {
      let txt = this.files[0];
      let fileReader = new FileReader();
      fileReader.readAsArrayBuffer(txt);
      fileReader.onload = function(e) {
        var data = new Uint8Array(fileReader.result);
        // var data = fileReader.result
        // console.log({data})
        var workbook = XLSX.read(data, {
          type: "array"
        });

        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        var _JsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        console.log(_JsonData);
        // filetable.
      };
    });

    tablebtn.onclick = function() {
      // 1.创建一个新的workbook
      var workbook = XLSX.utils.book_new();
      // 2.获取table的DOM元素
      const table = document.getElementById("table");
      // 3.把table数据转化成worksheet
      const worksheet = XLSX.utils.table_to_sheet(table);
      // 4.workbook中插入worksheet
      XLSX.utils.book_append_sheet(workbook, worksheet, "sheet名称");
      // 5.调起下载
      XLSX.writeFile(workbook, "使用html中table标签导出的表格.xlsx");
    };

    aoabtn.onclick = function() {
      let data = [
        ["标题1", "标题2", "标题3"],
        ["内容1", "内容2", "内容3", "多了一列"],
        ["内容1", "内容2", "内容3", "多了二列", "多了二列"]
      ];
      var workbook = XLSX.utils.book_new();

      const worksheet = XLSX.utils.aoa_to_sheet(data);

      XLSX.utils.book_append_sheet(workbook, worksheet, "sheet名称");
      // 5.调起下载
      XLSX.writeFile(workbook, "aoa.xlsx");
    };

    jsonbtn.onclick = function() {
      let data = [
        { 标题1: "内容1", 标题2: "内容2", 标题3: "内容3" },
        { 标题1: "内容4", 标题2: "内容4", 标题3: "内容5" }
      ];
      var workbook = XLSX.utils.book_new();

      const worksheet = XLSX.utils.json_to_sheet(data);

      XLSX.utils.book_append_sheet(workbook, worksheet, "sheet名称");

      //   可以通过 下面方法添加多个 工作表格worksheet
      // XLSX.utils.book_append_sheet(workbook, worksheet, "1sheet名称");
      // XLSX.utils.book_append_sheet(workbook, worksheet, "1sheet名称");
      // 5.调起下载
      XLSX.writeFile(workbook, "json.xlsx");
    };
  },
  methods: {
    export2222() {
      layer.msg("原生导出excel");
      // console.log();

      exportFile({
        data: outputTableHtml(table),
        fileName: "测试导出.xls",
        opt: { type: "application/vnd.ms-excel" }
      });

      //关键代码如下
      function exportFile(exportObj) {
        // 创建可下载链接
        let eleLink = document.createElement("a");
        eleLink.download = exportObj.fileName || "";
        eleLink.style.display = "none";
        eleLink.target = "blank";
        if (!exportObj.href) {
          // 字符内容转变成blob地址
          let blob = new Blob([exportObj.data], exportObj.opt);
          exportObj.href = URL.createObjectURL(blob);
        }
        eleLink.href = exportObj.href;
        eleLink.click(); // 触发点击
      }

      //返回一个完整的html页面，此处为简写
      function outputTableHtml(table) {
        // console.log($("#table2222").html());
        return $("#table2222").html();
        //       return;
        //       let html = `
        //   <table border="1">
        //     <thead>
        //       <tr>
        //         ${table.tableHead
        //           .map(item => `<th>${item.label || item.name}</th>`)
        //           .join("")}
        //       </tr>
        //     </thead>
        //     <tbody>
        //       ${table.tableData
        //         .map(
        //           r =>
        //             `<tr>${table.tableHead
        //               .map(
        //                 c =>
        //                   `<td style="mso-number-format:'\@'">${
        //                     r[c.name] == undefined ? "" : r[c.name]
        //                   }</td>`
        //               )
        //               .join("")}</tr>`
        //         )
        //         .join("")}
        //     </tbody>
        //   </table>
        // `;
        return html;
      }
    }
  }
};
</script>

<style scoped>
button {
  margin: 4px;
}
</style>


