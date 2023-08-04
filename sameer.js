var promptSync = require('prompt-sync');
var myPrompt = promptSync();
var subjectMarks = myPrompt("enter your subject marks:");
var marks = parseInt(subjectMarks);
var grade = "";
if (marks >= 90) {
    grade = "a";
}
else if (marks >= 80) {
    grade = "b";
}
else if (marks >= 70) {
    grade = "c";
}
else if (marks >= 60) {
    grade = "d";
}
else {
    grade = "f";
}
console.log("your grade is " + grade);
