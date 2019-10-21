<template>
    <div class="code-reference">
        <div v-if="title" class="code-reference--title">{{ title }}</div>

        <figure :class="{
            'highlight': true,
            'highlight--collapsed': ! expanded && ! isExpanded,
            'highlight--expanded': isExpanded || expanded
        }">

            <pre v-highlight><code :class="lang">{{ code }}</code></pre>
            
            <button class="code-reference--show" @click="isExpanded = true" v-if="! isExpanded && ! expanded">
                <i class="far fa-code fa-fw mr-3 text-sm"></i> Show Code
            </button>

            <button class="code-reference--hide" @click="isExpanded = false" v-if="! expanded">
                <i class="far fa-eye-slash fa-fw mr-3 text-sm"></i> Hide Code
            </button>
        </figure>
    </div>
</template>

<script>
    export default {
        name: 'code-reference',

        data() {
            return {
                isExpanded: false,
            }
        },

        props: {
            lang: {
                type: String,
                default: 'html',
            },
            expanded: {
                type: Boolean,
                default: false,
            },
            code: String,
            title: String,
        }
    }
</script>
