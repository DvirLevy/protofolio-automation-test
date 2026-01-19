FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG TEST_SUITE
ENV TEST_SUITE=${TEST_SUITE}

CMD ["sh", "-c", "npm run test:$TEST_SUITE"]