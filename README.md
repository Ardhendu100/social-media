# Distributed Social Media Backend (Django Microservices)

This project is a FAANG-level distributed social media backend, inspired by Instagram/Twitter, built with Django and Docker Compose. It demonstrates microservices, polyglot persistence, event-driven architecture, and production-scale system design concepts.

## Services
- **api-gateway**: Handles authentication, routing, and request aggregation
- **user-service**: User management and authentication
- **post-service**: Posts, comments, likes
- **feed-service**: Timeline/feed generation
- **notification-service**: Notifications (likes, follows, etc.)
- **search-service**: Full-text search (users, hashtags, posts)

## Infrastructure
- **nginx**: Load balancer
- **cdn**: Simulated CDN for media delivery
- **postgres**: Relational database
- **redis**: Caching and feed storage
- **elasticsearch**: Search
- **prometheus**: Monitoring
- **grafana**: Dashboards

## Quick Start
1. Clone the repo
2. Run `docker-compose up --build`
3. Access services via NGINX (http://localhost), Grafana (http://localhost:3000), Prometheus (http://localhost:9090), and CDN (http://localhost:8080)

## Development
- Each service is a standalone Django project with its own database and Dockerfile.
- Inter-service communication is via REST (can be extended to gRPC or message queues).
- All infrastructure runs locally; no cloud dependencies.

---
This project is for learning and simulating real-world system design. Replace placeholder configs as you build out each service.
