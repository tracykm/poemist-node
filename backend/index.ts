import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
// instance of prisma client
const prisma = new PrismaClient();

// graphql
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

// graphql models
const graphqlModels = `
    type Book{
        id: ID
        createdAt: String
        updatedAt: String
        title: String!
        author: String!
    }
    type Poem{
        id: ID
    }
    type User{
        id: ID
        createdAt: String
        updatedAt: String
        username: String!
        poems: [Poem!]!
    }
    type Query{
        books: [Book!]!
        randomBook: Book!
        users: [User!]! 
        hello: String 
    }
`;

// Graphql Resolvers
const resolvers = {
  Query: {
    books: () => {
      return prisma.book.findMany();
    },
    randomBook: async () => {
      const totalBooks = await prisma.book.count();
      return prisma.book.findFirst({
        skip: Math.floor(Math.random() * totalBooks),
      });
    },
    users: async () => {
      const users = await prisma.user.findMany({ include: { poems: true } });
      return users;
    },
    hello: () => "Hi!",
  },
};

// Graphql schema
const schema = makeExecutableSchema({
  resolvers,
  typeDefs: graphqlModels,
});

// using graphqlHTTP middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// middlewares
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const books = await prisma.book.findMany();

  return res.status(200).json({ success: true, books });
});

app.listen(3000, () => {
  console.log(`Listening to 3000`);
});
