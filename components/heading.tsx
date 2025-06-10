import { View, Text, StyleSheet } from "react-native";

const custom_heading = (text: string) => {
  return (
    <View style={header.header}>
      <Text style={header.text}>{text}</Text>
    </View>
  );
};

const header = StyleSheet.create({
  header: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    maxHeight: "7%",
    margin: 0,
  },
  text: {
    fontSize: 20,
  },
});

export default custom_heading;
