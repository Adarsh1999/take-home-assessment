# Use an official Node.js runtime as the base image

# Set the working directory in the container


# Use a lightweight Node.js image as the base for the final image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./
COPY . .

# Install the project dependencies
RUN yarn install --frozen-lockfile

# Build the React project
RUN yarn build

# Install serve globally to run the production build
RUN yarn global add serve

EXPOSE 80
CMD ["yarn", "dev"]

