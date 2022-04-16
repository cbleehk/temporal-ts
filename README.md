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

## Notes
- Only newer node 16.x works because the image includes glibc-2.25+ by default (Node14 image only has 2.24)
- Using network_mode = host so it can connect to temporal running on different docker apps (for now)
- only key code changes is in worker/workflows.ts and worker/activities.ts where it adds a second activity and call them in series
