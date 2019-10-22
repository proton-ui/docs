<template>
    <section>
        <p-button v-modal:no-header>Open modal with no header</p-button>

        <p-modal name="no-header" no-header>
            <div class="text-center">
                <p class="mb-0">This modal contains no header.</p>
            </div>
        </p-modal>
    </section>
</template>
