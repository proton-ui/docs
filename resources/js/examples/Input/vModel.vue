<template>
    <section>
        <p-input name="full_name" label="Full Name" help="Please put in your full name." v-model="fullName" class="mb-10"></p-input>

        <p class="mb-2"><strong>Value:</strong></p>
        <p><code>{{ fullName }}</code></p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                fullName: '',
            }
        }
    }
</script>

