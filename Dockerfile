FROM python:3.8-slim
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
ENV FLASK_APP=app.py
EXPOSE 5000
CMD ["flask", "run", "--host", "0.0.0.0"]
#lodesmain@21