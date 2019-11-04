<template>
    <div>
        <h2>调查问卷</h2>
        <!-- <van-cell-group>
            <van-field
                v-model="policeStation "
                required
                clearable
                label="所属派出所"
                right-icon="question-o"
                placeholder="科教园派出所"
                @click-right-icon="$toast('选择所属派出所')"
                @click="onChange"
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








            <van-field
                v-model="enterprises"
                required
                clearable
                label="企业类型"
                right-icon="question-o"
                placeholder="请输入企业类型"
                @click-right-icon="$toast('预约企业类型')"
            />
        </van-cell-group>
        <p>目前办理的公安业务</p>
        <van-cell-group>
            <van-field v-model="business" placeholder="请输入目前办理的公安业务" style="height:100px" />
        </van-cell-group>
        <p>办理公安业务存在的难点</p>
        <van-cell-group>
            <van-field v-model="difficulty" placeholder="请输入公安业务存在的难点" style="height:100px"  />
        </van-cell-group>
        <p>对公安服务的意见或建议</p>
        <van-cell-group>
            <van-field v-model="opinion" placeholder="请输入对公安服务的意见或建议" style="height:100px"  />
        </van-cell-group>
        <p>企业在人员管理，安防指导，办件办事等方面需求</p>
        <van-cell-group>
            <van-field v-model="demand" placeholder="请输入企业在人员管理，安防指导，办件办事等方面需求" style="height:100px"  />
        </van-cell-group>
        <van-button type="info" style="width:100%">提交</van-button>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router'
import { Icon } from 'vant';
import { Picker } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import Mint from 'mint-ui';
import { Toast } from "mint-ui";

Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(Button);
Vue.use(Field);
Vue.use(Picker);
Vue.use(Icon);



export default {
 data() {
    return {
        policeStation:"",
        enterprises:"",
        business:"",
        difficulty:"",
        opinion:"",
        demand:"",
        value: '',
        showPicker: false,
        // columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
      columns: ['城中派出所', '朝阳派出所', '城西派出所', '城北派出所', '同心派出所', '科教园派出所', '吴淞江派出所', '长江派出所', '青阳派出所', '兵希派出所', '蓬朗派出所', '中华园派出所', '综保区派出所', '巴城派出所', '正仪派出所', '新镇派出所', '周市派出所', '花桥派出所', '曹安派出所', '陆家派出所', '千灯派出所', '石浦派出所', '淀山湖派出所', '张浦派出所', '锦溪派出所', '周庄派出所']

    };
  },
  methods: {
    onChange:function(picker, value, index){
        Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  p{
      margin: 0;
      padding: 0;
      font-size: 14px;
      text-align: left;
      margin-left: 5px
  }
</style>
