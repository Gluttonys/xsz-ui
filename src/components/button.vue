<template>
    <!-- 前面是样式名，后面是父组件传来的值 -->
    <button class="xsz_button"
            @click="handle"
            :class="[{plain: plain,
                      around: around,
                      circle: circle,
                      disabled: disabled,
                      thin: thin,
                      small: small,
                      big: big,
                      huge:huge}, type]"
            :disabled="disabled">
        <i v-if="icon" :class="icon" class="icon fa" aria-hidden="true"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>

</template>

<script>
    export default {
        name: "XszButton",
        props: {
            // 父组件的参数名
            type: {
                type: String,
                default: "info"
            },
            around: {
                type: Boolean,
                default: false
            },
            plain: {
                type: Boolean,
                default: false
            },
            circle: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            thin: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false
            },
            big: {
                type: Boolean,
                default: false
            },
            huge: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ""
            }
        },
        methods: {
            handle(e) {
                // 向父组件发射事件
                this.$emit("click", e)
            }
        }
    }
</script>

<style lang="css" scoped>

    .xsz_button {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        display: inline-block;
        cursor: pointer;
        outline: none;
        padding: 0.5rem 0.65rem;
        font-family: "youyuan", "Microsoft YaHei UI", sans-serif;
        border-radius: 0.2rem;
        border: 1px solid transparent;
        transition: 0.3s;
    }

    .xsz_button:hover {
        transition: 0.3s;
    }

    /* 是否圆角 */
    .around {
        border-radius: 1rem;
    }

    /* 是否内部无背景 */
    .plain {
        background: none !important;
    }

    /* 圆形 */
    .circle {
        border-radius: 50%;
    }

    /* 禁用 */
    .disabled {
        filter: grayscale(70%);
        cursor: not-allowed;
    }

    /* 超级小 */
    .thin {
        font-size: 0.5rem;
        padding: 0.3rem 0.5rem;
    }

    /* 较小 */
    .small {
        font-size: 0.75rem;
        padding: 0.4rem 0.55rem;
    }

    /* 较大 */
    .big {
        font-size: 1.25rem;
        padding: 0.5rem 0.7rem;
    }

    /* 超大 */
    .huge {
        font-size: 1.45rem;
        padding: 0.6rem 0.8rem;
    }

    /* 图标 */
    .icon + span {
        margin-left: 0.5rem;
    }


    .disabled.info:hover,
    .plain.info:hover {
        background: rgb(228, 228, 228);
        border: 1px solid rgb(228, 228, 228);
        color: rgba(33, 33, 33, 1);
    }

    .disabled.primary:hover,
    .plain.primary:hover {
        background: rgba(144, 202, 249, 1);
        color: rgba(26, 35, 126, 1);
        border: 1px solid rgba(144, 202, 249, 1);
    }

    .disabled.success:hover,
    .plain.success:hover {
        background: rgba(220, 237, 200, 1);
        color: rgba(0, 77, 64, 1);
        border: 1px solid rgba(220, 237, 200, 1);
    }

    .disabled.warning:hover,
    .plain.warning:hover {
        background: rgba(255, 213, 79, 1);
        color: rgba(245, 127, 23, 1);
        border: 1px solid rgba(255, 213, 79, 1);
    }

    .disabled.danger:hover,
    .plain.danger:hover {
        background: rgba(255, 204, 188, 1);
        color: rgba(183, 28, 28, 1);
        border: 1px solid rgba(255, 204, 188, 1);
    }

    /*=================================*/
    .info {
        background: rgb(228, 228, 228);
        border: 1px solid rgb(228, 228, 228);
        color: rgba(33, 33, 33, 1);
    }

    .info:hover {
        background: rgba(33, 33, 33, 1);
        border: 1px solid rgba(33, 33, 33, 1);
        color: rgba(189, 189, 189, 1);
    }

    .primary {
        background: rgba(144, 202, 249, 1);
        color: rgba(26, 35, 126, 1);
        border: 1px solid rgba(144, 202, 249, 1);
    }

    .primary:hover {
        background: rgba(26, 35, 126, 1);
        color: rgba(144, 202, 249, 1);
        border: 1px solid rgba(26, 35, 126, 1);
    }

    .success {
        background: rgba(220, 237, 200, 1);
        color: rgba(0, 77, 64, 1);
        border: 1px solid rgba(220, 237, 200, 1);
    }

    .success:hover {
        background: rgba(0, 77, 64, 1);
        color: rgba(76, 175, 80, 1);
        border: 1px solid rgba(0, 77, 64, 1);
    }

    .warning {
        background: rgba(255, 213, 79, 1);
        color: rgba(245, 127, 23, 1);
        border: 1px solid rgba(255, 213, 79, 1);
    }

    .warning:hover {
        background: rgba(245, 127, 23, 1);
        color: rgba(255, 213, 79, 1);
        border: 1px solid rgba(245, 127, 23, 1);
    }

    .danger {
        background: rgba(255, 204, 188, 1);
        color: rgba(183, 28, 28, 1);
        border: 1px solid rgba(255, 204, 188, 1);
    }

    .danger:hover {
        background: rgba(183, 28, 28, 1);
        color: rgba(255, 204, 188, 1);
        border: 1px solid rgba(183, 28, 28, 1);
    }

</style>