# Dockerfile per Laravel + Vite + Nginx + PHP-FPM (Alpine)

# Stage 1: Build assets con Node
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY resources ./resources
COPY vite.config.* .
COPY tailwind.config.* .
COPY postcss.config.* .
RUN npm run build

# Stage 2: PHP + Laravel + Nginx
FROM php:8.2-fpm-alpine

# Installa pacchetti base + estensioni PHP
RUN apk add --no-cache nginx bash git curl zip unzip libzip-dev icu-dev oniguruma-dev zlib-dev sqlite sqlite-dev \
  && docker-php-ext-install pdo pdo_mysql pdo_sqlite zip intl opcache

# Installa Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Cartella app
WORKDIR /var/www/html

# Copia codice Laravel
COPY . .

# Copia assets compilati
COPY --from=frontend-builder /app/public ./public

# Installa dipendenze Laravel
RUN composer install --no-dev --optimize-autoloader

# Cache Laravel e permessi
RUN php artisan config:clear \
  && php artisan config:cache \
  && php artisan route:cache \
  && php artisan view:cache \
  && mkdir -p storage/logs bootstrap/cache \
  && chmod -R 775 storage bootstrap/cache \
  && chown -R www-data:www-data storage bootstrap/cache

# Copia configurazione Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Espone porta HTTP
EXPOSE 80

# Avvia Nginx e PHP-FPM
CMD php-fpm -D && nginx -g 'daemon off;'
