FROM node:14

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

# anything before this is building
CMD ["yarn", "dev"]