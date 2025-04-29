FROM node:16.14.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

ENV PORT=5173

CMD npm run dev --host 0.0.0.0
# ["npm", "run","dev", "--host", "0.0.0.0"]