<template>

  <label class="radio-wrapper">

    <span class="radio-input" :class="{'is-checked': label === model}">
      <span class="inner"></span>
      <input type="radio" :name="name" :value="label" v-model="model">
    </span>

    <span class="radio-info">
      <slot>{{label}}</slot>
    </span>

  </label>

</template>

<script>
  export default {
    name: "XszRadio",
    inject: {
      RadioGroup: {
        default: ""
      }
    },
    props: {
      label: {
        type: [String, Boolean, Number],
        default: ""
      },
      value: null,
      name: {
        type: String,
        default: ""
      }
    },
    computed: {
      model: {
        get() {
          return this.isGroup ? this.RadioGroup.value : this.value
        },
        set(value) {
          this.isGroup ? this.RadioGroup.$emit("input", value) : this.$emit("input", value)
        }
      },
      isGroup() {
        return !!this.RadioGroup
      }
    }
  }
</script>

<style lang="css" scoped>

  .radio-wrapper {
    cursor: pointer;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .radio-input {
    display: inline-block;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: #d8d6d8;
    margin-right: 0.3rem;
    padding: 0.1rem;
  }

  .inner {
    display: none;
  }

  .is-checked {
    background-color: #88b7f0;
    transition: 0.3s;
  }

  .is-checked .inner {
    display: inline-block;
    position: relative;
    left: 0.1rem;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    background-color: #2f67ac;
    transition: 0.3s;
  }

  .is-checked + .radio-info {
    color: #2f67ac;
  }


</style>