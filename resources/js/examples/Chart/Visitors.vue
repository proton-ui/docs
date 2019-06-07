<template>
    <section>
        <div class="card">
            <div class="card__body">
                <h2>Visitors</h2>
            </div>

            <p-chart
                name="stats-visitors"
                :labels="[
                    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                ]"
                type="axis-mixed"
                :height="350"
                :colors="['#4DD0E1', '#FF5722']"
                :line-options="{
                    dotSize: 6,
                    hideLine: 0,
                    hideDots: 0,
                    heatline: 0,
                    regionFill: 1
                }"
                :y-markers="[
                    {
                        label: 'Top Visitors Last Week',
                        value: 47,
                        options: { labelPos: 'left' }
                    }
                ]"
                :data-sets="[
                    {
                        name: 'Last Week',
                        chartType: 'line',
                        values: [12, 14, 11, 24, 19, 32, 47]
                    },
                    {
                        name: 'This Week',
                        chartType: 'line',
                        values: [58, 110, 76, 240, 100, 180, 220]
                    },
                ]">
            </p-chart>
        </div>
    </section>
</template>
