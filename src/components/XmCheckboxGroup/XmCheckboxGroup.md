# XmCheckboxGroup

复选框组



|  属性  | 是否必须 |  类型  | 默认值 |        描述        |
| :----: | :------: | :----: | :----: | :----------------: |
| v-mode |    是    | Array  |        | 绑定一个选中值数组 |
|  min   |    否    | Number |        |    最少选中个数    |
|  max   |    否    | Number |        |    最多选中个数    |
|  size  |    否    | String |        |   选择框字号大小   |



## 属性

### v-model

```html
<XmCheckboxGroup v-model="fruits">
    <XmCheckbox label="西瓜"></XmCheckbox>
    <XmCheckbox label="香蕉"></XmCheckbox>
    <XmCheckbox label="芒果"></XmCheckbox>
    <XmCheckbox label="苹果"></XmCheckbox>
</XmCheckboxGroup>
```

```javascript
data() {
	return {
		fruits: ['西瓜', '香蕉']
	}
}
```



### min

```html
<XmCheckboxGroup :min="1" v-model="fruits">
    <XmCheckbox label="西瓜">西瓜</XmCheckbox>
    <XmCheckbox label="香蕉">香蕉</XmCheckbox>
    <XmCheckbox label="芒果">芒果</XmCheckbox>
    <XmCheckbox label="苹果">苹果</XmCheckbox>
</XmCheckboxGroup>
```



### max

```html
<XmCheckboxGroup :max="2" v-model="fruits">
    <XmCheckbox label="西瓜">西瓜</XmCheckbox>
    <XmCheckbox label="香蕉">香蕉</XmCheckbox>
    <XmCheckbox label="芒果">芒果</XmCheckbox>
    <XmCheckbox label="苹果">苹果</XmCheckbox>
</XmCheckboxGroup>
```



### min && max

```html
<XmCheckboxGroup :min="1" :max="2" v-model="fruits">
    <XmCheckbox label="西瓜">西瓜</XmCheckbox>
    <XmCheckbox label="香蕉">香蕉</XmCheckbox>
    <XmCheckbox label="芒果">芒果</XmCheckbox>
    <XmCheckbox label="苹果">苹果</XmCheckbox>
</XmCheckboxGroup>
```



### size

设置选择框字号大小

该属性有三个可选项 `mini` `small` `medium`, 依次由小到大

```html
<XmCheckboxGroup size="mini" v-model="fruits">
    <XmCheckbox label="西瓜">西瓜</XmCheckbox>
    <XmCheckbox label="香蕉">香蕉</XmCheckbox>
    <XmCheckbox label="芒果">芒果</XmCheckbox>
    <XmCheckbox label="苹果">苹果</XmCheckbox>
</XmCheckboxGroup>

<XmCheckboxGroup size="small" v-model="fruits">
    <XmCheckbox label="西瓜">西瓜</XmCheckbox>
    <XmCheckbox label="香蕉">香蕉</XmCheckbox>
    <XmCheckbox label="芒果">芒果</XmCheckbox>
    <XmCheckbox label="苹果">苹果</XmCheckbox>
</XmCheckboxGroup>

<XmCheckboxGroup size="medium" v-model="fruits">
    <XmCheckbox label="西瓜">西瓜</XmCheckbox>
    <XmCheckbox label="香蕉">香蕉</XmCheckbox>
    <XmCheckbox label="芒果">芒果</XmCheckbox>
    <XmCheckbox label="苹果">苹果</XmCheckbox>
</XmCheckboxGroup>
```



## 插槽

### 默认插槽一个 default







## 事件

