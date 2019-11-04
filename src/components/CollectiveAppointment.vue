<template>
  <div id="app">
    <h2>CollectiveAppointment</h2>
    
    <van-cell-group style="text-align:left">


<van-cell is-link @click="showPopup" style="width:50%;height:50%;">
  <van-field
            required
            clearable
            type="button"
            label="开始时间"
            right-icon="question-o"
            @click-right-icon="$toast('question')"
        />
</van-cell>
<van-popup v-model="show" style="width:50%;height:50%;">
  <van-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-date="minDate"
  :max-date="maxDate"
/>
</van-popup>


<van-cell is-link @click="showPopup" style="width:50%;height:50%;">
  <van-field
            required
            clearable
            type="button"
            label="结束时间"
            right-icon="question-o"
            @click-right-icon="$toast('question')"
        />
</van-cell>
<van-popup v-model="show" style="width:100%;height:50%;">
  <van-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-date="minDate"
  :max-date="maxDate"
/>
</van-popup>



        <!-- <van-field
            required
            clearable
            type="button"
            label="开始时间"
            right-icon="question-o"
            @click-right-icon="$toast('question')"
        /> -->
        <!-- <van-field
            type="button"
            clearable
            label="结束时间"
            right-icon="question-o"
             @click-right-icon="$toast('question')"
            required
        /> -->
        <van-field
            v-model="username"
            required
            clearable
            label="经办人姓名"
            right-icon="question-o"
            placeholder="请输入经办人姓名"
            @click-right-icon="$toast('question')"
        />
        <van-field
            required
            clearable
            label="经办人联系电话（手机）"
            right-icon="question-o"
            placeholder="请输入经办人联系电话（手机）"
            @click-right-icon="$toast('question')"
        />



        <!-- <van-field
            required
            clearable
            type="button"
            label="所属派出所"
            right-icon="question-o"
            @click-right-icon="$toast('question')"
            :columns="columns" @cancel="onCancel" @confirm="onConfirm" @change="onChange"
            @click="showmsg"
        /> -->

<van-field
  required
  readonly
  clickable
  label="所属派出所"
  :value="value"
  placeholder="选择城市"
  @click="showPicker = true"
/>


<van-popup v-model="showPicker" position="bottom">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>



       <div style="overflow:hidden;height:40px;line-height:40px;position:relative">
         <div style="float:left;position:absolute;left:0;bottom:-5px;">
              <van-field
            type="button"
            label="人数（人）"
            required
          />
         </div>
         <div style="float:right;position:absolute;right:0;bottom:-5px;">
           <van-stepper v-model="valuestep" min="25" />
         </div>
        
       </div>
       <van-divider />
        <van-field
          v-model="text"
          type="textarea"
          label="内容"
          placeholder="请输入留言"
          required
        />
  



        <van-picker
          id="showmsgdata"
          style="display:none"
          show-toolbar
          title=""
          :columns="columns"
          @cancel="onCancel"
          @confirm="onConfirm"
        />



    </van-cell-group>
    <div class="tel">
      <p style="font-size:14px"><strong>公安窗口联系电话：出入境0512-57385856</strong></p>
    </div>
    <div class="info">
      <button>预约</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import { Picker } from 'vant';
import { Popup } from 'vant';
import { Stepper } from 'vant';
import { Button } from 'vant';
import { Divider } from 'vant';
import { Toast } from 'mint-ui';
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);


Vue.use(Divider);

Vue.use(Button);

Vue.use(Stepper);

Vue.use(Popup);
Vue.use(Picker);

Vue.use(Field);
export default {
  name: 'App',
  data() {
    return {
      username:"",
      message:"请选择代理区域",
      show:false,
      valuestep:25,
      value:"",
      text:"",
      cityvalue:"",
      showPicker: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 11, 1),
      currentDate: new Date(),
      columns: ['城中派出所', '朝阳派出所', '城西派出所', '城北派出所', '同心派出所', '科教园派出所', '吴淞江派出所', '长江派出所', '青阳派出所', '兵希派出所', '蓬朗派出所', '中华园派出所', '综保区派出所', '巴城派出所', '正仪派出所', '新镇派出所', '周市派出所', '花桥派出所', '曹安派出所', '陆家派出所', '千灯派出所', '石浦派出所', '淀山湖派出所', '张浦派出所', '锦溪派出所', '周庄派出所']
      
    }
  },
  methods: {
    // add(){
    //    alert("hi");
    // //    document.getElementById("#app").style.display="none"
    //   },
    onChange(picker,value,index){
      this.message=value
    },
    onConfirm(value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      var showmsgdata=document.getElementById("showmsgdata");
      showmsgdata.style.display="none"
    },
    onCancel() {
      // Toast('取消');
      var showmsgdata=document.getElementById("showmsgdata");
      showmsgdata.style.display="none"
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    showPopup() {
      this.show = true;
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
    text-align: left;
    background: rgb(52, 52, 221);
    color: #ffffff;
    padding-left: 20px;
  }
  .tel{
    text-align: center;
    padding: 15%
  }
  p{
    position: absolute;
    bottom: 60px;
    left: center;
    text-align: center
  }
  .info{
    width: 100%;
    position: absolute;
    bottom: 10px;
    color: #ffffff;
  }
  button{
    width: 90%;
    background: rgb(50, 8, 236);
    border: 0;
    border-radius: 30px;
    height: 45px;
    line-height: 45px;
  }
</style>
