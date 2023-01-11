import { FlatList } from 'react-native'
import GoalItem from './GoalItem'

const GoalList = ({ goals, onDelete }) => {
  return (
    <FlatList
      data={goals}
      renderItem={(itemData) => {
        return <GoalItem onDelete={onDelete} itemData={itemData} />
      }}
      keyExtractor={(item, index) => item.id}
      alwaysBounceVertical="true"
    />
  )
}

export default GoalList
