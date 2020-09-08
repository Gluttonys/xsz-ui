<template>

  <transition>
    <div class="XmDialog" v-show="visible" @click.self="handlerClick">
      <div class="XmDialog__inner">

        <!--  tools  ： 右上角的关闭按钮  -->
        <i class="fa fa-times xm-dialog-close"
           @click="handlerClick"
           aria-hidden="true"
        >
        </i>

        <!--   标题   -->
        <h2 v-if="title">{{title}}</h2>

        <!--   内容区域   -->
        <div class="XmDialog__body">
          <slot></slot>
        </div>

        <!--  页脚    -->
        <div class="XmDialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>


</template>

<script>
export default {
  name: 'XmDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
      require: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    handlerClick() {
      console.log('hello')
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmDialog";
</style>