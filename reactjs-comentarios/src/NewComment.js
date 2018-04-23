import React, { Component } from 'react';

class NewComment extends Component {

  handleEnter = (event) => {
    const { comment } = this.refs

    if (comment.value.trim() && event.keyCode === 13) {
      this.props.postNewComment({
        comment: comment.value
      })
      comment.value = ''
      event.preventDefault()
    }
  }

  render() {
    return (
      <div className="row">
        <textarea
          ref="comment"
          placeholder="Comente!"
          className="form-control"
          onKeyDown={this.handleEnter}
          rows={5}
        ></textarea>
      </div>
    )
  }
}

export default NewComment
