import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import classNames from 'classnames';

import styles from './Qrcode.css';
const propTypes = {};

const defaultProps = {};

const cx = classNames.bind(styles);
export default class Qrcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <QRCode className={cx('qr')} value={this.props.qrUrl} />
      </React.Fragment>
    );
  }
}

Qrcode.propTypes = propTypes;
Qrcode.defaultProps = defaultProps;
