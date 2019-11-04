<template>
  <div id="app">
      <div style="width:100%;background: rgb(52, 52, 221)">
        <h1>涉企事项集体预约</h1>
      </div>
      
      <p class="title"><strong>集体预约提示</strong></p>
      <p>集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提</p>
      <p>示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示</p>
      <p>集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示集体预约提示</p>
      <div class="bottomNavigation">
          <div class="bottomNavigation-1" @click="goCollectiveAppointment">
            <van-button type="info" size="large">信息按钮</van-button>
          </div>
          <div class="bottomNavigation-1">
            <van-button color="rgb(97, 7, 67)" size="large">预约查询</van-button>
          </div>
        
      </div>
      
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button)
export default {
  name: 'App',
  data(){
      return {

      }
  },
  methods:{
      goCollectiveAppointment(){
          this.$router.push({path:"/CollectiveAppointment"})
      }
  }
}
</script>

<style>
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
        padding: 0 0 0 3%;
        width:97%;
        margin-bottom: 0;
  }
  p{
      margin: 0;
      padding: 0;
      height: 100px;
      width: 90%;
      /* border: 1px solid red; */
  }
    p.title{
        width: 100%;
        text-align: center;
        font-size: 20px;
        margin-top: 10px;
        padding: 0;
        height: 30px;
        line-height: 30px;
    }
    p:not(.title){
        padding: 0 5% 0 5%;
        text-indent: 2em;
        text-align: left;
        /* border: 1px solid red; */
        line-height: 26px
    }
    .bottomNavigation{
        width: 100%;
        height: 50px;
        line-height: 50px;
        /* overflow: hidden; */
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /* border: 1px solid blue; */
    }
    .bottomNavigation .bottomNavigation-1{
        width: 50%;
        float: left;
    }
</style>
