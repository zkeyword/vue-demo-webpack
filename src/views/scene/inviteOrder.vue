<style lang="less">
@import '../../less/lib/mixins.less';
.page-scene-inviteOrder{

    .userWrap{
        width:100%;

        .name{
            text-align:center;
            .rem(font-size, 38);
            .rem(padding, 10, 0);
            color:#333333;
        }

        .radius{
            .rem(width, 150);
            .rem(height, 150);

            margin:0 auto;
            position:relative;
            background:#fff;
            overflow:hidden;
            .border-radius(150);
            img{
                height:100%;
                width:100%;
                .border-radius(150);
            }
        }
    }
    
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
    <div class="page-scene-inviteOrder page-current">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader showFooter">

            <div class="userWrap">
                <div class="btn">
                    <div class="radius">
                        <img :src="formData.head_img_url" v-if="!formData.photo_url" />
                        <img :src="formData.photo_url" v-else />
                    </div>
                </div>
                <div class="name">{{formData.usernick}}</div>
            </div>

            <div class="block clearfix">
                <span class="pull-left">任务类型</span>
                <span class="pull-right">{{formData.scene_name}}</span>
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
                <textarea placeholder="请详细填写你的需求任务"></textarea>
            </div>

            <div class="block clearfix">
                <div class="item clearfix">
                    <div class="half">
                        <span>报酬</span>
                        <input type="text" placeholder="输入金额">
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
                    <span>公司地址</span>
                    <input type="text" placeholder="请填写详细地址">
                </div>
                <div class="clearfix">
                    <span>服务位置</span>
                    <input type="text" placeholder="请输入准确位置">
                </div>
            </div>

        </div>
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
            title: '预约',
            formData: {
                scene_name: '',
                photo_url: '',
                head_img_url: '',
                usernick: '',
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
            isShow: false,
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

            console.log( query )
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
        setUnit(unit){
            let self = this;
            self.formData.unit = unit;
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
        save(){
            let self = this;

            console.log( self.formData.period_times );
            return;

            $.ajax({
                url: "/soytime/appraise/list",
                    type:'POST',
                    dataType: 'json',
                    data:{
                        to_id: self.toId,
                        currentPage: self.currentPage,
                        type: self.type
                    },
                    success: (data)=>{
                    //self.formData = data.result
                }
            });
        }
    },
    components: {
        'headerBar': require('../../components/header.vue'),
        'actionsheet': require('../../components/actionsheet')
    }
    }
</script>
