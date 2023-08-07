create local db

```
docker run --rm -P -p 127.0.0.1:5432:5432 -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD --name pg postgres:alpine
```

migrate

```
npx prisma migrate dev
```

seed data

```
npx ts-node prisma/seed.ts
```

run commands in local db

```
psql postgresql://postgres:1234@localhost:5432/postgres
```
