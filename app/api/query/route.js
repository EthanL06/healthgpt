import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

export async function POST(req) {
  const data = await req.json();
  console.log(data);

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  // const chat_completion = await openai.createCompletion({
  //   model: "davinci:ft-personal-2023-07-31-20-07-32",
  //   prompt: `You are HealthGPT, a patient diagnosis tool to help healthcare workers confirm their diagnosis. When you receive a description from a healthcare worker, simply verify or deliver the correct diagnosis or treatment plan, nothing else. Please do not add anything extra information that is not health-related or may confuse professionals. Your target audience is healthcare professionals so do not add any unnecessary or extra information that these professionals would already know. Only deliver health-related instructions. Do not repeat any unnecessary information. Solely deliver diagnostic. Finish your answer in a complete sentence. Here is the description: ${data.message}`, //replace this prompt according to your data
  //   max_tokens: 150,
  // });

  // console.log(chat_completion.data);

  // const response = chat_completion.data.choices[0].text;

  // wait 3 seconds then return the response

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json({
    text: "This patient's history of recurrent kidney stones, osteopenia, and high-dose vitamin D supplementation, along with laboratory findings of hypercalcemia and hypercalciuria, suggest the possibility of vitamin D toxicity. Excessive intake of vitamin D can cause increased absorption of calcium from the gut, leading to hypercalcemia and hypercalciuria, which can result in kidney stones and bone loss. Treatment would involve stopping the vitamin D supplementation and potentially providing intravenous fluids and loop diuretics to promote the excretion of calcium.",
  });
}
