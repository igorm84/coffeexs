FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Set port env
ENV PORT=7000

EXPOSE 7000
CMD [ "npm", "start" ]