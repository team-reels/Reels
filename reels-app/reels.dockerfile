FROM node:alpine

COPY ./reels-app /opt/reels-app
WORKDIR /opt/reels-app

RUN ["npm", "i"]
CMD ["npm", "run", "dev"]

EXPOSE 5050
