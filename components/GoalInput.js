import { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert,
  Image,
} from 'react-native'

const GoalInput = ({ visible, onModal, onAdd }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const textChangeHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    onAdd(enteredGoalText)
    setEnteredGoalText('')
  }

  const closeModal = () => {
    onModal()
  }

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Add Goal has been closed!')
        onModal()
      }}
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/Images/img1.jpg')}
        />
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={[styles.button, styles.buttonAddGoal]}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={closeModal} title="Close" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: 100,
    margin: 12,
    borderRadius: 6,
  },
  textInput: {
    width: '100%',
    padding: 2,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingLeft: 6,
    marginRight: 6,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonAddGoal: {
    marginRight: 6,
  },
  button: {
    width: 100,
  },
})

export default GoalInput
