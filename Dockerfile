FROM node:8

COPY . /productDescription
WORKDIR /productDescription

RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]