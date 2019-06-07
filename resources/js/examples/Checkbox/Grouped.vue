<template>
    <section>
        <p-checkbox-group label="Select your colors" help="Choose one or more options for your item." class="mb-10">
            <p-checkbox name="colors" id="red" native-value="red" v-model="colors">Red</p-checkbox>
            <p-checkbox name="colors" id="green" native-value="green" v-model="colors">Green</p-checkbox>
            <p-checkbox name="colors" id="blue" native-value="blue" v-model="colors">Blue</p-checkbox>
        </p-checkbox-group>

        <p class="mb-2"><strong>Checked:</strong></p>
        <p><code>{{ colors }}</code></p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                colors: [],
            }
        }
    }
</script>

