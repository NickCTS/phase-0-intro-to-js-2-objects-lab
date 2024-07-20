// Write your solution in this file
// index.js
let employee = {
    name: 'John Doe',
    streetAddress: `shark ave`
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = {
        ...employee,
        [key]: value
    };
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, Key, Value){
    employee[Key] = Value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let employeeClone = { ...employee };
    delete employeeClone[key];
    return employeeClone
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
