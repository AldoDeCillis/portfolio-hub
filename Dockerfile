FROM node:20-alpine AS node_modules
WORKDIR /app
COPY package*.json ./
RUN npm install

# -------------------------------

FROM php:8.2-fpm-alpine

# Install system dependencies
RUN apk add --no-cache nginx curl bash git libzip-dev zip unzip libpng-dev \
    icu-dev zlib-dev oniguruma-dev sqlite sqlite-dev nodejs npm

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql pdo_sqlite zip intl opcache

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working dir
WORKDIR /var/www

# Copy Laravel code
COPY . .

# Copy node_modules from first stage
COPY --from=node_modules /app/node_modules ./node_modules

# Install Laravel backend dependencies
RUN composer install --no-dev --optimize-autoloader

# Build assets
RUN npm run build

# Cache Laravel configs & fix permissions
RUN php artisan config:clear && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache && \
    mkdir -p storage/logs bootstrap/cache && \
    chown -R www-data:www-data storage bootstrap/cache

# Add nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose HTTP port
EXPOSE 80

# Start both nginx and php-fpm
CMD ["/bin/sh", "-c", "php-fpm -D && nginx -g 'daemon off;'"]
