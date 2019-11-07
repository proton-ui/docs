<template>
    <section>
        <p-radio name="newsletter" id="pepperoni" :native-value="true" v-model="newsletter">Yes, sign me up for your newsletter!</p-radio>
        <p-radio name="newsletter" id="mushrooms" :native-value="false" v-model="newsletter">No, I would not like to receive your newsletter.</p-radio>

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
