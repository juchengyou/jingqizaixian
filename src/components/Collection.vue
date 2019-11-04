<template>
  <div id="app">
    <h2>建议征集</h2>

    <van-cell-group>
        <van-field v-model="title" placeholder="请输入标题" />
    </van-cell-group>

    <van-divider />

     <van-cell-group>
        <van-field v-model="suggestion" placeholder="请输入建设性意见" style="height:100px" />
    </van-cell-group>


    <van-button type="info" style="width:100%" @click="add">提交</van-button>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Divider } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Overlay } from 'vant';

Vue.use(Overlay);

Vue.use(Button);

Vue.use(Field);

Vue.use(Divider);
export default {
  data(){
      return {
          title:"",
          suggestion:"",
          show:false
      }
  },
  methods:{
      add(){
          console.log(this.title,this.suggestion);
          this.title=this.suggestion=""
      }
   
    
  }
}
</script>

<style>
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
    padding-left: 20px
  }
</style>
