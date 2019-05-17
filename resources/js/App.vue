<template>
    <div>
        <the-navbar></the-navbar>

        <main class="container w-full mx-auto pt-20">
            <div class="w-full flex flex-wrap px-6 md:px-0 md:mt-8 mb-16">
                <the-sidebar :data="menu"></the-sidebar>
                
                <div class="w-full lg:w-4/5">
                    <the-header v-bind="meta"></the-header>

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

        methods: {
            setMeta(meta) {
                this.meta = meta
                this.menu = menuData[this.meta.menu || 'documentation']
            },
        },

        mounted() {
            this.setMeta(this.$router.currentRoute.meta)
        }
    }
</script>

<style>
    article > p {
        line-height: 2;
    }
</style>
