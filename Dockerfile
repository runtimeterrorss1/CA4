# Use the official Python image as the base image
FROM python:3.8-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the application code into the container
COPY app.py /app/
COPY templates /app/templates/
COPY requirements.txt /app/

# Install any necessary system packages
RUN apt-get update \
    && apt-get install -y \
    default-libmysqlclient-dev \
    && apt-get clean

# Install Python dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5000 for the Flask app
EXPOSE 5000

# Start the Flask application
CMD ["python", "app.py"]
