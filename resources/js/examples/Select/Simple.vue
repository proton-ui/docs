<template>
    <section>
        <p-select name="color" v-model="color" placeholder="Please choose a color..." :options="options">
        </p-select>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                color: '',
                options: [
                    'Red',
                    'Yellow',
                    'Green',
                    'Blue',
                    'Purple',
                    'Black',
                    'White'
                ],
            }
        }
    }
</script>