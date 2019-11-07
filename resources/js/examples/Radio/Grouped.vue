<template>
    <section>
        <p-radio-group label="Select your toppings" help="Choose one or more toppings for your pizza. Pineapple is not an option." class="mb-10">
            <p-radio name="toppings" id="pepperoni" native-value="pepperoni" v-model="toppings">Pepperoni</p-radio>
            <p-radio name="toppings" id="mushrooms" native-value="mushrooms" v-model="toppings">Mushrooms</p-radio>
            <p-radio name="toppings" id="onions" native-value="onions" v-model="toppings">Onions</p-radio>
            <p-radio name="toppings" id="sausage" native-value="sausage" v-model="toppings">Sausage</p-radio>
            <p-radio name="toppings" id="bacon" native-value="bacon" v-model="toppings">Bacon</p-radio>
            <p-radio name="toppings" id="extra-cheese" native-value="extra-cheese" v-model="toppings">Extra Cheese</p-radio>
            <p-radio name="toppings" id="black-olives" native-value="black-olives" v-model="toppings">Black Olives</p-radio>
            <p-radio name="toppings" id="green-peppers" native-value="green-peppers" v-model="toppings">Green Peppers</p-radio>
            <p-radio name="toppings" id="pineapple" native-value="pineapple" v-model="toppings" disabled>Pineapple</p-radio>
            <p-radio name="toppings" id="spinach" native-value="spinach" v-model="toppings">Spinach</p-radio>
        </p-radio-group>

        <p class="mb-2"><strong>Checked:</strong></p>
        <p><code>{{ toppings }}</code></p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                toppings: [],
            }
        }
    }
</script>

