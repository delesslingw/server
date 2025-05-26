FROM node:18-alpine

# Start in /app
WORKDIR /app

# Copy everything into /app (including README.md and server/)
COPY . .

# Set working directory to the server
WORKDIR /app/server

# Install dependencies inside the server directory
COPY server/package*.json ./
RUN npm install

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
