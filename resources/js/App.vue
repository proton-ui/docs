<template>
    <div>
        <the-navbar></the-navbar>

        <main class="container w-full mx-auto pt-20">
            <div class="w-full flex flex-wrap px-6 md:px-0 md:mt-8 mb-16">
                <the-sidebar :data="menu"></the-sidebar>
                
                <div class="w-full lg:w-4/5">
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
    import menuData from '@/data/menu'

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
