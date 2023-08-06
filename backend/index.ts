import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get("/users", async (req: any, res: any) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

const server = app.listen(3000);
