# ---- build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps
COPY app/package*.json ./
RUN npm ci

# Copy source + build
COPY app/ .
RUN npm run build

# ---- runtime stage ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built app
COPY --from=builder /app ./

# Next.js default port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]
