import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

export async function POST(req) {
  const data = await req.json();
  console.log(data);

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const chat_completion = await openai.createCompletion({
    model: "davinci:ft-personal-2023-07-31-20-07-32",
    prompt: `ONLY give possible conditions that the patient may be experiencing and plans of action for each condition just deliver the necessary information. Also give explanations for your diagnosis. Here is the description: ${data.message}`, //replace this prompt according to your data
    max_tokens: 150,
  });

  console.log(chat_completion.data);

  const response = chat_completion.data.choices[0].text;
  return NextResponse.json({
    text: "This patient's history of recurrent kidney stones, osteopenia, and high-dose vitamin D supplementation, along with laboratory findings of hypercalcemia and hypercalciuria, suggest the possibility of vitamin D toxicity. Excessive intake of vitamin D can cause increased absorption of calcium from the gut, leading to hypercalcemia and hypercalciuria, which can result in kidney stones and bone loss. Treatment would involve stopping the vitamin D supplementation and potentially providing intravenous fluids and loop diuretics to promote the excretion of calcium.",
  });
}
