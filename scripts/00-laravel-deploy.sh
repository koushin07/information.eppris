#!/bin/bash

# Running Composer to install PHP dependencies
echo "Running Composer"

composer install --no-dev --working-dir=/var/www/html

echo "Running NPM dependencies"
npm install

echo "Building dependencies"
npm run build

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
php artisan db:seed --force

echo "done deploying"