import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const propTypes = {};

const defaultProps = {};

export default class Qrcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <QRCode value={this.props.qrUrl} />,
      </React.Fragment>
    );
  }
}

Qrcode.propTypes = propTypes;
Qrcode.defaultProps = defaultProps;
