import {
    GoogleGenerativeAI,
} from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const apiKey = process.env.GEMINI_API_KEY as string;
  const genAI = new GoogleGenerativeAI(apiKey);
  const fileManager = new GoogleAIFileManager(apiKey);
  
  /**
   * Uploads the given file to Gemini.
   *
   * See https://ai.google.dev/gemini-api/docs/prompting_with_media
   */
  async function uploadToGemini(path, mimeType) {
    const uploadResult = await fileManager.uploadFile(path, {
  async function uploadToGemini(path: string, mimeType: string) {
      displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
  }
  
  /**
   * Waits for the given files to be active.
   *
   * Some files uploaded to the Gemini API need to be processed before they can
   * be used as prompt inputs. The status can be seen by querying the file's
   * "state" field.
   *
   * This implementation uses a simple blocking polling loop. Production code
   * should probably employ a more sophisticated approach.
   */
  async function waitForFilesActive(files) {
    console.log("Waiting for file processing...");
  async function waitForFilesActive(files: any[]) {
      let file = await fileManager.getFile(name);
    for (const name of files.map((file: any) => file.name)) {
        process.stdout.write(".")
        await new Promise((resolve) => setTimeout(resolve, 10_000));
        file = await fileManager.getFile(name)
      }
      if (file.state !== "ACTIVE") {
        throw Error(`File ${file.name} failed to process`);
      }
    }
    console.log("...all files ready\n");
  }
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite-preview-02-05",
    tools: [
      {
        functionDeclarations: [
          {
            name: "get zsh script",
            description: "given a task, output a shell script that implements it interactivly"
          }
        ]
      }
    ],
    toolConfig: {functionCallingConfig: {mode: "ANY"}},
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    // TODO Make these files available on the local file system
    // You may need to update the file paths
    const files = [
      await uploadToGemini("shell.md", "text/markdown"),
    ];
  
    // Some files have a processing delay. Wait for them to be ready.
    await waitForFilesActive(files);
  
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              fileData: {
                mimeType: files[0].mimeType,
                fileUri: files[0].uri,
              },
            },
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    for(candidate of result.response.candidates) {
      for(part of candidate.content.parts) {
    for(const candidate of result.response.candidates) {
      for(const part of candidate.content.parts) {
          const args = Object
            .keys(items)
            .map((data) => [data, items[data]])
            .map(([key, value]) => `${key}:${value}`)
            .join(', ');
          console.log(`${part.functionCall.name}(${args})`);
        }
      }
    }
  }
  
  run();