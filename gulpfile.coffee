gulp = require 'gulp'

app = require('./app')

################################################################################
# fonts

# gulp.task 'copy-fonts', ->
#   gulp.src('bower_components/fontawesome/fonts/*')
#     .pipe(gulp.dest('static/fonts'))
#   gulp.src('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*')
#     .pipe(gulp.dest('static/fonts/bootstrap'))

################################################################################
# css

# gulp.task 'css-dev', ->
#   APP (
#     streamqueue
#     gulpConcat
#     gulpRubySass
#   ) ->
#     loadPaths = [
#       'bower_components/bootstrap-sass/assets/stylesheets'
#       'bower_components/fontawesome/scss'
#     ]
#     streamqueue({objectMode: true},
#       gulpRubySass('sass/public.sass', {loadPath: loadPaths})
#       gulp.src('bower_components/nprogress/nprogress.css')
#     )
#       .pipe(gulpConcat('public.css'))
#       .pipe(gulp.dest('static-dev'))

################################################################################
# js

gulp.task 'js-dev', ->
  app (
    gulpConcat
    gulpUglify
    gulpCoffee
    streamqueue

    javascripts
    envStringStaticPath
    maybeEnvStringMinifiedJavascriptPath
    path
  ) ->
    libs = gulp.src(javascripts)
    before = gulp.src('src/client-first.coffee').pipe(gulpCoffee({bare: true}))
    shared = gulp.src('src/shared/*.coffee').pipe(gulpCoffee({bare: true}))
    client = gulp.src('src/client/*.coffee').pipe(gulpCoffee({bare: true}))
    after = gulp.src('src/client-last.coffee').pipe(gulpCoffee({bare: true}))

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

    ordered = [
      libs
      before
      shared
      client
      after
    ]

    streamqueue({objectMode: true}, ordered...)
      .pipe(gulpConcat(maybeEnvStringMinifiedJavascriptPath))
      .pipe(gulp.dest(envStringStaticPath))

# gulp.task 'js-prod', ->
#   makeClientJs('js/client.min.js', true)

# gulp.task 'default', ['js-dev', 'js-prod', 'copy-fonts']

# gulp.task 'js-dev-watch', ->
#   # recompile js on every file change
#   callback = -> gulp.start 'js-dev'
#
#   gulp.src(publicScriptsFullPaths).pipe watch callback
#   gulp.src('src/client-magic/prelude.coffee').pipe watch callback
#   gulp.src('src/client-magic/inject.coffee').pipe watch callback
#   gulp.src('src/client-magic/init.coffee').pipe watch callback
#
#   watch {glob: 'src/shared/*.coffee'}, callback
#   watch {glob: 'src/client/*.coffee'}, callback
