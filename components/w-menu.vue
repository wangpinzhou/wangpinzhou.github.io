<template>
  <div class="left_menu">
    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse" :class="{'hide': !sideBarStatus}">
        <ul class="nav metismenu" id="side-menu">
          <li v-for="(item,index) in list" :key="index" class="active" :id="item.id">
            <a href="javascript:void(0);" :data-href="item.href">
              <i class="fa fa-file-text-o" style="width: 12.06px;"></i>
              <span class="nav-label">{{item.title}}</span>
              <span class="fa fa-arrow"></span>
            </a>
            <ul class="nav nav-second-level collapse">
              <li
                v-for="(subItem,subIndex) in item.subList"
                :key="subIndex"
                class="active"
                :id="subItem.id"
              >
                <router-link :to="subItem.to">
                  <a href="javascript:;">{{subItem.title}}</a>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <i
      @click="changeBar"
      class="glyphicon show-min"
      :class="{'glyphicon-triangle-left text-info': sideBarStatus, 'glyphicon-triangle-right text-danger': !sideBarStatus }"
      title="显示/隐藏侧边栏菜单"
    ></i>
  </div>
</template>

<script>
module.exports = {
  props: {
    list: "Array"
  },
  data() {
    return {
      sideBarStatus: true
    };
  },
  mounted() {
    var that = this;
    $("#side-menu").metisMenu();

    (that.sideBarStatus =
      localStorage.getItem("sideBarStatus") == "false" ? false : true),
      console.log(that.sideBarStatus);

    $(window).on("resize", function() {
      if ($(window).width() <= 800) {
        that.sideBarStatus = false;
      } else {
        that.sideBarStatus = true;
      }
    });
  },
  methods: {
    changeBar() {
      this.sideBarStatus = !this.sideBarStatus;
      console.log(this.sideBarStatus);
      localStorage.setItem("sideBarStatus", this.sideBarStatus);
    }
  }
};
</script>

<style scoped>
.show-min {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  cursor: pointer;
  /* padding: 10px; */
}
.left_menu {
  background: #f5f5f5;
  position: relative;
  padding-right: 30px;
}
.nav > li > a {
  color: #a7b1c2;
  font-weight: 600;
  padding: 14px 20px 14px 25px;
}
.nav.navbar-right > li > a {
  color: #999c9e;
}
.nav > li.active > a {
  color: #ffffff;
  background: #666;
  /* background: #000; */
}
.navbar-default .nav > li > a:hover,
.navbar-default .nav > li > a:focus {
  background-color: #6cbae7;
  color: white;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background: #fff;
}
.nav.navbar-top-links > li > a:hover,
.nav.navbar-top-links > li > a:focus {
  background-color: transparent;
}
.nav > li > a i {
  margin-right: 6px;
}
.navbar {
  border: 0;
  padding: 15px;
}
.navbar-default {
  background-color: transparent;
  border-color: #6cbae7;
}
.navbar-top-links li {
  display: inline-block;
}
.navbar-top-links li:last-child {
  margin-right: 40px;
}
.body-small .navbar-top-links li:last-child {
  margin-right: 0;
}
.navbar-top-links li a {
  padding: 20px 10px;
  min-height: 50px;
}
.metismenu {
  width: 220px;
  padding: 15px;
}

/* .sidebar-nav {
  background: #212529;
}
.sidebar-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  background: #343a40;
}

.sidebar-nav .metismenu {
  background: #212529;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.sidebar-nav .metismenu li + li {
  margin-top: 5px;
}

.sidebar-nav .metismenu li:first-child {
  margin-top: 5px;
}
.sidebar-nav .metismenu li:last-child {
  margin-bottom: 5px;
}

.sidebar-nav .metismenu > li {

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}
.sidebar-nav .metismenu a {
  position: relative;
  display: block;
  padding: 13px 15px;
  color: #adb5bd;
  outline-width: 0;
  transition: all 0.3s ease-out;
}

.sidebar-nav .metismenu ul a {
  padding: 10px 15px 10px 30px;
}

.sidebar-nav .metismenu ul ul a {
  padding: 10px 15px 10px 45px;
}

.sidebar-nav .metismenu a:hover,
.sidebar-nav .metismenu a:focus,
.sidebar-nav .metismenu a:active,
.sidebar-nav .metismenu .mm-active > a {
  color: #f8f9fa;
  text-decoration: none;
  background: #0b7285;
} */
</style>
