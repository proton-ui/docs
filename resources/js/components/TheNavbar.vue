<template>
    <div class="bg-white fixed w-full z-20 pin-t border-b border-gray-300">
        <nav class="w-full container mx-auto flex flex-wrap items-center mt-0 py-3 px-6">
            <div class="w-1/2 pl-2 md:pl-0">
                <a href="/" class="text-gray-800 text-2xl no-underline hover:no-underline font-semibold">
                    Proton
                </a>
            </div>

            <div class="w-1/2 pr-0 flex flex-row-reverse lg:hidden">
                <a href="#" v-collapse:mobile-menu><i class="far fa-fw fa-bars text-gray-700"></i></a>
            </div>
            
            <div class="w-1/2 pr-0 hidden lg:block">
                <div class="flex relative inline-block float-right">
                    <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                        <li class="mr-2 my-2 md:my-0">
                            <a href="https://github.com/efellemedia/proton" exact class="text-gray-500 text-sm no-underline hover:no-underline font-bold hover:text-black">
                                <i class="fab fa-github pr-3"></i>
                            </a>
                        </li>

                        <li class="mr-2 my-2 md:my-0">
                            <a href="https://twitter.com/seattlewebsites" exact class="text-gray-500 text-sm no-underline hover:no-underline font-bold hover:text-blue-500">
                                <i class="fab fa-twitter pr-3"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <p-collapse name="mobile-menu">
            <div class="bg-gray-200 text-gray-700 flex lg:hidden">
                <div class="container mx-auto py-3 px-6">
                    <template v-for="(items, index) in data">
                        <p :key="items.category" class="font-semibold uppercase text-gray-500 tracking-wider leading-loose pb-1">
                            {{ items.category }}
                        </p>

                        <ul :key="index" class="leading-loose mb-6">
                            <router-link tag="li" v-for="item in normalizedData(items.pages)" :key="item.path" :to="item.path" class="sidebar__item" v-collapse:mobile-menu>
                                <a v-if="item.title" class="sidebar__link">
                                    <span>{{ item.title }}</span>
                                </a>

                                <template v-else>
                                    <p>{{ item.category }}</p>
                                    <ul>
                                        <li v-for="subItem in normalizedData(item.pages)" :key="subItem.title" class="sidebar__item">
                                            <router-link :to="subItem.path" class="sidebar__link" v-collapse:mobile-menu>
                                                <span>{{ subItem.title }}</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </template>
                            </router-link>
                        </ul>
                    </template>
                </div>
            </div>
        </p-collapse>
    </div>
</template>

<script>
    import routes from 'resources/data/routes'
    
    export default {
        props: {
            breadcrumb: Array,
            title: String,
            subtitle: String,
            data: null,
        },

        data() {
            return {
                routes,
                open: false,
            }
        },

        methods: {
            toggleBars() {
                this.open = !this.open
            },

            normalizedData(items) {
                return items.map((item) => {
                    return typeof item === 'string'
                        ? routes[item]
                        : item
                })
            },
        }
    }
</script>
