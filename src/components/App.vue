<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <a v-link="{ path: '/news/1', activeClass: 'cur' }">news</a>
      <a v-link="{ path: '/counter', activeClass: 'cur' }">counter</a>
    </div>
	adfadfadfadf
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style lang="less">
    .index2{
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>

