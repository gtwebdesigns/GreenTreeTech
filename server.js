import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", async (req, res) => {
 try {
 const { prompt } = req.body;
 const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
 const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 const result = await model.generateContent(prompt);
 res.json({ text: result.response.text() });
 } catch (e) {
 res.status(500).json({ error: "Generation failed" });
 }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "dist", "index.html")));

const port = process.env.PORT || 3000;
app.listen(port);
