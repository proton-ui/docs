<template>
    <article>
        <h2>Example</h2>

        <example>
            <p-button>Default</p-button>
            <p-button theme="primary">Primary</p-button>
            <p-button theme="secondary">Secondary</p-button>
            <p-button theme="success">Success</p-button>
            <p-button theme="danger">Danger</p-button>
            <p-button theme="warning">Warning</p-button>
            <p-button theme="info">Info</p-button>

            <template slot="code">
                <textarea class="w-full h-auto font-mono bg-gray-100" readonly v-pre>
                    <p-button>Default</p-button>
                    <p-button theme="primary">Primary</p-button>
                    <p-button theme="secondary">Secondary</p-button>
                    <p-button theme="success">Success</p-button>
                    <p-button theme="danger">Danger</p-button>
                    <p-button theme="warning">Warning</p-button>
                    <p-button theme="info">Info</p-button>
                </textarea>
            </template>
        </example>

        <h2>Size</h2>
        <p>Define the size of the button with the <code>size</code> property.</p>

        <example>
            <p-button size="large">Large Button</p-button>
            <p-button size="large" theme="secondary">Large Button</p-button>
        </example>

        <example>
            <p-button size="small">Small Button</p-button>
            <p-button size="small" theme="secondary">Small Button</p-button>
        </example>

        <h2>Props</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Options</th>
                    <th>Default</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><code>size</code></td>
                    <td><code>String</code></td>
                    <td>Define the size of the button.</td>
                    <td>normal, small, large</td>
                    <td>normal</td>
                </tr>

                <tr>
                    <td><code>theme</code></td>
                    <td><code>String</code></td>
                    <td>Define the theme of the button.</td>
                    <td>default, primary, secondary, info, success, warning, danger, dark</td>
                    <td>default</td>
                </tr>

                <tr>
                    <td><code>disabled</code></td>
                    <td><code>Boolean</code></td>
                    <td>If the button should be disabled or not.</td>
                    <td>true, false</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>

        <h2>Slots</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><code>default</code></td>
                    <td>Main text of the button.</td>
                </tr>
            </tbody>
        </table>
    </article>
</template>
