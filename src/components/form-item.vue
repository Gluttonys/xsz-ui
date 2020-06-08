<template>
  <div class="xsz-form-item">
    <span class="xsz-form-item__label">{{label}}</span>

    <div class="xsz-form-item__content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "XszFormItem",
    props: {
      label: {
        type: String,
        default: ""
      }
    },
  }
</script>

<style lang="css" scoped>

  .xsz-form-item {
    margin: 1rem 0;
  }

  .xsz-form-item__label {
    display: inline-block;
    min-width: 80px;
    text-align: right;
    margin-right: 16px;
  }

  .xsz-form-item__content {
    display: inline-block;
  }

</style>