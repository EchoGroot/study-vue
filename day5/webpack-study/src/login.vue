<template>
  <div>
    <h1>login组件</h1>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg:"子组件的msg"
    }
  },
  methods:{
    showmsg(){
      console.log(this.msg)
    }
  },
  created(){
    this.showmsg();
  }
}
</script>
<style scoped>
div{
  width:200px;
  height: 100px;
  background-color:darksalmon;
}
</style>