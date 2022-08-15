/*
Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.
*/

function createStudent(name, year) {
  return {  
    name,
    year,
    courses: [],
    notes: {},
    
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    listCourses() {
      console.log(this.courses);
    },
    
    addCourse(course) {
      this.courses.push(course);
    },
    
    addNote(courseNumber, note) {
      let courseName = this.findCourseName(courseNumber);
      
      if (Object.keys(this.notes).includes(courseName)) {
        this.notes[courseName] += `; ${note}`;
      } else {
        this.notes[courseName] = note;
      }
    },
    
    findCourseName(courseCode) {
      for (let ind = 0; ind < this.courses.length; ind++) {
        if (this.courses[ind]['code'] === courseCode) {
          return this.courses[ind]['name'];
        }
      } 
    },
      
    viewNotes() {
      Object.keys(this.notes).forEach(key => console.log(`${key}: ${this.notes[key]}`));
    },
    
    updateNote(courseCode, note) {
      let courseName = this.findCourseName(courseCode);
      
      if (!Object.keys(this.notes).includes(courseName)) return;
      this.notes[courseName] = note;
    },
  }
}


let foo = createStudent('Foo', '1st');
foo.info(); // "Foo is a 1st year student"
foo.listCourses();// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses(); // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');

foo.viewNotes(); // "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');

foo.viewNotes(); // "Math: Fun course; Remember to study for algebra"
                 // "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes(); // "Math: Fun course"
                 //"Advanced Math: Difficult subject"
                 