let employees = [];

function onReady() {
  $('#addEmployeeInfo').on('click', function() {
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

  employees.push({
        first: first,
        last: last,
        id: id,
        title: title,
        salary: salary,
      });

  
  $('#employee-table').append(`
  
    
      
      <tr>
        <td>${first}</td>
        <td>${last}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>$ ${salary}</td>
        <td>
            <button id="buttonDelete" class="btn-remove">Delete</button>
        </td> 
      </tr>
      
  `);

  $('#employee-table').on('click', '.btn-remove', function(event) {
    let buttonSubmit = $(event.target);
    buttonSubmit.closest('tr').remove();
   
  });
  totalMonthlySalary();
}

$(onReady);

function totalMonthlySalary() {
let monthly = 0;
  for (let i = 0; i < employees.length; i++) {
    monthly += Number(employees[i].salary) / 12;

  }
  console.log(Math.round(monthly));
  let total = $('#displayTotal');
  total.empty();
  total.append('$', Math.round(monthly));
  console.log(employees);
  
}

//add all salarys inputs into a variable and then devide that variable by 12
//(for 12 months in a year)to get the total monthly salary of all employees inputs on the dom.
//display that total monthly salary on the dom in the div that I made in html.
//for base mode we dont need to subtract the deleted salarys from the total monthly salary.



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
*/
