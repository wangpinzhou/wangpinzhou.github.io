<template>
  <div>
    <ol class="breadcrumb">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Library</a>
      </li>
      <li class="active">Data</li>
    </ol>

    <div>
      <div id="toolbar">
        <button id="button" class="btn btn-secondary">合并</button>
      </div>
      <table id="table"></table>
    </div>
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
    return {};
  },
  mounted() {
    console.log(this.$router);
    var $table = $("#table");
    var $button = $("#button");

    $button.click(function() {
      // mergeCells($table, 'r1')
      // mergeCells($table, 'r2')
      mergeCells($table, ["r1", "r2", "r3"]);
    });

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

    initBootstrapTabler();

    function initBootstrapTabler() {
      $("#table").bootstrapTable("destroy");
      var sidePagination = "client"; //分页方式：client 客户端分页，server服务端分页（*）
      var url = "";
      $("#table").bootstrapTable({
        paginationVAlign: "both",
        striped: true,
        height: $(window).height() - 280,
        maintainSelected: true, // maintainSelected点击下一页时保持选中状态 非常有用的功能。不管是客户端分页还是服务器端分页都支持该属性。
        sortable: true, //是否启用排序
        pagination: true, //是否显示分页（*）
        sidePagination: sidePagination, // 'server',           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1, //初始化加载第一页，默认第一页
        pageSize: 59, //每页的记录行数（*）
        pageList: [100, 500, 1000], //可供选择的每页的行数（*）
        data: [
          {
            r1: 1,
            r2: 1,
            r3: 11
          },
          {
            r1: 1,
            r2: 12,
            r3: 11
          },
          {
            r1: 1,
            r2: 12,
            r3: 11
          },
          {
            r1: 1,
            r2: 12,
            r3: 112222
          },
          {
            r1: 1,
            r2: 12,
            r3: 112
          },
          {
            r1: 11,
            r2: 122,
            r3: 112
          },
          {
            r1: 11,
            r2: 122,
            r3: 1222
          },
          {
            r1: 11,
            r2: 133,
            r3: 1222
          },
          {
            r1: 111,
            r2: 133,
            r3: 1222
          },
          {
            r1: 1111,
            r2: 133,
            r3: 133
          },
          {
            r1: 1111,
            r2: 1333,
            r3: 133
          },
          {
            r1: 1111,
            r2: 1333,
            r3: 1
          },
          {
            r1: 11111,
            r2: 144,
            r3: 1
          },
          {
            r1: 11111,
            r2: 144,
            r3: 1
          },
          {
            r1: 1222,
            r2: 1555,
            r3: 1
          },
          {
            r1: 1222,
            r2: 1555,
            r3: 1
          },
          {
            r1: 12222,
            r2: 1555,
            r3: 1
          }
        ],
        columns: [
          {
            field: " ",
            title: "序号",
            width: "3%",
            align: "center",
            valign: "middle",
            formatter: function(value, row, index) {
              return index + 1;
            }
          },
          {
            field: "r1",
            title: "r1"
          },
          {
            field: "r2",
            title: "r2"
          },
          {
            field: "r3",
            title: "r3"
          },
          {
            field: " ",
            title: "r4"
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
</style>

