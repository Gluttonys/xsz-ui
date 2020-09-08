<template>
  <label class="XmRadio" :class="[{border}]" :style="{borderColor: checked? '#409eff': '#dcdfe6'}">

    <span class="XmRadio__wrapper" :class="[{checked}]">
      <span class="XmRadio__inner" v-show="checked"></span>
      <input type="radio" :name="name" :value="label" v-model="mode">
    </span>

    <span class="XmRadio__label">
      <slot>{{label}}</slot>
    </span>

  </label>
</template>

<script>
export default {
  name: 'XmRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    value: null,
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mode: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(value) {
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup() {
      return !!this.RadioGroup
    },
    checked() {
      return this.label === this.mode
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmRadio";
</style>