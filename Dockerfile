FROM node:12-alpine
ENV LANG C.UTF-8

WORKDIR /app/bluemoon

RUN yarn global add nuxt
RUN yarn global add firebase-tools firebase-admin
RUN apk add --no-cache openjdk8-jre
