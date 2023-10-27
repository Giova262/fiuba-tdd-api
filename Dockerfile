FROM node:18

WORKDIR /app

COPY package*.json ./

# RUN npm install -g npm@10.2.1
RUN npm install

COPY . .

# RUN npm run dev

CMD [ "npm", "run", "dev" ]
# CMD [ "node", "src/main.ts" ]

# RUN npm i -g @nestjs/cli
# RUN npm run build
# RUN npm install -g npm@10.2.1
# RUN nest start --watch
# CMD [ "npm", "start" ]
