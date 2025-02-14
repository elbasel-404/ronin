import { GoogleGenerativeAI } from "@google/generative-ai";
import { file, write } from "bun";
// import { aiModel, systemInstruction } from "./config";
import { aiModelNameString } from "./config";

const apiKey = process.env.GEMINI_API_KEY as string;
const googleGenAi = new GoogleGenerativeAI(apiKey);

type GetAiResponseArgs = {
  prompt: string;
  // context?: string;
  responseMimeType?: "text" | "application/json" | "text/md";
  responseSchema?: object;
  task?: string;
};

export const getAiResponse = async ({
  task,
  prompt,
  // context,
  responseMimeType,
  responseSchema,
}: GetAiResponseArgs) => {
  const aiStart = performance.now();
  console.log("AI start", aiStart);
  const genModel = googleGenAi.getGenerativeModel({
    model: aiModelNameString,
    // systemInstruction: systemInstruction,
    generationConfig: {
      responseMimeType,
      responseSchema,
    },
  });
  const { response } = await genModel.generateContent(prompt);
  const { text } = response;
  const responseText = text();
  const aiResponseFile = file("aiResponse/json/" + (task ?? prompt) + ".json");
  await write(aiResponseFile, responseText);
  console.log(aiResponseFile.name);
  const aiEnd = performance.now();
  console.log(`AI took ${(aiEnd - aiStart) / 1000} seconds`);
  return responseText;
  // ! ========================================================================
};
