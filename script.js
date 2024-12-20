function deleterow(event){
    var drow = event.target.closest('tr')
    if(drow){
        drow.remove()
    }
}


function update(event){
    event.preventDefault()

    var name = document.getElementById('name')
    var age = document.getElementById('age')
    var gender = document.querySelector('input[name="gender"]:checked')
    var course = document.getElementById('course')
    var email = document.getElementById('email')
    

    //create a new row
    var row = document.createElement('tr')
    row.innerHTML = `
    <td>${name.value}</td>
    <td>${age.value}</td>
    <td>${gender.value}</td>
    <td>${course.value}</td>
    <td>${email.value}</td>
    <td><button class="delete-btn">Delete</button></td>`

    var deletebtn = row.querySelector('.delete-btn');
    deletebtn.addEventListener('click', deleterow);

    var add =document.getElementById('studentTable')
    add.append(row)

    //clear input fields
    // name.value = '';
    // age.value = '';
    // gender.value = '';
    // course.value = '';
    // email.value = '';
    this.reset()

}


document.getElementById('form').addEventListener('submit', update);
