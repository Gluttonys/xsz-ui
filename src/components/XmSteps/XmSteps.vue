<template>
  <div class="steps">
    <div class="retouch">
      <div class="circle__wrapper">
        <div class="dot"></div>
      </div>
    </div>

    <div class="content">
      <div class="title" v-text="title" v-if="title"></div>
      <slot></slot>
    </div>

    <!--  竖线  -->
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: "XmSteps",
  data() {
    return {
      // 父组件中的所有steps子组件
      our: []
    }
  },
  props: {
    title: String
  },
  mounted() {
    this.our = this.$parent.$children.filter(component => {
      console.log(component.$vnode.componentOptions.tag)
      if (component.$vnode.componentOptions.tag === "xm-steps") return true
    })
    this.our[this.our.length - 1].$refs['line'].remove()
  }


}
</script>

<style lang="scss" scoped>
@import "steps";
</style>