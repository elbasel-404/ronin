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
  // console.log("AI start", aiStart);
  const genModel = googleGenAi.getGenerativeModel({
    model: aiModelNameString,
    // systemInstruction: systemInstruction,
    generationConfig: {
      responseMimeType,
      responseSchema,
    },
  });
  // const { response } = await genModel.generateContent(prompt);
  const genContent = await genModel.generateContent(prompt);

  const { response } = genContent;
  const { text } = response;

  const logDebug = () => {
    const { functionCalls, text, candidates, promptFeedback, usageMetadata } =
      response;
    const functionCallResult = functionCalls();
    console.log({ functionCallResult });
    // console.log({ genContent });
    // console.log({ functionCalls });
    // console.log({ candidates });
    const formattedCandidates = candidates?.forEach((c) => {
      const {
        content,
        index,
        avgLogprobs,
        citationMetadata,
        finishMessage,
        finishReason,
        groundingMetadata,
        logprobsResult,
        safetyRatings,
      } = c;
      // console.log({ content });
      const { parts, role } = content;
      console.log({ role });
      parts.forEach((p) => {
        const {
          codeExecutionResult,
          executableCode,
          fileData,
          functionCall,
          functionResponse,
          inlineData,
          text,
        } = p;
        console.log({ codeExecutionResult });
        console.log({ executableCode });
        console.log({ fileData });
        console.log({ functionCall });
        console.log({ functionResponse });
        console.log({ inlineData });
        console.log({ text });
      });
      console.log({ index });
      console.log({ avgLogprobs });
      console.log({ citationMetadata });
      console.log({ finishMessage });
      console.log({ finishReason });
      console.log({ groundingMetadata });
      console.log({ logprobsResult });
      console.log({ safetyRatings });
    });
    console.log({ promptFeedback });
    console.log({ usageMetadata });
  };

  const responseText = text();
  console.log(responseText);
  const aiResponseFile = file("aiResponse/json/" + (task ?? prompt) + ".json");
  await write(aiResponseFile, responseText);
  console.log(aiResponseFile.name);
  const aiEnd = performance.now();
  console.log(`AI took ${(aiEnd - aiStart) / 1000} seconds`);
  return responseText;
  // ! ========================================================================
};
