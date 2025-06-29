FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bookworm

WORKDIR /workspace

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx", "nest", "start", "api", "--watch"] 