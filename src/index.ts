import express, { Request, Response } from "express";
import dotenv from "dotenv";

// Load environment variables from specified path
dotenv.config({ path: process.env.DOTENV_PATH });

const app = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to YellowStone Server!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
