<template>
  <div style="height:calc(100vh - 100px);padding:10px;">
    <!-- <h1>lodash _</h1> -->
    <div class="input-group">
      <select v-model="curRow" class="form-control">
        <option
          :value="index"
          v-for="(item, index) in list3"
          :key="index"
        >第 {{index + 1}} 步 {{item.sku}} {{item.color}}</option>
      </select>
      <span class="input-group-btn">
        <button class="btn btn-info" @click="AddCurRow">下一步</button>
      </span>
    </div>
    <input type="text" class="form-control" v-model="barcode" @keyup.13="addList" />
    <!-- /input-group -->

    <!-- <button class="btn btn-info" @click="--curRow">上一步</button> -->

    <label
      class="label-danger label"
      style="margin:5px"
      v-for="(item,index) in barcodelist"
      :key="index"
    >{{ item }}</label>
    <hr />
    <h4>展示的内容</h4>
    <div>
      步骤 : {{ curRow + 1 }}
      <br />
      <div v-for="(item,index) in curData" :key="index">{{ item.date }} {{item.sku}} {{item.color}}</div>
    </div>
    <hr />
    <h4>源数据</h4>
    <div v-for="(item,index) in list" :key="index">{{ item }}</div>
    <h4>处理后</h4>
    <div
      v-for="(item, index) in list3"
      :key="item.sku + item.color +  index"
    >{{index}}---{{ item.sku }} {{item.color}} {{item.list}}</div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      list: [],
      list2: [],
      list3: [],
      curRow: 2, // 当前显示的
      barcode: "",

      barcodelist: []
    };
  },
  created() {
    var that = this;
    $.ajax({
      url: "table.json",
      dataType: "json",
      success: function(res) {
        if (res.status == "fail") {
          layer.alert(res.msg);
          return;
        }
        layer.msg(res.msg);
        var data = res.data.skuList.rowList;
        that.list = data.map(function(v) {
          delete v["img"];
          delete v["cword"];
          delete v["id"];
          var o = JSON.stringify(v);
          return o;
        });

        that.list2 = _.groupBy(data, function(v) {
          return v.sku + "__" + v.color;
        });

        that.list3 = [];
        for (const key in that.list2) {
          if (that.list2.hasOwnProperty(key)) {
            that.list3.push({
              sku: key.split("__")[0],
              color: key.split("__")[1],
              // list: JSON.stringify(that.list2[key]),
              list: that.list2[key]
              // list: that.list2[key]
            });
          }
        }
        that.list3 = _.orderBy(that.list3, ["sku", "color"]);
      }
    });
  },
  computed: {
    curData() {
      var that = this;
      return that.list3[that.curRow].list;
    }
  },
  mounted() {
    console.log("ele");
  },
  methods: {
    addList() {
      this.barcodelist.push(this.barcode);
      this.barcode = "";
    },
    AddCurRow() {
      if (this.curRow >= this.list3.length) {
        return;
      }
      this.curRow = ++this.curRow;
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
