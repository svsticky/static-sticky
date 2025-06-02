FROM nginx:1.28-alpine-slim

ARG BUILD_NUMBER=notset

# Create non-root user and group
RUN addgroup -S gatsby && adduser -S gatsby -G gatsby

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy built site from builder
COPY /public /usr/share/nginx/html
RUN echo ${BUILD_NUMBER} > /usr/share/nginx/html/version.txt

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/cache/nginx/client_temp /run && \
    chown -R gatsby:gatsby /var/cache/nginx /run

# Use non-root user
USER gatsby

EXPOSE 8080

# Default CMD from base image remains