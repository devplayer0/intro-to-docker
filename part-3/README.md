# Part 3

1. Build and run the app: `docker-compose up --build`
    - Re-build the app without running: `docker-compose build`
    - Run the app without building: `docker-compose up`
    - Stop and remove all containers: `docker-compose down`
2. Run in the background with auto start:
    1. Add `restart: always` to `db` and `app` in `docker-compose.yaml`
    2. Run `docker-compose up -d`
