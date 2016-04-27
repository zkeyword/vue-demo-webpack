<template>
  <div id="loadingToast" class="weui_loading_toast" v-show="show">
    <div class="weui_mask_transparent"></div>
    <div class="weui_toast">
      <div class="weui_loading">
        <div class="weui_loading_leaf weui_loading_leaf_0"></div>
        <div class="weui_loading_leaf weui_loading_leaf_1"></div>
        <div class="weui_loading_leaf weui_loading_leaf_2"></div>
        <div class="weui_loading_leaf weui_loading_leaf_3"></div>
        <div class="weui_loading_leaf weui_loading_leaf_4"></div>
        <div class="weui_loading_leaf weui_loading_leaf_5"></div>
        <div class="weui_loading_leaf weui_loading_leaf_6"></div>
        <div class="weui_loading_leaf weui_loading_leaf_7"></div>
        <div class="weui_loading_leaf weui_loading_leaf_8"></div>
        <div class="weui_loading_leaf weui_loading_leaf_9"></div>
        <div class="weui_loading_leaf weui_loading_leaf_10"></div>
        <div class="weui_loading_leaf weui_loading_leaf_11"></div>
      </div>
      <p class="weui_toast_content">{{text}}<slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Loading'
    }
  }
}
</script>
<style>
  .weui_loading_toast .weui_toast_content {
    margin-top: 64%;
    font-size: 14px
  }
  .weui_loading {
    position: absolute;
    width: 0;
    z-index: 2000000000;
    left: 50%;
    top: 38%
  }

  .weui_loading_leaf {
    position: absolute;
    top: -1px;
    opacity: .25
  }

  .weui_loading_leaf:before {
    content: " ";
    position: absolute;
    width: 8.14px;
    height: 3.08px;
    background: #d1d1d5;
    box-shadow: 0 0 1px rgba(0,0,0,.0980392);
    border-radius: 1px;
    -webkit-transform-origin: left 50% 0;
    transform-origin: left 50% 0
  }

  .weui_loading_leaf_0 {
    -webkit-animation: a 1.25s linear infinite;
    animation: a 1.25s linear infinite
  }

  .weui_loading_leaf_0:before {
    -webkit-transform: rotate(0deg) translate(7.92px);
    transform: rotate(0deg) translate(7.92px)
  }

  .weui_loading_leaf_1 {
    -webkit-animation: b 1.25s linear infinite;
    animation: b 1.25s linear infinite
  }

  .weui_loading_leaf_1:before {
    -webkit-transform: rotate(30deg) translate(7.92px);
    transform: rotate(30deg) translate(7.92px)
  }

  .weui_loading_leaf_2 {
    -webkit-animation: c 1.25s linear infinite;
    animation: c 1.25s linear infinite
  }

  .weui_loading_leaf_2:before {
    -webkit-transform: rotate(60deg) translate(7.92px);
    transform: rotate(60deg) translate(7.92px)
  }

  .weui_loading_leaf_3 {
    -webkit-animation: d 1.25s linear infinite;
    animation: d 1.25s linear infinite
  }

  .weui_loading_leaf_3:before {
    -webkit-transform: rotate(90deg) translate(7.92px);
    transform: rotate(90deg) translate(7.92px)
  }

  .weui_loading_leaf_4 {
    -webkit-animation: e 1.25s linear infinite;
    animation: e 1.25s linear infinite
  }

  .weui_loading_leaf_4:before {
    -webkit-transform: rotate(120deg) translate(7.92px);
    transform: rotate(120deg) translate(7.92px)
  }

  .weui_loading_leaf_5 {
    -webkit-animation: f 1.25s linear infinite;
    animation: f 1.25s linear infinite
  }

  .weui_loading_leaf_5:before {
    -webkit-transform: rotate(150deg) translate(7.92px);
    transform: rotate(150deg) translate(7.92px)
  }

  .weui_loading_leaf_6 {
    -webkit-animation: g 1.25s linear infinite;
    animation: g 1.25s linear infinite
  }

  .weui_loading_leaf_6:before {
    -webkit-transform: rotate(180deg) translate(7.92px);
    transform: rotate(180deg) translate(7.92px)
  }

  .weui_loading_leaf_7 {
    -webkit-animation: h 1.25s linear infinite;
    animation: h 1.25s linear infinite
  }

  .weui_loading_leaf_7:before {
    -webkit-transform: rotate(210deg) translate(7.92px);
    transform: rotate(210deg) translate(7.92px)
  }

  .weui_loading_leaf_8 {
    -webkit-animation: i 1.25s linear infinite;
    animation: i 1.25s linear infinite
  }

  .weui_loading_leaf_8:before {
    -webkit-transform: rotate(240deg) translate(7.92px);
    transform: rotate(240deg) translate(7.92px)
  }

  .weui_loading_leaf_9 {
    -webkit-animation: j 1.25s linear infinite;
    animation: j 1.25s linear infinite
  }

  .weui_loading_leaf_9:before {
    -webkit-transform: rotate(270deg) translate(7.92px);
    transform: rotate(270deg) translate(7.92px)
  }

  .weui_loading_leaf_10 {
    -webkit-animation: k 1.25s linear infinite;
    animation: k 1.25s linear infinite
  }

  .weui_loading_leaf_10:before {
    -webkit-transform: rotate(300deg) translate(7.92px);
    transform: rotate(300deg) translate(7.92px)
  }

  .weui_loading_leaf_11 {
    -webkit-animation: l 1.25s linear infinite;
    animation: l 1.25s linear infinite
  }

  .weui_loading_leaf_11:before {
    -webkit-transform: rotate(330deg) translate(7.92px);
    transform: rotate(330deg) translate(7.92px)
  }

  @-webkit-keyframes a {
    0%,0.01% {
      opacity: .25
    }

    0.02% {
      opacity: 1
    }

    60.01%,to {
      opacity: .25
    }
  }

  @-webkit-keyframes b {
    0%,8.34333% {
      opacity: .25
    }

    8.35333% {
      opacity: 1
    }

    68.3433%,to {
      opacity: .25
    }
  }

  @-webkit-keyframes c {
    0%,16.6767% {
      opacity: .25
    }

    16.6867% {
      opacity: 1
    }

    76.6767%,to {
      opacity: .25
    }
  }

  @-webkit-keyframes d {
    0%,25.01% {
      opacity: .25
    }

    25.02% {
      opacity: 1
    }

    85.01%,to {
      opacity: .25
    }
  }

  @-webkit-keyframes e {
    0%,33.3433% {
      opacity: .25
    }

    33.3533% {
      opacity: 1
    }

    93.3433%,to {
      opacity: .25
    }
  }

  @-webkit-keyframes f {
    0% {
      opacity: .270958333333333
    }

    41.6767% {
      opacity: .25
    }

    41.6867% {
      opacity: 1
    }

    1.67667% {
      opacity: .25
    }

    to {
      opacity: .270958333333333
    }
  }

  @-webkit-keyframes g {
    0% {
      opacity: .375125
    }

    50.01% {
      opacity: .25
    }

    50.02% {
      opacity: 1
    }

    10.01% {
      opacity: .25
    }

    to {
      opacity: .375125
    }
  }

  @-webkit-keyframes h {
    0% {
      opacity: .479291666666667
    }

    58.3433% {
      opacity: .25
    }

    58.3533% {
      opacity: 1
    }

    18.3433% {
      opacity: .25
    }

    to {
      opacity: .479291666666667
    }
  }

  @-webkit-keyframes i {
    0% {
      opacity: .583458333333333
    }

    66.6767% {
      opacity: .25
    }

    66.6867% {
      opacity: 1
    }

    26.6767% {
      opacity: .25
    }

    to {
      opacity: .583458333333333
    }
  }

  @-webkit-keyframes j {
    0% {
      opacity: .687625
    }

    75.01% {
      opacity: .25
    }

    75.02% {
      opacity: 1
    }

    35.01% {
      opacity: .25
    }

    to {
      opacity: .687625
    }
  }

  @-webkit-keyframes k {
    0% {
      opacity: .791791666666667
    }

    83.3433% {
      opacity: .25
    }

    83.3533% {
      opacity: 1
    }

    43.3433% {
      opacity: .25
    }

    to {
      opacity: .791791666666667
    }
  }

  @-webkit-keyframes l {
    0% {
      opacity: .895958333333333
    }

    91.6767% {
      opacity: .25
    }

    91.6867% {
      opacity: 1
    }

    51.6767% {
      opacity: .25
    }

    to {
      opacity: .895958333333333
    }
  }

</style>
