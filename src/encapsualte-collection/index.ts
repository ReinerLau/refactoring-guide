class Person {
  private _name: string;
  private _courses: Array<Course>;
  constructor(name: string) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses.slice();
  }
  set courses(aList) {
    this._courses = aList.slice();
  }

  addCourse(aCourse: Course) {
    this._courses.push(aCourse);
  }

  removeCourse(aCourse: Course) {
    const index = this._courses.indexOf(aCourse);
    this._courses.splice(index, 1);
  }
}

class Course {
  private _name: string;
  private _isAdvanced: boolean;
  constructor(name: string, isAdvanced: boolean) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

function readBasicCourseNames() {
  return ["Basic Course 1", "Basic Course 2", "Basic Course 3"];
}

const aPerson = new Person("Reiner");

for (const name of readBasicCourseNames()) {
  aPerson.addCourse(new Course(name, false));
}

export const numAdvancedCourses = aPerson.courses.filter(
  (c) => c.isAdvanced
).length;
