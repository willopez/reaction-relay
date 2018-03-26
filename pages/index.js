import React, { Component } from 'react'
import { graphql } from 'react-relay'
import withData from '../lib/withData'

class Index extends Component {
  static displayName = `Index`

  render (props) {
    return (
      <div>
        <div>Viewer Name: {this.props.viewer.name}</div>
      </div>
    )
  }
}

export default withData(Index, {
  query: graphql`
        query pages_indexQuery {
            viewer {
              name
            }
        }
    `
})
