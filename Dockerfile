FROM node:18-alpine

WORKDIR /frontend

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN npm install

# CMD [ "npm", "start" ]