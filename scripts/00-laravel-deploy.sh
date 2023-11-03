#!/bin/bash

# Running Composer to install PHP dependencies
echo "Running Composer"
composer global require hirak/prestissimo
composer install --no-dev --working-dir=/var/www/html


# Clearing config
php artisan config:clear

# Caching config...
echo "Caching config..."
php artisan config:cache

# Caching routes...
echo "Caching routes..."
php artisan route:cache



# Running migrations...
echo "Running migrations..."
php artisan migrate --force

echo "Running seeds..."
php artisan db:seed