import { useState } from "react"
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [currentGoalInput, setCurrentGoalInput] = useState("")
  
  function handleGoalInput(input) {
    setCurrentGoalInput(input)
  }

  function handleGoalAdd () {
    console.log(currentGoalInput)
  }

  return (
    <View style={[p.t(56), p.x(32), flex.f(1)]}>
      <View
        style={[
          flex.row,
          flex.justify("around"),
          flex.gap(12),
          flex.items("center"),
          flex.f(1),
        ]}
      >
        <TextInput
          placeholder="Your div centering goal!"
          keyboardType="alphanumeric"
          style={[border.width(), border.color("#cccccc"), flex.f(), p.p(6)]}
          onChangeText={handleGoalInput}
        />
        <Button title="Add Goal" onPress={handleGoalAdd} />
      </View>
      <View style={[flex.f(5)]}>
        <Text>A list of Goals...</Text>
      </View>
    </View>
  );
}

const stylesTesting = StyleSheet.create({
  test: {
    borderRight: 10,
  },
});

const p = {
  p: (num) => ({
    padding: num,
  }),
  t: (num) => ({
    paddingTop: num,
  }),
  b: (num) => ({
    paddingBottom: num,
  }),
  l: (num) => ({
    paddingLeft: num,
  }),
  r: (num) => ({
    paddingRight: num,
  }),
  x: (num) => ({
    paddingHorizontal: num,
  }),
  y: (num) => ({
    paddingVertical: num,
  }),
};

const m = {
  m: (num) => ({
    margin: num,
  }),
  t: (num) => ({
    marginTop: num,
  }),
  b: (num) => ({
    marginBottom: num,
  }),
  l: (num) => ({
    marginLeft: num,
  }),
  r: (num) => ({
    marginRight: num,
  }),
  x: (num) => ({
    marginHorizontal: num,
  }),
  y: (num) => ({
    marginVertical: num,
  }),
};

const flex = {
  f: (num = 1) => ({
    flex: num,
  }),
  gap: (num = 0) => ({
    gap: num,
  }),
  justify: (value = "flex-start") => ({
    justifyContent: value,
  }),
  items: (value = "stretch") => ({
    alignItems: value,
  }),
  wrap: (value = "nowrap") => ({
    flexWrap: value,
  }),
  alignContent: (value = "flex-start") => ({
    alignContent: value,
  }),
  alignSelf: (value = "auto") => ({
    alignSelf: value,
  }),
  row: {
    flexDirection: "row",
  },
  row_reverse: {
    flexDirection: "row-reverse",
  },
  col: {
    flexDirection: "column",
  },
  column_reverse: {
    flexDirection: "column-reverse",
  },
};

const border = {
  width: (num = 1) => ({
    borderWidth: num,
  }),
  color: (string) => ({
    borderColor: string,
  }),
  t: (num = 1) => ({
    borderTopWidth: num,
  }),
  b: (num = 1) => ({
    borderBottomWidth: num,
  }),
  l: (num = 1) => ({
    borderLeftWidth: num,
  }),
  r: (num = 1) => ({
    borderRightWidth: num,
  }),
};
