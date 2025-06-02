# ---------------------------------------------
# Stage 1: Build assets (Vite + Node)
# ---------------------------------------------
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY resources/ ./resources
COPY vite.config.* .
COPY public/ ./public
RUN npm run build

# ---------------------------------------------
# Stage 2: PHP + Laravel + Nginx
# ---------------------------------------------
FROM php:8.2-fpm-alpine

# Install dependencies
RUN apk add --no-cache nginx bash libpng-dev libzip-dev zip unzip curl git mysql-client oniguruma-dev icu-dev

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql zip intl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy Laravel app
WORKDIR /var/www/html
COPY . .

# Copy built assets
COPY --from=build /app/public/build /var/www/html/public/build

# Install Laravel dependencies
RUN composer install --optimize-autoloader --no-dev

# Set permissions
RUN mkdir -p storage/logs bootstrap/cache \
 && chmod -R 775 storage bootstrap/cache \
 && chown -R www-data:www-data storage bootstrap/cache

# Cache config
RUN php artisan config:cache

# Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Start script
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]
