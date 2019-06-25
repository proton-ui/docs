<template>
    <section>
        <p-checkbox-group inline label="Select your toppings" help="Choose one or more toppings for your pizza. Pineapple is not an option." class="mb-10">
            <p-checkbox name="toppings" id="pepperoni" native-value="pepperoni" v-model="toppings">Pepperoni</p-checkbox>
            <p-checkbox name="toppings" id="mushrooms" native-value="mushrooms" v-model="toppings">Mushrooms</p-checkbox>
            <p-checkbox name="toppings" id="onions" native-value="onions" v-model="toppings">Onions</p-checkbox>
            <p-checkbox name="toppings" id="sausage" native-value="sausage" v-model="toppings">Sausage</p-checkbox>
            <p-checkbox name="toppings" id="bacon" native-value="bacon" v-model="toppings">Bacon</p-checkbox>
            <p-checkbox name="toppings" id="extra-cheese" native-value="extra-cheese" v-model="toppings">Extra Cheese</p-checkbox>
            <p-checkbox name="toppings" id="black-olives" native-value="black-olives" v-model="toppings">Black Olives</p-checkbox>
            <p-checkbox name="toppings" id="green-peppers" native-value="green-peppers" v-model="toppings">Green Peppers</p-checkbox>
            <p-checkbox name="toppings" id="pineapple" native-value="pineapple" v-model="toppings" disabled>Pineapple</p-checkbox>
            <p-checkbox name="toppings" id="spinach" native-value="spinach" v-model="toppings">Spinach</p-checkbox>
        </p-checkbox-group>

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

