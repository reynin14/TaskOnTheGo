import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from 'react-native';
import styles from './styles';

class Input extends React.Component{
  static propTypes = {
    placeholder: PropTypes.string,
  }

  render(){
    const { placeholder } = this.props

    return(
      <TextInput
        style={styles.input}
        placeholder={placeholder}
      />
    )
  }
};

export default Input;
