# API Gateway Service: Useful Commands

This file contains all important commands for running, building, and managing the API Gateway service.

## Local Development

- Activate virtual environment:
  ```bash
  source ../../venv/bin/activate
  ```
- Run Django server locally:
  ```bash
  python manage.py runserver
  ```

## Docker

- Build Docker image:
  ```bash
  sudo docker build -t api-gateway .
  ```
- Run Docker container:
  ```bash
  sudo docker run -p 8000:8000 api-gateway
  ```

## Requirements

- Freeze dependencies:
  ```bash
  pip freeze > requirements.txt
  ```

---
Add more commands as you automate migrations, tests, or other tasks.
