pnpm add class-validator class-transformer

pnpm add zod

pnpm add @nestjs/typeorm typeorm pg
pnpm add @nestjs/mapped-types
pnpm add typeorm-extension @faker-js/faker
pnpm add @nestjs/config

pnpm add bcrypt
pnpm add -D @types/bcrypt

pnpm add @nestjs/passport passport passport-local
pnpm add @types/passport-local

nest g gu auth/guards/local-auth

openssl rand -hex 32
pnpm add @nestjs/jwt passport-jwt
pnpm add -D @types/passport-jwt

nest g gu auth/guards/jwt-auth
nest g gu auth/guards/refresh-auth

pnpm add argon2