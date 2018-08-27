<template>
    <div id="test">
     <div id="demo">

     </div>
    </div>
</template>

<script>
    export default {
        name: "test"
    };
</script>

<style scoped lang="less">
  @aaa : calc(50%);
 #test{
   border: 1px solid black;
   height: 200px;
   #demo{
     width: @aaa;
     background-color: black;
     height: @aaa;
   }
 }

</style>
