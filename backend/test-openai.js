import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function testAgent() {
  const response = await openai.responses.create({
    prompt: {
      id: "pmpt_696a4bf1bb148193ac5747dacd112b900d1b5e4bd36dcf46",
      version: "2"
    }
  });

  console.log(response.output_text);
}

testAgent();
