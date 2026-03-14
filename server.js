import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(cors({ origin: ["https://greentreetech.net", "https://www.greentreetech.net"] }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
 try {
 const { name, email, message } = req.body || {};
 if (!name || !email || !message) {
 return res.status(400).json({ ok: false, error: "Missing fields" });
 }

 const transporter = nodemailer.createTransport({
 host: process.env.SMTP_HOST,
 port: Number(process.env.SMTP_PORT || 587),
 secure: String(process.env.SMTP_PORT) === "465",
 auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
 });

 await transporter.sendMail({
 from: `"${name}" <${process.env.SMTP_USER}>`,
 replyTo: email,
 to: process.env.MAIL_TO,
 subject: `GreenTree Tech Contact Form: ${name}`,
 text: message,
 });

 return res.json({ ok: true });
 } catch (e) {
 return res.status(500).json({ ok: false });
 }
});

app.listen(process.env.PORT || 3000);
