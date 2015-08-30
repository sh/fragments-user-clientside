# fragments user clientside

clientside experiments

## instructions to getting it to run

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

