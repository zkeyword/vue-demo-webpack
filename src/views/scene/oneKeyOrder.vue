<style lang="less">
@import '../../less/lib/mixins.less';
.page-scene-oneKeyOrder{
    
    .block{
        background:#fff;
        border:1px solid #dedede;
        .rem(border-width, 2);
        .border-radius(8);
        .rem(padding, 10);
        .rem(margin-bottom, 20);
        .rem(font-size, 30);

        input{
            border:0 none;
            float:right;
            text-align: right;
            .rem(height, 44);
            .rem(line-height, 44);
        }

        textarea{
            border: 0 none;
            width:100%;
            float: left;
            .rem(height, 150);
        }

        .item{
            border-bottom:1px solid #dedede;
            .rem(border-bottom-width, 2);
            .rem(padding-bottom, 10);
            .rem(margin-bottom, 10);
        }

        .half{
            width:50%;
            float:left;
            input{
                width:50%;
            }
            .time{
                .rem(padding, 0, 10, 0, 0);
                float:right;
            }
        }

        .sex{
            .ico{
                .rem(height, 44);
                .rem(line-height, 44);
                .rem(width, 44);
                .rem(font-size, 40);
                .rem(margin-right, 10);
                overflow: hidden;
                color:#b2b2b2;
                float:left;
                &.cur{
                     color: #ff946e;
                }
            }
        }

        .unit{
            span{
                .rem(width, 44);
                .border-radius(44);
                .rem(font-size, 24);
                .rem(margin, 0, 0, 0, 10);
                background:#b2b2b2;
                text-align: center;
                color:#fff;
                &.cur{
                    background: #ff946e;
                }
            }
        }

        span{
            display: inline-block;
            .rem(height, 44);
            .rem(line-height, 44);
        }

        .ico-jiantouyou{color:#b2b2b2}

        .switch{
            .rem(font-size, 50);
            &.ico-open{color:#ff946e;}
            &.ico-close3{color: #b2b2b2;}
        }

        .timeWrap{
            span{
                float: left;
            }
            input{
                .rem(width, 100);
                float:left;
                text-align:center
            }
            i{
                float:left;
            }
            .ico{
                float:left;
                .rem(height, 44);
                .rem(line-height, 44);
                .rem(padding-left, 10);
                .rem(font-size, 40);
            }
        }

    }
}
</style>

<template>
    <div class="page-scene-oneKeyOrder page-current">
        <header-bar :title="title" :back="true" target="scene"></header-bar>
        <div class="content showHeader showFooter">
            <div class="block clearfix">
                <span>雇主名</span>
                <input type="text" placeholder="请输入公司名字">
            </div>

            <div class="block clearfix">
                <div class="item">
                    <span>选择类型</span>
                </div>
                <scene-type 
                    :scene-list="indexData.sceneList"
                    :scene-ids.sync="formData.sceneId"
                    :is-radio="true"
                ></scene-type>
            </div>

            <div class="block clearfix">
                <div class="item clearfix">
                    <div class="half">
                        <span>开始时间</span>
                        <input type="text" id="start" v-model="formData.start_time" mobiscroll-datetime="settings">
                    </div>
                    <div class="half">
                        <span>结束时间</span>
                        <input type="text" id="end" v-model="formData.end_time" mobiscroll-datetime="settings">
                    </div>
                </div>
                <div class="item clearfix timeWrap" v-for="period in tempPeriodArr" v-if="tempPeriodArr.length">
                    <span>时段：</span>
                    <input type="text" value="{{period[0]}}" class="period_start" mobiscroll-datetime="settings" placeholder="请选择">
                    <i>-</i>
                    <input type="text" value="{{period[1]}}" class="period_end" mobiscroll-datetime="settings" placeholder="请选择">
                    <i class="ico ico-close" @click="removePeriod($index)"></i>
                </div>
                <div class="item clearfix timeWrap" v-if="!tempPeriodArr.length">
                    <span>时段：</span>
                    <input type="text" class="period_start" mobiscroll-datetime="settings" placeholder="请选择">
                    <i>-</i>
                    <input type="text" class="period_end" mobiscroll-datetime="settings" placeholder="请选择">
                </div>
                <div @click="addPeriod">
                    <i class="ico ico-anonymous"></i>添加时间段
                </div>
            </div>

            <div class="block clearfix">
                <div class="item clearfix" @click="selectSchool">
                    <span class="pull-left">学校</span>
                    <span class="pull-right" v-if="formData.school_name">{{formData.school_name}}</span>
                    <span class="pull-right ico ico-jiantouyou" v-else></span>
                </div>
                <div class="clearfix">
                    <div class="half sex">
                        <span class="pull-left">性别</span>
                        <span class="pull-right">
                            <i class="ico ico-xingbienan3" :class="{'cur':formData.sex == '男'}" @click="setSex('男')"></i>
                            <i class="ico ico-xingbienv4" :class="{'cur':formData.sex == '女'}" @click="setSex('女')"></i>
                        </span>
                    </div>
                    <div class="half">
                        <span>身高</span>
                        <input  type="number" pattern="[0-9]*" placeholder="不限">
                    </div>
                </div>
            </div>
            
            <div class="block clearfix">
                <span>预约人数</span>
                <input  type="number" pattern="[0-9]*" placeholder="输入预约人数">
            </div>

            <div class="block clearfix">
                <textarea placeholder="请详细填写你的需求任务"></textarea>
            </div>

            <div class="block clearfix">
                <div class="item clearfix">
                    <div class="half">
                        <span>报酬</span>
                        <input type="number" pattern="[0-9]*" placeholder="输入金额">
                    </div>
                    <div class="half unit">
                        <span v-for="unit in unitTextArr"
                              :class="{'cur': unit == formData.unit}"
                              @click="setUnit(unit)"
                        >
                            {{unit}}
                        </span>
                    </div>
                </div>
                <div class="clearfix payWay" @click="showActionsheet">
                    <span>支付方式</span>
                    <span class="pull-right" v-if="formData.pay_way">{{payTextArr[formData.pay_way-1]}}</span>
                    <span class="pull-right ico ico-jiantouyou" v-else></span>
                </div>
            </div>

            <div class="block clearfix">
                <div class="item clearfix">
                    <span>特别福利</span>
                </div>
                <welfares
                        :welfares="welfares"
                        :welfares-ids.sync="formData.welfares"
                ></welfares>
            </div>

            <div class="block clearfix">
                <div class="item clearfix">
                    <span>公司地址</span>
                    <input type="text" placeholder="请填写详细地址" v-model="formData.comp_addr" @click="setAddress(0)">
                </div>
                <div class="clearfix">
                    <span>服务位置</span>
                    <input type="text" placeholder="请输入准确位置" v-model="formData.workplace" @click="setAddress(1)">
                </div>
            </div>

            <div class="block clearfix">
                <span class="pull-left">报名半小时后自动确定人选</span>
                <span
                    class="pull-right switch ico"
                    :class="{'ico-open': formData.auto_select == 1, 'ico-close3': formData.auto_select == 0}"
                    @click="switch"
                ></span>
            </div>
        </div>
        <actionsheet :show.sync="isShow" :menus="actionsheet" @menu-click="setPayWay"></actionsheet>
        <alert :show.sync="showAlert" title="null">提交失败!</alert>
        <span
            class="ui-btn ui-btn-big"
            @click="save"
        >
            下单
        </span>

    </div>
</template>

<script>
import utils from '../../lib/utils';
export default {
    data(){
        return {
            indexData: indexData,
            title: '一键预约',
            formData: {
                nickname:'',
                school_name: '',
                school_id:'',
                sex:'男',
                height:'',
                scene_id:'',
                start_time:'',
                end_time:'',
                period_times:'',
                detail:'',
                salary:'',
                unit:'时',
                number:'',
                pay_way:'',
                welfares:'',
                comp_addr:'',
                comp_longitude:'',
                comp_latitude:'',
                workplace:'',
                work_longitude:'',
                work_latitude:'',
                auto_select:'1',
                form: 'onekeyOrder'
            },
            unitTextArr:['时','日','周','月','次'],
            payTextArr:['酱油平台支付','现金支付','线上支付'],
            welfares: [
                {
                    welfare_id: '1',
                    welfare_name:'包餐'
                },{
                    welfare_id: '2',
                    welfare_name:'打车报销'
                },{
                    welfare_id: '3',
                    welfare_name:'专车接送'
                },{
                    welfare_id: '4',
                    welfare_name:'包住'
                }
            ],
            isShow: false,
            showAlert: false,
            actionsheet: {
                menu1: '酱油支付平台',
                menu2: '现金支付',
                menu3: '线上支付'
            },
            tempPeriodArr: []
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query

            $.extend(self.formData, query);
        }
    },
    ready(){
        let self = this;

        self.$store.state.getScrollerTime('#start', 0);
        self.$store.state.getScrollerTime('#end', 0);

        self.splitPeriod();
    },
    watch:{
        tempPeriodArr(){
            let self = this;
            self.$store.state.getScrollerTime('.period_start', 1);
            self.$store.state.getScrollerTime('.period_end', 1);
            self.joinPeriod();
        }
    },
    methods:{
        setSex(sex){
            let self = this;
            self.formData.sex = sex;
        },
        setUnit(unit){
            let self = this;
            self.formData.unit = unit;
        },
        selectSchool(){
            let self = this;
            self.$route.router.go({'name':'selectSchool', query: self.formData });
        },
        setWelfares(id){
            let self   = this,
                tmpArr = self.formData.setWelfares.split('-');

            if( utils.indexOf( tmpArr, id ) > -1 ){
                tmpArr = utils.remove( tmpArr, id );
            }else{
                tmpArr.push(id);
            }
            self.formData.setWelfares = tmpArr.join('-');
        },
        setPayWay(key){
            let self = this;
            self.isShow = false;
            switch (key){
                case 'menu1':
                    self.formData.pay_way = 1
                    break;
                case 'menu2':
                    self.formData.pay_way = 2
                    break;
                case 'menu1':
                    self.formData.pay_way = 3
                    break;
            }
        },
        showActionsheet(){
            this.isShow = true;
        },
        splitPeriod(){
            let self   = this,
                temArr = [];

            temArr = self.formData.period_times ? self.formData.period_times.split(',') : [];

            for(let i = 0, len = temArr.length; i<len; i++){
                temArr[i] = temArr[i].split('-');
            }

            self.tempPeriodArr = temArr;
        },
        joinPeriod(){
            let self  = this,
                len   = self.tempPeriodArr.length,
                tmp   = [],
                start = $('.period_start'),
                end   = $('.period_end');

            for(let i = 0; i<len; i++){
                let startVal = start.eq(i).val(),
                    endVal   = end.eq(i).val();
                if(startVal && endVal){
                    tmp[i] = startVal + '-' + endVal;
                }
            }

            self.formData.period_times = tmp.join(',')
        },
        addPeriod(){
            let self = this;
            self.tempPeriodArr.push([]);
        },
        removePeriod(i){
            let self = this;
            self.tempPeriodArr.splice(i, 1);
        },
        switch(){
            let self = this;
            if( self.formData.auto_select == 1 ){
                self.formData.auto_select = 0;
            }else{
                self.formData.auto_select = 1;
            }
        },
        setAddress(type){
            let self = this;
            self.formData.type     = type;
            self.formData.pageType = 0;
            self.$route.router.go({name: 'sceneAddress', query: self.formData});
        },
        save(){
            let self = this;

            $.ajax({
                url: "/soytime/order/oneKeyOrder",
                type:'POST',
                dataType: 'json',
                data:self.formData,
                success: (data)=>{
                    if( !data.success ){
                        self.showAlert = true;
                    }else{
                        self.$route.router.go({name: 'sceneOrderSuccess', query: {order_id: data.result.order_id}});
                    }
                }
            });
        }
    },
    components: {
        'headerBar': require('../../components/header.vue'),
        'sceneType': require('../../components/sceneType.vue'),
        'welfares': require('../../components/welfares.vue'),
        'actionsheet': require('../../components/actionsheet'),
        'alert': require('../../components/alert')
    }
}
</script>
