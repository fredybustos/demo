import React, { Component } from 'react'

class Filter extends Component {
  handleChange(){
    this.props.OnUserInput(this.refs.filterTextInput.value)
  }
  render() {
    return(
      <div className="Filter">
        <input
          type="text"
          placeholder="filtrar..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

export default Filter
