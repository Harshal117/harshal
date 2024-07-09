document.addEventListener("DOMContentLoaded", () => {
    const addForm = document.getElementById('AddForm')
    const editForm = document.getElementById('EditForm')
    const studetTable = document.querySelector('.student-table')

let student = [];
let editIndex= -1;

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newstudent = {
        firstname: addForm.studentfirstaddname.value,
        lastname: addForm.studentlastaddname.value,
        email: addForm.studentaddemail.value,
        phoneno: addForm.studentaddphoneno.value,
        age: addForm.studentaddage.value,
        adderess: addForm.studentaddaddress.value,
    };
    student.push(newstudent)
    addForm.reset()
    renderTable();
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const updatestudent = {
        firstname: editForm.studentfirsteditname.value,
        lastname: editForm.studentlasteditname.value,
        email: editForm.studenteditemail.value,
        phoneno: editForm.studenteditphoneno.value,
        age: editForm.studenteditage.value,
        adderess: editForm.studenteditaddress.value,
    };
    student[editIndex] = updatestudent;
    editIndex = -1
    editForm.reset()
    renderTable()
})

const renderTable = () => {
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>email</th>
                    <th>phone no</th>
                    <th>age</th>
                    <th>adderess</th>
                </tr>
            </thead>
            <tbody>
                ${student.map((student , index) => `
                <tr>
                    <td>${student.firstname}</td>
                    <td>${student.lastname}</td>
                    <td>${student.email}</td>
                    <td>${student.phoneno}</td>
                    <td>${student.age}</td>
                    <td>${student.adderess}</td>
                    <td>
                        <button onclick='editstudent(${index})'>Edit</button>
                        <button onclick='deletstudent(${index})'>delet</button>
                </tr>
                `).join('')}
            </tbody>
        </table>
        `
        studetTable.innerHTML = tableHTML
}
window.editstudent = (index) => {
    editIndex = index;
    const student = student[index];
    editForm.studenteditfirstname.value = student.firstname
    editForm.studenteditlastname.value = student.lastname
    editForm.studenteditemail.value = student.email
    editForm.studenteditphoneno.value = student.phoneno
    editForm.studenteditage.value = student.age
    editForm.studenteditadderess.value = student.adderess
}
window.deletstudent = (index) => {
    student.splice(index , 1);
    renderTable();
}

})