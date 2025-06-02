# Stage 1 - Build frontend
FROM node:20 AS build-frontend

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Stage 2 - Laravel + PHP + Nginx
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    nginx \
    unzip \
    git \
    curl \
    libpng-dev \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    && docker-php-ext-install pdo pdo_mysql zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy app source code
COPY . .

# Copy frontend build from previous stage
COPY --from=build-frontend /app/public/build ./public/build

# Copy nginx config and start script
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Install PHP dependencies (no --no-dev to allow debug)
RUN composer install

# Laravel: set correct permissions
RUN mkdir -p storage/logs bootstrap/cache && \
    chmod -R 775 storage bootstrap/cache && \
    chown -R www-data:www-data storage bootstrap/cache

# Create .env from environment variables at runtime
RUN echo '# Auto-generated .env from Dockerfile\n' > .env && \
    echo "APP_NAME=Laravel" >> .env && \
    echo "APP_ENV=\${APP_ENV}" >> .env && \
    echo "APP_KEY=\${APP_KEY}" >> .env && \
    echo "APP_DEBUG=\${APP_DEBUG}" >> .env && \
    echo "APP_URL=\${APP_URL}" >> .env && \
    echo "LOG_CHANNEL=stack" >> .env && \
    echo "DB_CONNECTION=mysql" >> .env && \
    echo "DB_HOST=\${DB_HOST}" >> .env && \
    echo "DB_PORT=\${DB_PORT}" >> .env && \
    echo "DB_DATABASE=\${DB_DATABASE}" >> .env && \
    echo "DB_USERNAME=\${DB_USERNAME}" >> .env && \
    echo "DB_PASSWORD=\${DB_PASSWORD}" >> .env

# Expose ports for Nginx and PHP-FPM
EXPOSE 80

CMD ["sh", "/start.sh"]
