import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  PORT: process.env.PORT,
  MONGODB_CONNECT: process.env.MONGODB_CONNECT,
};
