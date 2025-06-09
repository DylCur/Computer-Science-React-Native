import { View, StyleSheet, Button } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
});

export default BottomBar;
