# Use the base image with PHP and Nginx
FROM richarvey/nginx-php-fpm:latest

# Copy your Laravel application code into the image
COPY . .



# Install the GD extension for PHP on Alpine Linux
RUN apk --no-cache add freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install -j$(nproc) gd

# Update package lists and install required software
RUN apk --no-cache add nodejs npm

# Install your PHP dependencies
ENV SKIP_COMPOSER 1
RUN composer install --no-dev --working-dir=/var/www/html

# Install your Node.js dependencies (e.g., Vite) using npm
WORKDIR /var/www/html
COPY package.json package-lock.json ./
RUN npm install

# Build your front-end assets using Vite
RUN npm run build


# Set the environment variables for your Laravel application
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1



# Start your application using the entry point script
CMD ["/start.sh"]