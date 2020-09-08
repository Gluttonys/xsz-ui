<template>
  <div class="index__header" :style="{backgroundColor: bgColor}">
    <img class="left-icon"
         @click="handleLeftIcon"
         v-if="leftIconSrc"
         :src="leftIconSrc" alt="">

    <div class="search" :style="{gridColumn: `${inputStart} / ${inputEnd}`}">
      <img :src="inputIcon" alt="" v-if="inputIcon">

      <input type="text"
             :style="{gridColumn: inputIcon ? '2/3' : '1/3'}"
             :placeholder="inputPlaceHolder"
             @input="handleInput"
             @change="handleChange"
             @blur="handleBlur"
             @click="handleClick"
             @focus="handleFocus">
    </div>

    <img class="right-icon"
         v-if="rightIconSrc"
         @click="handleRightIcon"
         :src="rightIconSrc" alt="">
  </div>
</template>

<script>
export default {
  name: 'XmInputHeader',
  props: {
    // 左边的图标， 填入图片的路径
    leftIconSrc: {
      type: String,
      default: ''
    },
    // 右边的图标
    rightIconSrc: {
      type: String,
      default: ''
    },
    // input 框的 placeholder
    inputPlaceHolder: {
      type: String,
      default: ''
    },
    // 整体的一个背景颜色
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    // 输入框内的 ICON
    inputIcon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputStart: 1,
      inputEnd: 4
    }
  },
  created() {
    if (this.leftIconSrc) this.inputStart += 1
    if (this.rightIconSrc) this.inputEnd -= 1
  },
  methods: {
    // 左边按钮被点击的事件
    handleLeftIcon(e) {
      this.$emit('leftIconClick', e)
    },
    // 右边按钮点击的事件
    handleRightIcon(e) {
      this.$emit('RightIconClick', e)
    },
    // 输入框的 input 获得焦点事件
    handleFocus(e) {
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.$emit('blur', e)
    },
    handleChange(e) {
      this.$emit('change', e)
    },
    handleInput(e) {
      this.$emit('input', e)
    },
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmInputHeader";
</style>