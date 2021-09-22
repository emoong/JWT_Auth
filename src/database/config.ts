import Dotenv from 'dotenv';
Dotenv.config();

type Config = {
  MONGO_ID: string;
  MONGO_PW: string;
  MONGO_COLLECTION: string;
}

const config: Config = {
  MONGO_ID: process.env.MONGO_ID!,
  MONGO_PW: process.env.MONGO_PW!,
  MONGO_COLLECTION: process.env.MONGO_COLLECTION!,
}

export default config;