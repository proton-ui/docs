<template>
    <aside class="w-full lg:w-1/5 hidden lg:block text-sm p-6 z-10">
        <template v-for="(items, index) in data">
            <p :key="items.category" class="font-semibold uppercase text-gray-500 tracking-wider leading-loose pb-1">
                {{ items.category }}
            </p>

            <ul :key="index" class="leading-loose mb-6">
                <li v-for="item in normalizedData(items.pages)" :key="item.path" class="pb-1">
                    <router-link v-if="item.title" :to="item.path">
                        <span>{{ item.title }}</span>
                    </router-link>

                    <template v-else>
                        <p>{{ item.category }}</p>
                        <ul>
                            <li v-for="subItem in normalizedData(item.pages)" :key="subItem.title">
                                <router-link :to="subItem.path">
                                    <span>{{ subItem.title }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </template>
                </li>
            </ul>
        </template>
    </aside>
</template>

<script>
    import routes from 'resources/data/routes'

    export default {
        props: ['data'],

        methods: {
            normalizedData(items) {
                return items.map((item) => {
                    return typeof item === 'string'
                        ? routes[item]
                        : item
                })
            },
        },
    }
</script>
