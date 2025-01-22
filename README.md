# SAAS APP

<!-- TODO -->

## Database Setup

postgres database is running in docker container on port 5432 forwarded to localhost

also database web interaction can be done on <https://localhost:8080>

```
docker-compose up -d
```

below is database connection url

***DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA***

```
postgresql://ved:ved@localhost:5432/saas
```
