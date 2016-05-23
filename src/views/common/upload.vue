<style lang="less">
	.page-upload{
		img{
			width:100%;
		}
	}
</style>

<template>
    <div class="page-upload" transition="page" >

        <header-bar :title="title" :back="true"></header-bar>

        <div class="content showHeader">
            <img id="target" :src="formData.url" />
        </div>
		
		<span
            class="ui-btn ui-btn-big"
			@click="save"
        >
            保存
        </span>

    </div>
</template>

<script>
export default {
    data (){
        return {
			title:'上传图片',
            formData: {
                url: '',
				x: '',
				y: '',
				w: '',
				h: '',
            }
        }
    },
    route: {
        data (transition){
            let self  = this,
                query = transition.to.query;

            $.extend(self.formData, query);

			console.log(self.formData.url)
        }
    },
	ready(){
        let self = this;

		$('#target').Jcrop({
			setSelect: [25, 25, 250, 250],
			aspectRatio: 1,
			bgColor: '#2C7152',
			allowMove: true,
			trackDocument: false,
			onSelect: function(c){
				self.formData.x = c.x;
				self.formData.y = c.y;
				self.formData.w = c.w;
				self.formData.h = c.h;
			}
		});
    },
    methods: {
        save(){
            let self = this;
            return;
			uploadimg(1, (data)=>{
                self.formData.auth_head_url   = data;
                self.tmpUrlData.auth_head_url = '/soytime/file/renzheng/' + data;
            })
        }
    },
    components: {
        'headerBar': require('../../components/header.vue')
    }
}
</script>