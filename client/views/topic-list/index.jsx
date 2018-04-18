import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('appState')
@observer
export default class TopicList extends React.Component {
  changeName(e) {
    this.props.appState.changeName(e.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName.bind(this)} />
        <span>{this.props.appState.msg}</span>
      </div>
    )
  }
}
