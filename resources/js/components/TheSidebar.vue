<template>
    <aside class="sidebar">
        <template v-for="(items, index) in data">
            <p :key="items.category" class="font-semibold uppercase text-gray-500 tracking-wider leading-loose pb-1">
                {{ items.category }}
            </p>

            <ul :key="index" class="leading-loose mb-6">
                <router-link tag="li" v-for="item in normalizedData(items.pages)" :key="item.path" :to="item.path" class="sidebar__item">
                    <a v-if="item.title" class="sidebar__link">
                        <span>{{ item.title }}</span>
                    </a>

                    <template v-else>
                        <p>{{ item.category }}</p>
                        <ul>
                            <li v-for="subItem in normalizedData(item.pages)" :key="subItem.title" class="sidebar__item">
                                <router-link :to="subItem.path" class="sidebar__link">
                                    <span>{{ subItem.title }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </template>
                </router-link>
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
