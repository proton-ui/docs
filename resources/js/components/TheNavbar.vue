<template>
    <div class="bg-white fixed w-full z-10 pin-t border-b border-gray-200">
        <nav class="w-full container mx-auto flex flex-wrap items-center mt-0 py-3 px-6">
            <div class="w-1/2 pl-2 md:pl-0">
                <a href="/" class="text-gray-800 text-base xl:text-xl no-underline hover:no-underline font-semibold">
                    Proton
                </a>
            </div>
            
            <div class="w-1/2 pr-0">
                <div class="flex relative inline-block float-right">
                    <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                        <li class="mr-6 my-2 md:my-0">
                            <a href="https://github.com/efellemedia/proton" exact class="text-gray-500 text-sm no-underline hover:no-underline font-bold">
                                <i class="fab fa-github pr-3"></i>
                                GitHub
                            </a>
                        </li>

                        <li class="mr-6 my-2 md:my-0">
                            <a href="https://twitter.com/seattlewebsites" exact class="text-gray-500 text-sm no-underline hover:no-underline font-bold">
                                <i class="fab fa-twitter pr-3"></i>
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import routes from '@/data/routes'
    
    export default {
        props: {
            breadcrumb: Array,
            title: String,
            subtitle: String,
        },

        data() {
            return {
                routes
            }
        }
    }
</script>
