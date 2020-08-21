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
    this.props.onSubmit(this.state.text);
  };

  render() {
    const { handleChange, onFormSubmit } = this;
    return (
      <React.Fragment>
        <form className={cx('input-form')} onSubmit={onFormSubmit}>
          <label>
            URL : <input type='url' name='urlText' placeholder='https://google.com' onChange={handleChange}></input>
          </label>
          <button type='submit'>make</button>
        </form>
      </React.Fragment>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
