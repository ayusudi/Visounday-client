FROM node:22.2-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install vite
COPY . .
CMD ["npm", "run", "build"]
#CMD ["npm", "run", "preview", "--host 0.0.0.0"]


FROM nginx:alpine

# Copy the build output to Nginx html directory
COPY dist /app

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]