class Student {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    fullname() {
        return `Your Full name is ${this.firstname} ${this.lastname}`;
    }
   //utility functions
    static sendNotifications(...students) {
         students.forEach((student => {
                console.log(`Sending email notification to ${student.firstname} ${student.lastname}`);
         }));
    }
}


let student1 = new Student("Raj", "Ramayampeta");
let student2 = new Student("Max", "Maxum");

console.log(student1);
console.log(student1.firstname + " " +student1.lastname);
console.log(student1.fullname());
console.log(student2);
student2.lastname = "Gopu";
console.log(student2);