import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Input.css';

const propTypes = {};

const defaultProps = {};

const cx = classNames.bind(styles);

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      alert('URL을 입력해 주세요');
      return;
    }
    this.props.onSubmit(this.state.text);
  };

  render() {
    const { handleChange, onFormSubmit } = this;
    return (
      <React.Fragment>
        <form className={cx('input-form')} onSubmit={onFormSubmit}>
          <label className={cx('text')}>URL</label>
          <input className={cx('input-box')} type='url' name='urlText' placeholder='https://google.com' onChange={handleChange}></input>
          <button className={cx('submit-btn')} type='submit'>
            <span>생성하기</span>
          </button>
        </form>
      </React.Fragment>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
