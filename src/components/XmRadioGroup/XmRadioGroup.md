# XmRadioGroup



单选按钮组



## v-model

绑定一个值 ， 表示该值正在被选中 



## 默认插槽一个

用于存放多个 `XmRadio`

```html
<xm-radio-group v-model="gender">
    <XmRadio label="male"></XmRadio>
    <XmRadio label="female"></XmRadio>
    <XmRadio label='zhong'></XmRadio>
</xm-radio-group>
```



```javascript
data() {
	return {
		gender: 'male'
	}
}
```

