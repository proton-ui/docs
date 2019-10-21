<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Set Active</h2>
        <p>You may assign the default active tab by passing through the <code>active</code> prop.</p>

        <example :component="Active" :code="ActiveCode"></example>
        
        <hr>

        <p class="text-xs">Snippets of story taken from <a href="https://www.theverge.com/2019/1/23/18175285/cadwell-turnbull-sci-fi-story-common-ai-climate-change-better-worlds" target="_blank">Monsters Come Howling in Their Season</a>. A science fiction story about hope surrounding a friendly, open source AI and its aid in disaster.</p>
    </article>
</template>

<script>
    import Simple from '../../examples/Tabs/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Tabs/Simple'
    import Active from '../../examples/Tabs/Active'
    import ActiveCode from '!!raw-loader!../../examples/Tabs/Active'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                Active,
                ActiveCode,
            }
        }
    }
</script>

