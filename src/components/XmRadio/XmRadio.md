# XmRadio

单选框组

|  属性   | 是否必须 |  类型   | 默认值 |             描述              |
| :-----: | :------: | :-----: | :----: | :---------------------------: |
| v-model |    是    | String  |        |      单选框双向数据绑定       |
|  label  |    是    | String  |        | 用于和绑定数据比较， 是否选中 |
|  nama   |    否    | String  |        |        原生 name 属性         |
| border  |    否    | Boolean | false  |     是否给单选框添加标签      |



```html
<XmRadio v-model="gender" label="male"></XmRadio>

<XmRadio v-model="gender" label="female"></XmRadio>

<XmRadio name="gender" v-model="gender" label="female"></XmRadio>

<XmRadio border v-model="gender" label="female"></XmRadio>
```



```javascript
data() {
	return {
		gender: 'male'
	}
}
```

