import React from 'react'

function EditCell(props) {
  return(
    <td className="EditCell">
      <input
        type="text"
        name={props.dataTable.type}
        id={props.dataTable.id}
        value={props.dataTable.value}
        onChange={props.updateTable.bind(this)}
        readOnly={props.readOnly}
      />
    </td>
  )
}
export default EditCell
