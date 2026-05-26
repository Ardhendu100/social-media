# User Service: Useful Commands

This file contains all important commands for running, building, and managing the User Service.

## Local Development

- Activate virtual environment:
	```bash
	source ../../venv/bin/activate
	```
- Run Django server locally:
	```bash
	python manage.py runserver 8001
	```

## Docker

- Build Docker image:
	```bash
	sudo docker build -t user-service .
	```
- Run Docker container:
	```bash
	sudo docker run -p 8001:8001 user-service
	```

## Requirements

- Freeze dependencies:
	```bash
	pip freeze > requirements.txt
	```

---
Add more commands as you automate migrations, tests, or other tasks.
