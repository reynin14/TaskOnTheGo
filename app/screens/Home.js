import React from 'react';
import { Text, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { List } from '../components/List';

class Home extends React.Component{
  render(){
    return (
      <Container>
        <Title>Task On The Go</Title>
        <Input
          placeholder="Add Task Here"
        />
        <List />
      </Container>
    )
  }
};

export default Home;
