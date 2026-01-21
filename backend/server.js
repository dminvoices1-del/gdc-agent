import express from "express";
import cors from "cors";
import "dotenv/config";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "No messages provided" });
    }

    const response = await openai.responses.create({
      prompt: {
        id: "pmpt_696a4bf1bb148193ac5747dacd112b900d1b5e4bd36dcf46",
        version: "3",
      },
      input: messages[messages.length - 1].content,
    });

    // Safely extract text output (handles complex agent responses)
    let reply = "(No response from AI)";
    const output = response?.output ?? [];

    for (const item of output) {
      if (!item.content) continue;

      const textBlocks = item.content
        .filter(c => c.type === "output_text" && c.text)
        .map(c => c.text);

      if (textBlocks.length) {
        reply = textBlocks.join("\n\n");
        break;
      }
    }

    res.json({ reply });

  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "AI request failed" });
  }
});

app.listen(port);
