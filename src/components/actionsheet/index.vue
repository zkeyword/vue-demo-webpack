<template>
  <div class="actionsheet_wrap">
    <div class="weui_mask_transition" :class="{'weui_fade_toggle': show}" :style="{display: show ? 'block' : 'none'}" @click="show=false"></div>
    <div class="weui_actionsheet" :class="{'weui_actionsheet_toggle': show}">
      <div class="weui_actionsheet_menu">
        <div class="weui_actionsheet_cell" v-for="(key, text) in menus" @click="dispatchEvent('menu-click', key)">
          {{{text}}}
        </div>
        <div class="vux-actionsheet-gap" v-if="showCancel"></div>
        <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="dispatchEvent('menu-click', 'cancel')" v-if="showCancel">{{cancelText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      defalt: false,
      twoWay: true
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    menus: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    dispatchEvent (event, menu) {
      if (event === 'menu-click') {
        this.$dispatch(event, menu)
        this.show = false
      }
    }
  }
}
</script>

<style>
  .weui_mask {
    background: rgba(0,0,0,.6)
  }

  .weui_mask,.weui_mask_transition,.weui_mask_transparent {
    position: fixed;
    z-index: 20;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0
  }

  .weui_mask_transition {
    display: none;
    background: transparent;
    -webkit-transition: background .3s;
    transition: background .3s
  }

  .weui_fade_toggle {
    background: rgba(0,0,0,.6)
  }
  .weui_actionsheet {
    position: fixed;
    left: 0;
    bottom: 0;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 21;
    width: 100%;
    background-color: #efeff4;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
  }

  .weui_actionsheet_menu {
    background-color: #fff
  }

  .weui_actionsheet_action {
    margin-top: 6px;
    background-color: #fff
  }

  .weui_actionsheet_cell {
    position: relative;
    padding: 10px 0;
    text-align: center;
    font-size: 18px
  }

  .weui_actionsheet_cell:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5)
  }

  .weui_actionsheet_cell:active {
    background-color: #ececec
  }

  .weui_actionsheet_cell:first-child:before {
    display: none
  }

  .weui_actionsheet_toggle {
    -webkit-transform: translate(0);
    transform: translate(0)
  }
.vux-actionsheet-gap {
  height: 8px;
  width: 100%;
  background-color: #eee;
}
.vux-actionsheet-cancel:before {
  border-top: none;
}
</style>
