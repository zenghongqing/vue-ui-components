<template>
    <button :class="classes" :disabled="disabled">
        <span><slot></slot></span>
    </button>
</template>
<script>
export default {
    name: 'RButton',
    props: {
        size: {
            type: [Number, String],
            default: 'default'
        },
        type: {
            type: [Number, String],
            default: 'default'
        },
        disabled: {
            type: Boolean
        },
        loading: {
            type: Boolean
        }
    },
    computed: {
        classes () {
            return [
                'rcs-btn',
                'rcs-btn--' + this.type,
                'rcs-btn--size-' + this.size,
                {
                    'is-plain': this.plain || this.type === 'default',
                    'is-disabled': this.disabled || this.loading
                }
            ]
        }
    }
}
</script>
