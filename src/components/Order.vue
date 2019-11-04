<template>
  <div id="app">
       <div style="width:97%">
           <h2>涉企事项集体预约事项</h2>
       </div>
       <div class="blankArea"></div>
       <div class="exitAndEntry">
           
           <p>出入境类集体预约事项</p>
            <van-divider style="margin:0;padding:0" />
            <div class="exitAndEntry-icon">
                <div class="icon" @click="goOrderText">
                    <div>
                        <van-icon name="smile" color="rgb(117, 7, 75)" size="60px" style="margin:0;padding-left:10px;float:left" />
                    </div>
                    <p>护照</p>
                </div>
                <div class="icon" @click="goOrderText">
                    <div>
                        <van-icon name="comment-circle" color="rgb(233, 110, 27)" size="60px" style="margin:0;padding-left:10px;float:left" />
                    </div>
                    <p>港澳通行证</p>
                </div>
                <div class="icon" @click="goOrderText">
                    <div>
                        <van-icon name="underway" color="rgb(4, 139, 45)" size="60px" style="margin:0;padding-left:10px;float:left" />
                    </div>
                    
                    <p>往来台湾通行证</p>
                </div>
                <div class="icon" @click="goOrderText">
                    <div>
                        <van-icon name="pause-circle" color="rgb(233, 68, 90)" size="60px" style="margin:0;padding-left:10px;float:left" />
                    </div>
                    <p>外国人签证，<br>停留，居留许<br>可</p>
                </div>
            </div>
       </div>
        <div class="blankArea"></div>
       <div class="human">
           <p>人管类集体预约事项</p>
           <van-divider style="margin:0;padding:0;" />
            <div @click="goOrderText">
                <van-icon name="checked" size="60px" style="margin:0;padding-left:10px;float:left" color="rgb(11, 95, 18)" />
                <p>居住证</p>
            </div>
       </div>
       <div class="blankArea"></div>
        <div class="human traffic ">
           <p>交管类预约事项</p>
           <van-divider style="margin:0;padding:0;" />
            <div @click="goOrderText">
                <van-icon name="checked" size="60px" style="margin:0;padding-left:10px;float:left" color="rgb(60, 60, 131)" />
                <p>机动车注册（新车）</p>
            </div>
       </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Divider } from 'vant';

Vue.use(Divider);
export default {
  name: 'App',
  data(){
      return {}
  },
  methods:{
      goOrderText(){
          this.$router.push({path:"/OderText"})
      }
  }
}
</script>

<style>
.blankArea{
    width: 100%;
    height: 10px;
    background: rgb(241, 240, 240);
}
 h2{
    margin: 0;
    padding: 0;
    height: 100px;
    line-height: 100px;
    font-size: 16px;
    /* border: 1px solid red; */
    text-align: left;
    background: rgb(52, 52, 221);
    color: #ffffff;
    padding-left: 3%;
    width:100%
  }
  .exitAndEntry{
      width: 90%;
      padding: 0 5%;
  }
.exitAndEntry p{
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 50px;
    line-height: 50px;
    width: 100%;
    text-align: left;
    /* margin-left: 10px */
}
.exitAndEntry .exitAndEntry-icon{
    width: 100%;
    height: 110px;
    line-height: 110px;
    margin: 0;
    padding: 0
    /* background: pink */
}
.exitAndEntry .exitAndEntry-icon .icon{
    display: inline-block;
    width: 24%;
    height: 70px;
    line-height: 70px;
    /* text-align: center; */
    /* margin-left: 3%; */
    /* background: red */
    /* border: 1px solid red */
}
.exitAndEntry .exitAndEntry-icon .icon>div{
    float: left;
}
.exitAndEntry .exitAndEntry-icon .icon>p{
    clear: both;
    width:100%;
    margin: 0;
    padding: 0;
    text-align: center;
    float: left;
    font-size: 12px;
    height: 15px;
    line-height: 15px;
}
.human{
    margin-top: 30px;
    margin-left: 3%;
    /* background: pink */
}
.human p{
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 30px;
    line-height: 30px;
    width: 100%;
    text-align: left;
    /* paddinng-left: 10px; */
    clear: both;
      
}
.human>div{
    margin-left: 10px;
    width: 23%;
}
.human>div>p{
    font-size: 12px;
    text-align: center;
    height: 30px;
    line-height: 30px
}
.traffic{
    margin-top: 30px
}
.traffic div p{
    height: 20px;
    line-height: 20px;
}
</style>
