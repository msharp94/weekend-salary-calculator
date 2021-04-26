let employees = [];
//make a globe variable 
function onReady() {
  //create a function that on the click it enters and removes the values inputed 
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
      //empty the values after button click
      

  });

  $('#employee-table').empty();

  for (let i = 0; i < employees.length; i++) {
    showEmployee(employees[i].first, employees[i].last, employees[i].id, 
      employees[i].title, employees[i].salary);
  }
 
}

function showEmployee(first, last, id, title, salary) {
//create a function that pushs the values inputed into the array 
  employees.push({
        first: first,
        last: last,
        id: id,
        title: title,
        salary: salary,
      });

  //inside the function append the values inputed to the DOM and make a delete button for every row 
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
//grab the table and event.target the click selected by class button and 
//remove the tr which would be the employee array on the row of clicked button 
//and not the whole table for every button made
  $('#employee-table').on('click', '.btn-remove', function(event) {
    let buttonSubmit = $(event.target);
    buttonSubmit.closest('tr').remove();
   
  });
  totalMonthlySalary();
}


//create a function that sets a global variable to 0 
function totalMonthlySalary() {
let monthly = 0;
//loop through the array and grab the employees salary and divide it by 12
//then set variable to the value of divided number at the index 
  for (let i = 0; i < employees.length; i++) {
    monthly += Number(employees[i].salary) / 12;
    
  }

  console.log(Math.round(monthly));
  
  $('#displayTotal').toggleClass("red", monthly > 20000);
//another way to toggle the class when a condistion is meet

// make a variable and set it to the id of my display table 
//empty the total then append and round the monthly variable 
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
$(onReady);