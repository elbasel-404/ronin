import { SchemaType } from "@google/generative-ai";
import { getAiResponse } from "./getAiResponse";
import { getSubTasksPrompt } from "./prompts/getSplitTaskPrompt";
import { sleep } from "./sleep";
import { z } from "zod";

// Define a zod schema for each task.
const zodSchema = z.object({
  isBasicTask: z.boolean(),
  description: z.string(),
  name: z.string(),
  pseudocode: z.string(),
});

// Define the expected JSON schema for the API response.
const schema = {
  description: "List of sub tasks",
  type: SchemaType.ARRAY,
  items: {
    type: SchemaType.OBJECT,
    properties: {
      name: {
        type: SchemaType.STRING,
        description: "Name of the sub task",
        nullable: false,
      },
      description: {
        type: SchemaType.STRING,
        description: "Description of the sub task",
        nullable: false,
      },
      isBasicTask: {
        type: SchemaType.BOOLEAN,
        description:
          "Whether the task is simple enough to not be divided further. If so, this should be true.",
        nullable: false,
      },
      pseudocode: {
        type: SchemaType.STRING,
        description: "Pseudo code for the task",
        nullable: false,
      },
    },
    required: ["name", "description", "isBasicTask", "pseudocode"],
  },
};

// This function sends the task to the AI and returns a JSON string representing an array of sub tasks.
export const splitTask = async (task: string): Promise<string> => {
  const prompt = getSubTasksPrompt(task);
  const tasks = await getAiResponse({
    task,
    prompt,
    responseMimeType: "application/json",
    responseSchema: schema,
  });
  return tasks;
};

// Define the basic task type returned by splitTask.
export type TaskResult = {
  name: string;
  description: string;
  isBasicTask: boolean;
};

// Define the tree node type.
export type TaskNode = {
  task: TaskResult;
  subTasks: TaskNode[];
};

// Global constant for maximum recursive depth.
const MAX_RECURSIVE_DEPTH = 10;

/**
 * Recursively builds a tree branch for a given task.
 *
 * @param task - The current task to process.
 * @param currentDepth - The current depth in the recursion.
 * @returns A TaskNode representing the task and its (possibly recursive) subtasks.
 */
const buildSubTree = async (
  task: TaskResult,
  currentDepth: number
): Promise<TaskNode> => {
  // Stop recursion if the task is basic or we've reached the maximum depth.
  if (task.isBasicTask || currentDepth >= MAX_RECURSIVE_DEPTH) {
    return { task, subTasks: [] };
  }

  // Call splitTask to get the subtasks.
  const responseString = await splitTask(task.description);
  let subTaskResults: TaskResult[] = JSON.parse(responseString).map(
    (item: any) => zodSchema.parse(item)
  );

  // Limit to at most 2 subtasks.
  subTaskResults = subTaskResults.slice(0, 2);

  // Recursively process each subtask.
  const children: TaskNode[] = [];
  for (const subTask of subTaskResults) {
    const childNode = await buildSubTree(subTask, currentDepth + 1);
    children.push(childNode);
  }

  return { task, subTasks: children };
};

/**
 * Builds the complete task tree starting from an initial task string.
 *
 * The root node is created from the initial string, then splitTask is called
 * to generate the first level of subtasks.
 *
 * @param initialTask - The initial task as a string.
 * @returns A TaskNode representing the full tree.
 */
export const buildTaskTree = async (initialTask: string): Promise<TaskNode> => {
  // Create a root TaskResult from the input string.
  const rootTask: TaskResult = {
    name: initialTask,
    description: initialTask,
    isBasicTask: false,
  };

  // Split the root task into subtasks.
  const responseString = await splitTask(initialTask);
  let subTaskResults: TaskResult[] = JSON.parse(responseString).map(
    (item: any) => zodSchema.parse(item)
  );

  // Limit to at most 2 subtasks.
  subTaskResults = subTaskResults.slice(0, 2);

  // Build the children recursively.
  const children: TaskNode[] = [];
  for (const subTask of subTaskResults) {
    const childNode = await buildSubTree(subTask, 1);
    children.push(childNode);
  }

  return { task: rootTask, subTasks: children };
};

// Ujge example:
const MAIN_TASK = "make a cup of tea";

const taskTree = await buildTaskTree(MAIN_TASK);
console.log(taskTree);
