import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';

const {height, width} = Dimensions.get('window');

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      isCompleted: false,
      textValue: ''
    };
  }

  toggleItem = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      }
    })
  };

  startEditing = () => {
    this.setState({
      isEditing: true,
      textValue: this.props.textValue
    });
  };

  endEditing = () => {
    this.setState({
      isEditing: false
    });
  };

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={this.toggleItem}>
            <View style={this.circleStyles()}/>
          </TouchableOpacity>
          {
            this.state.isEditing ? (
              <TextInput />
            ) : (
              <Text style={this.textStyles()}> {this.props.textValue}</Text>
            )
          }
        </View>
        {this.buttonType()}
      </View>
    );
  }

  buttonType() {
    return this.state.isEditing ?
      (this.createButton('✅', this.endEditing)) :
      (this.createButton('✏', this.startEditing));
  }

  //this.createButton('❌')

  createButton(sign, onPressOut) {
    return <View style={styles.buttons}>
      <TouchableOpacity onPressOut={onPressOut}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{sign}</Text>
        </View>
      </TouchableOpacity>
    </View>;
  }

  textStyles() {
    return [styles.text, this.state.isCompleted ? styles.strikeText : styles.unstrikeText];
  }

  circleStyles() {
    return [styles.circle, this.state.isCompleted ? styles.completeCircle : styles.incompleteCircle];
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowContainer: {
    flexDirection: 'row',
    width: (width) / 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row'
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through'
  },
  unstrikeText: {
    color: '#29323c'
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20
  },
  completeCircle: {
    borderColor: '#bbb'
  },
  incompleteCircle: {
    borderColor: '#DA4453'
  }
});


export default TodoList;