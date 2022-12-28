import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import FirstStackScreen from '../FirstStackScreen';
import SecondStackScreen from '../SecondStackScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="FirstStackScreen">
        <Stack.Screen name="First Stack Screen" component={FirstStackScreen} />
        <Stack.Screen name="SecondStackScreen" component={SecondStackScreen} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})