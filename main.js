import express from "express";
import movieroutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";
import path from "path";

const app = express();
const port = 3000;

// CONNECT DB
connectDB();

// parse JSON/form bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes (mount before static to avoid conflicts)
app.use("/movies", movieroutes);

// Serve frontend static files from ./frontend
const frontendDir = path.resolve("./frontend");
app.use(express.static(frontendDir));

// Fallback for SPA / index.html — use a middleware to avoid path-to-regexp parsing
app.use((req, res) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});

app.listen(port, () => {
  console.log(`SERVER LISTENING AT http://localhost:${port}`);
});

// dry Principle don't reuse anything
// kiss PRINCIPLE keep it so simple
