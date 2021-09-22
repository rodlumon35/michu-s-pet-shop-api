import env from "dotenv";
env.config();

export default {
  SECRET: process.env.SECRET_WORD,