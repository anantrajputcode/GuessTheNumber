FROM nginx

WORKDIR /usr/share/nginx/html

COPY /src .

RUN apt-get update

EXPOSE 80
