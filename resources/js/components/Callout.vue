<template>
    <div
        class="border-l-4 p-4"
        :class="{
            'bg-green-100 border-green-500 text-green-700': tip,
            'bg-orange-100 border-orange-500 text-orange-700': warning,
            'bg-red-100 border-red-500 text-red-700': danger,
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
