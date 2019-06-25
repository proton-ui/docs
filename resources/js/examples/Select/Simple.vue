<template>
    <section>
        <p-select name="color" v-model="color" placeholder="Please choose a color..." :options="[
            'Red',
            'Yellow',
            'Green',
            'Blue',
            'Purple',
            'Black',
            'White'
        ]">
        </p-select>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                color: '',
            }
        }
    }
</script>
