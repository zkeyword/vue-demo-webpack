<template>
    <div transition="page" class="page page-current">
        <header class="bar bar-nav">
            <a class="icon icon-left pull-left" @click=“redirect()”>返回</a>
            <a class="icon icon-refresh pull-right">刷新</a>
            <h1 class="title">标题</h1>
        </header>
		<p>当前路径: {{$route.path}}</p>
		<p>当前路由参数: {{$route.params | json}}</p>
	</div>
</template>

<script>
export default {
  ready () {
  },
  methods: {
    redirect () {
      
    }
  }
}
</script>

<style lang="less">

</style>








