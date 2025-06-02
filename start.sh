#!/bin/bash

# Crea dinamicamente il file .env
cat <<EOF > .env
APP_NAME=Laravel
APP_ENV=production
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

# Crea il file SQLite se non esiste
mkdir -p /var/www/html/database
touch /var/www/html/database/database.sqlite
chmod 664 /var/www/html/database/database.sqlite
chown www-data:www-data /var/www/html/database/database.sqlite

# Imposta permessi corretti
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# Applica le migrazioni
php artisan migrate --force

# Avvia PHP-FPM e Nginx
php-fpm &
nginx -g 'daemon off;'
