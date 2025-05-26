# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy and install dependencies
COPY server/package*.json ./
RUN npm install

# Copy the rest of the app
COPY server .

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
