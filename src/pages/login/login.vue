<template>
  <div id="login">
      <div class="wrapper">
        <div class="bg" >
          <my-canvas dots-num="66" is-color="true" round-color="black" line-color="red"></my-canvas>
        </div>
        <div class="login-container">
          <h1>统计综合管理系统</h1>
          <div id="loginForm">
            <input type="text" v-model="user.username" id="username" class="username" placeholder="用户名" autocomplete="off">
            <input type="password" v-model="user.password" id="password" class="password" placeholder="密码" autocomplete="off">
            <button id="login-button" @click="login" onsubmit="false">登录</button>
          <div/>
        </div>
        <div class="slogan">
          研发集团公司统计综合管理系统
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  import myCanvas from 'vue-atom-canvas'
  export default {
    name: "login",
    components:{
      myCanvas
    },
    data(){
      return{
         user:{
           username:'admin',
           password:'admin'
         },
          bg:''
      }
    },
    methods:{
      login(){
        if(this.user.username.trim() == 'admin' && this.user.password.trim() =='admin'){
          this.$Message.success({
            content:'登陆成功',
            duration:1,
            closable:true,
            onClose(){
            }
          });
          this.$router.push({path:'/'});
        }else{
          this.$Message.error({
            content:'用户名和密码为admin',
            duration:2,
            closable:true
          });
        }
      }
    },
    mounted(){

    },

  };
</script>

<style lang="stylus">
body
  user-select none;
  font-family "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size 14px;
  line-height 1.42857143;
  color #333;
  background-color #fff;
  margin 0;
  padding 0;
  width 100%;
  height 100%;
  overflow hidden;
  box-sizing border-box;
#login
  .wrapper
    width 100%;
    height 100vh;
    opacity 0.8;
    position absolute;
    top 0;
    left 0;
    overflow hidden;
    /*background #50a3a2;*/
    display flex;
    justify-content center;
    align-items center;
    .bg
      background-image url("../../assets/bg/Train.jpg")
      background-size 100% 100%;
      background-repeat no-repeat;
      background-position center;
      position absolute;
      left 0;
      top 0;
      right 0;
      bottom 0;
      width 100%;
      height 100%;
      z-index: -1;
      box-sizing border-box;
      margin 0;
      padding 0;
      font-weight 300;
    .login-container
      max-width 600px;
      height 400px;
      text-align  center;
      display flex;
      flex-flow column nowrap;
      justify-content space-around;
      box-sizing border-box;
      font-weight 300;
      margin 0;
      padding 0;
      h1
        font-family inherit;
        color white;
        font-size 40px;
        transition-duration 1s;
        font-weight 200;
        text-shadow 3px 3px 5px black;
        box-sizing border-box;
        margin 0;
        padding 0;
        line-height 1.1;
        font-family inherit;
        display block;
        -webkit-margin-before: 0.67em;
        -webkit-margin-after: 0.67em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        user-select none;
      #loginForm
        padding 20px 0;
        position relative;
        z-index 2;
        box-sizing border-box;
        margin 0;
        font-weight 300px;
        input
          outline 0;
          border 1px solid hsla(0,0%,100%,.6);
          background-color hsla(0,0%,100%,.8);
          width 300px;
          border-radius 3px;
          padding 10px 15px;
          margin 0 auto 10px;
          display block;
          text-align center;
          font-size 20px;
          color #337ab7;
          transition-duration .25s;
          font-weight 300;
          box-sizing border-box;
          &:hover
            background-color hsla(0,0%,100%,.5);
          &:focus
            background-color: #fff;
            width: 400px;
            color: #337ab7;
        button
          -webkit-appearance none;
          outline 0;
          background-color #337ab7;
          border 0;
          padding 10px 15px;
          color #fff;
          border-radius 3px;
          width 300px;
          cursor pointer;
          font-size 20px;
          font-weight 600;
          transition-duration .25s;
          margin 0;
          box-sizing border-box;
          font-family inherit;
          line-height inherit;
          overflow visible;
          &:hover
            background-color rgba(51,122,183,.8);
    .slogan
      position: absolute;
      bottom: 10%;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      text-shadow: 5px 5px 8px orange;
      font-size: 70px;
      font-family: STXinwei,Microsoft YaHei;
      box-sizing border-box;
      margin 0;
      padding 0;
      font-weight 300;
      display: block;
      text-align center;
</style>
