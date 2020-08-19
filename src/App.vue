<template>
  <div id="app">





    <!--

                    下面是旧的

     -->


    <!--    <div class="row">-->
    <!--      <table border="2">-->
    <!--        <caption>Form && FormItem 表单组</caption>-->
    <!--        <tr>-->
    <!--          <td>参数名</td>-->
    <!--          <td>值类型</td>-->
    <!--          <td>默认值</td>-->
    <!--          <td>举例</td>-->
    <!--          <td>实例</td>-->
    <!--          <td>描述</td>-->
    <!--          <td>代码</td>-->
    <!--        </tr>-->

    <!--        <tr>-->
    <!--          <td>这两个控件将一并使用</td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td>model : {{model}}</td>-->
    <!--          <td>-->
    <!--            <xsz-form :model="model">-->
    <!--              <xsz-form-item label="玩家姓名">-->
    <!--                <xsz-input placeholder="用户名" v-model="model.playerName"></xsz-input>-->
    <!--              </xsz-form-item>-->
    <!--              <xsz-form-item label="性别">-->
    <!--                <xsz-radio label="0" v-model="model.playerGender">男</xsz-radio>-->
    <!--                <xsz-radio label="1" v-model="model.playerGender">女</xsz-radio>-->
    <!--              </xsz-form-item>-->
    <!--            </xsz-form>-->
    <!--          </td>-->
    <!--          <td></td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <xsz-form :model="model">-->
    <!--                <xsz-form-item label="玩家姓名">-->
    <!--                  <xsz-input placeholder="用户名" v-model="model.playerName"></xsz-input>-->
    <!--                </xsz-form-item>-->
    <!--                <xsz-form-item label="性别">-->
    <!--                  <xsz-radio label="0" v-model="model.playerGender">男</xsz-radio>-->
    <!--                  <xsz-radio label="1" v-model="model.playerGender">女</xsz-radio>-->
    <!--                </xsz-form-item>-->
    <!--              </xsz-form>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>Form : v-model</td>-->
    <!--          <td>Object</td>-->
    <!--          <td>null</td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td>这个值是必须的， 需要绑定到form上， 用来收集form上的所有表单元素的值</td>-->
    <!--          <td></td>-->
    <!--        </tr>-->

    <!--        <tr>-->
    <!--          <td>FormItem : label</td>-->
    <!--          <td>String</td>-->
    <!--          <td>""</td>-->
    <!--          <td>label="性别"</td>-->
    <!--          <td></td>-->
    <!--          <td>给表单元素提供一个提示文本</td>-->
    <!--          <td></td>-->
    <!--        </tr>-->
    <!--      </table>-->
    <!--    </div>-->

    <!--    <div class="row">-->
    <!--      <table border="2">-->
    <!--        <caption>CheckBoxGroup 多选框组</caption>-->
    <!--        <tr>-->
    <!--          <td>参数名</td>-->
    <!--          <td>值类型</td>-->
    <!--          <td>默认值</td>-->
    <!--          <td>举例</td>-->
    <!--          <td>实例</td>-->
    <!--          <td>描述</td>-->
    <!--          <td>代码</td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>v-model</td>-->
    <!--          <td>Array</td>-->
    <!--          <td>null</td>-->
    <!--          <td>-->
    <!--            fruits : {{fruits}}-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <xsz-checkbox-group v-model="fruits">-->
    <!--              <xsz-checkbox label="苹果"></xsz-checkbox>-->
    <!--              <xsz-checkbox label="香蕉"></xsz-checkbox>-->
    <!--              <xsz-checkbox label="草莓"></xsz-checkbox>-->
    <!--            </xsz-checkbox-group>-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            如果有多个多选项， 则可以省略每一个项中的v-model。-->
    <!--            在 CheckboxGroup组中添加一个整体的V-model即可-->
    <!--            <br>-->
    <!--            此种情况下， v-model必须绑定一个数组， 而不再是一个Boolean值-->
    <!--            <br>-->
    <!--            此选项是必须的-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <xsz-checkbox-group v-model="fruits">-->
    <!--                <xsz-checkbox label="苹果"></xsz-checkbox>-->
    <!--                <xsz-checkbox label="香蕉"></xsz-checkbox>-->
    <!--                <xsz-checkbox label="草莓"></xsz-checkbox>-->
    <!--              </xsz-checkbox-group>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--      </table>-->
    <!--    </div>-->



    <!--    <div class="row">-->
    <!--      <table border="2">-->
    <!--        <caption>RadioGroup 单选框组</caption>-->
    <!--        <tr>-->
    <!--          <td>参数名</td>-->
    <!--          <td>值类型</td>-->
    <!--          <td>默认值</td>-->
    <!--          <td>举例</td>-->
    <!--          <td>实例</td>-->
    <!--          <td>描述</td>-->
    <!--          <td>代码</td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>简化写法</td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td>-->
    <!--            <xsz-radio-group v-model="gender">-->
    <!--              <xsz-radio label="0">男</xsz-radio>-->
    <!--              <xsz-radio label="1">女</xsz-radio>-->
    <!--            </xsz-radio-group>-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            如果有多个单选项， 则可以省略每一个项中的v-model。-->
    <!--            在 RadioGroup组中添加一个整体的V-model即可-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <xsz-radio-group v-model="gender">-->
    <!--                <xsz-radio label="0">男</xsz-radio>-->
    <!--                <xsz-radio label="1">女</xsz-radio>-->
    <!--              </xsz-radio-group>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->

    <!--      </table>-->
    <!--    </div>-->

    <!--    <div class="row">-->
    <!--      <table border="2">-->
    <!--        <caption>Radio 单选框</caption>-->
    <!--        <tr>-->
    <!--          <td>参数名</td>-->
    <!--          <td>值类型</td>-->
    <!--          <td>默认值</td>-->
    <!--          <td>举例</td>-->
    <!--          <td>实例</td>-->
    <!--          <td>描述</td>-->
    <!--          <td>代码</td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>v-model</td>-->
    <!--          <td>variable</td>-->
    <!--          <td>null</td>-->
    <!--          <td>v-model="gender"</td>-->
    <!--          <td>-->
    <!--            <xsz-radio label="0" v-model="gender">男</xsz-radio>-->
    <!--            <xsz-radio label="1" v-model="gender">女</xsz-radio>-->
    <!--          </td>-->
    <!--          <td>用于捆绑一个radio组, 这个值是必须的</td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <xsz-radio label="0" v-model="gender">男</xsz-radio>-->
    <!--              <xsz-radio label="1" v-model="gender">女</xsz-radio>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>label</td>-->
    <!--          <td>[String, Number, Boolean]</td>-->
    <!--          <td>""</td>-->
    <!--          <td>label="0"</td>-->
    <!--          <td>-->
    <!--            <xsz-radio label="0" v-model="gender">男</xsz-radio>-->
    <!--            <xsz-radio label="1" v-model="gender">女</xsz-radio>-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            用于确定单选框的返回值。如果没有content区， 则label自动填充content-->
    <!--            <br>-->
    <!--            这个值是必须的-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <xsz-radio label="0" v-model="gender">男</xsz-radio>-->
    <!--              <xsz-radio label="1" v-model="gender">女</xsz-radio>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>name</td>-->
    <!--          <td>String</td>-->
    <!--          <td>""</td>-->
    <!--          <td>name="gender"</td>-->
    <!--          <td>-->
    <!--            <xsz-radio name="man" label="0" v-model="gender">男</xsz-radio>-->
    <!--          </td>-->
    <!--          <td>用于确定具体某个form组件的名字， 便于get获取</td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <xsz-radio name="gender" label="0" v-model="gender">男</xsz-radio>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--      </table>-->


    <!--    </div>-->


    <!--    <div class="row">-->
    <!--      <table border="2">-->
    <!--        <caption>Dialog 模态框</caption>-->
    <!--        <tr>-->
    <!--          <td>参数名</td>-->
    <!--          <td>值类型</td>-->
    <!--          <td>默认值</td>-->
    <!--          <td>举例</td>-->
    <!--          <td>实例</td>-->
    <!--          <td>描述</td>-->
    <!--          <td>代码</td>-->
    <!--        </tr>-->

    <!--        <tr>-->
    <!--          <td>:visible.sync</td>-->
    <!--          <td>Boolean</td>-->
    <!--          <td>无默认值， 该参数是必须的</td>-->
    <!--          <td>:visible.sync="true"</td>-->
    <!--          <td>-->
    <!--            <xsz-button type="primary" @click="fn">单机弹出模态框</xsz-button>-->
    <!--          </td>-->
    <!--          <td>该参数是必须的， 需要绑定一个boolean类型的变量，来动态的控制它的展示和隐藏</td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <XszDialog :visible.sync="Booleanvariable"></XszDialog>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->

    <!--        <tr>-->
    <!--          <td>noClose</td>-->
    <!--          <td>Boolean</td>-->
    <!--          <td>true</td>-->
    <!--          <td>noClose</td>-->
    <!--          <td>-->
    <!--            <xsz-button type="primary" @click="fn1">单机弹出模态框</xsz-button>-->
    <!--          </td>-->
    <!--          <td>模态框右上角的叉号❌按钮， 默认存在， 使用该属性，隐藏它</td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <XszDialog :visible.sync="Booleanvariable" noClose></XszDialog>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->

    <!--        <tr>-->
    <!--          <td>place</td>-->
    <!--          <td>String</td>-->
    <!--          <td>"top"</td>-->
    <!--          <td>-->
    <!--            place="top"-->
    <!--            <br>-->
    <!--            place="middle"-->
    <!--            <br>-->
    <!--            place="bottom"-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <xsz-button type="primary" @click="fn2">默认位置弹出模态框</xsz-button>-->
    <!--            <br>-->
    <!--            <xsz-button @click="fn3">中间位置弹出模态框</xsz-button>-->
    <!--            <br>-->
    <!--            <xsz-button type="success" @click="fn4">下边位置弹出模态框</xsz-button>-->
    <!--          </td>-->
    <!--          <td>模态框出现的位置。 上中下三个选项</td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <XszDialog :visible.sync="dialog3" place="top"></XszDialog>-->
    <!--              <XszDialog :visible.sync="dialog4" place="middle"></XszDialog>-->
    <!--              <XszDialog :visible.sync="dialog5" place="bottom"></XszDialog>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->

    <!--        <tr>-->
    <!--          <td>width</td>-->
    <!--          <td>String</td>-->
    <!--          <td>"middle"</td>-->
    <!--          <td>-->
    <!--            width="max"-->
    <!--            <br>-->
    <!--            width="normal"-->
    <!--            <br>-->
    <!--            width="min"-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <xsz-button type="primary" @click="fn5">大模态框</xsz-button>-->
    <!--            <br>-->
    <!--            <xsz-button @click="fn6">标准模态框</xsz-button>-->
    <!--            <br>-->
    <!--            <xsz-button type="success" @click="fn7">小模态框</xsz-button>-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            模态框的大小， 有三个选项-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <XszDialog :visible.sync="dialog6" width="max"></XszDialog>-->
    <!--              <XszDialog :visible.sync="dialog7" width="normal"></XszDialog>-->
    <!--              <XszDialog :visible.sync="dialog8" width="min"></XszDialog>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->

    <!--        <tr>-->
    <!--          <td>插槽</td>-->
    <!--          <td></td>-->
    <!--          <td></td>-->
    <!--          <td>-->
    <!--            slot="title"-->
    <!--            <br>-->
    <!--            slot="footer"-->
    <!--            <br>-->
    <!--            slot-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <xsz-button @click="fn8">具有插槽的模态框</xsz-button>-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            用于自定义模态框内容, 其中有三个插槽， 一个标题插槽，-->
    <!--            一个尾部插槽。还有一个默认插槽-->
    <!--            用于模态框的主题内容-->
    <!--          </td>-->
    <!--          <td>-->
    <!--            <textarea readonly>-->
    <!--              <XszDialog :visible.sync="dialog9">-->
    <!--                <h2 slot="title">这是标题</h2>-->
    <!--                <p>这是内容</p>-->
    <!--                <div slot="footer">-->
    <!--                  <p>这是底部内容</p>-->
    <!--                </div>-->
    <!--              </XszDialog>-->
    <!--            </textarea>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--      </table>-->
    <!--    </div>-->

    <!--    <XszDialog :visible.sync="dialog1"></XszDialog>-->
    <!--    <XszDialog :visible.sync="dialog2" noClose></XszDialog>-->
    <!--    <XszDialog :visible.sync="dialog3" place="top"></XszDialog>-->
    <!--    <XszDialog :visible.sync="dialog4" place="middle"></XszDialog>-->
    <!--    <XszDialog :visible.sync="dialog5" place="bottom"></XszDialog>-->
    <!--    <XszDialog :visible.sync="dialog6" width="max"></XszDialog>-->
    <!--    <XszDialog :visible.sync="dialog7" width="normal"></XszDialog>-->
    <!--    <XszDialog :visible.sync="dialog8" width="min"></XszDialog>-->
    <!--    <XszDialog :visible.sync="dialog9">-->
    <!--      <h2 slot="title">这是标题</h2>-->
    <!--      <p>这是内容</p>-->
    <!--      <div slot="footer">-->
    <!--        <p>这是底部内容</p>-->
    <!--      </div>-->
    <!--    </XszDialog>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 单选框绑定的值
      isHappy: false,
      // 绑定复选框的值
      apple: false,
      // 多选框组
      fruits: ['西瓜', '香蕉'],
      content: '这是内容'

      // 旧的
      // // 模态框需要一个指定数据 visible
      // dialog1: false,
      // dialog2: false,
      // dialog3: false,
      // dialog4: false,
      // dialog5: false,
      // dialog6: false,
      // dialog7: false,
      // dialog8: false,
      // dialog9: false,
      // // input框的值
      // username: "",
      // password: "",
      // query: "",
      // // switch
      // active: true,
      // active1: true,
      // active2: true,
      // active3: true,
      // // 按钮的单机事件
      // age: 0,
      // // radio
      // gender: "1",
      // // 多选框 同意
      // agree: false,
      // // 多选框， 水果选择
      // fruits: ["苹果"],
      // // form表单， 绑定一个对象，收集各个表单元素的值
      // model: {
      //   playerName: "Gluttony",
      //   playerGender: "1"
      // }

    }
  },
  // mounted() {
  //   setTimeout(_ => {
  //     this.apple = true
  //   }, 4000)
  // },
  methods: {
    handleClick() {
      console.log('hello')
    },
    // 处理开关change事件
    handleSwitch({eventOrigin, value}) {
      console.log(eventOrigin)
      console.log(value)
    }


    // 以及一个单机事件的方法， 改变visible的值
    // fn() {
    //   this.dialog1 = true
    // },
    // fn1() {
    //   this.dialog2 = true
    // },
    // fn2() {
    //   this.dialog3 = true
    // },
    // fn3() {
    //   this.dialog4 = true
    // },
    // fn4() {
    //   this.dialog5 = true
    // },
    // fn5() {
    //   this.dialog6 = true
    // },
    // fn6() {
    //   this.dialog7 = true
    // },
    // fn7() {
    //   this.dialog8 = true
    // },
    // fn8() {
    //   this.dialog9 = true
    // },
    // add() {
    //   this.age++
    //   console.log(this.age)
    // }
  }
}
</script>

