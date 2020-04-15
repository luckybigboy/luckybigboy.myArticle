<template>
  <button class="wl-button"
          :disabled="isDisabled"
          @click="click"
          :class="[
   type?'wl-button-' + type : '',
   size?'wl-button-' + size : '',
   {
     'is-disableds': isDisableds
   }
  ]">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'WlButtons',
  data () {
    return {

    }
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDisableds () {
      return this.isDisabled;
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e);
    }
  }
}
</script>
<style lang="scss">
.wl-button {
  min-width: 60px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #dcdfe6;
  background: #ffffff;
  box-sizing: border-box;
  padding: 8px 0;
  cursor: pointer;
}
.wl-button-primary {
  background: teal;
  border-color: teal;
  color: #fff;
}
.wl-button-warning {
  color: #ffffff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.wl-button-medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.wl-button-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.is-disableds {
  color: #ffffff;
  background-color: #f3d19e;
  border-color: #f3d19e;
  cursor: not-allowed;
}
</style>