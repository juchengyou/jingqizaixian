<template>
<div class="online">
    <div class="title">
        <h2>警企在线</h2>        
    </div>
    <p>服务事项</p>
    <van-divider style="margin:0;padding:0" />
    <div class="box">
        <div class="icon" @click="goOrder">
            <van-icon name="phone-circle" color="rgb(117, 7, 75)" size="60px" style="margin:0;padding:0;float:left" />
            <p>涉企事项<br />在线预约</p>
        </div>
        <div class="icon" @click="goBiddingguide">
            <van-icon name="clock" color="rgb(233, 110, 27)" size="60px" style="margin:0;float:left" />
            <p>涉企事项<br />申办指南</p>
        </div>
        <div class="icon">
        <van-icon name="question" color="rgb(4, 139, 45)" size="60px" style="margin:0;float:left" />
            <p>涉企事项<br>在线解答</p>
        </div>
        <div class="icon" @click="goTips">
            <van-icon name="warning" color="rgb(233, 68, 90)" size="60px" style="margin:0;float:left" />
            <p>涉企事项<br>在线提示</p>
        </div>
        <div class="icon" @click="goQuery">
            <van-icon name="more" color="rgb(73, 144, 224)" size="60px" style="margin:0;float:left" />
            <p>涉企事项<br>在线查询</p>
        </div>
        <div class="icon" @click="goCollection">
            <van-icon name="comment-circle" color="rgb(70, 11, 233)" size="60px" style="margin:0;float:left" />
            <p>涉企事项<br>在线征集</p>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        goCollection(){
            this.$router.push({path:"/index"})
        },
        goOrder(){
            this.$router.push({path:"/Order"})
        },
        goBiddingguide(){
            this.$router.push({path:"/Biddingguide"})
        },
        goTips(){
            this.$router.push({path:"/Tips"})
        },
        goQuery(){
            this.$router.push({path:"/Query"})
        }
    }
}
</script>
<style scoped>
.online{
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 0;
    /* background: pink */
}
.online .title{
    width: 100%;
    background: rgb(52, 52, 221);
}
.online .title h2{
    margin: 0;
    height: 100px;
    line-height: 100px; 
    font-size: 16px;
    /* border: 1px solid red; */
    text-align: left;
    /* background: rgb(52, 52, 221); */
    color: #ffffff;
    /* margin-left: 10px; */
    width: 97%;
    padding-left: 3%;

  }
  .online p{
      font-size: 16px;
      margin: 0;
      padding: 0;
      /* border: 1px solid red; */
      height: 40px;
      line-height: 40px;
      width: 97%;
      text-align: left;
      padding-left: 3%;
  }
  .box{
      width: 90%;
      padding: 0 5%;
  }
  .online .icon{
      display: inline-block;
      width: 20%;
      height: 70px;
      line-height: 70px;
      text-align: center;
      margin-right: 4%;
      /* background: pink */
      margin-top: 10px
  }
  .online .icon p{
      margin: 0;
      padding: 0;
      width: 100%;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      /* border: 1px solid red; */
      text-align: center;
      clear: both;
  }
</style>