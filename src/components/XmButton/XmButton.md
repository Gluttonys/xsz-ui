# XmButton

## 1. 属性

|   属性   | 是否必须 |  类型   |    默认值     |                         描述                         |
| :------: | :------: | :-----: | :-----------: | :--------------------------------------------------: |
|   type   |    否    |  sting  | "defaul-type" |            按钮类型， 常表现与颜色变化上             |
|  plain   |    否    | Boolean |     false     |              是否为朴素按钮， 没有过渡               |
|  round   |    否    | Boolean |     false     |                     是否为大圆角                     |
|  circle  |    否    | Boolean |     false     |                      是否为圆形                      |
| disabled |    否    | Boolean |     false     | 是否禁用该按钮， 禁用后， **该元素上所有事件将失效** |
|   size   |    否    | String  |               |                    设置按钮的大小                    |
|  color   |    否    | String  |               |     自定义按钮的背景颜色， **输入合法的颜色值**      |



### **type**

```html
<XmButton></XmButton>
<XmButton type="primary"></XmButton>
<XmButton type="success"></XmButton>
<XmButton type="info"></XmButton>
<XmButton type="warning"></XmButton>
<XmButton type="danger"></XmButton>
```



### plain

```css
<XmButton plain></XmButton>
<XmButton plain type="primary"></XmButton>
<XmButton plain type="success"></XmButton>
<XmButton plain type="info"></XmButton>
<XmButton plain type="warning"></XmButton>
<XmButton plain type="danger"></XmButton>
```



### round

```css
<XmButton round></XmButton>
<XmButton round type="primary"></XmButton>
<XmButton round type="success"></XmButton>
<XmButton round type="info"></XmButton>
<XmButton round type="warning"></XmButton>
<XmButton round type="danger"></XmButton>
```



### circle

```css
<XmButton circle></XmButton>
<XmButton circle type="primary"></XmButton>
<XmButton circle type="success"></XmButton>
<XmButton circle type="info"></XmButton>
<XmButton circle type="warning"></XmButton>
<XmButton circle type="danger"></XmButton>
```



### disabled

```css
<XmButton disabled>禁止</XmButton>
<XmButton disabled type="primary">禁止</XmButton>
<XmButton disabled type="success">禁止</XmButton>
<XmButton disabled type="info">禁止</XmButton>
<XmButton disabled type="warning">禁止</XmButton>
<XmButton disabled type="danger">禁止</XmButton>
<XmButton disabled plain>禁止</XmButton>
<XmButton disabled plain type="primary">禁止</XmButton>
<XmButton disabled plain type="success">禁止</XmButton>
<XmButton disabled plain type="info">禁止</XmButton>
<XmButton disabled plain type="warning">禁止</XmButton>
<XmButton disabled plain type="danger">禁止</XmButton>
```



### size

该属性有三个值 ： `medium | small | mini`

```css
 <XmButton>正常按钮</XmButton>
 <XmButton size="medium">这是一个按钮</XmButton>
 <XmButton size="small">这是一个按钮</XmButton>
 <XmButton size="mini">这是一个按钮</XmButton>
```



### icon

查看所有可用 icon [图标库连接](http://www.fontawesome.com.cn/faicons/)

```css
<XmButton icon="fa-anchor">带有图标的</XmButton>
<XmButton icon="fa-anchor" type="primary">带有图标的</XmButton>
<XmButton icon="fa-anchor" type="success">带有图标的</XmButton>
<XmButton icon="fa-anchor" type="info">带有图标的</XmButton>
<XmButton icon="fa-anchor" type="warning">带有图标的</XmButton>
<XmButton icon="fa-anchor" type="danger">带有图标的</XmButton>
```



### color

自定义按钮的背景颜色

```html
<XmButton color="red">自定义颜色背景按钮</XmButton>
<XmButton color="deeppink">自定义颜色背景按钮</XmButton>
<XmButton color="blue">自定义颜色背景按钮</XmButton>
```



## 2. 事件

### click

```css
<XmButton @click="handleClick">点我</XmButton>
```

```javascript
 methods: {
    handleClick() {
      alert("hello")
    }
 }
```

