<template>
  <div class="classify">
    <div class="classify__name">
      <div class="class__item" v-for="(classify, index) in value"
           :style="{backgroundColor: index===classifyIndex ? '#8D3535' : ''}"
           :key="index"
           @click="handleClick($event, classify, index)">
        {{classify['name']}}
      </div>
    </div>

    <div class="classify__content" ref="classifyContent" @scroll="handleScroll">
      <div class="class__block" v-for="(classify, index) in value"
           :key="index" :ref="`classifyTitle${index}`" :data-index="index">
        <div class="class__block__title">{{classify['name']}}</div>
        <div class="content" :style="{gridTemplateColumns: `repeat(${column}, 1fr)`}">
          <div v-for="(item, indexs) in classify['data']" :key="indexs"
               @click="handleItemClick($event, item)">
            <img :src="item['imgUrl']" alt="">
            <div>{{item['name']}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XmClassify",
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    classifyIndex: {
      type: Number,
      default: 0
    },
    column: {
      type: Number,
      default: 2
    }
  },
  methods: {
    handleClick(e, classify, index) {
      this.$emit("click", {e, classify})
      this.$emit("update:classifyIndex", index)
      this.$refs.classifyContent.scrollTo({
        top: this.$refs[`classifyTitle${index}`][0]['offsetTop'],
        left: 0,
        behavior: "smooth"
      })
    },
    handleScroll() {
      this.$refs.classifyContent.childNodes.forEach(node => {
        if (node.offsetTop - this.$refs.classifyContent.scrollTop <= 0) {
          this.$emit("update:classifyIndex", +node.dataset.index)
        }
      })
    },
    handleItemClick(event, data) {
      this.$emit("itemClick", {event, data})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "classify";
</style>