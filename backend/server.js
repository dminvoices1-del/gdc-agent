import express from "express";
import cors from "cors";
import 'dotenv/config';
import OpenAI from "openai";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // parse JSON body

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// POST /chat endpoint
app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    // Use your preconfigured agent
    const response = await openai.responses.create({
      prompt: {
        id: "pmpt_696a4bf1bb148193ac5747dacd112b900d1b5e4bd36dcf46",
        version: "2",
      },
      input: messages[messages.length - 1]?.content || ""
    });

    const reply = response.output[0].content[0].text || "(No response)";

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
