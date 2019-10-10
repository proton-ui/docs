<template>
    <section>
        <p-button to="/documentation/components/button#to">Router Link String</p-button>
        <p-button :to="{ name: '/documentation/components/button', hash: '#to' }">Router Link Object</p-button>
    </section>
</template>