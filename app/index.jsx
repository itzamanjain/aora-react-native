import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Link href="/profile" className='text-3xl font-pblack text-red-600' >Go to profile page</Link>
    </View>
  )
}

export default App