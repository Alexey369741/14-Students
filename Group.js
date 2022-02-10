import Student from "./Student.js";

class Group {
    #students = [];

    addStudent(student) {
        if (this.isStudent(student)) {
            this.#students.push(student);
        }
    }

    isStudent(student) {
        return student instanceof Student;
    }

    getAverageMark() {
        const marksSum = this.getMarksSum();

        return marksSum / this.students.length;
    }

    getMarksSum() {
        return this.students.reduce((acc, student) => acc + student.getAverageMark(), 0)
    }

    get students() {
        return this.#students;
    }
}

export default Group;