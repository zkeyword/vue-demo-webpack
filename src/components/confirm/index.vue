<style>
  .weui_dialog {
    position: fixed;
    z-index: 21;
    width: 85%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: #fafafc;
    text-align: center;
    border-radius: 3px
  }

  .weui_dialog_confirm .weui_dialog .weui_dialog_hd {
    padding: 1.2em 20px .5em
  }

  .weui_dialog_confirm .weui_dialog .weui_dialog_bd {
    text-align: left
  }

  .weui_dialog_hd {
    padding: 1.2em 0 .5em
  }

  .weui_dialog_title {
    font-weight: 400;
    font-size: 17px
  }

  .weui_dialog_bd {
    padding: 0 20px;
    font-size: 15px;
    color: #888
  }

  .weui_dialog_ft {
    position: relative;
    line-height: 42px;
    margin-top: 20px;
    font-size: 17px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
  }

  .weui_dialog_ft a {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #3cc51f;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0)
  }

  .weui_dialog_ft a:active {
    background-color: #eee
  }

  .weui_dialog_ft:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #d5d5d6;
    color: #d5d5d6;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5)
  }

  .weui_dialog_confirm .weui_dialog_ft a {
    position: relative
  }

  .weui_dialog_confirm .weui_dialog_ft a:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    border-left: 1px solid #d5d5d6;
    color: #d5d5d6;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5)
  }

  .weui_dialog_confirm .weui_dialog_ft a:first-child:after {
    display: none
  }

  .weui_btn_dialog.default {
    color: #353535
  }

  .weui_btn_dialog.primary {
    color: #0bb20c
  }
</style>
<template>
  <div class="weui_dialog_confirm" v-show="show">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
      <div class="weui_dialog_hd"><strong class="weui_dialog_title">{{title}}</strong></div>
      <div class="weui_dialog_bd"><slot></slot></div>
      <div class="weui_dialog_ft">
        <a href="javascript:;" class="weui_btn_dialog default" @click="onCancel">{{cancelText}}</a>
        <a href="javascript:;" class="weui_btn_dialog primary" @click="onConfirm">{{confirmText}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    title: {
      type: String,
      required: true
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    onConfirm: function () {
      //this.show = false
      this.$dispatch('on-confirm')
    },
    onCancel: function () {
      this.show = false
      this.$dispatch('on-cancel')
    }
  },
  watch: {
    show: function (val) {
      if (val) {
        this.$dispatch('show')
      }
    }
  }
}
</script>
