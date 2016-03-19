<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user{
        .list-block{
            .rem(margin, 20, 0);
            ul{
                .border-radius(8);
            }
            .item-inner{
                .rem(margin-right, 20);
                .rem(font-size, 30);
            }
        }
        .userHeader{
            background:#fff;
            .border-radius(8);
            .rem(padding, 20);
            .userWrap{
                .rem(width, 420);
                .photoWrap{
                    .rem(width, 120);
                    .rem(height, 120);
                    .border-radius(120);
					img{
					    width:100%;
						height:100%;
					    .border-radius(120);
					}
                }
                .nameWrap{
                    .rem(width, 280);
                    .name{
                        .rem(font-size, 30);
                    }
                    .auth{
                        color:#b2b2b2;
                        .rem(font-size, 24);
                        .rem(height, 32);
                        .rem(line-height, 32);
                        .rem(margin-top, 20);
                    }
                }
            }
            
            .userScore{
                .rem(padding, 20, 0, 0);
                .rem(margin, 20, 0, 0);
                border-top:2px solid #dedede;
                .rem(border-top-width, 2);
                li{
                    float:left;
                    width:25%;
                    .rem(font-size, 30);
                    .rem(line-height, 30);
                    em{
                        font-style:normal;
                    }
                    span{
                        .rem(margin, 0, 8);
                    }
                    i{
                        
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="page-user">
        <header-bar :title="title"></header-bar>
        
        <div class="content showHeader showFooter">
            <scene-type 
                :scene-list="indexData.sceneList"
                :scene-ids.sync="formData.sceneIds"
            ></scene-type>
            <time-conf :timer.sync="formData.timeConf"></time-conf>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: '发布服务',
            indexData: indexData,
			userInfo: {},
			formData: {}
		}
	},
	route: {
		data (transition){
			let self     = this,
				query    = transition.to.query;
				
			$.extend(self.formData, query);
			
			$.ajax({
				url: "/soytime/user/info",
				type:'GET',
				dataType: 'json',
				data: self.formData,
				success: ((data)=>{
					self.userInfo = data.result;
				})
			});
			
			//console.log(this.$store.state.namexx, this)
			console.log( this.todos );
		}
	},
	components: {
		'headerBar': require('../../../components/header.vue'),
        'timeConf': require('../../../components/timeConf.vue'),
        'sceneType': require('../../../components/sceneType.vue')
	}
}
</script>