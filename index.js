//Notas dos alunos

classA = [

    {
        name: 'Paulo',
        grade: 10
    },

    {
        name: 'Diego',
        grade: 9.8
    },

    {
        name: 'Mayk',
        grade: 2
    },

    {
        name: 'Marina',
        grade: 9.2
    }
]

classB = [

    {
    name: 'Cleiton',
    grade: 7
    },

    {
        name: 'Ana',
        grade: 4
    },

    {
        name: 'Thiago',
        grade: 2.5
    },

    {
        name: 'Afonso',
        grade: 2.5
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`Class ${turma}, average has been ${average} . Good work!!`)
    } else {
        console.log(`Class ${turma}, average has been ${average} . It isn't good!!`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

sendMessage(averageA, 'A')
sendMessage(averageB, 'B')

studentsflunkeds(classA)
studentsflunkeds(classB)