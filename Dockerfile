FROM mysql:latest
ENV MYSQL_DATABASE=db1
ENV MYSQL_USER=user1
ENV MYSQL_PASSWORD=userpass
ENV MYSQL_ROOT_PASSWORD=rootpass
COPY init.sql /docker-entrypoint-initdb.d/
#lodesmain@21