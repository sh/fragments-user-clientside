# fragments user clientside \[WIP\]

a client side for [fragments-user](https://github.com/snd/fragments-user)
as the driver for designing
a clientside application combining 
[hinoki](https://github.com/snd/hinoki)
experiment
[react](http://facebook.github.io/react/)
[cursors](https://github.com/caseywebdev/cursors)
and other technologies.

this has gone through several iterations. it's still in flux but its getting there.

[ROADMAP](https://github.com/snd/fragments-user-clientside/issues/1)

## features:

- isomorphic
- clientside dependency injection structures clientside applications
- easy sharing of dependencies between server and client
- super simple but powerful routing (let react and cursors do most of the work)
- cursors
- ...

## relevant files and folders

in order of importance

- [gulpfile.coffee](gulpfile.coffee) - builds `static/app.js`
  from various .js files contained in bower-components specified in [src/server/assets.coffee](src/server/assets.coffee),
  from [src/client-first.coffee](src/client-first.coffee),
  from [src/shared](src/shared),
  from [src/client](src/client),
  and finally from [src/client-last.coffee](src/client-last.coffee)
- [bower.json](bower.json) - bower dependencies. only files in
  [src/server/assets.coffee](src/server/assets.coffee) are picked.
- [src/server](src/server) - server only hinoki factories
- [src/shared](src/shared) - client-server hinoki factories
- [src/client](src/client) - client only hinoki factories
- [src/client-before.coffee](src/client-before.coffee) - first part of the concatenated `static/app.js`. mocks `module.exports` such that factory files can just be concatenated after it.
- [src/client-after.coffee](src/client-after.coffee) - last part of the concatenated `static/app.js`. starts dependency injection with the factories in `module.exports` and calls dependency `initClient`.
- [app](app) - executable command line runner for [fragments](https://github.com/snd/fragments) app. sources [src/server](src/server) and [src/shared](src/shared)

## instructions on getting it to run

```
npm install -g gulp-cli
npm install -g bower
```

```
cd {this-repository}
```

```
npm install
```

configure by changing [.env](.env) to suit your needs.

```
source .env
```
(or use [autoenv](https://github.com/kennethreitz/autoenv) which is recommended)

create database thats in env var `DATABASE_URL`:
```
./app pg:create
```

migrate:
```
./app pg:migrate
```

compile development javascript
```
gulp js-dev
```

start the server:
```
./app serve
```

visit `localhost:{the-port-you-put-into-.env}`

## [license: MIT](LICENSE)
