import { Button, StyleSheet, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.other}>
        {/* Other content */}
        <View style={header.header}>
          <Text style={header.text}>Welcome back, [Insert Name]</Text>
        </View>

        <View style={statistics.stats}>
          <View style={statistics.one}>
            <View style={statistics.bubble}>
              <Text>Tiktok Usage</Text>
            </View>
          </View>
          <View style={statistics.bubble}>
            <Text>Tiktok Usage</Text>
          </View>
        </View>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bar}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Graphs" onPress={() => navigation.navigate("Graphs")} />
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </View>
  );
};

const statistics = StyleSheet.create({
  stats: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "#CAD6BC",
    // padding: 20,
    borderRadius: 40,
    height: "30%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  one: { marginRight: 200 },
});

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

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    // position: "relative",
    marginTop: 0,
    marginBottom: "2%",
    // height: "5%",
    padding: 0,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  page: {
    height: "100%",
  },

  other: {
    height: "85%",
  },
});

export default HomeScreen;
