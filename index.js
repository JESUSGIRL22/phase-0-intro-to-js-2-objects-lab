// Update an employee object with a new key-value pair (immutable)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Update an employee object with a new key-value pair (mutable)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Delete a key-value pair from an employee object (immutable)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Delete a key-value pair from an employee object (mutable)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  const employee = {
    name: "John Doe",
    age: 30,
    jobTitle: "Software Engineer"
  };
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 31);
  console.log(updatedEmployee); // { name: "John Doe", age: 31, jobTitle: "Software Engineer" }
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "jobTitle", "Senior Software Engineer");
  console.log(employee); // { name: "John Doe", age: 30, jobTitle: "Senior Software Engineer" }
  
  const deletedEmployee = deleteFromEmployeeByKey(employee, "jobTitle");
  console.log(deletedEmployee); // { name: "John Doe", age: 30 }
  
  destructivelyDeleteFromEmployeeByKey(employee, "age");
  console.log(employee); // { name: "John Doe", jobTitle: "Senior Software Engineer" }
  