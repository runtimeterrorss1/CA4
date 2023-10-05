FROM python
WORKDIR /app
COPY . /app
ENV FLASK_APP=app.py
EXPOSE 5000
CMD ["flask", "run", "--host", "0.0.0.0"]
#lodesmain@21