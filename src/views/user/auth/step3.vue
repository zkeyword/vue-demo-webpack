<style lang="less">

</style>

<template>
    <div class="page-authStep3">
        <header class="bar bar-nav">
            <h1 class="title">认证</h1>
        </header>
        <div class="inside auth-step2">
            <div class="stepTitle">申请认证</div>
            <div class="iconWrap"></div>
            <div class="stepText">将在一个工作日内审核完成!</div>
            <div class="progress">
                <span class="item"><span>1</span>请填写基本信息</span>
                <span class="item"><span>2</span>上传证照</span>
                <span class="item cur"><span>3</span>服务设置</span>
            </div>
        </div>
        <div class="params">
            <div class="item">
                请选择工作类别(可多选 ）
                <ul>
                    <li v-for="item in indexData.sceneList" @click="setScene(item.scene_id)">
                        {{item.scene_name}}
                    </li>
                </ul>
            </div>
            <div class="item">
                <span @click="getMap">
                    工作区域(选择)
                </a>
            </div>
            <div class="item">
                工作时间(可多选 ）
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
                            <span v-if="subItem != 0" @click="setAccount( subItem +''+ (item+1) )">
                                <span v-for="( index, time ) in tmpAccountData" track-by="$index" :class="{'selected': time == subItem +''+ (item+1)}" v-if="time == subItem +''+ (item+1)">{{time}}</span>
                                x
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <span class="button button-big" @click="submit">下一步</span>
        <span class="button button-big" v-if="formData.serverId && formData.picType" @click="submit">下一步</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
				tmpAccountData: [],
				tmpSceneArr: [],
				tmpAccount: [],
				indexData: indexData,
                formData: {
                    city_id: null,
                    school_id: null,
                    auth_head: null,
                    auth_student_card: null,
					workplace: null,
					longitude: null,
					latitude: null,
					scene_ids: null,
					account_time_confs: null
                }
            }
        },
        route: {
            data (transition){
                let formData = this.formData,
					query    = transition.to.query;
					
                formData.city_id           = query.city_id ? query.city_id : null;
                formData.school_id         = query.school_id ? query.school_id : null;
				formData.auth_head         = query.auth_head ? query.auth_head : null;
                formData.auth_student_card = query.auth_student_card ? query.auth_student_card : null;
				formData.workplace         = query.workplace ? query.workplace : null;
                formData.longitude         = query.longitude ? query.longitude : null;
                formData.latitude          = query.latitude ? query.latitude : null;
				
				
				this.tmpAccountData = '12-13-21-52'.split('-');
				console.log( this.tmpAccountData )
            }
        },
		ready(){
			return;
            $.ajax({
                url: "/soytime/data/loadSchool",
                type:'POST',
                dataType: 'json',
                success: ((data)=>{
                    self.tmpAccountData = data.result.timeConf.split('-');
                })
            });
        },
        methods: {
			setScene(id){
				this.tmpSceneArr.push(id);
			},
			setAccount(id){
				let self = this;
				self.tmpAccount.push(id);
				self.tmpAccountData.push(id);
				self.tmpAccountData = self.unique( self.tmpAccountData );
			},
			getMap(){
				let self = this;
				self.$route.router.go('/auth/selectMap?' + $.param( self.formData ) );
			},
			submit(){
				let self       = this,
					sceneArr   = self.unique( self.tmpSceneArr ),
					accountArr = self.unique( self.tmpAccount )
					
				self.formData.scene_ids          = sceneArr.join('-');
				self.formData.account_time_confs = accountArr.join('-');
								
				$.ajax({
					url: "/soytime/ca/save",
					type:'POST',
					dataType: 'json',
					data: self.formData,
					success: ((data)=>{
						
					})
				});
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
