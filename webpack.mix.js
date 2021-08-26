const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .postCss('resources/css/base_web.css', 'public/dist/css').version()

mix.copyDirectory('resources/web/css/main', 'public/dist/css')
mix.copyDirectory('resources/web/icons', 'public/dist/icons')
mix.copyDirectory('resources/web/fonts', 'public/dist/fonts')
mix.copyDirectory('resources/web/js', 'public/dist/js')
mix.copyDirectory('resources/web/images', 'public/dist/images');

if (mix.inProduction()) {
    mix.version();
}