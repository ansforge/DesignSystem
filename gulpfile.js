// https://github.com/thecodercoder/frontend-boilerplate
/*
|--------------------------------------------------------------------------
| DEPENDENCIES
|--------------------------------------------------------------------------
*/
// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const
    // Gulp utilisation
    gulp = require('gulp'),
    // Combine gulp with sass utilisation
    sass = require('gulp-sass'),
    // Combine multiples plugins
    postcss = require('gulp-postcss'),
    // Parser for scss
    //   scss = require('postcss-scss'),
    // Autoprefix css properties
    autoprefixer = require('autoprefixer'),
    // Clean and minify CSS files
    cssnano = require('cssnano'),
    // Clean and concat JS files
    concat = require('gulp-concat'),
    // Minify JS files
    uglify = require('gulp-uglify'),
    // Generate sourcemaps
    sourcemaps = require('gulp-sourcemaps'),
    // Twig
    twig = require('gulp-twig'),
    // Merge : Permet de faire plusieurs src en une task
    merge = require('merge-stream'),
    // Delete generated files
    del = require('del'),
    // SVG sprite
    svgSprite = require('gulp-svg-sprite'),
    // Gestion Error
    plumber = require('gulp-plumber'),
    // ZIP
    zip = require('gulp-zip'),
    // filesize
    size = require('gulp-filesize');

/*
|--------------------------------------------------------------------------
| CONFIGURATION
|--------------------------------------------------------------------------
*/
const target = {
    'src': './src/',
    'buildFolder': './__public/',
    'buildSite': './__public/site/',
    'buildStyleguide': './docs/',
    'devFolder': './../'
};
// File paths
const files = {
    scssSite: target.src + 'style/!(styleguide)*.scss', // cible uniquement les scss qu'il faut compiler dans le dossier __public/site/
    scssStyleguide: target.src + 'style/styleguide.scss',
    twigToWatch: target.src + 'twig/**/*.twig',
    scssToWatch: target.src + 'style/**/*.scss',
    jsAppToWatch: target.src + 'script/app/**/*.js',
    jsPluginToWatch: target.src + 'script/plugin/**/*.js',
    jsStyleguideToWatch: target.src + 'script/styleguide/**/*.js',
    fontToWatch: target.src + 'font/**/*.*',
    imgToWatch: target.src + 'img/**/*.*',
    iconsToWatch: target.src + 'svg-icons/sprite/*.*'
}
// SVG
var svgSpriteconfig = {
    shape: {
        dimension: { // Set maximum dimensions
            maxWidth: 32,
            maxHeight: 32
        },
        dest: 'sprite' // Keep the intermediate files
    },
    mode: {
        symbol: { // Activate the ??symbol?? mode
            render: {
                css: false, // CSS output option for icon sizing
                scss: false // SCSS output option for icon sizing
            },
            dest: ".",
            sprite: "icon-sprite.svg", // Sprite path and name
            example: true // Build a sample page, please!
        }
    },
    svg: {
        doctypeDeclaration: false,
        dimensionAttributes: false
    }
};

/*
|--------------------------------------------------------------------------
| TASKS
|--------------------------------------------------------------------------
*/
// Clean task: delete generated files
function clean(){
    return del(target.buildFolder);
}

// Twig task: compiles the .twig files into .html
function twigSite(){
    return src(target.src + 'twig/site/page/*.*')
        .pipe(twig({
            errorLogToConsole: true
        }))
        .pipe(dest(target.buildSite));
}
function twigStyleguide(){
    return src(target.src + 'twig/styleguide/page/*.*')
        .pipe(twig({
            errorLogToConsole: true
        }))
        .pipe(dest(target.buildStyleguide));
}

function phpStyleguide(){
    return src(target.src + 'php/*.*')
        .pipe(dest(target.buildStyleguide + 'php'));
}

// Sass Site task: compiles the style.scss file into style.css
function styleSite(){
    return src(files.scssSite)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass().on('error', sass.logError)) // compile SCSS to CSS
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        // .pipe(dest(target.devFolder + 'style'))
        .pipe(dest(target.buildSite + 'style'))
        .pipe(dest(target.buildStyleguide + 'style')); // put final CSS in dist folder
}

// Sass Styleguide task: compiles the style.scss file into style.css
function styleStyleguide(){
    return src(files.scssStyleguide)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass().on('error', sass.logError)) // compile SCSS to CSS
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest(target.buildStyleguide + 'style')); // put final CSS in dist folder
}

// JS APP task: concatenates and uglifies JS files to app.js
function scriptApp(){
    return src([
        // Not jquery
        target.src + 'script/app/_detection-js.js',

        //
        // OPEN jquery
        target.src + 'script/app/_jquery-open.js',
        //
        // > Appeler tous les autres scripts ici
        target.src + 'script/app/_links.js',
        target.src + 'script/app/_table.js',
        target.src + 'script/app/_nav-primary.js',
        target.src + 'script/app/_widget-access.js',
        target.src + 'script/app/_alert.js',
        target.src + 'script/app/_tooltip.js',

        //
        // > Init des scripts du dessus
        target.src + 'script/app/app.js',

        //
        // Close jquery
        target.src + 'script/app/_jquery-close.js',

        // Not jquery
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        // .pipe(dest(target.devFolder + 'script'))
        .pipe(dest(target.buildSite + 'script'))
        .pipe(dest(target.buildStyleguide + 'script'));
}

// JS PLUGIN task: concatenates and uglifies JS files to vendor.js
function scriptPlugin(){
    return src([
        //
        // OPEN
        target.src + 'script/app/_jquery-open.js',
        //
        // > Appeler tous les autres scripts ici
        // * Bootstrap
        target.src + 'script/plugin/popper/popper-min.js', // N??cessaire pour faire fonctionner les dropdown
        target.src + 'script/plugin/bootstrap/util.js',
        // target.src + 'script/plugin/bootstrap/alert.js',
        // target.src + 'script/plugin/bootstrap/button.js',
        target.src + 'script/plugin/bootstrap/collapse.js',
        target.src + 'script/plugin/bootstrap/dropdown.js',
        target.src + 'script/plugin/bootstrap/modal.js',
        target.src + 'script/plugin/bootstrap/tooltip.js', // Tooltip doit ??tre appel?? avant popover : https://stackoverflow.com/questions/18599382/twitter-bootstrap-popover-not-working
        // target.src + 'script/plugin/bootstrap/popover.js',
        // target.src + 'script/plugin/bootstrap/scrollspy.js',
        // target.src + 'script/plugin/bootstrap/tab.js',
        // target.src + 'script/plugin/bootstrap/affix-v336-modbs4.js',
        // * Others
        target.src + 'script/plugin/what-input/what-input.js',
        target.src + 'script/plugin/a11y/van11y-accessible-accordion-aria.min.js',
        target.src + 'script/plugin/a11y/van11y-accessible-tab-panel-aria.min.js',

        //
        // CLOSE
        target.src + 'script/app/_jquery-close.js',

        // Not jquery
        // target.src + 'script/plugin/tiny-slider.js',
        // target.src + 'script/plugin/svg-icons/svgxuse.js', // Pour l'utilisation du composant svg icons
    ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        // .pipe(dest(target.devFolder + 'script'))
        .pipe(dest(target.buildSite + 'script'))
        .pipe(dest(target.buildStyleguide + 'script'));
}

// JS STYLEGUIDE task: concatenates and uglifies JS files to styleguide.js
function scriptStyleguide(){
    return src([
        //
        // OPEN
        target.src + 'script/app/_jquery-open.js',
        //
        // > Appeler tous les autres scripts ici
        // * Bootstrap
        // target.src + 'script/plugin/popper/popper-min.js', // N??cessaire pour faire fonctionner les dropdown
        // target.src + 'script/plugin/bootstrap/util.js',
        // target.src + 'script/plugin/bootstrap/alert.js',
        // target.src + 'script/plugin/bootstrap/button.js',
        // target.src + 'script/plugin/bootstrap/collapse.js',
        // target.src + 'script/plugin/bootstrap/dropdown.js',
        // target.src + 'script/plugin/bootstrap/modal.js',
        // target.src + 'script/plugin/bootstrap/tooltip.js', // Tooltip doit ??tre appel?? avant popover : https://stackoverflow.com/questions/18599382/twitter-bootstrap-popover-not-working
        // target.src + 'script/plugin/bootstrap/popover.js',
        // target.src + 'script/plugin/bootstrap/scrollspy.js',
        // target.src + 'script/plugin/bootstrap/tab.js',
        // target.src + 'script/plugin/bootstrap/affix-v336-modbs4.js',

        // * Others
        // target.src + 'script/plugin/what-input/what-input.js',
        // target.src + 'script/plugin/objectFitPolyfill.min.js',

        // * Custom
        target.src + 'script/styleguide/_nav.js',

        //
        // > Init des scripts du dessus
        target.src + 'script/styleguide/styleguide.js',

        //
        // CLOSE
        target.src + 'script/app/_jquery-close.js',

        // Not jquery
        // target.src + 'script/plugin/tiny-slider.js',
    ])
        .pipe(concat('styleguide.min.js'))
        .pipe(uglify())
        .pipe(dest(target.buildStyleguide + 'script'));
}

// SVG Sprite
// Pr??paration du sprite
// Chaque nouvelle ic??ne doit ??tre nettoy??e :
//  - Nettoyer les SVG : https://jakearchibald.github.io/svgomg/
//  - Harmoniser la taille comme d??fini dans svgSpriteconfig
//  - V??rifier qu'aucun ??l??ment n'a de bordure. Si ce n'est pas le cas, transformer les bordures en choisissant Objet > D??composer dans un logiciel de dessin vectoriel (comme Inkscape)
//  - Passer tous les fonds de forme en noir afin de supprimer les infos de couleur dans les svg
//  - Placer chaque ic??ne "nettoy??e" dans le r??pertoire svg-icons/sprite/
function createSvgSprite(){
    return src(files.iconsToWatch)
        .pipe(plumber())
        .pipe(svgSprite(svgSpriteconfig))
        .pipe(dest(target.buildSite + 'svg-icons'))
        .pipe(dest(target.buildStyleguide + 'svg-icons'));
}

// Assets task: copy JS, fonts and imgs
function assets(){
    const assetsJs = src([
        target.src + 'script/plugin/jquery/jquery-3.5.1.min.js',
    ])
        // .pipe(dest(target.devFolder + 'script'))
        .pipe(dest(target.buildSite + 'script'))
        .pipe(dest(target.buildStyleguide + 'script'));

    const assetsJsStyleguide = src([
        target.src + 'script/plugin/prism/prism.js',
    ])
        .pipe(dest(target.buildStyleguide + 'script'));

    const assetsFont = src(files.fontToWatch)
        // .pipe(dest(target.devFolder + 'font'))
        .pipe(dest(target.buildSite + 'font'))
        .pipe(dest(target.buildStyleguide + 'font'));

    const assetsImg = src([
        target.src + 'img/*.*',
        target.src + 'img/pictogrammes-illustratifs/*.*',
    ],  {base: './src/img/'}) // defines a base to keep folder structure: https://stackoverflow.com/questions/35845039/how-base-option-affects-gulp-src-gulp-dest/35848322#35848322
        .pipe(dest(target.buildSite + 'img'));

    const assetsImgStyleguide = src(files.imgToWatch)
        .pipe(dest(target.buildStyleguide + 'img'));

    return merge(assetsJs, assetsJsStyleguide, assetsFont, assetsImg, assetsImgStyleguide);
}

// Create zip
function zipStarterKit(){
    return src([
        target.buildSite + '**/*',
        '!' + target.buildSite + '*.html',
        target.buildSite + 'layout-base.html'
    ])
        .pipe(zip('starterkit.zip'))
        .pipe(dest(target.buildStyleguide + 'zip'));
}

function zipPictogrammesFonctionnels(){
    return src(target.src + 'svg-icons/sprite/*.*')
        .pipe(zip('pictogrammes-fonctionnels.zip'))
        .pipe(dest(target.buildStyleguide + 'zip'));
}

function zipPictogrammesIllustratifs(){
    return src(target.src + 'img/pictogrammes-illustratifs/*.*')
        .pipe(zip('pictogrammes-illustratifs.zip'))
        .pipe(dest(target.buildStyleguide + 'zip'));
}

function zipLogos(){
    return src([
        target.src + 'img/favicon.ico',
        target.src + 'img/logo-ANS-footer.svg',
        target.src + 'img/logo-ANS.svg',
        target.src + 'img/logo-ministere.svg',
    ])
        .pipe(zip('logotype.zip'))
        .pipe(dest(target.buildStyleguide + 'zip'));
}

function zipSizes(){
    return src(target.buildStyleguide + 'zip/*.*')
        .pipe(size());
}

// Watch task: watch SCSS and JS files for changes
function watchTask(){
    watch(files.twigToWatch, series(twigSite, twigStyleguide));
    watch(files.scssToWatch, series(styleSite, styleStyleguide));
    watch(files.jsAppToWatch, scriptApp);
    watch(files.jsPluginToWatch, scriptPlugin);
    watch(files.jsStyleguideToWatch, scriptStyleguide);
    watch(files.fontToWatch, assets);
    watch(files.imgToWatch, assets);
    watch(files.iconsToWatch, createSvgSprite);
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then watch task
exports.default = series(
    clean,
    parallel(twigSite, twigStyleguide, phpStyleguide, styleSite, styleStyleguide, scriptApp, scriptPlugin, scriptStyleguide, assets, createSvgSprite),
    zipStarterKit, zipPictogrammesFonctionnels, zipPictogrammesIllustratifs, zipLogos,
    zipSizes
);

exports.watch = series(
    clean,
    parallel(twigSite, twigStyleguide, phpStyleguide, styleSite, styleStyleguide, scriptApp, scriptPlugin, scriptStyleguide, assets, createSvgSprite),
    zipStarterKit, zipPictogrammesFonctionnels, zipPictogrammesIllustratifs, zipLogos,
    zipSizes,
    watchTask
);