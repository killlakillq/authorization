import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const secret = process.env.SECRET!;

export const generateAccessToken = (id: Types.ObjectId, password: string) => {
     const payload = {
          id,
          password
     }
     return jwt.sign(payload, secret, { expiresIn: "24h" });
}
