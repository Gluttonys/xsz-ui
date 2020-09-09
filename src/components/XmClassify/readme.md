# classify 组件

> 商品分类组件



```html
<classify
          @click="handleClickClassify"
          @itemClick="handleItemClick"
          v-model="classify"
          :classifyIndex.sync="currentIndex">
</classify>
```



## 属性

v-model : 绑定的商品列表

- 结构如下

- ```javascript
   classify: [
          {name: "男装", data: [
              {imgUrl: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg", name: "皮夹克"},
              {imgUrl: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg", name: "雪山服"},
              {imgUrl: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg", name: "雪山服"},
              {imgUrl: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg", name: "雪山服"},
              {imgUrl: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg", name: "冬装"},
            ]}
  ```

  - name : 商品分类名
  - data : 商品列表
    - data.imgUrl : 商品图片地址
    - data.name : 商品名称

- classifyIndex

  - 指明当前分类的索引



## 事件

- click : 侧边栏分类单击事件
  - 事件携带数据
    - 事件源对象
    - classify对象
- itemClick : 商品单机时间
  - 事件携带数据
    - 事件源对象
    - 商品信息对象