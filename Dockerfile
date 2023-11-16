# Use the base image with PHP and Nginx
FROM richarvey/nginx-php-fpm:latest

# Copy your Laravel application code into the image
COPY . .

# Copy the deployment script into the image

# Install the GD extension for PHP on Alpine Linux
RUN apk --no-cache add freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install -j$(nproc) gd

# Update package lists and install required software
RUN apk --no-cache add nodejs npm



# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

# Make the script executable and set it as the entry point
ENV COMPOSER_ALLOW_SUPERUSER 1
RUN chmod +x ./00-laravel-deploy.sh
CMD ["./00-laravel-deploy.sh"]   

