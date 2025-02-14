import { executeCommand } from "../../../actions/server/executeCommand";

const command = "echo Hello, world!";
const output = await executeCommand(command);
console.log(output); // Hello, world!
