import { StyleSheet, Text, View } from "react-native";

export default function ContactScreen() {
  return (
    <View>
      <Text style={styles.title}>
        Contact tab
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
  }
})