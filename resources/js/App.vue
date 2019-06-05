<template>
    <div class="flex flex-1 relative">
        <div class="absolute bg-gray-100" style="right: 50%; bottom: 0; left: 0; top: 0;"></div>
        <the-navbar></the-navbar>

        <main class="container w-full mx-auto flex" style="padding-top: 60px;">
            <div class="w-full flex flex-wrap">
                <the-sidebar :data="menu"></the-sidebar>
                
                <div class="z-10 w-full lg:w-4/5 bg-white p-6 lg:border-l border-gray-300">
                    <the-header :title="meta.title"></the-header>

                    <router-view class="documentation"></router-view>

                    <div class="mt-20 mb-10 flex">
                        <div class="w-1/2">
                            <router-link v-if="prev && typeof prev != 'undefined'" :to="prev.path" class="mr-3 border border-gray-100 rounded p-6 shadow flex flex-row-reverse justify-between items-center text-gray-700 no-underline hover:text-blue-500 hover:border-blue-500">
                                <div class="flex flex-col">
                                    <span class="text-xs text-gray-500">Previous</span>
                                    <span>{{ prev.meta.title }}</span>
                                </div>

                                <i class="far fa-arrow-left text-2xl"></i>
                            </router-link>
                        </div>

                        <div class="w-1/2">
                            <router-link v-if="next && typeof next != 'undefined'" :to="next.path" class="ml-3 border border-gray-100 rounded p-6 shadow flex justify-between items-center text-gray-700 no-underline hover:text-blue-500 hover:border-blue-500">
                                <div class="flex flex-col">
                                    <span class="text-xs text-gray-500">Next</span>
                                    <span>{{ next.meta.title }}</span>
                                </div>

                                <i class="far fa-arrow-right text-2xl"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import _ from 'lodash'
    import TheNavbar from './components/TheNavbar'
    import TheHeader from './components/TheHeader'
    import TheSidebar from './components/TheSidebar'
    import menuData from 'resources/data/menu'

    export default {
        data() {
            return {
                menu: [],
                meta: {},
                prev: undefined,
                next: undefined,
            }
        },

        components: {
            TheNavbar,
            TheHeader,
            TheSidebar,
        },

        watch: {
            '$route' (to, from) {
                this.setMeta(to.meta)
                this.getNextAndPrevPages()
            },
        },

        methods: {
            setMeta(meta) {
                this.meta = meta
                this.menu = menuData[this.meta.menu || 'documentation']
            },

            getNextAndPrevPages() {
                let routes = this.$router.options.routes
                let menu = _.flatten(_.map(this.menu, 'pages'))
                let currentPath = this.$route.path

                let currentIndex = menu.indexOf(currentPath)
                let nextIndex = currentIndex + 1
                let prevIndex = currentIndex - 1

                let nextPath = menu[nextIndex]
                let prevPath = menu[prevIndex]

                this.next = routes[_.findIndex(routes, {path: nextPath})]
                this.prev = routes[_.findIndex(routes, {path: prevPath})]
            }
        },
    }
</script>
