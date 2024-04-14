<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# challenge-back-nestjs

1. Clonar proyecto
2. `npm install`
3. crear el archivo `.env`
4. Agregar las variables de entorno en archivo `.env`, variables :
   `DB_PASSWORD=password123`
   `DB_NAME=challenge`
   `DB_HOST=localhost`
   `DB_PORT=5432`
   `DB_USERNAME=postgres`

Los valores son de ejemplo se pueden agregar los valores que se requieran en cada caso

6. Levantar la base de datos

```
docker-compose up -d
```

6. Levantar: `npm start:dev`

7. Ejecutar Fixtures

```
http://localhost:3000/api/fixtures
```
