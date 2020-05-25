<template>
    <div id="app">
        <div class="row">

            <!-- 可以指定 type 默认为 text -->
            <!--<xsz-input type="number"></xsz-input>-->
            <!-- 可以指定 placeholder -->
            <!--<xsz-input placeholder="提示信息"></xsz-input>-->
            <!-- 可以指定开始结束图标 -->
            <!--<xsz-input iconstart="fa-envelope-o" iconend="fa-envelope-o"></xsz-input>-->
            <!-- iconstart="fa-envelope-o" -->
            <!-- iconend="fa-envelope-o" -->
            <!-- 清空文本框按钮 -->
            <!-- <xsz-input clear> -->
            <!-- 支持name属性 -->
            <!-- <xsz-input name="title"> -->
            <!-- 支持focus， blur , change, input事件 -->
            <!-- <xsz-input @focus="" @blur="" @input="" @change=""> -->
            <!-- 小眼睛 用于明文框和密码框之间的转换 -->
            <!-- <xsz-input showpass> -->
            <!-- 禁用 -->
            <!-- <xsz-input disabled> -->

            <xsz-input v-model="username" placeholder="没什么样式的输入框"></xsz-input>

            <xsz-input type="password" v-model="username" showpass placeholder="带有查看明文的输入框">
            </xsz-input>

            <xsz-input v-model="password" clear placeholder="带有清除按钮的输入框">
            </xsz-input>


            <xsz-input v-model="password" clear showpass placeholder="带有清除按钮的输入框">
            </xsz-input>

            <xsz-input v-model="password" clear showpass iconend="fa-user" placeholder="带有结束icon的输入框">
            </xsz-input>

            <xsz-input v-model="password" clear showpass iconstart="fa-key" iconend="fa-user"
                       placeholder="带有开始icon的输入框">
            </xsz-input>

            <xsz-input v-model="query" disabled clear showpass iconstart="fa-key" iconend="fa-user"
                       placeholder="禁用的输入框">
            </xsz-input>

        </div>

        <div class="row">
            <p>标准</p>
            <xsz-button type="primary">标准</xsz-button>
            <xsz-button type="success">成功</xsz-button>
            <xsz-button type="info">信息</xsz-button>
            <xsz-button type="warning">警告</xsz-button>
            <xsz-button type="danger">危险</xsz-button>
        </div>

        <div class="row">
            <p>事件。</p>
            <xsz-button type="primary" @click="fn">弹出模态框</xsz-button>
            <xsz-button type="success" @click="fn">弹出模态框</xsz-button>
            <xsz-button type="info" @click="fn">弹出模态框</xsz-button>
            <xsz-button type="warning" @click="fn">弹出模态框</xsz-button>
            <xsz-button type="danger" @click="fn">弹出模态框</xsz-button>
        </div>

        <div class="row">
            <p>朴素</p>
            <xsz-button type="primary" plain>标准</xsz-button>
            <xsz-button type="success" plain>成功</xsz-button>
            <xsz-button type="info" plain>信息</xsz-button>
            <xsz-button type="warning" plain>警告</xsz-button>
            <xsz-button type="danger" plain>危险</xsz-button>
        </div>

        <div class="row">
            <p>圆角</p>
            <xsz-button type="primary" around>标准</xsz-button>
            <xsz-button type="success" around>成功</xsz-button>
            <xsz-button type="info" around>信息</xsz-button>
            <xsz-button type="warning" around>警告</xsz-button>
            <xsz-button type="danger" around>危险</xsz-button>
        </div>

        <div class="row">
            <p>圆形</p>
            <xsz-button icon="fa-calculator" type="primary" circle></xsz-button>
            <xsz-button icon="fa-power-off" type="success" circle></xsz-button>
            <xsz-button icon="fa-briefcase" type="info" circle></xsz-button>
            <xsz-button icon="fa-cubes" type="warning" circle></xsz-button>
            <xsz-button icon="fa-hourglass-start" type="danger" circle></xsz-button>
        </div>

        <div class="row">
            <p>图标</p>
            <xsz-button icon="fa-binoculars" type="primary icon=">标准</xsz-button>
            <xsz-button icon="fa-binoculars" type="success">成功</xsz-button>
            <xsz-button icon="fa-binoculars" type="info">信息</xsz-button>
            <xsz-button icon="fa-binoculars" type="warning">警告</xsz-button>
            <xsz-button icon="fa-binoculars" type="danger">危险</xsz-button>
        </div>

        <div class="row">
            <p>禁用</p>
            <xsz-button disabled type="primary">标准</xsz-button>
            <xsz-button disabled type="success">成功</xsz-button>
            <xsz-button disabled type="info">信息</xsz-button>
            <xsz-button disabled type="warning">警告</xsz-button>
            <xsz-button disabled type="danger">危险</xsz-button>
        </div>

        <div class="row">
            <p>超小按钮</p>
            <xsz-button thin type="primary">标准</xsz-button>
            <xsz-button thin type="success">成功</xsz-button>
            <xsz-button thin type="info">信息</xsz-button>
            <xsz-button thin type="warning">警告</xsz-button>
            <xsz-button thin type="danger">危险</xsz-button>
        </div>

        <div class="row">
            <p>较小按钮</p>
            <xsz-button small type="primary">标准</xsz-button>
            <xsz-button small type="success">成功</xsz-button>
            <xsz-button small type="info">信息</xsz-button>
            <xsz-button small type="warning">警告</xsz-button>
            <xsz-button small type="danger">危险</xsz-button>
        </div>

        <div class="row">
            <p>默认大小</p>
            <xsz-button type="primary">标准</xsz-button>
            <xsz-button type="success">成功</xsz-button>
            <xsz-button type="info">信息</xsz-button>
            <xsz-button type="warning">警告</xsz-button>
            <xsz-button type="danger">危险</xsz-button>
        </div>

        <div class="row">
            <p>较大按钮</p>
            <xsz-button big type="primary">标准</xsz-button>
            <xsz-button big type="success">成功</xsz-button>
            <xsz-button big type="info">信息</xsz-button>
            <xsz-button big type="warning">警告</xsz-button>
            <xsz-button big type="danger">危险</xsz-button>
        </div>

        <div class="row">
            <p>超大按钮</p>
            <xsz-button huge type="primary">标准</xsz-button>
            <xsz-button huge type="success">成功</xsz-button>
            <xsz-button huge type="info">信息</xsz-button>
            <xsz-button huge type="warning">警告</xsz-button>
            <xsz-button huge type="danger">危险</xsz-button>
        </div>

        <!--===================================================-->

        <!-- noClose 去掉关闭按钮 -->
        <!--<xsz-dialog head="这里是自定义标题" noClose>-->
        <!--<xsz-dialog head="这里是自定义标题">-->
        <!--<xsz-dialog place="top | middle | bottom">-->
        <!--<xsz-dialog width="max | normal | min">-->
        <xsz-dialog :visible.sync="visible" place="middle" width="max">

            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam aut deleniti
                    dolore labore minima, nemo non nostrum nulla odio quidem reprehenderit similique suscipit
                    voluptatem! Commodi culpa illum quia.
                </p>
            </div>

        </xsz-dialog>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 模态框需要一个指定数据 visible
                visible: false,
                // input框的值
                username: "",
                password: "",
                query:""
            }
        },
        methods: {
            // 以及一个单机事件的方法， 改变visible的值
            fn() {
                this.visible = true
            },

        }
    }
</script>

<style lang="scss" scoped>
    .row {
        margin: 0.5rem;

        .input {
            width: 400px;
            transition: 0.2s;
            margin-bottom: 1rem;
        }

        .xsz_button {
            margin-right: 2rem;
        }
    }

</style>
