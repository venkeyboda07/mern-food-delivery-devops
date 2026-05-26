# Use official Node.js version 22 image as the base image
FROM node:22

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json files into the container
COPY package*.json ./

# Install only production dependencies for optimized image size
RUN npm ci --only=production

# Copy all backend application files into the container
COPY . .

# Switch to non-root node user for better security
USER node

# Expose port 4000 for backend application access
EXPOSE 4000

# Start the backend server using server.js
CMD [ "node", "server.js" ]