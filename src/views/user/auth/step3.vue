<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-authStep3{
        .showPadding{
            .rem(padding-bottom, 98)
        }
        .itemTitle{
            border-bottom:1px solid #b2b2b2;
            .rem(border-bottom-width, 2);
            .rem(padding, 0, 0, 26);
            .rem(margin-bottom, 10);
        }
        .type{
            li{
                float:left;
                color:#fff;
                text-align:center;
                overflow:hidden;
                .rem(width, 122);
                .rem(height, 58);
                .rem(line-height, 58);
                .rem(margin, 16, 8, 0);
                .border-radius(8);
                span{
                    display:block;
                    background:#b2b2b2;
                    .rem(width, 122);
                    .rem(height, 58);
                    .rem(line-height, 58);
                    &.cur{
                        background:#ff946e
                    }
                }
            }
        }
        table{
            width:100%;
            .rem(margin-top, 20);
            td{
                text-align:center;
                border:1px solid #b2b2b2;
                .rem(border-width, 2);
                .rem(padding, 6);
                .iconWrap{
                    .rem(height, 34);
                    .rem(width, 38);
                }
                .icon-xuanzhong{
                    background:url(../../../img/xuanzhong.svg) no-repeat;
                    .rem(background-size, 38, 34);
                    .rem(height, 34);
                    .rem(width, 38);
                }
            }
        }
    }
</style>

<template>
    <div class="page-authStep1 page-authStep3">
        <header class="bar bar-nav">
            <h1 class="title">认证</h1>
        </header>
        <div class="content inside" :class="{showPadding: (formData.sceneIds && formData.timeConf && formData.longitude)}">
            <div class="stepTitle">申请认证</div>
            <div class="ui-floatCenter">
                <div class="ui-sl-floatCenter">
                    <i class="ui-floatCenter-item icon icon-anquanbaozhang"></i>
                    <i class="ui-floatCenter-item icon link"></i>
                    <i class="ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2"></i>
                </div>
			</div>
            <div class="stepText">将在一个工作日内审核完成!</div>
            <div class="progress">
                <span class="item"><span>1</span>请填写基本信息</span>
                <span class="item"><span>2</span>上传证照</span>
                <span class="item cur"><span>3</span>服务设置</span>
            </div>
            <div class="params">
                <div class="item">
                    <div class="itemTitle">请选择工作类别(可多选 ）</div>
                    <ul class="type clearfix">
                        <li v-for="item in indexData.sceneList" @click="setScene(item.scene_id)">
                            <span 
                                v-for="(sceneIndex, scene) in tmpSceneArr" 
                                v-if="scene == item.scene_id" 
                                class="cur"
                            >
                                {{item.scene_name}}
                            </span>
                            <span 
                                v-for="(sceneIndex, scene) in tmpSceneArr" 
                                v-if="sceneIndex === 0" 
                            >
                                {{item.scene_name}}
                            </span>
                           
                        </li>
                    </ul>
                </div>
                <div class="item clearfix" @click="getMap">
                    <span class="pull-left">
                        工作区域(选择)
                    </span>
                    <span class="pull-right">{{formData.workplace}}</span>
                </div>
                <div class="item">
                    <div class="itemTitle">工作时间(可多选 ）</div>
                    <table>
                        <tr>
                            <td>星期</td>
                            <td>一</td>
                            <td>二</td>
                            <td>三</td>
                            <td>四</td>
                            <td>五</td>
                            <td>六</td>
                            <td>日</td>
                        </tr>
                        <tr v-for="item of 3">
                            <td v-for="subItem of 8">
                                <span v-if="item == 0 && subItem == 0">上午</span>
                                <span v-if="item == 1 && subItem == 0">下午</span>
                                <span v-if="item == 2 && subItem == 0">晚上</span>
                                <span class="icon iconWrap" v-if="subItem != 0" @click="setAccount( subItem +''+ (item+1) )">
                                    <i 
                                        class="icon icon-xuanzhong"
                                        v-for="( index, time ) in tmpAccountArr" 
                                        track-by="$index" 
                                        :class="{'selected': time == subItem +''+ (item+1)}" 
                                        v-if="time == subItem +''+ (item+1)"
                                    >
                                    </i>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <span 
            class="ui-btn ui-btn-big"
            v-if="(formData.sceneIds && formData.timeConf && formData.longitude)"
            @click="submit"
        >
            下一步
        </span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
				tmpAccountArr: [],
				tmpSceneArr: [],
				tmpAccount: [],
				indexData: indexData,
                isSumbit: false,
                formData: {
                    sceneIds: null,
                    timeConf: null,
                    longitude: null,
                    workplace: null
                }
            }
        },
        route: {
            data (transition){
                let self     = this,
					query    = transition.to.query;

                self.tmpAccountArr = query.timeConf.split('-');      
                self.tmpSceneArr   = query.sceneIds.split('-');
             
                $.extend(self.formData, query);
            }
        },
        watch:{
            'formData': function(){
                console.log(111)
            }
        },
        methods: {
			setScene(id){
                let self   = this;
                  
                if( self.indexOf( self.tmpSceneArr, id ) > -1 ){
                    self.tmpSceneArr    = self.remove( self.tmpSceneArr, id );
                }else{
                    self.tmpSceneArr.push(id);
                }

                self.formData.sceneIds = self.tmpSceneArr.join('-');
			},
			setAccount(id){
				let self = this;
                if( self.indexOf( self.tmpAccount, id ) > -1 ){
                    self.tmpAccount    = self.remove( self.tmpAccount, id );
                    self.tmpAccountArr = self.remove( self.tmpAccountArr, id );
                }else{
                    self.tmpAccount.push(id);
                    self.tmpAccountArr.push(id);
                }

                self.formData.timeConf = self.tmpAccount.join('-');
			},
			getMap(){
				let self = this;
				self.$route.router.go('/auth/selectMap?' + $.param( self.formData ) );
			},
			submit(){
				let self = this;
                if( !self.isSumbit ) {
                    $.ajax({
                        url: "/soytime/ca/save",
                        type:'POST',
                        dataType: 'json',
                        data: self.formData,
                        success: ((data)=>{
                            if( data.success ){
                                self.isSumbit = false;
                            }
                        })
                    });
                    self.isSumbit = true;
                }
			},
            remove(arr, val){
                var index = this.indexOf(arr, val);
                if (index > -1) {
                    arr.splice(index, 1);
                }
                return arr;
            },
            indexOf(arr, val){
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == val) return i;
                }
                return -1;
            },
			unique(arr){
				let re = null
				arr.sort();
				re = [arr[0]];
				for(var i = 1; i < arr.length; i++){
					if( arr[i] !== re[re.length-1]){
						re.push(arr[i]);
					}
				}
				return re;
			}
        }
    }
</script>
