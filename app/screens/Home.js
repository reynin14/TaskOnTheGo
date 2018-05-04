import React from 'react';
import { connect } from 'react-redux';
import { Text, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { List } from '../components/List';

class Home extends React.Component{

  handleTaskSubmit = () => {
    console.log('submitting task');
  }

  render(){
    return (
      <Container>
        <Title>Task On The Go</Title>
        <Input
          placeholder="Add Task Here"
          onSubmit={this.handleTaskSubmit}
        />
        <List />
      </Container>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.toDoTasks
  }
};

export default connect(mapStateToProps)(Home);
