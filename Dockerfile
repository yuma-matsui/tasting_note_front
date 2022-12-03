FROM node:18.12.1-alpine

ARG REACT_APP_API_URL

ENV LANG=C.UTF-8 \
    TZ=Azia/Tokyo

WORKDIR /app

COPY . ./

RUN npm install
