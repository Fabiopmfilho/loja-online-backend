// Requisitos:
// - NestJS app com Prisma
// - Entidades: Departamento, Categoria, Produto
// - Relacionamento: 
//    - Departamento possui muitas Categorias
//    - Categoria pertence a um Departamento e possui muitos Produtos
//    - Produto pertence a uma Categoria

// --- Estrutura do Projeto ---
// prisma/schema.prisma
// src/prisma/prisma.service.ts
// src/departments/
// src/categories/
// src/products/

// --- prisma/schema.prisma ---

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Department {
  id         Int         @id @default(autoincrement())
  name       String
  categories Category[]
}

model Category {
  id            Int       @id @default(autoincrement())
  name          String
  departmentId  Int
  department    Department @relation(fields: [departmentId], references: [id])
  products      Product[]
}

model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  price       Float
  imageUrl    String?
  categoryId  Int
  category    Category @relation(fields: [categoryId], references: [id])
}

// --- src/prisma/prisma.service.ts ---

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

// --- src/app.module.ts ---

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  providers: [PrismaService],
})
export class AppModule {}

// --- Próximos passos ---
// 1. Criar os módulos: departments, categories, products (com controller e service)
// 2. Implementar rotas REST básicas: GET, POST, etc.
// 3. Criar seed de teste (opcional)
