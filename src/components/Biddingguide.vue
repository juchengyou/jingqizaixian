<template>
  <div>
      <h1>涉企事项申办指南</h1>
      <div class="biddingBox">
          <div class="blankArea"></div>
          <!-- 内保类 -->
          <div class="box">
                <h2>内保类</h2>
                <van-divider />
                <div class="content">
                    <div class="icon">
                        <van-icon name="clear" size="45px" color="rgb(235, 130, 203)" />
                        <p>金融机构设施<br>建设工程验收</p>
                    </div>
                    <div class="icon">
                        <van-icon name="clock"  size="45px" color="rgb(80, 214, 169)" />
                        <p>金融机构设施<br>建设方案审批</p>
                    </div>
                </div>
            </div>

            <div class="blankArea"></div>
        <!-- 治安类 -->
        <div class="box">
                <h2>治安类</h2>
                <van-divider />
                <div class="content">
                    <div class="icon">
                        <div class="question">
                            <van-icon name="gold-coin" size="45px" color="rgb(181, 44, 199)" />
                        </div>
                        <p>旅馆业特种行<br>业许可证核发</p>
                    </div>
                </div>
        </div>

        <div class="blankArea"></div>
        <!-- 特警类 -->
        <div class="box">
                <h2>特警类</h2>
                <van-divider />
                <div class="content">
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="checked" size="45px" color="rgb(241, 141, 58)" />
                        </div>
                        <p>1000人以上,<br>5000人以下大<br>型活动的安全<br>许可</p>
                    </div>
                </div>
        </div>

        <div class="blankArea"></div>
        <!-- 交警类 -->
        <div class="box">
                <h2>交警类</h2>
                <van-divider />
                <div class="content">
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="add" size="45px" color="rgb(194, 43, 194)" />
                        </div>
                        <p>剧毒化学品公<br>路运输通行证</p>
                    </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="info"  size="45px" color="rgb(241, 141, 58)" />
                        </div>
                        <p>道路开挖审批</p>
                    </div>
                </div>
        </div>

<div class="blankArea"></div>
        <!-- 禁毒类 -->
        <div class="box">
                <h2>禁毒类</h2>
                <van-divider />
                <div class="content">
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="pause-circle" size="45px" color="rgb(104, 149, 233)" />
                        </div>
                        <p>三类易制毒化<br>学品运输备案</p>
                    </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="phone-circle"  size="45px" color="rgb(104, 149, 233)" />
                        </div>
                         <p>三类易制毒化<br>学品购买备案</p>
                    </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="music"  size="45px" color="rgb(231, 91, 91)" />
                        </div>
                         <p>二类易制毒化<br>学品购买备案</p>
                    </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="underway"  size="45px" color="rgb(231, 91, 91)" />
                        </div>
                         <p>易制毒化学品<br>(二类)运输<br>许可</p>
                    </div>
                </div>
        </div>


<div class="blankArea"></div>
        <!-- 网监类 -->
        <div class="box">
                <h2>网监类</h2>
                <van-divider />
                <div class="content">
                    <div class="icon">
                        <div class="icon-wrap">
                             <van-icon name="more" size="50px" color="rgb(231, 91, 91)" />
                        </div>
                        <p>联网单位备案</p>
                    </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="smile"  size="50px" color="rgb(80, 214, 169)" />
                        </div>
                        <p>互联网上网服<br>务营业场所变<br>更计算机台数<br>备案</p>
                    </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="comment-circle"  size="50px" color="rgb(184, 155, 60)" />
                        </div>
                        <p>互联网上网服<br>务营业场所变<br>更地址备案</p>
                    </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="stop-circle"  size="50px" color="rgb(61, 49, 230)" />
                        </div>
                        <p>互联网上网服<br>务营业场所变<br>更法人,实际<br>经营人或网吧<br>名称备案</p>
                    </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <van-icon name="pause-circle"  size="50px" color="rgb(152, 53, 172)" />
                        </div>
                        <p>互联网上网服<br>务场所信息网<br>络安全审核</p>
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
  
}
</script>

<style>
.blankArea{
    width: 100%;
    height: 10px;
    background: rgb(241, 240, 240);
}
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
        padding-left: 3%;
        width:97%;
        margin-bottom: 0;
       
  }
  .biddingBox{
      width: 100%;
      height: 100%;
  }
  .box{
      padding: 5%;
  }
  .box h2{
      margin: 0;
      padding: 0;
      text-align: left;
      font-size: 16px
  }
  .box .content{
      text-align: left;
      overflow: hidden;
  }
  .box .content .icon{
      margin: 0;
      padding: 0;
      display: inline-block;
      text-align: center;
      margin-right: 8px;
      height: inherit;
      float: left;
  }
  .icon .icon-wrap{
      height: 50px;
      clear: both;
  }
  .box .content .icon p{
      margin: 0;
      padding: 0;
      font-size: 12px;
  }

</style>
