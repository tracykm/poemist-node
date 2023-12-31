import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export function authenticateToken(authHeader: string) {
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return;

  return new Promise((resolve) => {
    jwt.verify(
      token,
      process.env.TOKEN_SECRET as string,
      (err: any, data: any) => {
        if (err) return resolve(undefined);
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

export function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, passwordHash) => {
      if (err) return reject(err);
      resolve(passwordHash);
    });
  });
}

export function checkPassword({
  password,
  passwordHash,
}: {
  password: string;
  passwordHash: string;
}): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, function (err, res) {
      if (err) return reject(err);
      resolve(res);
    });
  });
}
