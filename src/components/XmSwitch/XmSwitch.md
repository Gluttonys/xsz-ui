# XmSwitch

定义**开关**, 相当于传统意义上的**单选框**



|      属性      | 是否必须 |  类型   |      默认值       |                       描述                        |
| :------------: | :------: | :-----: | :---------------: | :-----------------------------------------------: |
|     v-mode     |    是    | Boolean |                   |                    绑定一个值                     |
|  active-color  |    否    | String  | rgb(19, 206, 102) |  选中时颜色，默认**绿色**， 接收一个合法得颜色值  |
| inactive-color |    否    | String  | rgb(255, 73, 73)  | 未选中时颜色，默认**红色**， 接收一个合法得颜色值 |
|  circle-color  |    否    | String  |      #ffffff      |  滑块得颜色， 默认**白色**，接收一个合法得颜色值  |
|      name      |    否    | String  |                   |             表单元素得 **name** 属性              |
|    disabled    |    否    | Boolean |       false       |                  是否禁用该开关                   |
|  active-text   |    否    | String  |                   |                **选中时**提示文本                 |
| inactive-text  |    否    | String  |                   |               **未选中时**提示文本                |
|  label-color   |    否    | String  |      #409eff      |           设置提示文本得颜色， 默认蓝色           |



## 属性

### v-mode

```html
<XmSwitch v-model="isHappy"></XmSwitch>
```

```javascript
data() {
    return {
      // 单选框绑定的值
      isHappy: false
	}
}
```



### active-color

```html
<XmSwitch active-color="red" v-model="isHappy"></XmSwitch>
```



### inactive-color

```html
<XmSwitch inactive-color="yellow" v-model="isHappy"></XmSwitch>
```



### circle-color

```html
<XmSwitch circle-color="pink" v-model="isHappy"></XmSwitch>
```



### name

```html
<XmSwitch name="gender" v-model="isHappy"></XmSwitch>
```



### disabled

```html
<XmSwitch disabled v-model="isHappy"></XmSwitch>
```



### active-text

通常和 `inactive-text` 属性一起使用

```html
<XmSwitch active-text="开启" v-model="isHappy"></XmSwitch>
```



### inactive-text

通常和 `active-text` 属性一起使用

```html
<XmSwitch inactive-text="关闭" v-model="isHappy"></XmSwitch>
```



### label-color

提示文本的颜色， 默认淡蓝色

```html
<XmSwitch label-color="red" active-text="开启" inactive-text="关闭" v-model="isHappy"></XmSwitch>
```







## 插槽

无插槽



## 事件

- **change 事件** 携带当前开关得值



```html
<XmSwitch @change="handleSwitch" v-model="isHappy"></XmSwitch>
```

```javascript
// 处理开关change事件
/**
	eventOrigin : 事件源， 就是一个 input checked 框
	value : 当前绑定值， 也就是 v-mode 绑定得值
*/
handleSwitch({eventOrigin, value}) {
    console.log(eventOrigin)
    console.log(value)
}
```



## 测试用例（参考）

```html
<XmSwitch v-model="isHappy"></XmSwitch>
<XmSwitch active-text="开启" inactive-text="关闭" v-model="isHappy"></XmSwitch>
<XmSwitch label-color="red" active-text="开启" inactive-text="关闭" v-model="isHappy"></XmSwitch>
<XmSwitch v-model="isHappy"></XmSwitch>
<XmSwitch @change="handleSwitch" v-model="isHappy"></XmSwitch>
<XmSwitch disabled v-model="isHappy"></XmSwitch>
<XmSwitch name="gender" v-model="isHappy"></XmSwitch>
<XmSwitch circle-color="pink" v-model="isHappy"></XmSwitch>
<XmSwitch active-color="red" inactive-color="yellow" v-model="isHappy"></XmSwitch>
```

