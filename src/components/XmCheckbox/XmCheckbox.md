# XmCheckbox

多单选框



## 单独使用时

|     属性     | 是否必须 |  类型   | 默认值  |                           描述                           |
| :----------: | :------: | :-----: | :-----: | :------------------------------------------------------: |
|   v-model    |    是    | Boolean |         |             绑定一个值，用于控制该复选框的值             |
|     name     |    否    | String  |         |                     原生的 name 属性                     |
| active-color |    否    | String  | #409eff |             选中时背景颜色，以及tip选中颜色              |
|   disabled   |    否    | Boolean |  false  |                     是否禁用该多选框                     |
|  **label**   |    否    | String  |         | 提示信息， 如果默认插槽没有内容， 则**label**作为**tip** |
|    border    |    否    | Boolean |  false  |                       是否添加边框                       |



## 属性

### v-model

```html
<XmCheckbox v-model="apple"></XmCheckbox>
```

```javascript
data() {
    return {
      // 绑定复选框的值
      apple: false
    }
}
```



### name

```html
<XmCheckbox name="hobby" v-model="apple"></XmCheckbox>
```



### active-color

选中激活时的颜色

```html
<XmCheckbox active-color="red" v-model="apple"></XmCheckbox>
```



### disabled

```html
<XmCheckbox disabled v-model="apple"></XmCheckbox>
```





## 插槽

### 默认插槽一个

用于存放 label 提示信息

```html
<XmCheckbox v-model="apple">苹果</XmCheckbox>
```





## 事件





