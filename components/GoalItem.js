import { View, Text, StyleSheet, Pressable } from 'react-native'

const GoalItem = ({ itemData, onDelete }) => {
  const pressHandler = () => {
    onDelete(itemData.item.id)
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'yellow' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={pressHandler}
      >
        <Text selectable={true} style={styles.goalText}>
          {itemData.item.text}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 10,
    color: 'white',
  },
  pressedItem: {
    opacity: '0.5',
  },
})

export default GoalItem
