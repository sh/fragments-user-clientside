gulp = require 'gulp'

gulpCoffee = require 'gulp-coffee'
gulpConcat = require 'gulp-concat'
gulpNodemon = require 'gulp-nodemon'
gulpSass = require 'gulp-sass'
gulpSourcemaps = require 'gulp-sourcemaps'
gulpUglify = require 'gulp-uglify'
gulpWatch = require 'gulp-watch'
streamqueue = require 'streamqueue'

process = require 'process'

app = require './app'

################################################################################
# fonts

gulp.task 'copy-fonts', ->
  gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('static/fonts'))
  gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
    .pipe(gulp.dest('static/fonts/bootstrap'))

################################################################################
# css

gulp.task 'dev-css', ->
  includePaths = [
    'node_modules/bootstrap-sass/assets/stylesheets'
    'node_modules/font-awesome/scss'
  ]
  streamqueue({objectMode: true},
    # custom sass
    gulp.src('sass/public.sass')
    .pipe(gulpSass({includePaths: includePaths, indentedSyntax: true}).on('error', gulpSass.logError))
    # gulp.src('bower_components/nprogress/nprogress.css')
  )
    .pipe(gulpConcat('public.css'))
    .pipe(gulp.dest('static'))

################################################################################
# js

gulp.task 'dev-js', ->
  app (
    javascripts
    envStringStaticPath
    maybeEnvStringMinifiedJavascriptPath
    path
  ) ->

#     if isForProduction
#       libs = libs.pipe(uglify())
#       prelude = prelude.pipe(uglify())
#       inject = inject.pipe(uglify())
#
#       # don't mangle these as they contain factory functions
#       # whose dependencies are parsed from the function parameter names
#       shared = shared.pipe(uglify({mangle: false}))
#       client = client.pipe(uglify({mangle: false}))
#       init = init.pipe(uglify({mangle: false}))

    transformCoffeeWithSourcemaps = (pattern) ->
      gulp.src(pattern, {base: 'src'})
        .pipe(gulpSourcemaps.init({debug:true}))
        .pipe(gulpCoffee({bare: true}))

    ordered = [
      gulp.src(javascripts, {base: 'src'}).pipe(gulpSourcemaps.init({debug:true}))
      transformCoffeeWithSourcemaps('src/client-first.coffee')
      transformCoffeeWithSourcemaps('src/shared/**')
      transformCoffeeWithSourcemaps('node_modules/fragments-user/src/factories/url.coffee')
      transformCoffeeWithSourcemaps('node_modules/fragments-user/src/factories/validation.coffee')
      transformCoffeeWithSourcemaps('node_modules/fragments-user/src/factories/portable-access-control.coffee')
      transformCoffeeWithSourcemaps('node_modules/fragments-user/src/factories/right-parser.coffee')
      transformCoffeeWithSourcemaps('src/component/**')
      transformCoffeeWithSourcemaps('src/client/**')
      transformCoffeeWithSourcemaps('src/client-reusable/**')
      after = transformCoffeeWithSourcemaps('src/client-last.coffee')
    ]

    streamqueue({objectMode: true}, ordered...)
      .pipe(gulpConcat(maybeEnvStringMinifiedJavascriptPath))
      .pipe(gulpSourcemaps.write())
      .pipe(gulp.dest(envStringStaticPath))

gulp.task 'default', ['copy-fonts', 'dev-css', 'dev-js']

gulp.task 'dev', ['copy-fonts', 'dev-css', 'dev-js'], ->
  nodemon = gulpNodemon
    cwd: __dirname
    ext: 'coffee'
    watch: ['src/']
    env: process.env
    script: './app'
    args: ['serve']
    tasks: ['dev-js']

  gulpWatch 'sass/public.sass', ->
    gulp.start 'dev-css'

  process.once 'SIGINT', ->
    nodemon.once 'exit', ->
      process.exit()
