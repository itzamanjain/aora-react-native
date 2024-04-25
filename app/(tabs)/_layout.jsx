import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'

const TabIcon = () =>{
  return (
    <View>
      <Image />
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home" />
      </Tabs>
    </>
  )
}

export default TabLayout