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
  methods: {}
};
</script>

<style scoped>
button {
  margin: 4px;
}
</style>


