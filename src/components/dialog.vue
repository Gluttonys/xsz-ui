<template>

  <transition name="dialog" enter-class="enter-xsz" appear-class="appear-xsz">
    <div class="dialog-wrapper" v-show="visible" @click.self="repeatedly">
      <div class="dialog scrollbar" :class="[place, width]">
        <div class="title">
          <slot name="title">
            <p>默认占位标题</p>
          </slot>
          <p v-if="!noClose" @click="repeatedly" class="close">
            <i class="fa fa-times" aria-hidden="true"></i>
          </p>
        </div>
        <div class="content">
          <slot>
            <p>...</p>
          </slot>
        </div>

        <div class="footer">
          <slot name="footer">
            <xsz-button type="success">确认</xsz-button>
            <xsz-button type="primary" @click="repeatedly">关闭</xsz-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'XszDialog',
  methods: {
    repeatedly() {
      // 这里由于是父组件传递过来的值， 不建议在子组件内进行修改
      // 需要发射一个自定义事件， 在父组件内进行处理
      this.$emit('update:visible', false);
    }
  },
  props: {
    noClose: {
      type: Boolean,
      default: false
    },
    place: {
      type: String,
      default: 'top'
    },
    width: {
      type: String,
      default: 'normal'
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="css" scoped>

.dialog-wrapper {
  position:   fixed;
  top:        0;
  left:       0;
  width:      100%;
  height:     100%;
  background: rgba(0, 0, 0, .5);
}

/* 基础样式 */
.dialog {
  position:         absolute;
  left:             50%;
  padding:          0.5rem 1rem 1rem;
  display:          block;
  background-color: rgba(245, 245, 245, 1);
  font-family:      "youyuan", "Microsoft YaHei UI", sans-serif;
  transform:        translateX(-50%);
  border-radius:    0.5rem;
  border:           1px solid rgba(224, 224, 224, 1);
  max-height:       80vh;
  overflow:         auto;
}

/* 位置 */
.top {
  animation: top 0.5s forwards;
}

.middle {
  animation: middle 0.5s forwards;
}

.bottom {
  animation: bottom 0.5s forwards;
}

/* 宽度 */
.max {
  width: 75%;
}

.normal {
  width: 45%;
}

.min {
  width: 30%;
}

.close {
  cursor:   pointer;
  position: absolute;
  top:      0.4rem;
  right:    1.5rem;
}

.close:hover {
  animation:  rotateForClose 1s infinite linear;
  color:      rgba(198, 40, 40, 1);
  transition: 1s;
}

.title {
  margin-bottom: 1rem;
}

.footer {
  margin-top:      1rem;
  display:         flex;
  justify-content: flex-end;
}

.xsz_button {
  margin-left: 1rem;
}

/* 模态框位置 顶部 */
@keyframes top {
  from {
    top: 0;
  }
  to {
    top: 5rem;
  }
}

/* 模态框位置 中间位置 */
@keyframes middle {
  from {
    top: 0;
  }
  to {
    top:       50%;
    transform: translate(-50%, -50%);
  }
}

/* 模态框位置 底部 */
@keyframes bottom {
  from {
    bottom: -5rem;
  }
  to {
    bottom: 2rem;
  }
}

@keyframes rotateForClose {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 模态框的渐进效果 显示隐藏 */
.dialog-enter,
.dialog-leave-to {
  opacity:   0;
  transform: scale(1.1);
}

.dialog-enter-to,
.dialog-leave {
  opacity: 1;
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.5s;
}


</style>