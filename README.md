# fragments user clientside

clientside experiments

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

start the server:
```
./app serve
```

compile development javascript
```
gulp js-dev
```
