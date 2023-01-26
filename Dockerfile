FROM node:alpine

ARG REACT_APP_BACKEND
ENV REACT_APP_BACKEND $REACT_APP_BACKEND

WORKDIR /term-front

COPY src ./src
COPY public ./public
COPY .prettierignore ./
COPY .prettierrc ./
COPY .stylelintignore ./
COPY .stylelintrc ./
COPY config-overrides.js ./
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.paths.json ./
COPY webpack.config.js ./
COPY yarn.lock ./

EXPOSE 3000

RUN yarn install --frozen-lockfile
RUN yarn build
RUN npm i -g serve
CMD serve -s ./build