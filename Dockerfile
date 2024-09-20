FROM node:22-slim

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD ["node", "index.js"]