var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var promptSync = require('prompt-sync')();
var tasks = [];
function addTask(tasks, description) {
    var id = tasks.length + 1;
    var newTask = {
        id: id,
        description: description,
        done: false,
    };
    return __spreadArray(__spreadArray([], tasks, true), [newTask], false);
}
function markTaskDone(tasks, taskId) {
    return tasks.map(function (task) { return (task.id === taskId ? __assign(__assign({}, task), { done: true }) : task); });
}
function removeTask(tasks) {
    return tasks.filter(function (task) { return !task.done; });
}
function showTasks(tasks) {
    tasks.forEach(function (task) {
        var status = task.done ? 'Done' : 'Not Done';
        console.log("".concat(status, " Task ").concat(task.id, ": ").concat(task.description));
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
        var choice = parseInt(promptSync("Enter your option (1-5): "), 10);
        switch (choice) {
            case 1:
                var addTaskDesc = promptSync("Enter the task to add: ");
                tasks = addTask(tasks, addTaskDesc);
                console.log("Task \"".concat(addTaskDesc, "\" added successfully."));
                break;
            case 2:
                var doneTaskId = parseInt(promptSync("Enter the task ID to mark as done: "), 10);
                tasks = markTaskDone(tasks, doneTaskId);
                console.log("Task ".concat(doneTaskId, " marked as done."));
                break;
            case 3:
                tasks = removeTask(tasks);
                console.log("Completed tasks removed successfully.");
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
