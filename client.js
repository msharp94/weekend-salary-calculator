let employee = [];

function addEmployees() {
    console.log('in addEmployees');

    let newEmployee = {
        firstName: $('#first-name'),
        lastName: $('#last-name'),
        idNumber: $('#ID-number'),
        jobTitle: $('#job-title'),
        annualSalary: $('#annual-salary')

    };

    employee.push(newEmployee);

    $('#first-name').val("");
    $('#last-name').val("");
    $('#ID-number').val("");
    $('#job-title').val("");
    $('#annual-salary').val("");
}

$(document).ready(submit);
function submit() {
    $('#addEmployeeInfo').on('click', addEmployees);
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