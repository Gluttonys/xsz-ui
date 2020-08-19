<template>
  <label class="XmCheckbox"
         :class="{disabledInCom, border}"
         :style="{borderColor: border && isChecked ? activeColor : '#dcdfe6'}"
  >

    <span class="box"
          :style="{backgroundColor: isChecked ? activeColor : ''}">
      <i class="fa fa-check"
         aria-hidden="true"
         :style="{display: isChecked ? '': 'none'}"></i>

      <label>
        <input ref="input"
               type="checkbox"
               :value="label"
               :name="name"
               v-model="mode"/>
      </label>
    </span>

    <span class="XmCheckbox__tips"
          :style="{color: isChecked ? activeColor : ''}">
      <slot>{{label}}</slot>
    </span>

  </label>
</template>

<script>
export default {
  name: 'XmCheckbox',
  props: {
    value: {
      type: Boolean,
      require: true
    },
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    label: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    CheckGroup: {
      default: ''
    }
  },
  data() {
    return {
      disabledInCom: this.disabled
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckGroup
    },
    isChecked() {
      return this.isGroup ? this.mode.includes(this.label) : this.mode
    },
    mode: {
      get() {
        return this.isGroup ? this.CheckGroup.value : this.value
      },
      set(value) {
        this.isGroup ? this.CheckGroup.$emit('input', value) : this.$emit('input', value)
      }
    }
  },
  methods: {
    handleMinMax() {
      if (typeof this.mode !== 'boolean'  /* 是一个多选框组 */) {

        if (this.CheckGroup.min) {
          if (this.mode.length === this.CheckGroup.min) {
            this.disabledInCom = true;
          } else if (this.mode.length > this.CheckGroup.min) {
            this.disabledInCom = false;
          }
        }

        if (this.CheckGroup.max) {
          if (this.mode.length === this.CheckGroup.max) {
            this.disabledInCom = !this.isChecked;
          } else if (this.mode.length < this.CheckGroup.max) {
            this.disabledInCom = false;
          }
        }
      }
    }
  },
  mounted() {
    this.handleMinMax()
  },
  watch: {
    'mode': function () {
      this.handleMinMax()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmCheckbox";
</style>