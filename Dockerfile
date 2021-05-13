# Specify a base image
FROM node:alpine

WORKDIR '/fof8-ui/src'

# Install some depenendencies
COPY /fof8-ui/package.json .
RUN yarn install
COPY /fof8-ui/. .

# Uses port which is used by the actual application
EXPOSE 3000

# Default command
CMD ["yarn", "run", "start"]