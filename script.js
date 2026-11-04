class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// Create Students

let studentsList = [
    new Student(1, "Shahd", [90, 85, 95], 90),
    new Student(2, "Emad", [60, 45, 45], 80),
    new Student(3, "Rahma", [66, 70, 65], 85),
    new Student(4, "Maha", [65, 48, 42], 90),
    new Student(5, "Ali", [45,50,45],45)
];

// Filter Struggling Students

let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();

    return average >= 40 && average <= 49;
});

// Add 5 Mercy Marks

let mercyStudents = strugglingStudents.map(student => {
    let oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: oldAverage + 5
    };
});

// Calculate New Averages

let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// Protect Against Division By Zero

let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

studentsList.forEach(student => {
    let average = student.calculateAverage();

    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Average:", average);
    console.log("Grade:", student.getGrade(average));
    console.log("Result:", student.getResult(average));

    console.log("******");
});

console.log(mercyStudents);

console.log(mercyAverage);