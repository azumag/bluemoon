# Bluemoon

## Run with docker-compose
### for local development
setup
```
docker-compose build dev
```

```
docker-compose up dev firebase-emulator
```

### lint fix
```
docker-compose run --rm yarn
```

### code-server editor
```
docker-compose up editor
```
then access http://localhost:283

# deploy
```
docker-compose run --rm yarn yarn build
firebase deploy
```
