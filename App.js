/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, Text, ScrollView, Dimensions} from 'react-native';
import TodoList from "./src/TodoList";

const {height, width} = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Todo List</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Add a new Task"/>
          <ScrollView contentContainerStyle={styles.listContainer}>
            <TodoList textValue={'TodoItem'}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f23657'
  },
  title: {
    color: '#d7dfff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width - 40,
    height: height - 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50,50,50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  },
  listContainer: {
    alignItems: 'center',
  }
});
