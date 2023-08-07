import { PrismaClient, User } from "@prisma/client";

export const prismaClient = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  user: User;
}
