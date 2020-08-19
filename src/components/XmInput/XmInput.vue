<template>
  <div class="XmInput" :class="[{disabled}, size]">

    <div class="middle">
      <i v-if="prefixIcon"
         class="fa"
         :class="prefixIcon"
         aria-hidden="true"></i>

      <input :type="localType"
             :value="value"
             :name="name"
             :placeholder="placeholder"
             @change="$emit('change', $event)"
             @focus="$emit('focus', $event)"
             @blur="$emit('blur', $event)"
             :style="{gridColumn: `${inputRangeStart} / ${inputRangeEnd}`}"
             @input="$emit('input', $event.target.value.trim())"
      >

      <i v-if="showPassword"
         @click="handleShowPassword"
         class="fa fa-eye showPassword"
      ></i>

      <i v-if="clearable"
         @click="$emit('input', '')"
         class="fa fa-times-circle-o clearable"
         aria-hidden="true"></i>

      <i v-if="suffixIcon"
         :class="suffixIcon"
         class="fa"
         aria-hidden="true"></i>
    </div>

  </div>
</template>

<script>
export default {
  name: 'XmInput',
  props: {
    value: {
      type: String,
      require: true,
      default: ''
    },
    name: String,
    prefixIcon: String,
    suffixIcon: String,
    placeholder: String,
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: String
  },
  data() {
    return {
      inputRangeStart: 1,
      inputRangeEnd: 6,
      localType: this.type
    }
  },
  mounted() {
    if (this.prefixIcon) this.inputRangeStart += 1
    if (this.suffixIcon) this.inputRangeEnd -= 1
    if (this.clearable) this.inputRangeEnd -= 1
    if (this.showPassword) this.inputRangeEnd -= 1
  },
  methods: {
    handleShowPassword() {
      if (this.localType === 'text') {
        this.localType = 'password'
      } else {
        this.localType = 'text'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmInput.scss";
</style>