#!/bin/bash

# Crea dinamicamente il file .env
cat <<EOF > .env
APP_NAME=Laravel
APP_ENV=${APP_ENV}
APP_KEY=${APP_KEY}
APP_DEBUG=${APP_DEBUG}
APP_URL=${APP_URL}

LOG_CHANNEL=stack

DB_CONNECTION=sqlite
DB_DATABASE=/var/www/html/database/database.sqlite

SESSION_DRIVER=file
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
EOF

# Crea database SQLite se non esiste
mkdir -p /var/www/html/database
touch /var/www/html/database/database.sqlite
chmod 664 /var/www/html/database/database.sqlite
chown www-data:www-data /var/www/html/database/database.sqlite

# Imposta permessi corretti
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# Avvia PHP-FPM e Nginx (senza service)
php-fpm &
nginx -g 'daemon off;'
