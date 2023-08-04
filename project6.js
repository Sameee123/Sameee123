var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.coursesEnrolled = [];
        this.balance = 0;
    }
    Student.prototype.generateStudentID = function () {
        var idLength = 5;
        var id = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (var i = 0; i < idLength; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            id += characters[randomIndex];
        }
        return id;
    };
    Student.prototype.enrollCourse = function (course) {
        this.coursesEnrolled.push(course);
    };
    Student.prototype.viewBalance = function () {
        console.log("Balance for ".concat(this.name, ": $").concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("Payment of $".concat(amount, " received from ").concat(this.name, "."));
        this.viewBalance();
    };
    Student.prototype.showStatus = function () {
        console.log("Student Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.studentID));
        console.log("Courses Enrolled: ".concat(this.coursesEnrolled.join(', ')));
        this.viewBalance();
    };
    return Student;
}());
// Example usage
var student1 = new Student('sameer');
student1.enrollCourse('Math');
student1.enrollCourse('English');
student1.enrollCourse('Science');
student1.viewBalance();
student1.payTuition(400);
student1.showStatus();
var student2 = new Student('sameer khan');
student2.enrollCourse('History');
student2.enrollCourse('English');
student2.enrollCourse('math');
student1.viewBalance();
student1.payTuition(30);
student1.showStatus();
