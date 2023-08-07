import { Request, Response } from "express";
import { prismaClient } from "./graphql/context";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { authenticateToken } from "./auth";

const express = require("express");
const app = express();
// using graphqlHTTP middleware
app.use(
  "/graphql",
  graphqlHTTP(async (req) => {
    const user = await authenticateToken(
      req.headers["authorization"] as string
    );
    return {
      schema: schema,
      graphiql: true,
      context: {
        prisma: prismaClient,
        user,
      },
    };
  })
);

// middlewares
app.use(express.json());
// app.use(authenticateToken);

app.get("/", async (req: Request, res: Response) => {
  return res.status(200).json({ success: true, boo: "ha" });
});

app.listen(3000, () => {
  console.log(`Listening to 3000`);
});
