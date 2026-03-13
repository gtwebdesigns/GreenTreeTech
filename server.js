import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", async (req, res) => {
 try {
 const { prompt } = req.body;
 const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
 const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 const result = await model.generateContent(prompt);
 res.json({ text: result.response.text() });
 } catch (e) {
 res.status(500).json({ error: "Generation failed" });
 }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on ${port}`));
