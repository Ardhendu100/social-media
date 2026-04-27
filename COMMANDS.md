# Project-wide Docker Compose Commands

## Run All Services

Build and start all services (api-gateway, user-service, etc.):
```bash
sudo docker compose up --build
```

Stop all services:
```bash
sudo docker compose down
```

## Run a Specific Service Only

To build and run just one service (e.g., user-service):
```bash
sudo docker compose up --build user-service
```

To run only api-gateway:
```bash
sudo docker compose up --build api-gateway
```

To run only post-service with datbase:
```bash
sudo docker compose up --build post-service postgres
```

You can also start a service in the background (detached mode):
```bash
sudo docker compose up -d user-service
```
You can clean up unused images, containers, and volumes with:
sudo docker system prune

---
Add more commands as you add more services or infrastructure.
