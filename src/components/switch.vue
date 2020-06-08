<template>
  <div class="wrapper"
       ref="wrapper"
       :class="{is_checked: value}"
       @click="handleClick">
    <div class="circular" ref="core"></div>
    <input type="checkbox" :name="name" class="hidden" ref="input">
  </div>
</template>

<script>
  export default {
    name: "XszSwitch",
    methods: {
      async handleClick() {
        this.$emit("input", !this.value)
        // 强制更新数据
        await this.$nextTick()
        // await this.$forceUpdate()
        this.setColor()
        this.$refs.input.checked = this.value
      },
      setColor() {
        if (this.activeColor || this.inactiveColor) {
          this.$refs.wrapper.style.backgroundColor = this.value ? this.activeColor : this.inactiveColor
        }
      }
    },
    mounted() {
      // 组件初始化的时候对其背景颜色进行设置
      this.setColor()
      this.$refs.input.checked = this.value
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      activeColor: {
        type: String,
        default: ""
      },
      inactiveColor: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style lang="css" scoped>

  .wrapper {
    width: 40px;
    height: 20px;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgba(224, 224, 224, 1);
    padding: 1px;
    box-sizing: border-box;
    display: inline-block;
  }

  .circular {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    transition: 0.2s;
  }

  .is_checked {
    background-color: cornflowerblue;
    transition: 0.2s;
  }

  .is_checked .circular {
    transform: translateX(20px);
    transition: 0.2s;
  }

  .hidden {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    opacity: 0;
  }

</style>