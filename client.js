let employees = [ {
  first: '',
  last: '',
  id: 0,
  title: '',
  salary: 0
}
];

function onReady() {
  $('#addEmployeeInfo').on('click', function(event) {
      let first = ("#first-name").valueOf();
      let last = ("#last-name").valueOf();
      let id = ("ID-number").valueOf();
      let title = ("#job-title").valueOf();  
      let salary = ("#anuual-salary").valueOf();

      appendEmployee(first, last, id, title, salary);
  });

  $('#employee-table').empty();

  for (let i =0; i < employees.length; i++) {
    appendEmployee(employees[i].first, employees[i].last, employees[i].id, 
      employees[i].title, employees[i].salary);
  }


  $('#employee-table').on('click', 'btn-remove', function(event) {
    let buttonSubmit = $(event.target);
    buttonSubmit.closest('tr').remove();
  });

}

function 

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