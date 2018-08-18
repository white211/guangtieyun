<template>
  <div id="layout">
    <Layout class="myLayout">
      <Header :style="{position: 'fixed', width: '100%','z-index':100}" class="header">
        <Menu mode="horizontal" theme="dark" active-name="1" class="menu">
          <div class="layout-logo">研发集团公司统计综合管理系统</div>
          <div class="layout-nav">
            <router-link to="/index">
              <MenuItem name="1" class="text">
                首页
              </MenuItem>
            </router-link>
            <Submenu name="2" class="text">
              <template slot="title">
                统计分析
              </template>
              <MenuGroup>
                <router-link to="/report">
                  <MenuItem name="2-1">报表展示</MenuItem>
                </router-link>
                <router-link to="/chart">
                  <MenuItem name="2-2">图标展示</MenuItem>
                </router-link>
              </MenuGroup>
            </Submenu>
            <router-link to="/monitor">
              <MenuItem name="3" class="text">
                日况监测
              </MenuItem>
            </router-link>
            <Submenu name="4" class="text">
              <template slot="title">
                <Icon type="ios-contact-outline"/>
                admin
              </template>
              <MenuGroup>
                <router-link to="/login">
                  <MenuItem name="4-1">退出</MenuItem>
                </router-link>
              </MenuGroup>
            </Submenu>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '64px 0px 0'}" class="content">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>
  body {
    /*background-color: rgb(51, 51, 53);*/
    /*background: rgb(51, 51, 53);*/
  }

  #layout {
    margin: 0 auto;
    /*text-align: center;*/
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .menu {
    /*background-color: rgb(51, 51, 53);*/
  }
  .header {
    z-index: 100;
    /*max-width: 2000px;*/
    /*background-color: rgb(51, 51, 53);*/
  }

  .layout-logo {
    width: 300px;
    height: 30px;
    /*background: #5b6270;*/
    border-radius: 3px;
    float: left;
    position: relative;
    /*top: 15px;*/
    left: 20px;
    color: white;
    font-size: 20px;
  }

  .layout-nav {
    width: 550px;
    margin: 0 auto;
    margin-right: 10px;
    color: white;
  }

  .text {
    font-size: 20px;
    color: white;
  }
  .content {
    /*background-color: rgb(51, 51, 53);*/
    /*max-width: 2000px;*/
  }
  .myLayout{
    margin: 0 auto;
  }

</style>
