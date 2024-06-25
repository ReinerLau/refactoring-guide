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
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
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
  aPerson.courses.push(new Course(name, false));
}

export const numAdvancedCourses = aPerson.courses.filter(
  (c) => c.isAdvanced
).length;
