<template>
    <div class="input" :class="{wrapper_border: on_height_light,disable: disabled}">
        <div class="icon-start" v-if="iconstart">
            <i class="fa" :class="iconstart" aria-hidden="true"></i>
        </div>


        <!---->

        <input :type="showpass ? (passwordVisible ? 'text' : 'password') : type"
               :placeholder="placeholder"
               :style="{gridColumn: `${width_start}/3`}"
               :class="{disable: disabled, height_light: passwordVisible}"
               @focus="input_focus();to_focus()"
               @blur="input_focus();to_blur()"
               @change="to_change()"
               @input="handle_input"
               :value="value"
               :name="name"
               :disabled="disabled"/>


        <div class="showpass"
             v-if="showpass && value"
             @click="showPassword">
            <i class="fa" :class="[current_eye]" aria-hidden="true"></i>
        </div>

        <div class="clear"
             @click="handle_clear"
             v-if="clear && value">
            <i class="fa fa-times-circle-o" aria-hidden="true"></i>
        </div>

        <div class="icon-end" v-if="iconend">
            <i class="fa" :class="iconend" aria-hidden="true"></i>
        </div>
    </div>

</template>

<script>
    export default {
        name: "XszInput",
        props: {
            type: {
                type: String,
                default: "text"
            },
            placeholder: {
                type: String,
                default: ""
            },
            iconend: {
                type: String,
                default: ""
            },
            iconstart: {
                type: String,
                default: ""
            },
            clear: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                default: ""
            },
            // 是否明文显示密码
            showpass: {
                type: Boolean,
                default: false
            },
            // 禁用
            disabled: {
                type: Boolean,
                default: false
            },
            // 接收用于双向绑定数据的值, 且无需进行校验
            value: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                on_height_light: false,
                current_eye: "fa-eye",
                passwordVisible: false
            }
        },
        computed: {
            width_start() {
                return this.iconstart ? 2 : 1
            }
        },
        methods: {
            input_focus() {
                this.on_height_light = !this.on_height_light
            },
            to_focus(e) {
                this.$emit("focus", e)
            },
            to_blur(e) {
                this.$emit("blur", e)
            },
            to_change(e) {
                this.$emit("change", e)
            },
            showPassword() {
                this.passwordVisible = !this.passwordVisible;
                this.current_eye = this.current_eye === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash"
            },
            handle_input(e) {
                this.$emit("input", e.target.value)
            },
            handle_clear() {
                this.$emit("input", "")
            }
        },
        created() {

        }
    }
</script>

<style lang="css" scoped>

    .input {
        display: grid;
        grid-template-columns: 3rem 1fr;
        grid-template-rows: 2rem;
        grid-auto-columns: 3rem;
        border: 1px solid rgba(97, 97, 97, 1);
        color: rgba(97, 97, 97, 1);
        border-radius: 0.3rem;
        padding: 0.1rem;
        transition: 0.2s;
    }

    .input input {
        grid-row: 1/2;
        outline: none;
        border: none;
        border-radius: 0.3rem;
        padding: 0.3rem 0.3rem 0.1rem;
        vertical-align: bottom;
    }

    .icon-start {
        grid-column: 1/2;
        grid-row: 1/2;
        place-self: center;
    }

    .icon-end {
        grid-row: 1/2;
        place-self: center;
    }

    .clear {
        grid-row: 1/2;
        place-self: center;
        cursor: pointer;
        justify-items: end;
    }

    .clear:hover {
        color: #d40000;
        transition: 0.2s;
    }

    .showpass {
        grid-row: 1/2;
        place-self: center;
        cursor: pointer;
        justify-items: end;
    }

    .showpass:hover {
        color: rgba(82, 181, 86, 1);
        transition: 0.2s;
    }

    .height_light {
        color: #d40000;
        transition: 0.5s;
    }

    .wrapper_border {
        border: 1px solid rgba(33, 150, 243, 1);
        color: rgba(33, 150, 243, 1);
        transition: 0.3s;
    }

    /* 禁用样式 */
    .disable {
        filter: grayscale(80%);
        cursor: not-allowed;
    }

</style>