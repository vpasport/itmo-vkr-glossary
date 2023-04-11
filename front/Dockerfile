FROM node:alpine

ARG REACT_APP_BACKEND
ENV REACT_APP_BACKEND ${REACT_APP_BACKEND}

WORKDIR /term-front

COPY / ./

EXPOSE 3000

RUN yarn install --frozen-lockfile
RUN yarn build
# CMD npm run start
# RUN npm i -g serve
# CMD serve -s ./build