FROM node:20-alpine

WORKDIR /app

# Copiar apenas os arquivos de pacotes primeiro (otimiza o cache no seu HD)
COPY package*.json ./
RUN npm install

COPY . .

# Portas que o Expo usa
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 8081

CMD ["npx", "expo", "start", "--tunnel"]
