<template>
    <div
        class="border-l-4 p-4 bg-gray-100 text-gray-800 rounded rounded-l-none"
        :class="{
            'border-green-500': tip,
            'border-orange-500': warning,
            'border-red-500': danger,
        }"
        role="alert"
    >
        <p class="font-bold">{{ label }}</p>
        <p><slot></slot></p>
    </div>
</template>

<script>
    export default {
        props: {
            tip: Boolean,
            warning: Boolean,
            danger: Boolean,
            title: '',
        },

        computed: {
            label() {
                let label = this.title

                if (! label) {
                    if (this.tip) {
                        label = 'Tip'
                    } else if (this.warning) {
                        label = 'Warning'
                    } else if (this.danger) {
                        label = 'Danger'
                    }
                }

                return label
            }
        },
    }
</script>
