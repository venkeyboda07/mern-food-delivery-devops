# =========================
# Build Stage
# =========================

# Use Node.js 20 Alpine image as the base image for building the app
FROM node:20-alpine AS builder

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json files into the container
COPY package*.json ./

# Install all project dependencies
RUN npm install

# Copy all project files and folders into the container
COPY . .

# Build the application for production
RUN npm run build


# =========================
# Production Stage
# =========================

# Use lightweight Nginx image for serving the frontend application
FROM nginx:alpine

# Copy the build files from the builder stage to Nginx default html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx server in foreground mode
CMD ["nginx", "-g", "daemon off;"]
