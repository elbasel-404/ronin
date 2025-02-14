export const getPlanPrompt = (task: string) => {
  const prompt = `Given this task: "${task}", provide a list of steps to achieve it, reply only using the following json format: 
        {
                "task": "main task description",
                "taskName": "uniqueTaskIdentifier",
                "howToTest": "how to test the main task",
                "command": "command to execute task && command to test it || echo 'Test failed: main task'",
                "steps": [
                        {
                                "task": "step description",
                                "taskName": "uniqueStepIdentifier",
                                "dependsOn": ["taskNameThatNeedsToBeCompletedFirst"],
                                "howToTest": "how to test this step",
                                "command": "command to execute step && command to test it || echo 'Test failed: step description'",
                                "steps": [] // nested steps follow the same structure
                        }
                ]
        }`;

  return prompt;
};
