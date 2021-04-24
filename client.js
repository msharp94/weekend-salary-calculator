const employees = [ {
  first: '',
  last: '',
  id: '',
  title: '',
  salary: ''
}
];

function onReady() {
  $('#addEmployeeInfo').on('click', function(event) {
      const first = $("#first-name").val();
      const last = $("#last-name").val();
      const id = $("#ID-number").val();
      const title = $("#job-title").val();  
      const salary = $("#annual-salary").val();

      showEmployee(first, last, id, title, salary);
  });git status

  $('#employee-table').empty();

  for (let i = 0; i < employees.length; i++) {
    showEmployee(employees[i].first, employees[i].last, employees[i].id, 
      employees[i].title, employees[i].salary);
  }


  $('#employee-table').on('click', 'btn-remove', function(event) {
    let buttonSubmit = $(event.target);
    buttonSubmit.closest('tbody').remove();
  });

}

function showEmployee(first, last, id, title, salary) {
   
  $('#employee-table').append(`

    <tbody>
      <tr>
        <td>First Name</td>
        <td>${first}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>${last}</td>
      </tr>
      <tr>
        <td>ID Number</td>
        <td>${id}</td>
      </tr>
      <tr>
        <td>Job Title</td>
        <td>${title}</td>
      </tr>
      <tr>
        <td>Annual Salary</td>
        <td>${salary}</td>
      </tr>
      <tr>
        <td colspan="2">
            <button class="btn-remove">Delete</button>
        </td> 
      </tr>
    </tbody>


  `);
}

$(onReady);

/*remove for other code 
function newEmployees(firstName, lastName, idNumber, jobTitle, annualSalary) {
  console.log('in newEmployees:',  firstName, lastName, idNumber, jobTitle, annualSalary);
  const newEmployObj = {
    first: firstName,
    last: lastName,
    id: idNumber,
    title: jobTitle,
    salary: annualSalary
  }
  garage.push(newEmployObj);
  return true;
}

function addEmployees() {
    console.log('in addEmployees');

    let newEmployee = {
        firstName: $('#first-name'),
        lastName: $('#last-name'),
        idNumber: $('#ID-number'),
        jobTitle: $('#job-title'),
        annualSalary: $('#annual-salary')

    };

    employees.push(newEmployee);

    $('#first-name').val("");
    $('#last-name').val("");
    $('#ID-number').val("");
    $('#job-title').val("");
    $('#annual-salary').val("");
}


$(document).ready(submit);
function submit() {
    $('#addEmployeeInfo').on('click', addEmployees);
    console.log(employees);
}



/*function newCar$('#first-name',){
  console.log('Employee:', first-name);
  const employeeObj = {
    firstName: $('#first-name'),
    lastName: $('#last-name'),
    idNumber: $('#ID-number'),
    jobTitle: $('#job-title'),
    annualSalary: $('#annual-salary'),
  }
  employee.push(employeeObj);
  return true;
}*/