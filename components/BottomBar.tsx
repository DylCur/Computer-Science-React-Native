import { View, StyleSheet, Button } from "react-native";

function BottomButton(title: string, destination: string) {
  return (
    <View style={styles.button}>
      <Button title={title} color={"black"} />
    </View>
  );
}

const BottomBar = ({ navigation }) => {
  return (
    <View style={styles.bar}>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Graphs" onPress={() => navigation.navigate("Graphs")} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default BottomBar;
const styles = StyleSheet.create({
  bar: {
    width: "100%",
    position: "absolute",
    bottom: "2%",
    height: "10%",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: { width: "30%", color: "#000", fontFamily: "sans-serif" },
});
