import React, { Component } from 'react'

import EmployeeRow from './employeeRow.js'

class EmployeeTable extends Component {
  render() {
    let handleEditEmployee = this.props.handleEditEmployee
    let handleToUSD = this.props.handleToUSD
    let formatNumber= this.props.formatNumber
    let readOnly = this.props.readOnly
    let updateTable = this.props.updateTable
    let deleteRow = this.props.deleteRow
    let filterText = this.props.filterText
    let employee = this.props.employees.map((employee)=>{
      if(employee.name.indexOf(filterText) && employee.company.indexOf(filterText) === -1){
        return;
      }
      return(
        <EmployeeRow
          handleEditEmployee={handleEditEmployee}
          handleToUSD={handleToUSD}
          formatNumber={formatNumber}
          readOnly={readOnly}
          updateTable={updateTable}
          employee={employee}
          onDeleteRow={deleteRow.bind(this)}
          key={employee.id}
        />
      )
    })
    return(
      <section>
        <button type="button" onClick={this.props.addRow}>Agregar Empleado</button>
        <button type="button" onClick={this.props.handleEditEmployee}>Editar Empleado</button>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>company</th>
              <th>salary</th>
              <th>age</th>
              <th>phone</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {employee}
          </tbody>
        </table>
        <button type="button" onClick={this.props.showEmployees}>Consola</button>
        <button type="button" onClick={this.props.handleToUSD}>Salario en USd</button>
      </section>
    )
  }
}

export default EmployeeTable
