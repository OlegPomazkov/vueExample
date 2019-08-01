# my_bp

## Project setup
```
docker-compose up -d --build
```
On first run if node modules not installed the container command install it.
This action take a long time.

After first run your container stop and you can run
```
docker-compose start
```
for use development server

## See logs
```
docker-compose logs -f frontend
```

### Compiles and minifies for production
```
docker-compose exec frontend yarn run build
```

### Run your tests
```
docker-compose exec frontend yarn run test
```

### Lints and fixes files
```
docker-compose exec frontend yarn run lint
```

### Run your unit tests
```
docker-compose exec frontend yarn run test:unit
```

### Add node package
```
docker-compose exec frontend yarn add <package-name>


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
