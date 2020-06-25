function Employee (name, job, salary, status) {
    this.name = name
    this.job = job
    this.salary = salary
    this.status = status
    printEmployeeForm = function() {
        console.log ("Name: " + this.name + ", Title: " + this.job + ", Salary: " + this.salary + ", Status: " + this.status)
}}



var rob = new Employee ( "Rob", "mechanic", "$38000", "full-time" )

var alex = new Employee ( "Alex", "nurse", "$45000", "full-time" )

var mikayla = new Employee ( "Mikayla", "stylist", "$60000", "part-time" )



Employee.prototype.printEmployeeForm = function() {
    console.log ("Name: " + this.name + ", Title: " + this.job + ", Salary: " + this.salary + ", Status: " + this.status)
}



console.log(rob)
console.log(alex)
console.log(mikayla)


