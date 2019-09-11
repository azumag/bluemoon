FROM node:10.16.2-alpine
ENV LANG C.UTF-8
ENV EDITOR vim

WORKDIR /app/myproject

RUN npm install -g npx
RUN yarn global add nuxt

CMD [ "yarn", "run", "dev" ]
