import React, { Component } from 'react'
import EditCell from './editCell.js'


class EmployeeRow extends Component {
  onDeleteRow(){
    this.props.onDeleteRow(this.props.employee)
  }
  render() {
    let formatNumber = this.props.formatNumber
    return(
      <tr className="EmployeeRow">
        <EditCell
          updateTable={this.props.updateTable}
          readOnly={this.props.readOnly}
          dataTable={{
            type: "name",
            value: this.props.employee.name,
            id: this.props.employee.id,
          }}
        />
        <EditCell
          updateTable={this.props.updateTable}
          readOnly={this.props.readOnly}
          dataTable={{
            type: "company",
            value: this.props.employee.company,
            id: this.props.employee.id
          }}
        />
        <EditCell
          updateTable={this.props.updateTable}
          readOnly={this.props.readOnly}
          dataTable={{
            type: "salary",
            value: formatNumber(this.props.employee.salary),
            id: this.props.employee.id
          }}
        />
        <EditCell
          updateTable={this.props.updateTable}
          readOnly={this.props.readOnly}
          dataTable={{
            type: "age",
            value: this.props.employee.age,
            id: this.props.employee.id
          }}
        />
        <EditCell
          updateTable={this.props.updateTable}
          readOnly={this.props.readOnly}
          dataTable={{
            "type": "phone",
            value: this.props.employee.phone,
            id: this.props.employee.id
          }}
        />
        <EditCell
          updateTable={this.props.updateTable}
          readOnly={this.props.readOnly}
          dataTable={{
            type: "email",
            value: this.props.employee.email,
            id: this.props.employee.id
          }}
        />
        <td>
          <button
            type="button"
            onClick={this.onDeleteRow.bind(this)}
            >borrar</button>
        </td>
      </tr>
    )
  }
}

export default EmployeeRow
