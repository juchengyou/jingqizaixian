<template>
    <div>
        <h1>涉企政策在线查询</h1>
        <div class="blankArea"></div>
        
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="wrap">
                <div class="content">
                    <div class="text">
                        <div class="icon">
                            <van-icon name="phone-circle" size="30px" color="rgb(8, 8, 230)" />
                        </div>
                        <p>公章刻制备案业务调整提醒</p>
                        <span>{{msg|dataFormat}}</span>
                    </div>

                    <van-divider />
                    <div class="text">
                            <div class="icon">
                                <van-icon name="phone-circle" size="30px" color="rgb(8, 8, 230)"/>
                            </div>
                            <p>市外户口迁入(新版)</p><span>{{msg|dataFormat}}</span>
                    </div>
                    <van-divider />

                    <div class="text">
                        <div class="icon">
                            <van-icon name="phone-circle" size="30px" color="rgb(8, 8, 230)" />
                        </div>
                        <p>苏州市公安局关于调整全是工作备案工作的公告</p>
                        <span>{{msg|dataFormat}}</span>
                    </div>
                    <van-divider />

                    <div class="text">
                        <div class="icon">
                            <van-icon name="phone-circle" size="30px" color="rgb(8, 8, 230)" />
                        </div>
                        <p>深化治安管理"放管符"改革便民 利民6项措施</p>
                        <span>{{msg|dataFormat}}</span>
                    </div>
                    <van-divider />
                    
                </div>
            </div>
            <p style="font-size:12px;color:#999">没有更多了~</p>
        </van-pull-refresh>
    </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Divider } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

Vue.use(Divider);

Vue.use(Icon);
export default {
    data(){
        return {
            msg:"",
            isLoading: false
        }
    },
    methods:{
        onRefresh() {
            setTimeout(() => {
                // this.$toast('刷新成功');
                this.isLoading = false;
                // this.count++;
            }, 500);
        }
    },
    filters:{
        dataFormat:function(msg){
            const dt=new Date();
            const y=dt.getFullYear();
            const m=(dt.getMonth()+1).toString().padStart(2,"0");
            const d=dt.getDate().toString().padStart(2,"0");
            const hh=dt.getHours().toString().padStart(2,"0");
            const mm=dt.getMinutes().toString().padStart(2,"0");
            const ss=dt.getSeconds().toString().padStart(2,"0");
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
        }
    }
}
</script>
<style scoped>
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
.blankArea{
    width: 100%;
    height: 10px;
    background: rgb(241, 240, 240);
}
.wrap{
    width: 100%;
    height: 100%;
}
.content{
    text-align: left;
    padding: 5%;
    overflow: hidden;
}
.text{
    width: 100%;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    position: relative;
}
.text .icon{
    float: left;
    margin-top: 10px;
}
.text p{
    margin: 0;
    padding: 0;
    font-size: 10px;
    float: left;
    margin-left: 10px;
}
.text  span{
    font-size: 12px;
    position: absolute;
    right: 10px;
    bottom: -17px;
    color: #999
}
</style>