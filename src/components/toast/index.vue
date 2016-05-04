<template>
  <div id="toast" v-show="show">
    <div class="weui_mask_transparent"></div>
      <div class="weui_toast" :class="{'weui_toast_forbidden': type == 'warn', 'weui_toast_cancel': type == 'cancel'}">
        <i class="weui_icon_toast"></i>
        <p class="weui_toast_content"><slot></slot></p>
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
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: ''
    }
  },
  watch: {
    show: function (val) {
      const _this = this
      if (val) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(function () {
          _this.show = false
        }, _this.time)
      }
    }
  }
}
</script>
<style>
  .weui_toast {
    position: fixed;
    z-index: 23;
    min-width: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(40,40,40,.75);
    text-align: center;
    border-radius: 5px;
    color: #fff
  }

  .weui_icon_toast {
    margin: 22px 0 0;
    display: block
  }

  .weui_toast_forbidden {
  color: #F76260;
}
/*.weui_toast_cancel .weui_icon_toast:before {*/
  /*content: "\EA0D";*/
/*}*/
/*.weui_toast_forbidden .weui_icon_toast:before {*/
  /*content: "\EA0B";*/
  /*color: #F76260;*/
/*}*/
</style>
