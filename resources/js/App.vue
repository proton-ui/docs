<template>
    <div class="h-full flex">
        <div class="absolute bg-gray-100 hidden lg:block" style="right: 50%; bottom: 0; left: 0; top: 0;"></div>
        <the-navbar></the-navbar>

        <main class="container w-full mx-auto h-full flex" style="padding-top: 60px;">
            <div class="w-full flex flex-wrap flex-1">
                <the-sidebar :data="menu"></the-sidebar>
                
                <div class="z-10 w-full lg:w-4/5 bg-white p-6 lg:border-l border-gray-300">
                    <the-header :title="meta.title"></the-header>

                    <router-view></router-view>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import TheNavbar from './components/TheNavbar'
    import TheHeader from './components/TheHeader'
    import TheSidebar from './components/TheSidebar'
    import menuData from 'resources/data/menu'

    export default {
        data() {
            return {
                menu: [],
                meta: {},
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
            },
        },

        methods: {
            setMeta(meta) {
                this.meta = meta
                this.menu = menuData[this.meta.menu || 'documentation']
            },
        },
    }
</script>
