# post Service: Useful Commands

This file contains all important commands for running, building, and managing the post Service.

Scaffold the Django project inside the container:
    sudo docker run -it --rm -v "$PWD":/app post-service django-admin startproject post_service .

## Docker

- Build Docker image:
	```bash
	sudo docker build -t post-service .
	```
    
- Run Docker container:
	```bash
	sudo docker run -p 8002:8002 post-service
	```

## Requirements

- Freeze dependencies:
	```bash
	pip freeze > requirements.txt
	```
Scaffold the Django project inside post-service:

sudo docker run -it --rm -v "$PWD":/app post-service django-admin startproject post_service .
---
Add more commands as you automate migrations, tests, or other tasks.
