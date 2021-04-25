const employees = [ {
  first: 'Matt',
  last: 'Sharp',
  id: '#1',
  title: 'The Best',
  salary: '$80,000'
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

      $("#first-name").val("");
      $("#last-name").val("")
      $("#ID-number").val("");
      $("#job-title").val("");
      $("#annual-salary").val("");

  });

  $('#employee-table').empty();

  for (let i = 0; i < employees.length; i++) {
    showEmployee(employees[i].first, employees[i].last, employees[i].id, 
      employees[i].title, employees[i].salary);
  }


  

}

function showEmployee(first, last, id, title, salary) {
  
  $('#employee-table').append(`
  
    
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>ID Number</th>
        <th>Job Title</th>
        <th>Annual Salary</th>
        <th></th>
      </tr>
      <tr>
        <td>${first}</td>
        <td>${last}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td>
            <button id="buttonDelete" class="btn-remove">Delete</button>
        </td> 
      </tr>
      
   


  `);

  $('.btn-remove').on('click', function(event) {
    let buttonSubmit = $(event.target);
    buttonSubmit.closest('tr').remove();
    $('#employee-table').empty('tr');
  });
}

$(onReady);
/*
function totalMonthly() {
  let monthlySalary = [];
  for (let salary of employees) {
    salary = $('#annual-salary')
  }
  if( salary)
}
*/
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