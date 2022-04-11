FROM php:8.1.3-cli

COPY ./back usr/src/laravel

WORKDIR /usr/src/laravel

CMD php artisan serve
