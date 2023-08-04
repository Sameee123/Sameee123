 promptSync = require('prompt-sync');
var myPrompt =promptSync();

let tasks: Task[] = [];

interface Task {
  id: number;
  description: string;
  done: boolean;
}

function addTask(tasks: Task[], description: string): Task[] {
  const id = tasks.length + 1;
  const newTask: Task = {
    id,
    description,
    done: false,
  };
  return [...tasks, newTask];
}

function markTaskDone(tasks: Task[], taskId: number): Task[] {
  return tasks.map(task => (task.id === taskId ? { ...task, done: true } : task));
}

function removeTask(tasks: Task[]): Task[] {
  return tasks.filter(task => !task.done);
}

function showTasks(tasks: Task[]): void {
  tasks.forEach(task => {
    const status = task.done ? 'Done' : 'Not Done';
    console.log(`${status} Task ${task.id}: ${task.description}`);
  });
}

function main() {
  console.log("Welcome to Todo Machine");

  while (true) {
    console.log("\nOptions");
    console.log("1. Add Task");
    console.log("2. Mark Task Done");
    console.log("3. Remove Task");
    console.log("4. Show Tasks");
    console.log("5. Exit");

    const choice = parseInt(promptSync("Enter your option (1-5): "), 10);

    switch (choice) {
      case 1:
        const addTaskDesc = promptSync("Enter the task to add: ");
        tasks = addTask(tasks, addTaskDesc);
        console.log(`Task "${addTaskDesc}" added successfully.`);
        break;

      case 2:
        const doneTaskId = parseInt(promptSync("Enter the task ID to mark as done: "), 10);
        tasks = markTaskDone(tasks, doneTaskId);
        console.log(`Task ${doneTaskId} marked as done.`);
        break;

      case 3:
        tasks = removeTask(tasks);
        console.log(`tasks removed .`);
        break;

      case 4:
        showTasks(tasks);
        break;

      case 5:
        console.log("Thank you for using the Todo List. Have a nice day!");
        process.exit(0);

      default:
        console.log("Invalid choice. Please enter valid options (1-5).");
    }
  }
}

main();
