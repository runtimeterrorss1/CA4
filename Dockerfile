FROM mysql

ENV MYSQL_DATABASE=mlops1
ENV MYSQL_PASSWORD=lodesmain@21
ENV MYSQL_ROOT_PASSWORD=lodesmain@21
#

COPY file.sql /docker-entrypoint-initdb.d/

EXPOSE 3307