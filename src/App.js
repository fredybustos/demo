import React, { Component } from 'react'

import employees from './employees';
import EmployeeTable from './components/employeeTable.js'
import Filter from './components/filter.js'
import '../css/main.scss';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      employees,
      filterText: "",
      readOnly: true,
      usd: 21.50,
      isUSD: false
    }

    // this.handleAddEmployee = this.handleAddEmployee.bind(this)
    // this.handleRemoveEmployee = this.handleRemoveEmployee.bind(this)
    // this.handleEmployeeTable = this.handleEmployeeTable.bind(this)
    // this.handleUserInput = this.handleUserInput.bind(this)
    // this.showEmployees = this.showEmployees.bind(this)
    // this.formatNumber = this.formatNumber.bind(this)
    // this.handleToUSD = this.handleToUSD.bind(this)
    // this.handleEditEmployee = this.handleEditEmployee.bind(this)

  }
  formatNumber (number) {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
  }

  handleToUSD = () => {
    let usd = this.state.usd
    let employees = this.state.employees.slice(0)
    if (this.state.isUSD){
      [].forEach.call(employees, item => {
        item.salary = item.salary / usd
      })
      this.setState({
        isUSD: false
      })
    } else {
      [].forEach.call(employees, item => {
        item.salary = item.salary * usd
      })
      this.setState({
        isUSD: true
      })
    }
    this.setState({
      employees: employees
    })
  }

  showEmployees = () => console.log(this.state.employees)
  handleEditEmployee = () => {
    let read = this.state.readOnly
    read = false

    this.setState({readOnly: read})
  }

  handleUserInput = (filterText) => {
    this.setState({
      filterText: filterText
    })
  }
  handleRemoveEmployee = (employee) => {
    var index = this.state.employees.indexOf(employee)
    this.state.employees.splice(index, 1)
    this.setState(employees: employees)
  }
  handleAddEmployee = (ev) => {
    let id = (+ new Date() + Math.floor(Math.random()));
    let employee = {
      id: id,
      name: "",
      company: "",
      salary: "",
      age: "",
      phone: "",
      email: "",
    }
    this.state.employees.push(employee)
    this.setState({employees})
  }

  handleEmployeeTable = (ev) => {
    let item = {
      id: ev.target.id,
      name: ev.target.name,
      value: ev.target.value,
    }
    // let employess = this.state.employees.slice()
    let newEmployees = employees.map((employee)=>{
      for (var key in employee) {
        if (key == item.name && employee.id == item.id ){
          employee[key] = item.value
        }
      }
      return employee
    })
    this.setState({
      employees: newEmployees
    })
  }
  render() {
    return(
      <section>
        <Filter
          filterText={this.state.filterText}
          OnUserInput={this.handleUserInput}
        />
        <EmployeeTable
          handleEditEmployee={this.handleEditEmployee}
          handleToUSD={this.handleToUSD}
          formatNumber={this.formatNumber}
          readOnly={this.state.readOnly}
          updateTable={this.handleEmployeeTable}
          addRow={this.handleAddEmployee}
          deleteRow={this.handleRemoveEmployee}
          employees={this.state.employees}
          filterText={this.state.filterText}
          showEmployees={this.showEmployees}
        />
      </section>

    )
  }
}
export default App
