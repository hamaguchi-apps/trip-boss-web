ARG NODE_VERSION=20
ARG APP_DIRNAME=admin
ARG PROJECT=trip-boss-web
ARG RUN_ENVIRONMENT

# 1. Alpine image
FROM node:${NODE_VERSION}-alpine AS alpine
RUN apk update
RUN apk add --no-cache libc6-compat

FROM alpine AS base
RUN npm install turbo pnpm --global

RUN pnpm config set store-dir ~/.pnpm-store

# 2. Prune projects
FROM base AS pruner
# https://stackoverflow.com/questions/49681984/how-to-get-version-value-of-package-json-inside-of-dockerfile
# RUN export VERSION=$(npm run version)

ARG PROJECT

# Set working directory
WORKDIR /app

# It might be the path to <ROOT> turborepo
COPY . .

RUN turbo prune ${PROJECT} --docker

# 3. Build the project
FROM base AS builder
ARG PROJECT
ARG APP_DIRNAME
ARG RUN_ENVIRONMENT

# Environment to skip .env validation on build
ENV CI=true

WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# First install the dependencies (as they change less often)
RUN --mount=type=cache,id=pnpm,target=~/.pnpm-store pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .

RUN pnpm build --filter=${PROJECT} -- --mode ${RUN_ENVIRONMENT}

RUN chmod a+x ./apps/${APP_DIRNAME}/entrypoint.sh

# 4. Final image - runner stage to run the application
FROM base AS runner
ARG APP_DIRNAME

# Don't run production as root
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 vite
# USER vite

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder --chown=nodejs:vite /app .
COPY --from=builder /app .
WORKDIR /app/apps/${APP_DIRNAME}

ARG PORT=3010
ENV PORT=${PORT}
EXPOSE ${PORT}

ENTRYPOINT [ "./entrypoint.sh" ]
