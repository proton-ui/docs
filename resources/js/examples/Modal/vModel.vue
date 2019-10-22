<template>
    <section>
        <p-button @click.prevent="active = true">Open modal using two-way binding</p-button>

        <p-modal name="two-way-binding" no-header v-model="active">
            <div class="text-center">
                <p class="mb-0">This modal was triggered using Vue.js' <code>v-model</code> directive.</p>
            </div>
        </p-modal>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                active: false,
            }
        }
    }
</script>