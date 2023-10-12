function addCourse() {
    const subject = document.getElementById('subject').value;
    const credit = parseFloat(document.getElementById('credit').value);
    const grade = parseFloat(document.getElementById('grade').value);

    if (!subject || !credit || !grade) {
        alert('Please fill in all fields.');
        return;
    }

    const courseList = document.getElementById('courseList');
    const li = document.createElement('li');
    li.textContent = `${subject} - Credit: ${credit}, Grade: ${grade}`;
    courseList.appendChild(li);

    updateGPA();
}

function updateGPA() {
    const courseList = document.getElementById('courseList').getElementsByTagName('li');
    let totalCredits = 0;
    let totalPoints = 0;

    for (const course of courseList) {
        const parts = course.textContent.split(', Grade: ');
        const credit = parseFloat(parts[0].split('Credit: ')[1]);
        const grade = parseFloat(parts[1]);
        totalCredits += credit;
        totalPoints += credit * grade;
    }

    const gpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('gpa').textContent = gpa;
}
