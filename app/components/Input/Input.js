import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from 'react-native';
import styles from './styles';

class Input extends React.Component{
  static propTypes = {
    placeholder: PropTypes.string,
  }

  state = {
    text: "",
  }

  render(){
    const { placeholder, onSubmit } = this.props

    return(
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        onSubmitEditing={() => console.log('submitting')}
      />
    )
  }
};

export default Input;
