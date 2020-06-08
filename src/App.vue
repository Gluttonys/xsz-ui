<template>
  <div id="app">

    <div class="row">
      <table border="2">
        <caption>Form && FormItem 表单组</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>

        <tr>
          <td>这两个控件将一并使用</td>
          <td></td>
          <td></td>
          <td>model : {{model}}</td>
          <td>
            <xsz-form :model="model">
              <xsz-form-item label="玩家姓名">
                <xsz-input placeholder="用户名" v-model="model.playerName"></xsz-input>
              </xsz-form-item>
              <xsz-form-item label="性别">
                <xsz-radio label="0" v-model="model.playerGender">男</xsz-radio>
                <xsz-radio label="1" v-model="model.playerGender">女</xsz-radio>
              </xsz-form-item>
            </xsz-form>
          </td>
          <td></td>
          <td>
            <textarea readonly>
              <xsz-form :model="model">
                <xsz-form-item label="玩家姓名">
                  <xsz-input placeholder="用户名" v-model="model.playerName"></xsz-input>
                </xsz-form-item>
                <xsz-form-item label="性别">
                  <xsz-radio label="0" v-model="model.playerGender">男</xsz-radio>
                  <xsz-radio label="1" v-model="model.playerGender">女</xsz-radio>
                </xsz-form-item>
              </xsz-form>
            </textarea>
          </td>
        </tr>
        <tr>
          <td>Form : v-model</td>
          <td>Object</td>
          <td>null</td>
          <td></td>
          <td></td>
          <td>这个值是必须的， 需要绑定到form上， 用来收集form上的所有表单元素的值</td>
          <td></td>
        </tr>

        <tr>
          <td>FormItem : label</td>
          <td>String</td>
          <td>""</td>
          <td>label="性别"</td>
          <td></td>
          <td>给表单元素提供一个提示文本</td>
          <td></td>
        </tr>

      </table>
    </div>

    <div class="row">
      <table border="2">
        <caption>CheckBoxGroup 多选框组</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>
        <tr>
          <td>v-model</td>
          <td>Array</td>
          <td>null</td>
          <td>
            fruits : {{fruits}}
          </td>
          <td>
            <xsz-checkbox-group v-model="fruits">
              <xsz-checkbox label="苹果"></xsz-checkbox>
              <xsz-checkbox label="香蕉"></xsz-checkbox>
              <xsz-checkbox label="草莓"></xsz-checkbox>
            </xsz-checkbox-group>
          </td>
          <td>
            如果有多个多选项， 则可以省略每一个项中的v-model。
            在 CheckboxGroup组中添加一个整体的V-model即可
            <br>
            此种情况下， v-model必须绑定一个数组， 而不再是一个Boolean值
            <br>
            此选项是必须的
          </td>
          <td>
            <textarea readonly>
              <xsz-checkbox-group v-model="fruits">
                <xsz-checkbox label="苹果"></xsz-checkbox>
                <xsz-checkbox label="香蕉"></xsz-checkbox>
                <xsz-checkbox label="草莓"></xsz-checkbox>
              </xsz-checkbox-group>
            </textarea>
          </td>
        </tr>
      </table>
    </div>

    <div class="row">
      <table border="2">
        <caption>CheckBox 多选框</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>
        <tr>
          <td>v-model</td>
          <td>Boolean</td>
          <td>null</td>
          <td>v-model="true"</td>
          <td>
            <xsz-checkbox label="0" v-model="agree">是否同意</xsz-checkbox>
          </td>
          <td>为多选框绑定一个Boolean类型的数据, 这个属性是必须的</td>
          <td>
            <textarea readonly>
             <xsz-checkbox label="0" v-model="agree">是否同意</xsz-checkbox>
            </textarea>
          </td>
        </tr>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>""</td>
          <td>label="0"</td>
          <td>
            <xsz-checkbox label="0" v-model="agree">是否同意</xsz-checkbox>
          </td>
          <td>为多选框提供一个值，这个选项也是必须的</td>
          <td>
              <textarea readonly>
               <xsz-checkbox label="0" v-model="agree">是否同意</xsz-checkbox>
              </textarea>
          </td>
        </tr>
      </table>
    </div>

    <div class="row">
      <table border="2">
        <caption>RadioGroup 单选框组</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>
        <tr>
          <td>简化写法</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <xsz-radio-group v-model="gender">
              <xsz-radio label="0">男</xsz-radio>
              <xsz-radio label="1">女</xsz-radio>
            </xsz-radio-group>
          </td>
          <td>
            如果有多个单选项， 则可以省略每一个项中的v-model。
            在 RadioGroup组中添加一个整体的V-model即可
          </td>
          <td>
            <textarea readonly>
              <xsz-radio-group v-model="gender">
                <xsz-radio label="0">男</xsz-radio>
                <xsz-radio label="1">女</xsz-radio>
              </xsz-radio-group>
            </textarea>
          </td>
        </tr>

      </table>
    </div>

    <div class="row">
      <table border="2">
        <caption>Radio 单选框</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>
        <tr>
          <td>v-model</td>
          <td>variable</td>
          <td>null</td>
          <td>v-model="gender"</td>
          <td>
            <xsz-radio label="0" v-model="gender">男</xsz-radio>
            <xsz-radio label="1" v-model="gender">女</xsz-radio>
          </td>
          <td>用于捆绑一个radio组, 这个值是必须的</td>
          <td>
            <textarea readonly>
              <xsz-radio label="0" v-model="gender">男</xsz-radio>
              <xsz-radio label="1" v-model="gender">女</xsz-radio>
            </textarea>
          </td>
        </tr>
        <tr>
          <td>label</td>
          <td>[String, Number, Boolean]</td>
          <td>""</td>
          <td>label="0"</td>
          <td>
            <xsz-radio label="0" v-model="gender">男</xsz-radio>
            <xsz-radio label="1" v-model="gender">女</xsz-radio>
          </td>
          <td>
            用于确定单选框的返回值。如果没有content区， 则label自动填充content
            <br>
            这个值是必须的
          </td>
          <td>
            <textarea readonly>
              <xsz-radio label="0" v-model="gender">男</xsz-radio>
              <xsz-radio label="1" v-model="gender">女</xsz-radio>
            </textarea>
          </td>
        </tr>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>""</td>
          <td>name="gender"</td>
          <td>
            <xsz-radio name="man" label="0" v-model="gender">男</xsz-radio>
          </td>
          <td>用于确定具体某个form组件的名字， 便于get获取</td>
          <td>
            <textarea readonly>
              <xsz-radio name="gender" label="0" v-model="gender">男</xsz-radio>
            </textarea>
          </td>
        </tr>
      </table>


    </div>

    <div class="row">

      <table border="2">
        <caption>Switch 开关</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>
        <tr>
          <td>v-model</td>
          <td>Boolean</td>
          <td>false</td>
          <td>v-model="value"</td>
          <td>
            <xsz-switch v-model="active"></xsz-switch>
          </td>
          <td>支持数据的双向绑定， 该属性是必须的</td>
          <td>
            <textarea readonly readonly>
              <xsz-switch v-model="active"></xsz-switch>
            </textarea>
          </td>
        </tr>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>""</td>
          <td>name="input"</td>
          <td>
            <xsz-switch v-model="active1" name="switch"></xsz-switch>
          </td>
          <td>表单控件的name属性， 用来获取表单元素的值</td>
          <td>
            <textarea readonly>
              <xsz-switch v-model="active1" name="switch"></xsz-switch>
            </textarea>
          </td>
        </tr>
        <tr>
          <td>active-color</td>
          <td>String</td>
          <td>"cornflowerblue"</td>
          <td>active-color="#66bb6a"</td>
          <td>
            <xsz-switch v-model="active2" active-color="#66bb6a"></xsz-switch>
          </td>
          <td>激活时， 开关的背景颜色。可以填入任何表示颜色的合法值</td>
          <td>
            <textarea readonly>
              <xsz-switch v-model="active2" active-color="#66bb6a"></xsz-switch>
            </textarea>
          </td>
        </tr>
        <tr>
          <td>inactive-color</td>
          <td>String</td>
          <td>"rgba(224, 224, 224, 1)"</td>
          <td>inactive-color="#90a4ae"</td>
          <td>
            <xsz-switch v-model="active3" inactive-color="#90a4ae"></xsz-switch>
          </td>
          <td>未激活时， 开关的背景颜色。可以填入任何表示颜色的合法值</td>
          <td>
            <textarea readonly>
              <xsz-switch v-model="active3" inactive-color="#90a4ae"></xsz-switch>
            </textarea>
          </td>
        </tr>
      </table>
    </div>

    <div class="row">

      <table border="2">
        <caption>Input 输入框</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>

        <tr>
          <td>v-model</td>
          <td>variable</td>
          <td>null</td>
          <td>v-model="username"</td>
          <td>
            <xsz-input v-model="username"></xsz-input>
          </td>
          <td>用于双向数据绑定, 该属性是必须的</td>
          <td>
            <textarea readonly>
              <xsz-input v-model="username"></xsz-input>
            </textarea>
          </td>
        </tr>

        <!-- 当类型为number 由于需要传入一个字符串类型， 导致类型错误的bug -->
        <tr>
          <td>type</td>
          <td>String</td>
          <td>text</td>
          <td>type="password"</td>
          <td>
            <xsz-input type="password" v-model="username"></xsz-input>
          </td>
          <td>指定输入框类型， 只能是以文本类型的input， 类似单选框多选框， 请使用form元素</td>
          <td>
            <textarea readonly>
              <xsz-input type="password" v-model="username"></xsz-input>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>""</td>
          <td>placeholder="用户名"</td>
          <td>
            <xsz-input placeholder="用户名" v-model="username"></xsz-input>
          </td>
          <td>提示文本</td>
          <td>
            <textarea readonly>
              <xsz-input placeholder="用户名" v-model="username"></xsz-input>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>iconstart</td>
          <td>String</td>
          <td>""</td>
          <td>iconstart="fa-envelope-o"</td>
          <td>
            <xsz-input iconstart="fa-envelope-o" v-model="username"></xsz-input>
          </td>
          <td>指定开始图标</td>
          <td>
            <textarea readonly>
              <xsz-input iconstart="fa-envelope-o" v-model="username"></xsz-input>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>iconend</td>
          <td>String</td>
          <td>""</td>
          <td>iconend="fa-envelope-o"</td>
          <td>
            <xsz-input iconend="fa-envelope-o" v-model="username"></xsz-input>
          </td>
          <td>指定结束图标</td>
          <td>
            <textarea readonly>
              <xsz-input iconend="fa-envelope-o" v-model="username"></xsz-input>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>clear</td>
          <td>Boolean</td>
          <td>false</td>
          <td>clear</td>
          <td>
            <xsz-input clear v-model="username"></xsz-input>
          </td>
          <td>清除文本icon， 默认不显示，当input框有值时才显示</td>
          <td>
            <textarea readonly>
              <xsz-input clear v-model="username"></xsz-input>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>showpass</td>
          <td>Boolean</td>
          <td>false</td>
          <td>showpass</td>
          <td>
            <xsz-input showpass v-model="username"></xsz-input>
          </td>
          <td>
            一般用于密码框，显示密码。 当存在这个属性时，该文本框自动变为密码框。
            默认不显示， 当有文本时才显示
          </td>
          <td>
            <textarea readonly>
              <xsz-input showpass v-model="username"></xsz-input>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>支持事件</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <xsz-input @focus="" @blur="" @input="" @change=""></xsz-input>
          </td>
          <td>支持focus， blur , change, input事件</td>
          <td>
            <textarea readonly>
              <xsz-input @focus="" @blur="" @input="" @change=""></xsz-input>
            </textarea>
          </td>
        </tr>
      </table>

    </div>

    <div class="row">
      <table border="2">
        <caption>Button 按钮</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>

        <tr>
          <td>type</td>
          <td>String</td>
          <td>info</td>
          <td>
            type="primary"
            <br>
            type="success"
            <br>
            type="info"
            <br>
            type="warning"
            <br>
            type="danger"
          </td>
          <td>
            <xsz-button type="primary">primary</xsz-button>
            <xsz-button type="success">success</xsz-button>
            <xsz-button type="info">info</xsz-button>
            <xsz-button type="warning">warning</xsz-button>
            <xsz-button type="danger">danger</xsz-button>
          </td>
          <td>按钮样式， 主要表现在颜色上</td>
          <td>
            <textarea readonly>
              <xsz-button type="primary">primary</xsz-button>
              <xsz-button type="success">success</xsz-button>
              <xsz-button type="info">info</xsz-button>
              <xsz-button type="warning">warning</xsz-button>
              <xsz-button type="danger">danger</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>plain</td>
          <td>Boolean</td>
          <td>false</td>
          <td>plain</td>
          <td>
            <xsz-button plain>primary</xsz-button>
          </td>
          <td>朴素的按钮， 没有任何过渡效果</td>
          <td>
            <textarea readonly>
             <xsz-button plain>primary</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>around</td>
          <td>Boolean</td>
          <td>false</td>
          <td>around</td>
          <td>
            <xsz-button around>primary</xsz-button>
          </td>
          <td>设置按钮是否圆角</td>
          <td>
            <textarea readonly>
             <xsz-button around>primary</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>circle</td>
          <td>Boolean</td>
          <td>false</td>
          <td>circle</td>
          <td>
            <xsz-button circle>88</xsz-button>
          </td>
          <td>圆形按钮， 中间一般只能放一个字，要不然撑开元素就变成一个椭圆了。还有一般就是配合带有图标使用</td>
          <td>
            <textarea readonly>
             <xsz-button circle>88</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>icon</td>
          <td>String</td>
          <td>""</td>
          <td>icon="fa-calculator"</td>
          <td>
            <xsz-button icon="fa-power-off">带有图标的按钮</xsz-button>
          </td>
          <td>给按钮前面添加一个图标</td>
          <td>
            <textarea readonly>
             <xsz-button icon="fa-power-off">带有图标的按钮</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>disabled</td>
          <td>
            <xsz-button disabled>禁用按钮</xsz-button>
          </td>
          <td>禁用该按钮</td>
          <td>
            <textarea readonly>
             <xsz-button disabled>禁用按钮</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>thin</td>
          <td>Boolean</td>
          <td>false</td>
          <td>thin</td>
          <td>
            <xsz-button thin>超小的按钮</xsz-button>
          </td>
          <td>超小的按钮</td>
          <td>
            <textarea readonly>
             <xsz-button thin>超小的按钮</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>small</td>
          <td>Boolean</td>
          <td>false</td>
          <td>small</td>
          <td>
            <xsz-button small>较小的按钮</xsz-button>
          </td>
          <td>较小的按钮</td>
          <td>
            <textarea readonly>
             <xsz-button small>较小的按钮</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>big</td>
          <td>Boolean</td>
          <td>false</td>
          <td>big</td>
          <td>
            <xsz-button big>较大的按钮</xsz-button>
          </td>
          <td>较大的按钮</td>
          <td>
            <textarea readonly>
             <xsz-button big>较大的按钮</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>huge</td>
          <td>Boolean</td>
          <td>false</td>
          <td>huge</td>
          <td>
            <xsz-button huge>巨大的按钮</xsz-button>
          </td>
          <td>巨大的按钮</td>
          <td>
            <textarea readonly>
             <xsz-button huge>巨大的按钮</xsz-button>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>支持事件</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <xsz-button @click="add">每次加一</xsz-button>
          </td>
          <td>
            打开控制台， 查看数据变化
          </td>
          <td>
            <textarea readonly>
              <xsz-button @click="yourFunc">加1</xsz-button>
            </textarea>
          </td>
        </tr>

      </table>
    </div>

    <div class="row">
      <table border="2">
        <caption>Dialog 模态框</caption>
        <tr>
          <td>参数名</td>
          <td>值类型</td>
          <td>默认值</td>
          <td>举例</td>
          <td>实例</td>
          <td>描述</td>
          <td>代码</td>
        </tr>

        <tr>
          <td>:visible.sync</td>
          <td>Boolean</td>
          <td>无默认值， 该参数是必须的</td>
          <td>:visible.sync="true"</td>
          <td>
            <xsz-button type="primary" @click="fn">单机弹出模态框</xsz-button>
          </td>
          <td>该参数是必须的， 需要绑定一个boolean类型的变量，来动态的控制它的展示和隐藏</td>
          <td>
            <textarea readonly>
              <XszDialog :visible.sync="Booleanvariable"></XszDialog>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>noClose</td>
          <td>Boolean</td>
          <td>true</td>
          <td>noClose</td>
          <td>
            <xsz-button type="primary" @click="fn1">单机弹出模态框</xsz-button>
          </td>
          <td>模态框右上角的叉号❌按钮， 默认存在， 使用该属性，隐藏它</td>
          <td>
            <textarea readonly>
              <XszDialog :visible.sync="Booleanvariable" noClose></XszDialog>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>place</td>
          <td>String</td>
          <td>"top"</td>
          <td>
            place="top"
            <br>
            place="middle"
            <br>
            place="bottom"
          </td>
          <td>
            <xsz-button type="primary" @click="fn2">默认位置弹出模态框</xsz-button>
            <br>
            <xsz-button @click="fn3">中间位置弹出模态框</xsz-button>
            <br>
            <xsz-button type="success" @click="fn4">下边位置弹出模态框</xsz-button>
          </td>
          <td>模态框出现的位置。 上中下三个选项</td>
          <td>
            <textarea readonly>
              <XszDialog :visible.sync="dialog3" place="top"></XszDialog>
              <XszDialog :visible.sync="dialog4" place="middle"></XszDialog>
              <XszDialog :visible.sync="dialog5" place="bottom"></XszDialog>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>width</td>
          <td>String</td>
          <td>"middle"</td>
          <td>
            width="max"
            <br>
            width="normal"
            <br>
            width="min"
          </td>
          <td>
            <xsz-button type="primary" @click="fn5">大模态框</xsz-button>
            <br>
            <xsz-button @click="fn6">标准模态框</xsz-button>
            <br>
            <xsz-button type="success" @click="fn7">小模态框</xsz-button>
          </td>
          <td>
            模态框的大小， 有三个选项
          </td>
          <td>
            <textarea readonly>
              <XszDialog :visible.sync="dialog6" width="max"></XszDialog>
              <XszDialog :visible.sync="dialog7" width="normal"></XszDialog>
              <XszDialog :visible.sync="dialog8" width="min"></XszDialog>
            </textarea>
          </td>
        </tr>

        <tr>
          <td>插槽</td>
          <td></td>
          <td></td>
          <td>
            slot="title"
            <br>
            slot="footer"
            <br>
            slot
          </td>
          <td>
            <xsz-button @click="fn8">具有插槽的模态框</xsz-button>
          </td>
          <td>
            用于自定义模态框内容, 其中有三个插槽， 一个标题插槽，
            一个尾部插槽。还有一个默认插槽
            用于模态框的主题内容
          </td>
          <td>
            <textarea readonly>
              <XszDialog :visible.sync="dialog9">
                <h2 slot="title">这是标题</h2>
                <p>这是内容</p>
                <div slot="footer">
                  <p>这是底部内容</p>
                </div>
              </XszDialog>
            </textarea>
          </td>
        </tr>
      </table>
    </div>

    <XszDialog :visible.sync="dialog1"></XszDialog>
    <XszDialog :visible.sync="dialog2" noClose></XszDialog>
    <XszDialog :visible.sync="dialog3" place="top"></XszDialog>
    <XszDialog :visible.sync="dialog4" place="middle"></XszDialog>
    <XszDialog :visible.sync="dialog5" place="bottom"></XszDialog>
    <XszDialog :visible.sync="dialog6" width="max"></XszDialog>
    <XszDialog :visible.sync="dialog7" width="normal"></XszDialog>
    <XszDialog :visible.sync="dialog8" width="min"></XszDialog>
    <XszDialog :visible.sync="dialog9">
      <h2 slot="title">这是标题</h2>
      <p>这是内容</p>
      <div slot="footer">
        <p>这是底部内容</p>
      </div>
    </XszDialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 模态框需要一个指定数据 visible
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dialog7: false,
        dialog8: false,
        dialog9: false,
        // input框的值
        username: "",
        password: "",
        query: "",
        // switch
        active: true,
        active1: true,
        active2: true,
        active3: true,
        // 按钮的单机事件
        age: 0,
        // radio
        gender: "1",
        // 多选框 同意
        agree: false,
        // 多选框， 水果选择
        fruits: ["苹果"],
        // form表单， 绑定一个对象，收集各个表单元素的值
        model: {
          playerName: "Gluttony",
          playerGender: "1"
        }

      }
    },
    methods: {
      // 以及一个单机事件的方法， 改变visible的值
      fn() {
        this.dialog1 = true
      },
      fn1() {
        this.dialog2 = true
      },
      fn2() {
        this.dialog3 = true
      },
      fn3() {
        this.dialog4 = true
      },
      fn4() {
        this.dialog5 = true
      },
      fn5() {
        this.dialog6 = true
      },
      fn6() {
        this.dialog7 = true
      },
      fn7() {
        this.dialog8 = true
      },
      fn8() {
        this.dialog9 = true
      },
      add() {
        this.age++
        console.log(this.age)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .row {
    margin: 5rem auto;

    table {
      margin: auto;
    }

    td {
      padding: 0.4rem 0.6rem;
      /*text-align: center;*/
      justify-content: center;
      max-width: 300px;
    }

    caption {
      font-size: 1.5rem;
      font-weight: 600;
      color: red;
      margin-bottom: 1rem;
    }

    textarea {
      padding: 0.5rem 1rem;
      color: red;
      min-height: 60px;
      outline: none;
      resize: none;

    }

  }

</style>
