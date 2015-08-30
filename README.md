# fragments user clientside

clientside experiments

## instructions to getting it to run

```
cd {this-repository}
```

```
npm install
```

configure by changing [.env](.env) to suit your needs

```
source .env
```
(or use [autoenv](https://github.com/kennethreitz/autoenv) *recommended*)

create database which was configured in [.env](.env):
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

