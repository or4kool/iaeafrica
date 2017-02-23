const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir(mix => {
//     mix.sass('app.scss')
//     .sass('style.scss')
//     .version('css/style.css')
//        .webpack('app.js');
// });

var fontAwesome = './node_modules/font-awesome/css/font-awesome.min.css';
var fontAwesomeFont = 'node_modules/font-awesome/fonts';

elixir(function(mix){

	mix.sass('app.scss');
	mix.sass('style.scss')
		.version('./public/css/all.css')
		.webpack('app.js');

	mix.styles(['./public/css/app.css', './public/css/style.css',fontAwesome]);

	mix.copy(fontAwesomeFont, 'public/build/fonts');

});
