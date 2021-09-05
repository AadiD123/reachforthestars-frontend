FROM node:10
WORKDIR /Users/RL/Documents/csprojects/react-website

COPY package*.json ./
RUN yarn install -g
COPY . .
EXPOSE 5000

RUN yarn add --save-dev typescript @types/react @types/node
RUN yarn run build


CMD [ "yarn", "run", "start"]
