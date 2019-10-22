<template>
    <section>
        <p-button v-modal:directive>Open modal with directive</p-button>

        <p-modal name="directive" no-header>
            <div class="text-center">
                <p class="mb-0">This modal was triggered using Proton's <code>v-modal</code> directive.</p>
            </div>
        </p-modal>
    </section>
</template>
