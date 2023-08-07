import { Request, Response } from "express";
import { context } from "./graphql/context";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";

const express = require("express");
const app = express();
// using graphqlHTTP middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context,
  })
);

// middlewares
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  return res.status(200).json({ success: true, boo: "ha" });
});

app.listen(3000, () => {
  console.log(`Listening to 3000`);
});