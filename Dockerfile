# develop stage
FROM node:10-stretch as develop-stage
WORKDIR /app
COPY package.json ./
COPY ./yarn.lock ./
RUN yarn install --prod=false
COPY . .
# build stage
FROM develop-stage as build-stage
RUN yarn run lint && yarn build
# production stage
FROM nginx:latest as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
