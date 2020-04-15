<template>
  <transition name="wl-alert-fade">
    <div class="alert"
         :class="[
         type?'wl-alert-' + type : '',
         center?'wl-text-center': ''
         ]"
         v-show="isShow">
      <span>{{title}}</span>
      <i class="iconStyle"
         @click="clears"
         :class="[closeTitle?'': 'el-icon-close']">{{closeTitle||''}}
      </i>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'WlAlert',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    title: {
      type: String,
      default: '提示的文字内容'
    },
    center: {
      type: Boolean,
      default: false
    },
    closeTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    clears () {
      this.isShow = false;
    }
  }
}
</script>
<style lang="scss">
.wl-alert-fade-enter-active,
.wl-alert-fade-leave-active {
  transition: opacity 3s;
}
.wl-alert-fade-enter,
.wl-alert-fade-leave-to {
  transition: opacity 0s;
}
.alert {
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
  box-sizing: border-box;
  font-size: 13px;
  opacity: 1;
  transition: opacity 0.5s;
}
.wl-alert-primary {
  background: #67c23a;
  color: #fff;
}
.wl-text-center {
  text-align: center;
}
.iconStyle {
  position: absolute;
  right: 15px;
  cursor: pointer;
}
</style>