# temporal-ts

1. Get Temporal 
```
git clone https://github.com/temporalio/docker-compose.git temporal
cd temporal
docker-compose up
```

2. Run Worker
```
cd worker
docker-compose build
docker-compose up -d
```

3. Run Workflow
```
cd worker
npm run workflow
```
One should see.  The workflow calls 2 activities one after another (greet & goodbye)
"Goodbye, Hello Temporal!"
