import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DrawerOption({
  activeScreen,
  handleClick,
  optionName,
}) {
  const tabBackgroundStyles = {
    backgroundColor: activeScreen === optionName ? 'rgba(255, 51, 68, .3)' : 'transparent',
  }
  return (
    <TouchableOpacity onPress={() => handleClick(optionName)}>
      <View style={[styles.tabButton, tabBackgroundStyles]}>
        <Text style={styles.tabText}>
          Home
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    paddingLeft: 15,
    paddingRight: 50,
    borderRadius: 8,
    paddingVertical: 12,
    color: '#ff3344'
  },
  tabText: {
    color: '#ff3344',
    fontSize: 20
  }
});
