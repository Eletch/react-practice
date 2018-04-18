import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('appState')
@observer
export default class TopicList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
      </div>
    )
  }
}
