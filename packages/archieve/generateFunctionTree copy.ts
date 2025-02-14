// import { SchemaType, type ResponseSchema } from "@google/generative-ai";
// import { getAiResponse } from "./getAiResponse";
// import { getSubTasksPrompt } from "./prompts/getSplitTaskPrompt";
// import { sleep } from "./sleep";
// import { z } from "zod";
// import { write } from "bun";

// // Define a zod schema for each task.
// const TaskSchema = z.object({
//   functionName: z.string(),
//   description: z.string(),
//   shouldBeSplit: z.boolean(),
//   pseudocode: z.string(),
//   arguments: z.string(),
//   returns: z.string(),
// });

// // Define the expected JSON schema for the API response.
// const functionTreeShcema: ResponseSchema = {
//   description: "A tree structure of functions",
//   type: SchemaType.ARRAY,
//   items: {
//     type: SchemaType.OBJECT,
//     properties: {
//       functionName: {
//         type: SchemaType.STRING,
//         description: "Name of the function",
//         nullable: false,
//       },
//       description: {
//         type: SchemaType.STRING,
//         description: "Description of the function",
//         nullable: false,
//       },
//       arguments: {
//         type: SchemaType.STRING,
//         description:
//           "Arguments shape and type of the function written as a zod schema",
//         nullable: false,
//       },
//       returns: {
//         type: SchemaType.STRING,
//         description:
//           "Return shape and type of the function written as a zod schema",
//         nullable: false,
//       },
//       shouldBeSplit: {
//         type: SchemaType.BOOLEAN,
//         description:
//           "Whether the function should be split into smaller functions",
//         nullable: false,
//       },
//       pseudocode: {
//         type: SchemaType.STRING,
//         description:
//           "minimal pseudocode of the function with syntax similar to Typescript, don't inlcude any comments. for example: `func addTwoNumbers(x: number, y: number) => number (x + y)`",
//         nullable: false,
//       },
//     },
//     required: [
//       "functionName",
//       "description",
//       "arguments",
//       "returns",
//       "shouldBeSplit",
//       "pseudocode",
//     ],
//   },
// };

// // This function sends the task to the AI and returns a JSON string representing an array of sub tasks.
// export const splitTask = async (task: string): Promise<string> => {
//   const prompt = getSubTasksPrompt(task);
//   const tasks = await getAiResponse({
//     task,
//     prompt,
//     responseMimeType: "application/json",
//     responseSchema: functionTreeShcema,
//   });
//   return tasks;
// };

// // Define the basic task type returned by splitTask.
// export type Task = z.infer<typeof TaskSchema>;

// // Define the tree node type.
// export type TaskNode = {
//   task: Task;
//   subTasks: TaskNode[];
// };

// // Global constant for maximum recursive depth.
// const MAX_RECURSIVE_DEPTH = 10;

// /**
//  * Recursively builds a tree branch for a given task.
//  *
//  * @param task - The current task to process.
//  * @param currentDepth - The current depth in the recursion.
//  * @returns A TaskNode representing the task and its (possibly recursive) subtasks.
//  */
// const buildSubTree = async (
//   task: Task,
//   currentDepth: number
// ): Promise<TaskNode> => {
//   // Stop recursion if the task is basic or we've reached the maximum depth.
//   if (!task.shouldBeSplit || currentDepth >= MAX_RECURSIVE_DEPTH) {
//     return { task, subTasks: [] };
//   }

//   // Call splitTask to get the subtasks.
//   const responseString = await splitTask(task.description);
//   let subTaskResults: Task[] = JSON.parse(responseString).map((item: any) =>
//     TaskSchema.parse(item)
//   );

//   // Limit to at most 2 subtasks.
//   // subTaskResults = subTaskResults.slice(0, 2);

//   // Recursively process each subtask.
//   const children: TaskNode[] = [];
//   for (const subTask of subTaskResults) {
//     const childNode = await buildSubTree(subTask, currentDepth + 1);
//     children.push(childNode);
//   }

//   return { task, subTasks: children };
// };

// /**
//  * Builds the complete task tree starting from an initial task string.
//  *
//  * The root node is created from the initial string, then splitTask is called
//  * to generate the first level of subtasks.
//  *
//  * @param initialTask - The initial task as a string.
//  * @returns A TaskNode representing the full tree.
//  */
// export const buildTaskTree = async (initialTask: string): Promise<TaskNode> => {
//   // Create a root TaskResult from the input string.
//   const rootTask: Task = {
//     functionName: "main",
//     arguments: "void",
//     returns: "void",
//     description: "main task",
//     shouldBeSplit: true,
//     pseudocode: "main()",
//   };

//   // Split the root task into subtasks.
//   const responseString = await splitTask(initialTask);
//   let subTaskResults: Task[] = JSON.parse(responseString).map((item: any) =>
//     TaskSchema.parse(item)
//   );

//   // Limit to at most 2 subtasks.
//   // subTaskResults = subTaskResults.slice(0, 2);

//   // Build the children recursively.
//   const children: TaskNode[] = [];
//   for (const subTask of subTaskResults) {
//     const childNode = await buildSubTree(subTask, 1);
//     children.push(childNode);
//   }

//   return { task: rootTask, subTasks: children };
// };

// const MAIN_TASK = "run the arch linux docker image with shell functions";

// const taskTree = await buildTaskTree(MAIN_TASK);

// console.log(JSON.stringify(taskTree, null, 2));
// const taskTreeFilePath =
//   "./taskTrees/" +
//   Date.now().toFixed().slice(-1, -4) +
//   "_" +
//   MAIN_TASK.replaceAll(" ", "_") +
//   ".json";
// // write(taskTreeFilePath, JSON.stringify(taskTree, null, 4));
// // console.log(taskTreeFilePath);
// write("./functionTree.json", JSON.stringify(taskTree, null, 2));
