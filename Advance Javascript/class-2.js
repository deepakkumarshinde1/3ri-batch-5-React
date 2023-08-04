class User {
  constructor(_details) {
    this.name = _details.name;
    this.city = _details.city;
    this.locality = _details.locality;
    this.mobile = _details.mobile;
  }

  printDetails() {
    console.log(this.name);
    console.log(this.city);
    console.log(this.locality);
    console.log(this.mobile);
  }
}

class Student extends User {
  checkAttendance() {}
  submitAssignment() {}
}

class Teacher extends User {
  markAttendance() {}
  addTestResult() {}
  viewStudentProfile() {}
}

class Clerk extends User {
  addStudentFeeDetails() {}
  printMonthlyCatalog() {}
}

let details = {
  name: "Deepakkumar",
  city: "Nashik",
  locality: "Ashoka Marg",
  mobile: 8007070845,
};

let user = new Student(details);
user.printDetails();
console.log(user.city);
