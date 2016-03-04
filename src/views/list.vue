<style lang="less">
    .index2{
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>

<template>
<<<<<<< HEAD
    {{title}}
    <ul v-if="rows.length">
        <li v-for="item in rows" track-by="$index">
            {{ item.id }} - {{ $index }} - {{ item.name }}
            <img :src="item.photo" />
        </li>
    </ul>
    <div v-else>
        没有数据
    </div>
=======
    <div>
		list
	</div>
>>>>>>> parent of 4874b43... 添加svg
</template>

<script>
    export default {
<<<<<<< HEAD
        data (){
            return {
                rows:[],
                title: '列表'
            }
        },
        ready (){
            
        },
        route: {
            data (transition){
                this.getRows();
            }
        },
        methods: {
            getRows(){
                $.getJSON('/grid', (data)=>{
                    this.rows = data.rows;
                });
            }
=======
        ready (){
            //setTimeout(() => {
            //   this.$route.router.go({ name: 'list'});
            //},2000);
>>>>>>> parent of 4874b43... 添加svg
        }
    }
</script>