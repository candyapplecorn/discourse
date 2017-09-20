import React from 'react'
import { merge } from 'lodash'

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = merge({}, props.user)
  }
}

export default SessionForm
