FROM mcr.microsoft.com/playwright:v1.18.0-focal

WORKDIR /app
COPY . .

RUN npm install
CMD ["npx", "playwright", "test"]
