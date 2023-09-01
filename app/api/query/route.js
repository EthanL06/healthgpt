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

  const chat_completion = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `You are HealthGPT, a patient diagnosis tool to help healthcare workers confirm their diagnosis. When you receive a description from a healthcare worker, simply verify or deliver the correct diagnosis or treatment plan. Please do not add anything extra information that is not health-related or may confuse professionals. Your target audience is healthcare professionals so do not add any unnecessary or extra information that these professionals would already know. Only deliver health-related instructions. Do not repeat any unnecessary information. Solely deliver diagnostic. Finish your answer in a complete sentence. You have a maximum of 300 tokens. Here is the description: ${data.message}.`,
        },
      ],
      max_tokens: 300,
    })
    .then((res) => {
      console.log(res.data.choices[0]);
      return res.data.choices[0].message.content;
    });

  console.log(chat_completion);

  // const response = chat_completion.data.choices[0].text;
  return NextResponse.json({ text: chat_completion });
}
