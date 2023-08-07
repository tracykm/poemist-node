import jwt from "jsonwebtoken";

export function authenticateToken(authHeader: string) {
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return;

  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.TOKEN_SECRET as string,
      (err: any, data: any) => {
        if (err) return reject(err);
        resolve(data.user);
      }
    );
  });
}

export function generateAccessToken(user: { username: string }) {
  return jwt.sign({ user }, process.env.TOKEN_SECRET as string, {
    expiresIn: "90m",
  });
}
