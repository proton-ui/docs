<template>
    <article>
        <h2>Local Development</h2>
        <p>After cloning Proton locally to your machine, run <code>yarn</code> to install the necessary dependencies, and then <code>yarn watch</code> to compile and watch assets for changes.</p>

        <code-reference lang="bash" code="yarn && yarn watch" expanded></code-reference>

        <h3>Linking</h3>
        <p>To easily test and use the package locally, make use of Yarn's <a href="https://yarnpkg.com/lang/en/docs/cli/link/" target="_blank">link</a> command. Package linking is a two-step process.</p>

        <ol>
            <li><code>yarn link</code> at the root of your Proton directory. This will create a symlink in your global Yarn directory.</li>
            <li>In your project where you are making use of Proton, <code>yarn link @proton-ui/proton</code> will create the symbolic link from the global Yarn directory to your project.</li>
        </ol>

        <h2>Documentation</h2>
        <p>Documentation is hosted in a separate repository.</p>
    </article>
</template>
