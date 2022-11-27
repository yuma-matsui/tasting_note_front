FROM node:18.12.1-alpine

ARG REACT_APP_API_URL

ENV LANG=C.UTF-8 \
    TZ=Azia/Tokyo \
    REACT_APP_API_URL=${REACT_APP_API_URL}

WORKDIR /app

COPY . ./

RUN npm install
