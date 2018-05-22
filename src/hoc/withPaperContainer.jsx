import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const withPaperContainer = CustomComponent =>
  class extends Component {
    render() {
      return (
        this.props.fieldName ?
        <Paper
          style={{
            padding: '8px 16px',
          }}
        >
          <CustomComponent {...this.props} />
        </Paper> :
        <CustomComponent {...this.props} />
      );
    }
  }

export default withPaperContainer;
