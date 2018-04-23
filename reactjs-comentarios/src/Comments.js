import React, { Component } from 'react'

import Comment from './Comment'

class Comments extends Component {
  renderComment = (key, comment) => <Comment key={key} comment={comment} />

  render() {
    const { comments } = this.props

    return <div>{Object.keys(comments).map(key => this.renderComment(key, comments[key]))}</div>
  }
}

export default Comments
