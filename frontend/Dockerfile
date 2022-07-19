# Pull latest official node image
FROM node:16.15.1

# Set working directory
WORKDIR /frontend

# add `/app/node_modules/.bin` to environment variables
ENV PATH /frontend/node_modules/.bin:$PATH

# Copy package files and install app dependencies
COPY package.json ./

#Install NPM, React
RUN npm install

#Install Tools
RUN npm install react-bootstrap bootstrap
RUN npm install react-router-dom@6
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install @mui/icons-material


COPY . ./
# Expose ports
EXPOSE 3000

# Start the React app
#RUN npm  start
CMD ["npm", "start"]