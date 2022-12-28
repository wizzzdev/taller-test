import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SecondStackScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Second Stack screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#eae'
  },
  title: {
    fontSize: 10,
  }
});