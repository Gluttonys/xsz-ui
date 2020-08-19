<template>
  <div class="XmSwitch--Wrapper">
    <span v-if="inactiveText" v-text="inactiveText" :style="{color: !value ? labelColor: ''}"></span>

    <div class="XmSwitch"
         :class="{disabled}"
         @click="handleClick"
         :style="{backgroundColor: activeColor}"
         ref="wrapper">
      <div class="circle" ref="circle" :style="{backgroundColor: circleColor}"></div>
      <label>
        <input type="radio" :name="name" ref="input">
      </label>
    </div>

    <span
        v-if="activeText"
        v-text="activeText"
        :style="{color: value ? labelColor: ''}"
    ></span>
  </div>

</template>

<script>
export default {
  name: 'XmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
      require: true
    },
    activeColor: {
      type: String,
      default: 'rgb(19, 206, 102)'
    },
    inactiveColor: {
      type: String,
      default: 'rgb(255, 73, 73)'
    },
    circleColor: {
      type: String,
      default: '#ffffff'
    },
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    activeText: String,
    inactiveText: String,
    labelColor: {
      type: String,
      default: '#409eff'
    }
  },
  data() {
    return {
      defaultActiveTextColor: 'red',
    }
  },
  methods: {
    handleClick() {
      this.$emit('input', !this.value)
      this.$emit('change', {
        eventOrigin: this.$refs.input,
        value: !this.value
      })
    },
    checkValue(value) {
      if (value) {
        this.$refs.circle.style.left = '21px'
        this.$refs.wrapper.style.backgroundColor = this.activeColor
        this.$refs.input.setAttribute('checked', 'checked')
      } else {
        this.$refs.circle.style.left = '1px'
        this.$refs.wrapper.style.backgroundColor = this.inactiveColor
        this.$refs.input.removeAttribute('checked')
      }
    }
  },
  mounted() {
    this.checkValue(this.value)
  },
  watch: {
    value(newValue) {
      this.checkValue(newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmSwitch";
</style>