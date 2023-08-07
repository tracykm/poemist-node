import { Request, Response } from "express";
import { prismaClient } from "./graphql/context";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { authenticateToken } from "./auth";
const cors = require("cors");

const express = require("express");
const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://poemist.net",
      "http://poemist.net",
      "https://tracykm.github.io",
    ],
  })
);

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

app.get("/", async (req: Request, res: Response) => {
  return res.status(200).json({ success: true });
});

app.listen(8000, () => {
  console.log(`Listening to 8000`);
});
