import express from "express";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { Pool } from "pg";

const app = express();

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});



app.listen(process.env.PORT, () => {
  console.log(`Server listening in port {process.env.PORT}`);
});
