<template>
  <label class="check-wrapper">

    <span class="check-input" :class="{'is-checked': is_checked}">
      <span class="inner">✔</span>
      <input type="checkbox" :name="name" :value="label" v-model="model">
    </span>

    <span class="check-info">
      <slot>{{label}}</slot>
    </span>

  </label>

</template>

<script>
  export default {
    name: "XszCheckbox",
    props: {
      value: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      }
    },
    inject: {
      CheckGroup: {
        default: ""
      }
    },
    computed: {
      isGroup() {
        return !!this.CheckGroup
      },
      is_checked() {
        return this.isGroup ? this.model.includes(this.label) : this.model
      },
      model: {
        get() {
          return this.isGroup ? this.CheckGroup.value : this.value
        },
        set(value) {
          this.isGroup ? this.CheckGroup.$emit("input", value) : this.$emit("input", value)
        }
      }
    }
  }
</script>

<style lang="css" scoped>

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .check-wrapper {
    position: relative;
  }

  .check-input {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 0.2rem;
    background-color: #d8d6d8;
    margin-right: 0.3rem;
    transition: 0.3s;
  }

  .inner {
    display: none;
  }

  .is-checked {
    background-color: #2f67ac;
    transition: 0.3s;
  }

  .is-checked .inner {
    position: absolute;
    display: inline-block;
    top: -0.3rem;
    left: 0.1rem;
    width: 0.8rem;
    height: 0.8rem;
    color: #ffffff;
  }

  .check-info {
    user-select: none;
  }

  .is-checked + .check-info {
    color: #2f67ac;
  }

</style>