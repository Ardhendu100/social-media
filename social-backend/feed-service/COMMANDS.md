# Feed Service: Useful Commands

## Local Development

- Activate virtual environment:
	```bash
	source ../../venv/bin/activate
	```
- Run Django server locally:
	```bash
	python manage.py runserver 8003
	```

## Docker

- Build Docker image:
	```bash
	sudo docker build -t feed-service .
	```
- Run Docker container:
	```bash
	sudo docker run -p 8003:8003 feed-service
	```

## Requirements

- Freeze dependencies:
	```bash
	pip freeze > requirements.txt
	```

---
Add more commands as you automate migrations, tests, or other tasks.
