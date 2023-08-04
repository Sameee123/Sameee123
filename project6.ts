class Student {
  name: string;
  studentID: string;
  coursesEnrolled: string[];
  balance: number;

  constructor(name: string) {
    this.name = name;
    this.studentID = this.generateStudentID();
    this.coursesEnrolled = [];
    this.balance = 0;
  }

  private generateStudentID(): string {
    const idLength = 5;
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }

    return id;
  }

  enrollCourse(course: string): void {
    this.coursesEnrolled.push(course);
  }

  viewBalance(): void {
    console.log(`Balance for ${this.name}: $${this.balance}`);
  }

  payTuition(amount: number): void {
    this.balance -= amount;
    console.log(`Payment of $${amount} received from ${this.name}.`);
    this.viewBalance();
  }

  showStatus(): void {
    console.log(`Student Name: ${this.name}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Courses Enrolled: ${this.coursesEnrolled.join(', ')}`);
    this.viewBalance();
  }
}

// Example usage
const student1 = new Student('sameer');
student1.enrollCourse('Math');
student1.enrollCourse('English');
student1.enrollCourse('Science');

student1.viewBalance(); 

student1.payTuition(400);
student1.showStatus(); 

const student2 = new Student('sameer khan');
student2.enrollCourse('History');
student2.enrollCourse('English');
student2.enrollCourse('math'); 

student1.viewBalance(); 

student1.payTuition(30);
student1.showStatus(); 



  