<template>
  <div>
    <div id="toolbox">
      <button class="btn" @click="initBootstrapTable()">刷新Mock数据</button>
      <button class="btn" @click="add">新增一行</button>
      <button class="btn" id="mergeCells" @click="mergeCells">合并</button>
      <button class="btn" id="mergeCells" @click="getSelect">获取选中行</button>
      <button class="btn" id="exportBtn" @click="exportBtn">导出csv</button>
    </div>
    <table
      id="bootstrapTable"
      class="table table-striped table-inverse table-responsive"
      style="height: calc(100vh - 280px)"
    ></table>
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
    this.initBootstrapTable();

    $(window).resize(function() {
      $("#bootstrapTable").bootstrapTable("resetView");
    });
  },
  methods: {
    add() {
      var onerow = {
        id: _.random(1000, 1000000), // 这里有个坑 用Math.random() 生成的id 删除不了;
        sku: "new row",
        color: "new",
        size: "M",
        qty1: "10",
        qty2: "10",
        qty3: "10"
      };
      console.log(onerow);
      $("#bootstrapTable").bootstrapTable("prepend", onerow);
    },
    getSelect() {
      var list = $("#bootstrapTable").bootstrapTable("getSelections");
      // console.log(JSON.stringify(list, null, "\t"));
      layer.open({
        type: 1, //Layer提供了5种层类型。可传入的值有：0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）,
        title: "获取的行数据", //标题
        area: ["50%", "500px"], //宽高 px/ %
        // offset: ["auto"], //位置 px/ %t
        shade: 0.4, //遮罩透明度
        content: `<div><pre>${JSON.stringify(list, null, "\t")}</pre></div>`, //  dom 或 url 地址 $('#')  iframe 地址
        maxmin: true, // 显示 最小化 /最大化按键;
        // fixed: true, //不固定
        // move: false,//来禁止拖拽
        // moveOut: true,//是否允许拖拽到窗口外
        // closeBtn: 1,  // 1, 显示关闭 0 不显示关闭按键
        // tips: [1, '#c00'], tips方向和颜色 4（tips层）
        // scrollbar: false, //屏蔽浏览器滚动条
        shadeClose: true
      });
      // layer.alert(JSON.stringify(list, null, "\t"));
    },

    /**
     *
     *
     * @param {*} name  //文件名
     * @param {*} header  //列标题，逗号隔开，每一个逗号就是隔开一个单元格  String
     * @param {*} headerList  //列标题，逗号隔开，每一个逗号就是隔开一个单元格  arr string
     * @param {*} jsonData //要导出的json数据 [{key :value},{key :value}]
     */
    exportJsonToExcel(header, headerList, jsonData, name = "导出的文件") {
      //增加\t为了不让表格显示科学计数法或者其他格式
      header = header + "\n";
      // var mapArr = []
      for (let i = 0; i < jsonData.length; i++) {
        // const m = new Map();
        for (let j = 0; j < headerList.length; j++) {
          // m.set(headerList[j], jsonData[i][headerList[j]])
          header += `${jsonData[i][headerList[j]] + "\t"},`;
        }
        header += "\n";
        // mapArr.push(m)
      }

      //encodeURIComponent解决中文乱码
      let uri =
        "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(header);
      window.open(uri, "导出记录.csv");

      // 通过创建a标签实现
      let link = document.createElement("a");
      link.href = uri;
      //对下载的文件命名
      link.download = `${name}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    exportBtn() {
      var that = this;
      var columns = $("#bootstrapTable")
        .bootstrapTable("getOptions")
        .columns[0].filter(function(v) {
          if (v.rowspan == 2) {
            return v;
          }
        });

      columns.pop();
      columns.shift();
      columns.shift();

      var columns = columns.concat(
        $("#bootstrapTable").bootstrapTable("getOptions").columns[1]
      );

      var header = columns
        .map(function(v) {
          return v.title;
        })
        .join();
      var headerList = columns.map(function(v) {
        return v.field;
      });
      // console.log(header, headerList, that.list);
      that.exportJsonToExcel(header, headerList, that.list);
      layer.msg("导出完成");
    },

    mergeCells() {
      var list = $("#bootstrapTable").bootstrapTable("getData");
      list = SortBySize(list);

      var newList = _.orderBy(list, ["sku", "color", "sortNum"]);
      that.list = newList;
      $("#bootstrapTable").bootstrapTable("load", newList);
      mergeCells($("#bootstrapTable"), ["sku", "color", "size"]);
    },

    initBootstrapTable() {
      var that = this;
      $("#bootstrapTable").bootstrapTable("destroy");
      var sidePagination = "client"; //分页方式：  client 客户端分页，server服务端分页（*）
      var url = "./table.json";

      // var columns = [];

      // var fieldList = [
      //   ["sku", "款号"],
      //   ["color", "颜色"],
      //   ["size", "尺码"],
      //   ["数量1", "qty1"],
      //   ["数量2", "qty2"],
      //   ["数量3", "qty3"]
      // ];

      // fieldList.forEach(function(v, i) {
      //   var col = {
      //     field: v[0],
      //     title: v[1],
      //     sortable: true,
      //     align: "center",
      //     valign: "middle",
      //     rowspan:'2',
      //     // titleTooltip: '',
      //     // width: "10%",
      //     // widthUnit: 'px',  // px / %
      //     // class: '',
      //     //colspan:'',
      //     // visible: false,// 或者 true 隐藏或显示列
      //   };

      //   columns.push(col);
      // });

      // 自定义排序
      // function customSort(sortName, sortOrder, data) {
      //   console.log(sortName, sortOrder, data);
      //   var order = sortOrder === "desc" ? -1 : 1;
      //   data.sort(function(a, b) {
      //     var v1 = a[sortName];
      //     var v2 = b[sortName];
      //     if (v1 == 3) {
      //       return -1;
      //     }
      //     if (v1 > v2) {
      //       return 1;
      //     }
      //     return 0;
      //   });
      // }

      $("#bootstrapTable").bootstrapTable({
        method: "get",
        url: url,
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        //请求服务数据时所传参数
        queryParams: function(params) {
          params["pageSize"] = params.limit;
          params["pageNum"] = params.offset / params.limit + 1;
          // params['sku'] = $('#searchbar').val()  // 参数;
          // Object.assign( params ,obj)
          return params;
        },
        //加载服务器数据之前的处理程序，可以用来格式化数据。 参数：res为从服务器请求到的数据。
        // totalField: 'count',
        // dataField: 'data',  通过设置bootstrap table 的totalField 和 dataField 属性，来指定服务器返回数据的JSON格式，totalField默认total,dataField默认rows,JSON格式如下。
        responseHandler: function responseHandler(res) {
          if (res.status == "fail") {
            layer.alert(res.msg);
            if (sidePagination == "client") {
              return [];
            } else {
              return {
                total: 0,
                rows: []
              };
            }
          }
          if (sidePagination == "client") {
            var list = res.data.skuList.rowList;
            that.list = list;
            // console.table(list);
            return list;
          } else {
            return {
              total: res.rowCount, //总页数,前面的key必须为'total'
              rows: [] //res.data.skuList.rowList //行数据，前面的key要与之前设置的dataField的值一致.
            };
          }
        },
        height: $(window).height() - 230,
        // toolbar: "#toolbar",
        // showColumns: true,//显示列刷选
        // cache: false,
        paginationVAlign: "both",
        // paginationHAlign: 'left',
        // paginationDetailHAlign: 'right',
        striped: true,
        clickToSelect: true, //点击行是否选中
        // singleSelect: true,  // 单选
        maintainSelected: true, // maintainSelected点击下一页时保持选中状态 非常有用的功能。不管是客户端分页还是服务器端分页都支持该属性。
        // multipleSelectRow: true, // 多选设置 ctrl+click可以多选多个行， shift+click可以选中一个范围内的行，可理解成和windows的文件夹选中文件的快捷键是一样的
        // sortable: true, //是否启用排序
        // sortOrder: 'asc',     //排序方式
        pagination: true, //是否显示分页（*）
        sidePagination: sidePagination, // 'server',           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1, //初始化加载第一页，默认第一页
        pageSize: 100, //每页的记录行数（*）
        pageList: [100, 500, 1000], //可供选择的每页的行数（*）
        uniqueId: "id",
        // cardView: true, //卡片视图模式
        // icons:{
        //   detailOpen: 'glyphicon-chevron-down icon-plus',
        //   detailClose: 'glyphicon-chevron-up icon-minus',
        //   paginationSwitchDown: 'fa-caret-square-down',
        //   paginationSwitchUp: 'fa-caret-square-up',
        //   refresh: 'fa-sync',
        //   toggleOff: 'fa-toggle-off',
        //   toggleOn: 'fa-toggle-on',
        //   columns: 'fa-th-list',
        //   fullscreen: 'fa-arrows-alt',
        //   detailOpen: 'fa-plus',
        //   detailClose: 'fa-minus'
        // },
        detailView: true, //是否显示父子表
        // 子表格式
        detailFormatter: function(index, row) {
          var str = `
                    <h3>子表index : index</h3>
                    <p>
                       子表内容 : ${JSON.stringify(row)}
                    </p>
         `;
          return str;
        },
        //
        theadClasses: "bg-primary", //这里设置表头样式
        showFooter: true,
        rowAttributes: function(row, index) {
          // 行样式
          if (index % 5 == 0) {
            return {
              class: "success"
            };
          }
        },
        // customSort: customSort,  // 自定义排序
        onSort: function(name, order) {
          console.log(name, order);
          if (name == "size") {
            console.log("size");
            var list = $("#bootstrapTable").bootstrapTable("getData");
            list = SortBySize(list);
            console.table(list);

            // var newList = _.orderBy(list, ["sku", "color", "sortNum"]);
            $("#bootstrapTable").bootstrapTable("load", list);
          }

          return 1;

          // layer.alert(name,order);
        },
        columns: [
          [
            {
              checkbox: true,
              rowspan: "2"
            },
            {
              field: "",
              title: "序号",
              // width: "3%",
              align: "center",
              valign: "middle",
              rowspan: "2",
              formatter: function(value, row, index) {
                var pageSize = $("#bootstrapTable").bootstrapTable("getOptions")
                  .pageSize; //通过表的#id 可以得到每页多少条
                var pageNumber = $("#bootstrapTable").bootstrapTable(
                  "getOptions"
                ).pageNumber; //通过表的#id 可以得到当前第几页
                // return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
                if (sidePagination == "client") {
                  return index + 1;
                } else {
                  return pageSize * (pageNumber - 1) + index + 1; //返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
                }
              }
            },
            {
              field: "img",
              title: "图片",
              // titleTooltip: '',
              width: "150",
              // widthUnit: 'px',  // px / %
              // class: '',
              //rowspan:'',
              //colspan:'',
              rowspan: "2",
              sortable: true,
              align: "center",
              valign: "middle",
              // visible: false,// 或者 true 隐藏或显示列
              // checkbox: true, // checkbox:true 表示该列为复选框选择列,
              clickToSelect: false, // √{field:'name',clickToSelect:false}表示点击name这列时不会触发选中事件。
              // cellStyle: 自定义函数，单元格自定义样式function(value, row, index){ return {classes: '类名'};  //  return {css: {color: 'blue'}}; }
              formatter: function(value, row, index) {
                var randonImg = Mock.Random.dataImage("200x100", row.cword);
                var str = `<a tabindex="0"  role="button" data-toggle="popover" data-trigger="focus" title="" data-html="true" data-content="<img  src='${randonImg}' style='width:100%'/>">
                          <img class="lazyload" src='' data-src="${randonImg}" style="width:100%"/> </a>`;

                var str1 = `
                          <img class="lazyload" src='' data-src="${randonImg}" data-html="true" data-toggle="tooltip" data-placement="right" data-title="<img src='${randonImg}' class='img' style='width:100%' />" style='width:100px'"/> 
                          `;

                return str1;
              }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
            },
            {
              field: "sku",
              title: "sku",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              //rowspan:'',
              //colspan:'',
              rowspan: "2",
              sortable: true,
              align: "center",
              valign: "middle"
              // visible: false,// 或者 true 隐藏或显示列
              // checkbox: true, // checkbox:true 表示该列为复选框选择列,
              // clickToSelect: false, // √{field:'name',clickToSelect:false}表示点击name这列时不会触发选中事件。
              // cellStyle: 自定义函数，单元格自定义样式function(value, row, index){ return {classes: '类名'};  //  return {css: {color: 'blue'}}; }
              // formatter: function (value, row, index) {
              //   var str = `<input type='text' value='${row.}'  data-value='${row.}' class=' blur'>`
              //   return str;
              // }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
            },
            {
              field: "color",
              title: "color",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              //rowspan:'',
              //colspan:'',
              rowspan: "2",
              sortable: true,
              align: "center",
              valign: "middle"
              // visible: false,// 或者 true 隐藏或显示列
              // checkbox: true, // checkbox:true 表示该列为复选框选择列,
              // clickToSelect: false, // √{field:'name',clickToSelect:false}表示点击name这列时不会触发选中事件。
              // cellStyle: 自定义函数，单元格自定义样式function(value, row, index){ return {classes: '类名'};  //  return {css: {color: 'blue'}}; }
              // formatter: function (value, row, index) {
              //   var str = `<input type='text' value='${row.}'  data-value='${row.}' class=' blur'>`
              //   return str;
              // }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
            },
            {
              field: "size",
              title: "size",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              rowspan: "2",
              //colspan:'',
              sortable: true,
              align: "center",
              valign: "middle"
              // visible: false,// 或者 true 隐藏或显示列
              // checkbox: true, // checkbox:true 表示该列为复选框选择列,
              // clickToSelect: false, // √{field:'name',clickToSelect:false}表示点击name这列时不会触发选中事件。
              // cellStyle: 自定义函数，单元格自定义样式function(value, row, index){ return {classes: '类名'};  //  return {css: {color: 'blue'}}; }
              // formatter: function (value, row, index) {
              //   var str = `<input type='text' value='${row.}'  data-value='${row.}' class=' blur'>`
              //   return str;
              // }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
            },
            {
              field: "qty",
              title: "数量",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              rowspan: "1",
              colspan: 3,
              sortable: true,
              align: "center",
              valign: "middle"

              // visible: false,// 或者 true 隐藏或显示列
              // checkbox: true, // checkbox:true 表示该列为复选框选择列,
              // clickToSelect: false, // √{field:'name',clickToSelect:false}表示点击name这列时不会触发选中事件。
              // cellStyle: 自定义函数，单元格自定义样式function(value, row, index){ return {classes: '类名'};  //  return {css: {color: 'blue'}}; }
              // formatter: function (value, row, index) {
              //   var str = `<input type='text' value='${row.}'  data-value='${row.}' class=' blur'>`
              //   return str;
              // }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
            },
            {
              field: "id",
              title: "操作",
              // width: "6%",
              align: "center",
              valign: "middle",
              rowspan: "2",
              class: "bg-info",
              clickToSelect: false,
              formatter: function(value, row, index) {
                var str = `
                <button class='btn btn-danger btn-sm del'>删除</button>
                <button class='btn btn-info btn-sm add'>增加</button>
                `;
                return str;
              },
              events: {
                "click .del": function(e, value, row, index) {
                  layer.msg(`删除  ${row.id}`);
                  $("#bootstrapTable").bootstrapTable(
                    "removeByUniqueId",
                    row.id
                  );
                },
                "click .add": function(e, value, row, index) {
                  layer.msg(`add  ${row.id}`);
                  var onerow = {
                    id: _.random(1000, 1000000),
                    sku: "new row",
                    color: "new",
                    size: "M",
                    qty1: "10",
                    qty2: "10",
                    qty3: "10"
                  };
                  console.log(onerow);
                  $("#bootstrapTable").bootstrapTable("insertRow", {
                    index: index,
                    row: onerow
                  });
                }
              }
            }
          ],
          [
            {
              field: "qty1",
              title: "数量1",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              rowspan: "1",
              //colspan:'',
              sortable: true,
              align: "center",
              valign: "middle",
              // visible: false,// 或者 true 隐藏或显示列
              // checkbox: true, // checkbox:true 表示该列为复选框选择列,
              // clickToSelect: false, // √{field:'name',clickToSelect:false}表示点击name这列时不会触发选中事件。
              //  return {css: {color: 'blue'}}; } 自定义函数，单元格自定义样式
              cellStyle: function(value, row, index) {
                if (value < 0) {
                  return { classes: "danger" };
                } else {
                  return { classes: "" };
                }
              }

              // formatter: function (value, row, index) {
              //   var str = `<input type='text' value='${row.}'  data-value='${row.}' class=' blur'>`
              //   return str;
              // }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
            },
            {
              field: "qty2",
              title: "数量2",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              rowspan: "1",
              //colspan:'',
              sortable: true,
              align: "center",
              valign: "middle",
              // visible: false,// 或者 true 隐藏或显示列
              // checkbox: true, // checkbox:true 表示该列为复选框选择列,
              // clickToSelect: false, // √{field:'name',clickToSelect:false}表示点击name这列时不会触发选中事件。
              // cellStyle: 自定义函数，单元格自定义样式function(value, row, index){ return {classes: '类名'};  //  return {css: {color: 'blue'}}; }
              formatter: function(value, row, index) {
                var str = `<div style="width:${value}%;background:${
                  value > 50 ? "#0f0" : "#f00"
                };height:40px; line-height:40px;" >${value}%</div>`;
                return str;
              }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
            },
            {
              field: "qty3",
              title: "数量3",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              rowspan: "1",
              //colspan:'',
              sortable: true,
              align: "center",
              valign: "middle",
              // visible: false,// 或者 true 隐藏或显示列
              // checkbox: true, // checkbox:true 表示该列为复选框选择列,
              // clickToSelect: false, // √{field:'name',clickToSelect:false}表示点击name这列时不会触发选中事件。
              // cellStyle: 自定义函数，单元格自定义样式function(value, row, index){ return {classes: '类名'};  //  return {css: {color: 'blue'}}; }
              // formatter: function(value, row, index) {
              //   var str = `<div class="progress">
              //                 <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100" style="width: ${value}%;">
              //                   ${value}%
              //                 </div>
              //               </div>`;
              //   return str;
              // }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
              footerFormatter: function(data) {
                console.log(this);
                var str = this.field;
                return data.reduce(function(s, v, i) {
                  return s + +v[str];
                }, 0);
              }
            }
          ]
        ],
        onAll: function() {
          $('[data-toggle="popover"]').popover();
          $('[data-toggle="tooltip"]').tooltip();
        },
        onLoadSuccess: function() {
          $("#bootstrapTable").bootstrapTable("resetView");
        }
      });
    }
  }
};

// 合并 多列 ;
function mergeCells($table, fieldArr) {
  var { sidePagination, pageSize, pageNumber } = $table.bootstrapTable(
    "getOptions"
  );
  var list = $table.bootstrapTable("getData"); // 服务器分页时getData获取的是当前页面数据 ,前端分页时,切换页面等操作需要 重新获取数据,
  if (sidePagination == "client") {
    list = list.slice(
      (pageNumber - 1) * pageSize,
      (pageNumber - 1) * pageSize + pageSize
    );
  }
  var fArr = [];
  fieldArr.forEach(function(v) {
    fArr.push(v);
    console.log(fArr);
    var objC = _.countBy(list, function(w) {
      var str = "";
      fArr.forEach(function(x) {
        str += "" + w[x];
      });
      return str;
    });
    console.log(objC);
    var sindex = 0;
    var slist = [
      ...new Set(
        list.map(function(y) {
          var str = "";
          fArr.forEach(function(x) {
            str += "" + y[x];
          });
          return str;
        })
      )
    ].forEach(function(z) {
      $table.bootstrapTable("mergeCells", {
        index: sindex,
        field: v,
        rowspan: objC[z]
      });
      sindex += objC[z];
    });
  });
}

// 尺码排序
function SortBySize(sizeList) {
  // 将sizelist 按 xs s m l xl ... 排序
  var waitSortSize = sizeList.map(function(v) {
    switch (v.size.toUpperCase()) {
      case "XXXXXL":
        v.sortNum = 99999;
        break;
      case "5XL":
        v.sortNum = 99998;
        break;
      case "XXXXL":
        v.sortNum = 9999;
        break;
      case "4XL":
        v.sortNum = 9998;
        break;
      case "XXXL":
        v.sortNum = 8888;
        break;
      case "3XL":
        v.sortNum = 8887;
        break;
      case "XXL":
        v.sortNum = 7777;
        break;
      case "2XL":
        v.sortNum = 7776;
        break;
      case "XL":
        v.sortNum = 6666;
        break;
      case "L":
        v.sortNum = 5555;
        break;
      case "M":
        v.sortNum = 4444;
        break;
      case "S":
        v.sortNum = 3333;
        break;
      case "XS":
        v.sortNum = 2222;
        break;
      case "XXS":
        v.sortNum = 1111;
        break;
      case "2XS":
        v.sortNum = 1110;
        break;

      default:
        v.sortNum = 9999999;
        break;
    }
    return v;
  });

  // sizeList = waitSortSize.sort(function (a, b) {
  //   return a.sortNum - b.sortNum;
  // });

  // return sizeList
  return waitSortSize;
}
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
