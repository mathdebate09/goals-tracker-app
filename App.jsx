import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.padding}>
      <View>
        <TextInput
          placeholder="I'll center the div"
          keyboardType="alphanumeric"
        />
        <Button title="Add new Goal" />
      </View>
      <View>
        <Text>A list of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 50,
  },
});
