<template>
  <div>
      <h1>涉企政策在线查询</h1>
      <div class="wrap">
          <div class="box">
              <h2>涉企政策在线查询</h2>
              <van-divider />
              <div class="content">
                  <div class="icon" @click="goQueryContent">
                      <van-icon name="warning" size="45px" color="rgb(141, 6, 175)" />
                      <p>法律法规</p>
                  </div>
                  <div class="icon" @click="goInformation">
                      <van-icon name="clock" size="45px" color="rgb(73, 45, 235)" />
                      <p>利企信息</p>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Divider } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);

Vue.use(Divider);
export default {
  data(){
      return {

      }
  },
  methods:{
      goQueryContent(){
          this.$router.push({path:"/QueryContent"})
      },
      goInformation(){
          this.$router.push({path:"/Information"})
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
    text-align: left;
    background: rgb(52, 52, 221);
    color: #ffffff;
    padding-left: 20px
}
.wrap{
    padding: 5%;
}
.wrap .box h2{
    font-size: 16px;
    text-align: left
}
.wrap .box .content{
    overflow: hidden;
}
.wrap .box .content .icon{
    float: left;
    margin-right: 10px
} 
.wrap .box .content .icon p{
    font-size: 12px;
}
</style>
