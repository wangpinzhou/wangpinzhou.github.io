<template>
  <div>
    <div id="toolbox">
      <button class="btn" @click="add">新增</button>
      <button class="btn" id="mergeCells" @click="mergeCells">合并</button>
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
    add() {},

    mergeCells() {
      mergeCells($("#bootstrapTable"), ["sku", "color", "size"]);
    },

    initBootstrapTable() {
      $("#bootstrapTable").bootstrapTable("destroy");
      var sidePagination = "client"; //分页方式：  client 客户端分页，server服务端分页（*）
      var url = "";
      $("#bootstrapTable").bootstrapTable({
        method: "post",
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
        // responseHandler: function responseHandler(res) {
        //   if (res.status == "fail") {
        //     layer.alert(res.msg);
        //     if (sidePagination == "client") {
        //       return [];
        //     } else {
        //       return {
        //         total: 0,
        //         rows: []
        //       };
        //     }
        //   }
        //   if (sidePagination == "client") {
        //     return [];
        //   } else {
        //     return {
        //       total: res.rowCount, //总页数,前面的key必须为'total'
        //       rows: [] //res.data.skuList.rowList //行数据，前面的key要与之前设置的dataField的值一致.
        //     };
        //   }
        // },
        // height: $(window).height() - 230,
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
        // detailView: true, //是否显示父子表
        // 子表格式
        // detailFormatter: function (index, row) {
        //   var str = `
        //             <h3>子表index : index</h3>
        //             <p>
        //                子表内容 : ${JSON.stringify(row)}
        //             </p>
        //  `
        //   return str;
        // },
        //
        // rowAttributes: function (row, index) {  // 行样式
        //   if (row.stockOutNumTotal > 6000) {
        //     return {
        //       'class': 'bg-danger text-info',
        //     }
        //   }
        // },
        data: [
          {
            sku: "11",
            color: "白色",
            size: "x",
            qty: "11",
            qty1: "11",
            qty2: "20%"
          },
          {
            sku: "22",
            color: "红色",
            size: "m",
            qty: "22",
            qty1: "11",
            qty2: "20%"
          },
          {
            sku: "22",
            color: "红色",
            size: "m",
            qty: "22",
            qty1: "11",
            qty2: "20%"
          },
          {
            sku: "33",
            color: "蓝色",
            size: "l",
            qty: "33",
            qty1: "11",
            qty2: "20%"
          },
          {
            sku: "33",
            color: "蓝色",
            size: "xl",
            qty: "33",
            qty1: "11",
            qty2: "20%"
          },
          {
            sku: "33",
            color: "黑色",
            size: "2xl",
            qty: "33",
            qty1: "11",
            qty2: "20%"
          },
          {
            sku: "44",
            color: "蓝色",
            size: "l",
            qty: "33",
            qty1: "11",
            qty2: "20%"
          }
        ],
        columns: [
          [
            {
              checkbox: true,
              rowspan: "2"
            },
            {
              field: "index",
              title: "序号",
              width: "3%",
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
              width: "10%",
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
              field: "qty2",
              title: "操作",
              // width: "6%",
              align: "center",
              valign: "middle",
              rowspan: "2",
              clickToSelect: false,
              formatter: function(value, row, index) {
                var str = `<button class='del'>删除</button>`;
                return str;
              },
              events: {
                "change .del": function(e, value, row, index) {
                  layer.msg(`删除  ${index}`);
                }
              }
            }
          ],
          [
            {
              field: "qty",
              title: "qty",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              rowspan: "1",
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
              field: "qty1",
              title: "qty1",
              // titleTooltip: '',
              // width: "10%",
              // widthUnit: 'px',  // px / %
              // class: '',
              rowspan: "1",
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
              title: "qty",
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
                var str = `<div class="progress">
                              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100" style="width: ${value}%;">
                                ${value}%
                              </div>
                            </div>`;
                return str;
              }
              //events: {
              //    'change .className': function(e, value, row, index) {
              //     }
              // }
            }
          ]
        ]
        // onAll: function () {
        //   $('#bootstrapTable').bootstrapTable('resetWidth')
        //   }
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
