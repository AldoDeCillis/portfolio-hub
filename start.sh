#!/bin/bash

# Crea dinamicamente il file .env
cat <<EOF > .env
APP_NAME=Laravel
APP_ENV=${APP_ENV}
APP_KEY=${APP_KEY}
APP_DEBUG=${APP_DEBUG}
APP_URL=${APP_URL}

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=${DB_HOST}
DB_PORT=${DB_PORT}
DB_DATABASE=${DB_DATABASE}
DB_USERNAME=${DB_USERNAME}
DB_PASSWORD=${DB_PASSWORD}

SESSION_DRIVER=file
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
EOF

# Imposta permessi corretti
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# Avvia PHP-FPM e Nginx in background
php-fpm &

# Avvia nginx in foreground (mantiene il container vivo)
nginx -g 'daemon off;'
