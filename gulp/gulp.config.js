module.exports = {

    build_dir: 'build',
    compile_dir: 'bin',
    server: 'server/server.js',

    app_files: {
        // source, but NO specs
        js: ['src/**/*.js', '!src/**/*.spec.js'],
        js_compile: [
          'gulp/module.prefix',
          'build/vendor/jquery*.js',
          'build/vendor/angular.min.js',
          'build/vendor/**/*.js',
          'build/app/**/*.js',
          'gulp/module.suffix'
        ],
        vendor: ['vendor/**/*.js'],
        jsunit: ['src/**/*.spec.js'],
        // our partial templates
        atpl: ['src/app/**/*.html', 'src/common/**/*.html'],
        // injected resources
        tpl_src: [
          "./build/vendor/jquery*.js",
          "./build/vendor/angular.min.js",
          "./build/vendor/**/*.js",
          "./build/app/**/*.js",
          "./build/vendor/**/*.css",
          "./build/assets/css/**/*.css"
        ],
        // the index.html
        html: ['src/index.html'],
        styles: ['src/**/*.less'],
        data_compile: ['build/data/**/*.*'],
        assets_compile: ['build/assets/**/*.*', '!build/assets/css/**/*.*'],
        ngmin_js: ['./bin/**/*.js']
    },

    vendor_files: {
        // the node_modules/ needs to be prefixed by the task
        js: [
          'jquery/dist/jquery.min.js',
          'lodash/lodash.min.js',
          'angular/angular.min.js',
          'angular-ui-router/release/angular-ui-router.min.js',
          'material-design-lite/material.min.js',
          'chart.js/dist/Chart.js',
          'angular-chart.js/dist/angular-chart.js'
        ],
        css: [
          // 'material-design-lite/material.min.css',
          'angular-chart.js/dist/angular-chart.min.css'
        ],
        assets: []
    },
    blank_templates: './generator/component/**/*'
};
