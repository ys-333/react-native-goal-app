import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalList from './components/GoalList'

export default function App() {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Learn more tech and work on more side project' },
  ])

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    console.log('modal clicked')
    setModalIsVisible((prevState) => !prevState)
  }

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prevGoals) => {
      return [
        ...prevGoals,
        { id: Math.floor(Math.rand om() * 10000), text: enteredGoalText },
      ]
    })
    setModalIsVisible((prevState) => !prevState)
  }

  const deleteGoalHandler = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id)
    setGoals(updatedGoals)
  }

  return (
    <View style={styles.appContainer}>
      <Pressable onPress={startAddGoalHandler}>
        <View style={styles.elevation}>
          <Text style={styles.newGoalBtn}>ADD NEW GOAL</Text>
        </View>
      </Pressable>
      <GoalInput
        onAdd={addGoalHandler}
        onModal={startAddGoalHandler}
        visible={modalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <Text selectable={true} style={styles.dummaryText}>
          List of Goals...
        </Text>
        {/* the flatlist aims to optimise the list of data while rendering, so that we won't turn out rendering all data, and only rendering useful data required */}
        <GoalList goals={goals} onDelete={deleteGoalHandler} />
      </View>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    marginTop: 12,
    flex: 5,
  },
  newGoalBtn: {
    color: 'white',
    width: '100%',
    padding: 6,
    backgroundColor: '#5e0acc',
    borderRadius: 4,
    textAlign: 'center',
    paddingVertical: 8,
  },
  elevation: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
})
