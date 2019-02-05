FROM node:8.11.4-alpine
ENV LANG C.UTF-8
ENV EDITOR vim

WORKDIR /app/bluemoon

RUN npm install -g npx
RUN yarn global add nuxt

CMD [ "yarn", "run", "dev" ]
