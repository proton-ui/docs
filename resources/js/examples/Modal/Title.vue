<template>
    <section>
        <p-button v-modal:with-title>Open modal with title</p-button>

        <p-modal name="with-title" title="Hello World!">
            <div class="text-center">
                <p class="mb-0">This modal contains a title in the header.</p>
            </div>
        </p-modal>
    </section>
</template>
