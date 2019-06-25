<template>
    <section>
        <p-checkbox name="newsletter" id="newsletter" v-model="newsletter" class="mb-10">Sign up for newsletter</p-checkbox>

        <p class="mb-2 mt-10"><strong>Checked:</strong></p>
        <p><code>{{ newsletter }}</code></p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                newsletter: false,
            }
        }
    }
</script>
