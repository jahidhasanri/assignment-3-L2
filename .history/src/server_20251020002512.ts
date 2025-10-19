import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./Modeules/Routes/index"; // ⚠️ নিশ্চিত করো এই path ঠিক আছে

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ important: mount all routes under /api
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("✅ Server is running...");
});

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Mongo connection error:", err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
