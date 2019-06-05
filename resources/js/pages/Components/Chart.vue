<template>
    <article>
        <p>Proton's charts are powered by the <a href="https://frappe.io/charts" target="_blank">Frappe Charts</a> library. Frappe Charts is described as being a GitHub-inspired, simple, and modern SVG chart library with zero dependencies.</p>

        <api-reference :data="[{
            props: [
                {
                    name: '<code>name</code>',
                    description: 'Required. Unique name value that is used to generate the wrapping elements div ID.',
                    type: '<code>String</code>',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>title</code>',
                    type: '<code>String</code>',
                    description: 'Add a title to the Chart.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>type</code>',
                    type: '<code>String</code>',
                    description: 'Let the chart know what type to render.',
                    values: 'line, bar, axis-mixed, pie, percentage, heatmap',
                    default: 'bar',
                },

                {
                    name: '<code>height</code>',
                    type: '<code>Number</code>',
                    description: 'Set the height of the chart in pixels.',
                    values: '',
                    default: '300',
                },

                {
                    name: '<code>colors</code>',
                    type: '<code>Array</code>',
                    description: 'Set the colors to be used for each individual unit type, depending on the chart type.',
                    values: '',
                    default: 'purple, #ffa3ef, light-blue',
                },

                {
                    name: '<code>dataSets</code>',
                    type: '<code>Array</code>',
                    description: 'An array of your dataset values you wish to display within your chart.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>labels</code>',
                    type: '<code>Array</code>',
                    description: 'An array of labels used to label your dataset.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>dataPoints</code>',
                    type: '<code>Object</code>',
                    description: 'An object of your datapoint values you wish to display within heatmap-type charts.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>startDate</code>',
                    type: '<code>Date</code>',
                    description: 'JavaScript date object for when heatmap chart types should start.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>endDate</code>',
                    type: '<code>Date</code>',
                    description: 'JavaScript date object for when heatmap chart types should end.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>countLabel</code>',
                    type: '<code>String</code>',
                    description: 'Count label used in heatmap chart types.',
                    values: '',
                    default: 'Count',
                },

                {
                    name: '<code>discreteDomains</code>',
                    type: '<code>Boolean</code>',
                    description: 'Allow for a continous distribution of heat squares (as on GitHub), rather than showing the month-wise separation.',
                    values: 'true, false',
                    default: 'false',
                },

                {
                    name: '<code>yMarkers</code>',
                    type: '<code>Array</code>',
                    description: 'Highlight certain values on the Y axis, shown as dashed lines on the graph.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>yRegions</code>',
                    type: '<code>Array</code>',
                    description: '2D counterparts to markers with start and end values, shown as a greyed-out area between the extremes.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>axisOptions</code>',
                    type: '<code>Object</code>',
                    description: 'Customize axis options.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>lineOptions</code>',
                    type: '<code>Object</code>',
                    description: 'Can be used to set various properties on line plots, turn them into Area Charts and so on.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>tooltipOptions</code>',
                    type: '<code>Object</code>',
                    description: 'Customize the format of the label and value displayed in tooltips.',
                    values: '',
                    default: '',
                },

                {
                    name: '<code>valuesOverPoints</code>',
                    type: '<code>Boolean</code>',
                    description: 'Display data values over bars or dots in an axis graph.',
                    values: 'true, false',
                    default: 'false',
                },

                {
                    name: '<code>maxLegendPoints</code>',
                    type: '<code>Number</code>',
                    description: 'Set the maximum number of legend points.',
                    values: '',
                    default: '20',
                },

                {
                    name: '<code>maxSlices</code>',
                    type: '<code>Number</code>',
                    description: 'Set the maximum number of slices shown in pie charts.',
                    values: '',
                    default: '20',
                },

                {
                    name: '<code>isNavigable</code>',
                    type: '<code>Boolean</code>',
                    description: 'Makes the chart interactive with arrow keys and highlights the current active data point.',
                    values: 'true, false',
                    default: 'false',
                },
            ],
        }]">

        </api-reference>
    </article>
</template>

<script>
    // import Simple from '../../examples/Card/Simple'
    // import SimpleCode from '!!raw-loader!../../examples/Card/Simple'
    // import Theme from '../../examples/Card/Theme'
    // import ThemeCode from '!!raw-loader!../../examples/Card/Theme'

    export default {
        data() {
            return {
                // Simple,
                // SimpleCode,
                // Theme,
                // ThemeCode,
            }
        }
    }
</script>

