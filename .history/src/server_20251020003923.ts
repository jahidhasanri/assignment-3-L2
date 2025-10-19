import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// POST route for /books
app.post("/books", (req: Request, res: Response) => {
  const book = req.body;
  console.log("Received book:", book);
  res.status(201).json({ message: "Book created successfully", data: book });
});

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
