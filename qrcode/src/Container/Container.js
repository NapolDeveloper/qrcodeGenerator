import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// components
import Input from './Input/Input';
import Qrcode from './Qrcode/Qrcode';

// styles
import styles from './Container.css';

// props의 type을 정하는 곳
const propTypes = {};

// 기본으로 props 형태를 선언해주지 않았을때 기본으로 실행하는 것
const defaultProps = {};

const cx = classNames.bind(styles);

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://google.com',
    };
  }

  getData = (data) => {
    this.setState({ url: data });
  };

  render() {
    const { getData } = this;
    const { url } = this.state;
    return (
      // fragment는 자식들을 div로 안묶어도 사용할 수 있도록 도와준다.
      <React.Fragment>
        <div className={cx('container')}>
          <div className={cx('content-box')}>
            <Input onSubmit={getData} />
            <Qrcode qrUrl={url} />
          </div>
          <div className={cx('side-bar')}></div>
        </div>
      </React.Fragment>
    );
  }
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
