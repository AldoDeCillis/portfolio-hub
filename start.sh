#!/bin/sh

# Start PHP-FPM in the background
php-fpm &

# Start nginx in foreground
nginx -g 'daemon off;'
