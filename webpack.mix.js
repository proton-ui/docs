const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('public')
    .js('resources/js/index.js', 'js/docs.js')
    .sass('resources/sass/docs.scss', 'css/docs.css')
    .webpackConfig({
        resolve: {
            alias: {
                'resources': __dirname + '/resources',
            },
        },
        output: {
            chunkFilename: "js/chunks/[id].chunk.[chunkhash].js",
        },
    })
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })