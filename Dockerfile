# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies (ensuring only production dependencies are installed)
RUN npm install --only=production

# Copy the remaining project files
COPY . .

# Expose the port that the Express app listens on
EXPOSE 3000

# Command to run the server
CMD ["node", "index.js"]
