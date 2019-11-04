<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>涉企建议在线征集</h2>
    <van-divider />
    <div class="icon" @click="goQuestionnaire">
      <van-icon name="todo-list" color="rgb(52, 52, 221)" size="40px" /><p>调查问卷</p>
    </div>
    <div class="icon" @click="collection">
      <van-icon name="chat" color="rgb(89, 7, 92)" size="40px"  /><p>建议征集</p>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import VueRouter from 'vue-router'
import { Divider } from 'vant';

Vue.use(Divider);
Vue.use(Icon);

Vue.use(VueRouter)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '涉企建议在线征集'
    }
  },
  routes:[],
  methods:{
    goQuestionnaire(){
      this.$router.push({path:"/questionnaire"})
    },
    collection(){
      this.$router.push({path:"/Collection"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    margin: 0;
    padding: 0;
    height: 100px;
    line-height: 100px;
    font-size: 16px;
    /* border: 1px solid red; */
    text-align: left;
    background: rgb(52, 52, 221);
    color: #ffffff;
    width: 97%;
    padding-left: 3%;

  }
  h2{
    margin: 0;
    padding: 0;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: left;
    padding-left: 10px
    /* border: 1px solid red */
  }
  hr{
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .icon{
    width: 100%;
    width: 100px;
    height: 100px;
    float: left;
    margin-top: 10px
  }
  .icon p{
    margin: 0;
    padding: 0;
    font-size: 14px
  }
</style>
